// import moment from "moment";
import moment from "moment-timezone";
import fs from "fs";
import path from "path";
import twist from "./twist.js";

export class Helper {
  static creator = "5703822759";
  static delay = (ms, acc, msg, obj) => {
    return new Promise((resolve) => {
      let remainingMilliseconds = ms;

      if (acc != undefined) {
        twist.log(msg, acc, obj, `Delaying for ${this.msToTime(ms)}`);
      } else {
        twist.info(`${msg ?? ""} - Delaying for ${this.msToTime(ms)}`);
      }

      const interval = setInterval(() => {
        remainingMilliseconds -= 1000;
        if (acc != undefined) {
          twist.log(
            msg,
            acc,
            obj,
            `Delaying for ${this.msToTime(remainingMilliseconds)}`
          );
        } else {
          twist.info(
            `${msg ?? ""} - Delaying for ${this.msToTime(
              remainingMilliseconds
            )}`
          );
        }

        if (remainingMilliseconds <= 0) {
          clearInterval(interval);
          resolve();
        }
      }, 1000);

      setTimeout(async () => {
        clearInterval(interval);
        await twist.clearInfo();
        if (acc) {
          twist.log(msg, acc, obj);
        }
        resolve();
      }, ms);
    });
  };

  static randomUserAgent() {
    const list_useragent = [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15",
      "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104",
      "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104",
      "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374",
      "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374",
    ];
    return list_useragent[Math.floor(Math.random() * list_useragent.length)];
  }

  static readTime(milliseconds) {
    const date = moment.unix(milliseconds);
    return date.format("YYYY-MM-DD HH:mm:ss");
  }

  static getCurrentTimestamp() {
    const timestamp = moment().tz("Asia/Singapore").unix();
    return timestamp.toString();
  }

  static getSession(sessionName) {
    try {
      const accountPath = "accounts";
      if (!fs.existsSync(accountPath)) {
        fs.mkdirSync(accountPath);
      }
      const files = fs.readdirSync(path.resolve(sessionName));
      const session = [];
      files.forEach((file) => {
        session.push(file);
      });
      return session;
    } catch (error) {
      throw Error(`Error reading sessions directory: ${error},`);
    }
  }

  static resetAccounts() {
    try {
      const directoryPath = path.resolve("accounts");
      const files = fs.readdirSync(directoryPath);
      console.log("Deleting Accounts...");

      files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        console.log(filePath);
        fs.rm(filePath, { recursive: true, force: true }, (err) => {
          if (err) {
            console.error(`Error deleting file ${filePath}:`, err);
          }
        });
      });

