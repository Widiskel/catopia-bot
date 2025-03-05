import { API } from "../api/api.js";
import { Helper } from "../utils/helper.js";

export class Core extends API {
  constructor(account, query, queryObj, proxy) {
    super(query, queryObj, proxy, "https://api.catopia.io");
    this.account = account;
    this.query = query;
    this.queryObj = queryObj;
    this.account = account;
  }

  async login() {
    try {
      await Helper.delay(500, this.account, "Try to Login...", this);
      const response = await this.fetch(
        "/api/v1/auth/telegram",
        "POST",
        undefined,
        { initData: this.query }
      );
      if (response.status === 200) {
        await Helper.delay(500, this.account, "Successfully Login", this);
        this.token = response.data.accessToken;
      } else {
        await Helper.delay(500, this.account, response.message, this);
      }
    } catch (error) {
      throw error;
    }
  }

  async getUserInfo(msg = false) {
    try {
      if (msg)
        await Helper.delay(500, this.account, "Getting User Info...", this);
      const response = await this.fetch(
        "/api/v1/user/me?limit=3000",
        "GET",
        this.token
      );
      if (response.status == 200) {
        if (msg)
          await Helper.delay(
            500,
            this.account,
            "Successfully Retrieved User Info",
            this
          );
        this.user = response.data;
      } else {
        await Helper.delay(
          3000,
          this.account,
          "Error: " + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }
  async getUserCollectionInfo(msg = false) {
    try {
      if (msg)
        await Helper.delay(
          500,
          this.account,
          "Getting User Collection Info...",
          this
        );
      const response = await this.fetch(
        "/api/v1/user-collection?limit=3000",
        "GET",
        this.token
      );
      if (response.status == 200) {
        if (msg)
          await Helper.delay(
            500,
            this.account,
            "Successfully Retrieved User Collection Info",
            this
          );
        this.userCollection = response.data;
      } else {
        await Helper.delay(
          3000,
          this.account,
          "Error: Getting User Collection" + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }
  async getLandInfo(msg = false) {
    try {
      if (msg)
        await Helper.delay(500, this.account, "Getting Land Info...", this);
      const response = await this.fetch(
        "/api/v1/players/land?limit=3000",
        "GET",
        this.token
      );
      if (response.status == 200) {
        if (msg)
          await Helper.delay(
            500,
            this.account,
            "Successfully Retrieved Land Info",
            this
          );
        this.land = response.data;
      } else {
        await Helper.delay(
          3000,
          this.account,
          "Failed Getting Land Info: " + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }
  async getPetInfo(msg = false) {
    try {
      if (msg)
        await Helper.delay(500, this.account, "Getting Pet Info...", this);
      const response = await this.fetch(
        "/api/v1/players/pet?limit=3000",
        "GET",
        this.token
      );
      if (response.status == 200) {
        if (msg)
          await Helper.delay(
            500,
            this.account,
            "Successfully Retrieved Pet Info",
            this
          );
        this.pet = response.data;
      } else {
        await Helper.delay(
          3000,
          this.account,
          "Failed Getting Pet Info: " + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getMisisons() {
    try {
      await Helper.delay(500, this.account, `Getting Daily Missions...`, this);
      const response = await this.fetch(
        "/api/v1/user/tasks?limit=3000",
        "GET",
        this.token
      );
      if (response.status == 200) {
        await Helper.delay(
          500,
          this.account,
          "Successfully Get Missions",
          this
        );
        this.misisons = response.data;
      } else {
        await Helper.delay(
          2000,
          this.account,
          "Failed to Get Missions: " + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async checkMissions(mission) {
    try {
      await Helper.delay(
        500,
        this.account,
        `Checking Mission: ${mission.name}`,
        this
      );
      const response = await this.fetch(
        `/api/v1/task/check`,
        "POST",
        this.token,
        {
          type: mission.type,
        }
      );
      if (response.status == 200) {
        await Helper.delay(
          500,
          this.account,
          `Successfully Check Mission ${mission.name}`,
          this
        );
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Check Mission ${mission.name}: ` + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async claimDailyMission(mission) {
    try {
      await Helper.delay(
        500,
        this.account,
        `Claiming Mission: ${mission.name}`,
        this
      );
      const response = await this.fetch(
        `/api/v1/user/task/claim`,
        "POST",
        this.token,
        {
          type: mission.type,
        }
      );
      if (response.status == 200) {
        await this.getUserCollectionInfo();
        await Helper.delay(
          500,
          this.account,
          `Successfully Claimed Mission ${mission.name}`,
          this
        );
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Claim Mission ${mission.name}: ` + response.message,
          this
        );
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async seeding(landIds) {
    try {
      await Helper.delay(500, this.account, `Seeding Multiple Land`, this);
      const response = await this.fetch(
        `/api/v1/players/seeding`,
        "POST",
        this.token,
        {
          seedTypeId: 2,
          landIds: landIds,
        }
      );
      if (response.status == 200) {
        await this.getUserCollectionInfo();
        await Helper.delay(
          500,
          this.account,
          `Successfully Seeding Multiple Lands`,
          this
        );
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Seeding Multiple Lands : ` + response.message,
          this
        );
      }
      await this.getLandInfo();
    } catch (error) {
      throw error;
    }
  }
  async multipleHarvest(landIds) {
    try {
      await Helper.delay(500, this.account, `Harvesting Multiple Land`, this);
      const response = await this.fetch(
        `/api/v1/players/plant/multiple-harvest`,
        "POST",
        this.token,
        {
          landIds: landIds,
        }
      );
      if (response.status == 200) {
        await Helper.delay(
          500,
          this.account,
          `Successfully Harvest Multiple Lands`,
          this
        );
        this.noGold = false;
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Harvest Multiple Lands : ` + response.message,
          this
        );
      }
      await this.getLandInfo();
    } catch (error) {
      throw error;
    }
  }

  async checkIn() {
    try {
      await Helper.delay(500, this.account, `Try to Daily Check In`, this);
      const response = await this.fetch(
        `/api/v1/task/check-in`,
        "POST",
        this.token
      );
      if (response.status == 200) {
        await Helper.delay(500, this.account, "Successfully Check", this);
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Check In ` + response.message,
          this
        );
      }
    } catch (error) {
      await Helper.delay(
        2000,
        this.account,
        `Failed to Check In or Already Check In`,
        this
      );
    }
  }
  async claimGold() {
    try {
      await Helper.delay(500, this.account, `Try to Claiming Gold`, this);
      const response = await this.fetch(
        `/api/v1/user-collection/claim-gold`,
        "POST",
        this.token
      );
      if (response.status == 200) {
        await Helper.delay(500, this.account, "Successfully Claim Gold", this);
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Claim Gold ` + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }
  async sellPet(petIds) {
    try {
      await Helper.delay(500, this.account, `Try to Sell Pet`, this);
      const response = await this.fetch(
        `/api/v1/players/pet/multiple-sell`,
        "POST",
        this.token,
        {
          sellPetIds: petIds,
        }
      );
      if (response.status == 200) {
        await this.getUserCollectionInfo();
        await this.getPetInfo();
        await Helper.delay(500, this.account, "Successfully Sell Pet", this);
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Sell Pet ` + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async buyChest() {
    try {
      await Helper.delay(500, this.account, `Try to Buy Chest`, this);
      const response = await this.fetch(
        `/api/v1/players/pet/buy`,
        "POST",
        this.token
      );
      if (response.status == 200) {
        await this.getUserCollectionInfo();
        await this.getPetInfo();
        this.noGold = false;
        await Helper.delay(500, this.account, "Successfully Buy Chest", this);
      } else {
        if (response.message.includes("reached")) {
          await this.getPetInfo();

          await this.upgradePet();
        }
        await this.getUserCollectionInfo();
        if (response.message.includes("enough")) {
          this.noGold = true;
        }
        await Helper.delay(
          2000,
          this.account,
          `Failed to Buy Chest ` + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }
  async upgradePet() {
    try {
      await Helper.delay(500, this.account, `Try to Upgrading All Pet`, this);
      const response = await this.fetch(
        `/api/v1/players/pet/upgrade-all`,
        "POST",
        this.token
      );
      if (response.status == 200) {
        await this.getUserInfo();
        await this.getPetInfo();
        await Helper.delay(
          500,
          this.account,
          "Successfully Upgrading All Pet",
          this
        );
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Upgrading All ` + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }
  async buyLand(land) {
    try {
      await Helper.delay(500, this.account, `Try to Buying a Land`, this);
      const response = await this.fetch(
        `/api/v1/players/land/unlocking`,
        "POST",
        this.token,
        {
          slotId: land.id,
        }
      );
      if (response.status == 200) {
        await this.getUserInfo();
        await this.getLandInfo();
        await Helper.delay(
          500,
          this.account,
          "Successfully Buying a Land",
          this
        );
      } else {
        await Helper.delay(
          2000,
          this.account,
          `Failed to Buying a Land ` + response.message,
          this
        );
      }
    } catch (error) {
      throw error;
    }
  }

  groupAndCountData(data) {
    const counts = {};

    // Count occurrences of typeId and level
    data.forEach((item) => {
      const key = `${item.typeId}_${item.level}`;
      if (!counts[key]) {
        counts[key] = { typeId: item.typeId, level: item.level, count: 0 };
      }
      counts[key].count++;
    });

    // Filter out counts where count is not 3
    const result = Object.values(counts).filter((item) => item.count === 3);

    return result;
  }
}
