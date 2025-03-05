import moment from "moment-timezone";
import { proxyList } from "./config/proxy_list.js";
import { Core } from "./src/core/core.js";
import { Telegram } from "./src/core/telegram.js";
import { Helper } from "./src/utils/helper.js";
import logger from "./src/utils/logger.js";
import twist from "./src/utils/twist.js";

async function operation(acc, query, queryObj, proxy) {
  try {
    const core = new Core(acc, query, queryObj, proxy);

    await core.login();
    await core.getUserCollectionInfo(true);
    await core.getUserInfo(true);
    await core.getMisisons();
    await core.getLandInfo(true);
    await core.getPetInfo(true);
    await core.claimGold();

    await core.checkIn();
    for (const task of core.misisons.filter(
      (item) => item.isCompleted != true && item.isClaimed != true
    )) {
      if (task.isCompleted == false) {
        await core.checkMissions(task);
      }
      if (task.isClaimed == false) {
        await core.claimDailyMission(task);
      }
    }

    let remaining = 0;

    if (core.land.emptyLand != 0) {
      const landToSeed = core.land.emptyLand.map((item) => item.id);
      await core.seeding(landToSeed);
      await core.getLandInfo();

      const grownAt = moment.tz(core.land.occupiedLand[0].grownAt, "GMT");
      remaining = Helper.getTimeLeftISO(grownAt);
    } else {
      const grownAt = moment.tz(core.land.occupiedLand[0].grownAt, "GMT");
      remaining = Helper.getTimeLeftISO(grownAt);

      if (remaining <= 0) {
        const lands = core.land.occupiedLand.map((item) => item.id);
        await core.multipleHarvest(lands);
        if (
          core.userCollection.snackCoin >=
          core.land.availableLandToBuy[0].priceInSnack
        ) {
          await core.buyLand(core.land.availableLandToBuy[0]);
        }
        await core.seeding(lands);
      }
    }

    while (core.userCollection.goldenCoin > 1000 && core.noGold == false) {
      await core.buyChest();
    }

    const group = core.groupAndCountData(core.pet);
    if (group.length > 0) {
      await core.upgradePet();
    }

    const grownAt = moment.tz(core.land.occupiedLand[0].grownAt, "GMT");
    remaining = Helper.getTimeLeftISO(grownAt);

    await Helper.delay(
      remaining,
      acc,
      `Account ${acc.id} Processing Complete`,
      core
    );
    await operation(acc, query, queryObj, proxy);
  } catch (error) {
    if (error.message.includes("401")) {
      if (acc.type == "query") {
        await Helper.delay(
          1000,
          acc,
          `Error : ${error.message}, Query Is Expired, Please Get New Query`
        );
      } else {
        await Helper.delay(
          5000,
          acc,
          `Error : ${error.message}, Query Is Expired, Getting New Query in 5 Seconds`
        );
        const tele = new Telegram();
        await tele.useSession(acc.accounts, proxy);
        const user = await tele.client.getMe();
        user.type = "sessions";
        user.accounts = acc.accounts;
        user.id = user.id.value;
        const query = await tele
          .resolvePeer()
          .then(async () => {
            return await tele.initWebView();
          })
          .catch((err) => {
            throw err;
          });

        const queryObj = Helper.queryToJSON(query);
        await tele.disconnect();
        await Helper.delay(5000, user, `Successfully get new query`);
        await operation(user, query, queryObj, proxy);
      }
    } else if (error.message.includes("429")) {
      await Helper.delay(
        60000 * 5,
        acc,
        `Error : ${error.message}, Retrying after 5 Minutes`
      );
      await operation(acc, query, queryObj, proxy);
    } else {
      await Helper.delay(
        5000,
        acc,
        `Error : ${error.message}, Retrying after 5 Seconds`
      );
      await operation(acc, query, queryObj, proxy);
    }
  }
}

let init = false;
async function startBot() {
  return new Promise(async (resolve, reject) => {
    try {
      logger.info(`BOT STARTED`);

      const tele = await new Telegram();
      if (init == false) {
        await tele.init();
        init = true;
      }

      const accountList = Helper.getSession("accounts");
      const paramList = [];

      if (proxyList.length > 0) {
        if (accountList.length != proxyList.length) {
          reject(
            `You have ${accountList.length} Session but you provide ${proxyList.length} Proxy`
          );
        }
      }

      for (const acc of accountList) {
        const accIdx = accountList.indexOf(acc);
        const proxy = proxyList.length > 0 ? proxyList[accIdx] : undefined;
        if (!acc.includes("query")) {
          await tele.useSession("accounts/" + acc, proxy);
          tele.session = acc;
          const user = await tele.client.getMe();
          user.type = "sessions";
          user.accounts = "accounts/" + acc;
          user.id = user.id.value;
          const query = await tele
            .resolvePeer()
            .then(async () => {
              return await tele.initWebView();
            })
            .catch((err) => {
              throw err;
            });

          const queryObj = Helper.queryToJSON(query);
          await tele.disconnect();
          paramList.push([user, query, queryObj, proxy]);
        } else {
          let query = Helper.readQueryFile("accounts/" + acc + "/query.txt");
          let queryObj = Helper.queryToJSON(query);
          if (!queryObj.user) {
            queryObj = await Helper.queryToJSON(
              await Helper.launchParamToQuery(query)
            );
            query = await Helper.launchParamToQuery(query);
          }
          const user = queryObj.user;
          user.type = "query";
          user.accounts = "accounts/" + acc;
          user.firstName = user.first_name;
          user.lastName = user.last_name;
          paramList.push([user, query, queryObj, proxy]);
        }
      }

      const promiseList = paramList.map(async (data) => {
        await operation(data[0], data[1], data[2], data[3]);
      });

      await Promise.all(promiseList);

      resolve();
    } catch (error) {
      logger.info(`BOT STOPPED`);
      logger.error(JSON.stringify(error));
      reject(error);
    }
  });
}

(async () => {
  try {
    logger.clear();
    logger.info("");
    logger.info("Application Started");
    await startBot();
  } catch (error) {
    await twist.clear();
    await twist.clearInfo();
    console.log("Error During executing bot", error);
    await startBot();
  }
})();
