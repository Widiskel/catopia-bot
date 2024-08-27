# Catopia  BOT


## Table Of Contents
- [Catopia  BOT](#catopia--bot)
  - [Table Of Contents](#table-of-contents)
  - [Catopia Airdrop](#catopia-airdrop)
  - [BOT FEATURE](#bot-feature)
  - [Prerequisite](#prerequisite)
  - [Setup \& Configure BOT](#setup--configure-bot)
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
- Auto Buy Chest (Common Chest with Companion A)
- Auto Upgrade Pet (Companion A)

## Prerequisite

- Git
- Node JS
- TELEGRAM_APP_ID & TELEGRAM_APP_HASH Get it from [Here](https://my.telegram.org/auth?to=apps)
- Catopia Account , Create [Here](https://t.me/catopia_game_bot/catopia?startapp=CatRefIdFF2A2A3D) ,join and claim join reward, also don't forget to complete mandatory missions some completable mission.

## Setup & Configure BOT

1. clone project repo `git clone https://github.com/Widiskel/catopia-bot.git` and cd to project dir `cd catopia-bot`
2. run `npm install`
3. run `npm i telegram@2.22.2`
4. run `cp config/config_tmp.js config/config.js`
   To configure the app, open `src/config.js` and add your telegram app id and hash there
5. run `mkdir sessions`
6. to start the app run `npm run start` or you can copy everything inside config folder to `app/config` and run `node app/index.js`

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

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## SUPPORT

want to support me for creating another bot ?
**star** my repo or buy me a coffee on

EVM : `0x0fd08d2d42ff086bf8c6d057d02d802bf217559a`

SOLANA : `3tE3Hs7P2wuRyVxyMD7JSf8JTAmEekdNsQWqAnayE1CN`
