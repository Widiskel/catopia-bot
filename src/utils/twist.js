import { Twisters } from "twisters";
import logger from "./logger.js";
import { Core } from "../core/core.js";

class Twist {
  constructor() {
    /** @type  {Twisters}*/
    this.twisters = new Twisters();
  }

  /**
   * @param {string} acc
   * @param {Core} core
   * @param {string} msg
   * @param {string} delay
   */
  log(msg = "", acc = "", core = new Core(), delay) {
    // console.log(acc);
    if (delay == undefined) {
      logger.info(`${acc.id} - ${msg}`);
      delay = "-";
    }

    const user = core.user ?? {};
    const userCollect = core.userCollection ?? {};

    const level = user.level ?? "-";
    const coin = userCollect.goldenCoin ?? "-";
    const gem = userCollect.gem ?? "-";
    const snack = userCollect.snackCoin ?? "-";

    this.twisters.put(acc.id, {
      text: `
================= Account ${acc.id} =============
Name     : ${acc.firstName ?? "Unamed"} ${acc.lastName ?? ""} 
Level    : ${level}
Coin     : ${coin}
Gem      : ${gem}
Snack    : ${snack}

Status : ${msg}
Delay : ${delay}
==============================================`,
    });
  }
  /**
   * @param {string} msg
   */
  info(msg = "") {
    this.twisters.put(2, {
      text: `
==============================================
Info : ${msg}
==============================================`,
    });
    return;
  }

  clearInfo() {
    this.twisters.remove(2);
  }

  async clear(acc) {
    // await this.twisters.remove(acc);
    await this.twisters.flush();
  }
}
export default new Twist();
