# Catopia  BOT


## Table Of Contents
- [Catopia  BOT](#catopia--bot)
  - [Table Of Contents](#table-of-contents)
  - [Catopia Airdrop](#catopia-airdrop)
  - [BOT FEATURE](#bot-feature)
  - [Prerequisite](#prerequisite)
  - [Setup \& Configure BOT](#setup--configure-bot)
    - [Linux](#linux)
    - [Windows](#windows)
  - [Update Bot](#update-bot)
  - [Setup Session](#setup-session)
  - [Note](#note)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## Catopia Airdrop
New Airdrops : Catopia
🪂 Register : https://t.me/catopia_game_bot/catopia?startapp=CatRefIdFF2A2A3D
🐱🌱Plant trees, upgrade pets, complete quests, invite friends and become the best

## BOT FEATURE

- Auto Plant Seed
- Auto Buy Seed
- Auto Harvest
- Auto Claim Mission
- Auto Buy Chest (Common Chest with Adjustable Companion, Default A)
- Auto Upgrade Pet 
- Auto Claim Gold
- Multi Account With Proxy Support

## Prerequisite

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps)
- Catopia Account , Create [Here](https://t.me/catopia_game_bot/catopia?startapp=CatRefIdFF2A2A3D) ,join and claim join reward, also don't forget to complete mandatory missions some completable mission.

## Setup & Configure BOT

### Linux
1. clone project repo `git clone https://github.com/Widiskel/catopia-bot.git` and cd to project dir `cd catopia-bot`
2. run `npm install`
3. run `npm i telegram@2.22.2`
4. run `mkdir sessions && mkdir -p app/config`.
5. run `cp config/config_tmp.js config/config.js && cp config/proxy_list_tmp config/proxy_list.js`.
6. To configure the app, run `nano src/config/config.js` and add your telegram app id and hash there.
7. To configure the Proxy, run `nano src/config/proxy_list.js` and add your proxy list there, it currently only support https proxy.
8. to start the app run `npm run start`.
   
### Windows
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo `git clone https://github.com/Widiskel/catopia-bot.git` and cd to project dir `cd catopia-bot`
3. Run `npm install`
4. Run `npm i telegram@2.22.2`
5. Navigate to `catopia-bot` directory. 
6. Make new folder named `sessions`.
7. Manual copy the `config` folder to `/app` folder. 
8. Navigate to `app/` folder and paste the the `config` folder before.
9. Navigate to `config` folder.
10. At `/app/config/` folder, rename the `config_tmp.js` to `config.js` also the `proxy_list_tmp.js` to `proxy_list.js`.
11. To configure the app, open `config.js` and add your telegram app id and hash there.
12. To configure the Proxy, open `proxy_list.js` and add your proxy list there, it currently only support https proxy.
13. Now back to the `catopia-bot` folder
14. To start the app open your `Command Prompt` or `Power Shell` again and run `node app/index.js`.

## Update Bot

To update bot follow this step :
1. run `git pull` or `git pull rebase` , if error run `git stash && git pull`
2. run `npm update`
3. start the bot

## Setup Session

1. run bot `npm run start`
2. choose option 1 create session
3. enter session name
4. enter your phone number starting with countrycode ex : `+628xxxxxxxx`
5. after creating sessions, choose 3 start bot
6. if something wrong with your sessions, reset sessions first, to cancel running bot press `ctrl+c` twice, and start again [from No 1.](#setup-session).

## Note

This bot using telegram sessions. if you ever use one of my bot that use telegram sessions, you can just copy the sessions folder to this bot. Also for the telegram APP ID and Hash you can use it on another bot.

if you got error `Invalid ConstructorId` try to run this ```npm i telegram@2.22.2```

To configure Pet Companion, check on file `config/config.js` , change the `COMPANION` to whatever companion you want to focus (it will buy chest and choose that companion, and upgrade all pet received)

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x0fd08d2d42ff086bf8c6d057d02d802bf217559a`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