      console.info("Account reset successfully. Please restart the bot.");
    } catch (error) {
      console.error(`Error deleting accounts: ${error}`);
      throw error;
    }
  }

  static getQueryFromUrl(url) {
    const query = url.split("tgWebAppData=")[1].split("&tgWebAppVersion=")[0];
    return this.convertUrlEncodedString(query);
  }

  static convertUrlEncodedString(encodedStr) {
    const decodedOnce = decodeURIComponent(encodedStr);
    return decodedOnce;
  }

  static createDir(dirName) {
    try {
      const accountPaths = "accounts";
      const dirPath = path.join(accountPaths, dirName);

      if (!fs.existsSync(accountPaths)) {
        fs.mkdirSync(accountPaths);
      }

      fs.mkdirSync(dirPath, { recursive: true });

      console.log(dirPath);
      return dirPath;
    } catch (error) {
      throw new Error(`Error creating directory: ${error}`);
    }
  }
  static saveQueryFile(queryFilePath, query) {
    const filePath = path.resolve(queryFilePath, "query.txt");

    fs.writeFile(filePath, query, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("Query File Created/Modified Successfully.");
      }
    });
  }

  static random(min, max) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
  }
  static randomArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  static msToTime(milliseconds) {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const remainingMillisecondsAfterHours = milliseconds % (1000 * 60 * 60);
    const minutes = Math.floor(remainingMillisecondsAfterHours / (1000 * 60));
    const remainingMillisecondsAfterMinutes =
      remainingMillisecondsAfterHours % (1000 * 60);
    const seconds = Math.round(remainingMillisecondsAfterMinutes / 1000);

    return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }

  static queryToJSON(query) {
    try {
      const queryObject = {};
      const pairs = query.split("&");

      pairs.forEach((pair) => {
        const [key, value] = pair.split("=");
        if (key === "user") {
          queryObject[key] = JSON.parse(decodeURIComponent(value));
        } else {
          queryObject[key] = decodeURIComponent(value);
        }
      });

      return queryObject;
    } catch (error) {
      throw Error("Invalid Query");
    }
  }

  static generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static readQueryFile(queryPath) {
    try {
      const fullPath = path.resolve(queryPath);
      const query = fs.readFileSync(fullPath, "utf8");
      return query;
    } catch (error) {
      console.log("No query.txt Files Found");
    }
  }

  static launchParamToQuery(urlString) {
    const params = new URLSearchParams(urlString);
    let decodedData = decodeURIComponent(params.get("tgWebAppData"));
    const dataParams = new URLSearchParams(decodedData);
    let userDecoded = decodeURIComponent(dataParams.get("user"));
    let userJSON = JSON.parse(userDecoded);
    const data = {
      query_id: dataParams.get("query_id"),
      user: userJSON,
      auth_date: dataParams.get("auth_date"),
      hash: dataParams.get("hash"),
    };

    const userString = JSON.stringify(data.user);
    const userEncoded = encodeURIComponent(userString);

    let queryString = ``;
    if (data.query_id) {
      queryString += `query_id=${encodeURIComponent(data.query_id)}&`;
    }
    queryString += `user=${userEncoded}&auth_date=${encodeURIComponent(
      data.auth_date
    )}&hash=${encodeURIComponent(data.hash)}`;

    return queryString;
  }

  static isFuture(time) {
    const now = Date.now();
    return time > now;
  }

  static getTimeLeftISO(time) {
    const currentTime = new Date().getTime();
    const targetTime = new Date(time).getTime();

    const timeLeft = targetTime - currentTime;
    return timeLeft > 0 ? timeLeft : 0;
  }

  static showSkelLogo() {
    return `
                                                          
                      ...                                 
                     .;:.                                 
                    .;ol,.                                
                   .;ooc:'                                
            ..    .;ooccc:'.    ..                        
          .',....'cdxlccccc;.....,'.                      
         .;;..'';clolccccccc:,''..;;.                     
        ':c'..':cccccccccccccc;...'c:.                    
       ':cc,.'ccccccccccccccccc:..;cc:'                   
    ...:cc;.':cccccccccccccccccc:..:cc:...                
   .;';cc;.':;;:cccccccccccccc:;;;'.;cc,,;.               
  .cc':c:.',.....;cccccccccc;.....,..:c:'c:               
  ,x:'cc;.,'     .':cccccc:'.     ',.;cc':x'              
  lO,'cc;.;,       .;cccc:.       ,;.;cc';0l              
 .o0;.;c;.,:'......',''''''......':,.;c;.:0l.             
 .lxl,.;,..;c::::;:,.    .,:;::::c;..,;.,oxl.             
 .lkxOl..  ..'..;::'..''..'::;..'..  ..c0xkl.             
  .cKMx.        .;c:;:cc:;:c:.        .xMKc.              
    ;KX:         ;o::l:;cc;o:.        ;KK;                
     :KK:.       ,d,cd,'ol'o:       .:0K:                 
      ;0NOl:;:loo;. ... .. .;ldlc::lkN0:                  
       .lONNNKOx0Xd,;;'.,:,lKKkk0XNN0o.                   
         .','.. .lX0doooodOXd.  .','.                     
                 .,okkddxkd;.                             
                    'oxxd;.                               
   ........................................                              
   .OWo  xNd lox  xxl Ald   xoc dakkkkkxsx.              
   .OWo  o0W cXW  dM0 MMN   lNK laddKMNkso.               
   .kMKoxsNN oWX  dW0 MMMWO lWK    axM0   .                
   .OMWXNaMX dM0  kM0 MMKxNXKW0    axMk   .                 
   .OMk  dWK oWX XWdx Mxx  XMMO    akMx   .                 
   'OWo  dM0 'kNNXNNd DMD   OWk    aoWd   .                 
   ........................................                 
                                                                      
`;
  }
}
