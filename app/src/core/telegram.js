function a3_0x3601(){const _0x16497a=['Session\x20','message','text','\x20-\x20Created','init','destroy','peer','createDir','onBoarding','bot','\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','getTelegramQuery','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','error','resetSession','2048034XnWoaV','4630023eVwfKD','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','Welcome\x20to\x20Cowtopia\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a','658914giobxP','getEntity','2117512glFsjS','793857dZpvHc','warn','10POWQVM','Invalid\x20input,\x20Please\x20try\x20again','10Srsvcb','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','Enter\x20your\x20Telegram\x20Password?','client','log','\x20|\x20FloodWait\x20','disconnect','initWebView','start','delay','seconds','7dvIpHs','You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first','getSession','info','serverAddress','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','android','sessionName','RequestWebView','TELEGRAM_APP_ID','invoke','https://cowtopia-prod.tonfarmer.com/','TELEGRAM_APP_HASH','save','useSession','1555953DjIqoc','storeSession','sessions','stringify','length','session','621228YpiNVQ','sessionCreation'];a3_0x3601=function(){return _0x16497a;};return a3_0x3601();}const a3_0x5e6c94=a3_0x4f28;(function(_0x101fc,_0x14ddab){const _0x34f887=a3_0x4f28,_0x2ea1f3=_0x101fc();while(!![]){try{const _0x315480=parseInt(_0x34f887(0x131))/0x1+parseInt(_0x34f887(0x12e))/0x2+-parseInt(_0x34f887(0x14f))/0x3+-parseInt(_0x34f887(0x119))/0x4*(-parseInt(_0x34f887(0x135))/0x5)+parseInt(_0x34f887(0x12a))/0x6*(parseInt(_0x34f887(0x140))/0x7)+-parseInt(_0x34f887(0x130))/0x8+parseInt(_0x34f887(0x12b))/0x9*(-parseInt(_0x34f887(0x133))/0xa);if(_0x315480===_0x14ddab)break;else _0x2ea1f3['push'](_0x2ea1f3['shift']());}catch(_0x11aed0){_0x2ea1f3['push'](_0x2ea1f3['shift']());}}}(a3_0x3601,0x74928));import a3_0x524ecf from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a3_0x349f0c from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';function a3_0x4f28(_0x518c8b,_0x5841ea){const _0x3601b2=a3_0x3601();return a3_0x4f28=function(_0x4f2834,_0xfc037f){_0x4f2834=_0x4f2834-0x119;let _0x5e58d6=_0x3601b2[_0x4f2834];return _0x5e58d6;},a3_0x4f28(_0x518c8b,_0x5841ea);}import{Config}from'../../config/config.js';export class Telegram{['storeSession'];constructor(){const _0x12f8af=a3_0x4f28;this['sessionName']=_0x12f8af(0x151),this['url']=_0x12f8af(0x14b),this[_0x12f8af(0x124)]='catopia_game_bot';}async[a3_0x5e6c94(0x11f)](){const _0x1beda2=a3_0x5e6c94;try{await this[_0x1beda2(0x123)]();}catch(_0x6add8e){console[_0x1beda2(0x139)](_0x6add8e),a3_0x349f0c[_0x1beda2(0x128)](''+JSON[_0x1beda2(0x152)](_0x6add8e));throw _0x6add8e;}}async['onBoarding'](){const _0x10a519=a3_0x5e6c94;try{let _0x2ca282=_0x10a519(0x12d);const _0x3680ee=Helper[_0x10a519(0x142)](_0x10a519(0x151));if(_0x3680ee[_0x10a519(0x153)]==0x0)_0x2ca282+=_0x10a519(0x127);else for(const _0x4ee6ce of _0x3680ee){_0x2ca282+='-\x20'+_0x4ee6ce+'\x0a';}_0x2ca282+=_0x10a519(0x12c),_0x2ca282+='\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:';const _0x3138e=await a3_0x524ecf[_0x10a519(0x11d)](_0x2ca282);if(_0x3138e==0x1)await this[_0x10a519(0x11a)]();else{if(_0x3138e==0x2)Helper[_0x10a519(0x129)](this['sessionName']),await Helper['delay'](0xbb8),await this['onBoarding']();else _0x3138e==0x3?Helper['getSession'](this[_0x10a519(0x147)])?.[_0x10a519(0x153)]==0x0&&(console['info'](_0x10a519(0x141)),await this[_0x10a519(0x123)]()):(console[_0x10a519(0x128)](_0x10a519(0x134)),await this['onBoarding']());}}catch(_0x3265b5){throw _0x3265b5;}}async[a3_0x5e6c94(0x11a)](){const _0x2f929f=a3_0x5e6c94;try{const _0x13748e=Helper[_0x2f929f(0x142)](_0x2f929f(0x151));let _0x353876='Your\x20session\x20List\x20:\x0a\x20\x0a';for(const _0xa5f2bf of _0x13748e){_0x353876+=_0x13748e['indexOf'](_0xa5f2bf)+0x1+'.\x20'+_0xa5f2bf+'\x0a';}_0x13748e[_0x2f929f(0x153)]==0x0?_0x353876+=_0x2f929f(0x127):_0x353876+=_0x2f929f(0x125);const _0x2e27a8=await a3_0x524ecf['text'](_0x353876);this[_0x2f929f(0x147)]=Helper[_0x2f929f(0x122)](_0x2e27a8),await this[_0x2f929f(0x14e)](this[_0x2f929f(0x147)]),await this['disconnect'](),a3_0x349f0c[_0x2f929f(0x143)](_0x2f929f(0x11b)+this[_0x2f929f(0x147)]+_0x2f929f(0x11e)),console[_0x2f929f(0x139)](_0x2f929f(0x11b)+this[_0x2f929f(0x147)]+_0x2f929f(0x11e)),this[_0x2f929f(0x150)][_0x2f929f(0x14d)](),await Helper[_0x2f929f(0x13e)](0xbb8),await this['init']();}catch(_0x54bfda){throw _0x54bfda;}}async[a3_0x5e6c94(0x14e)](_0xaaa2e){const _0x5d7d75=a3_0x5e6c94;try{this[_0x5d7d75(0x150)]=new StoreSession(_0xaaa2e),this[_0x5d7d75(0x138)]=new TelegramClient(this[_0x5d7d75(0x150)],Config[_0x5d7d75(0x149)],Config[_0x5d7d75(0x14c)],{'connectionRetries':0x5}),this[_0x5d7d75(0x150)][_0x5d7d75(0x14d)](),await this[_0x5d7d75(0x138)][_0x5d7d75(0x13d)]({'phoneNumber':async()=>await a3_0x524ecf[_0x5d7d75(0x11d)](_0x5d7d75(0x145)),'password':async()=>await a3_0x524ecf[_0x5d7d75(0x11d)](_0x5d7d75(0x137)),'phoneCode':async()=>await a3_0x524ecf[_0x5d7d75(0x11d)](_0x5d7d75(0x136)),'onError':_0x188a62=>{const _0x5a431d=_0x5d7d75;console[_0x5a431d(0x139)](_0x188a62[_0x5a431d(0x11c)]);}}),console[_0x5d7d75(0x139)]();}catch(_0x1fae57){throw _0x1fae57;}}async['resolvePeer'](){const _0x5b7be4=a3_0x5e6c94;try{a3_0x349f0c[_0x5b7be4(0x143)](_0x5b7be4(0x11b)+this['session']+'\x20-\x20Resolving\x20Peer');while(this[_0x5b7be4(0x121)]==undefined){try{this[_0x5b7be4(0x121)]=await this['client'][_0x5b7be4(0x12f)](this[_0x5b7be4(0x124)]);break;}catch(_0x1140e3){if(_0x1140e3 instanceof FloodWaitError){const _0x383a7f=_0x1140e3[_0x5b7be4(0x13f)];a3_0x349f0c[_0x5b7be4(0x132)](this[_0x5b7be4(0x138)][_0x5b7be4(0x154)]['serverAddress']+_0x5b7be4(0x13a)+_0x1140e3),a3_0x349f0c[_0x5b7be4(0x143)](this['client'][_0x5b7be4(0x154)][_0x5b7be4(0x144)]+'\x20|\x20Sleep\x20'+_0x383a7f+'s'),await Helper[_0x5b7be4(0x13e)]((_0x383a7f+0x3)*0x3e8);}else throw _0x1140e3;}}}catch(_0x541931){throw _0x541931;}}async['disconnect'](){const _0x139e4f=a3_0x5e6c94;await this['client'][_0x139e4f(0x13b)](),await this['client'][_0x139e4f(0x120)](),this[_0x139e4f(0x121)]=undefined,this['sessionName']=undefined;}async[a3_0x5e6c94(0x13c)](){const _0xd60146=a3_0x5e6c94;try{const _0x5ae635=await this[_0xd60146(0x138)][_0xd60146(0x14a)](new Api['messages'][(_0xd60146(0x148))]({'peer':this['peer'],'bot':this[_0xd60146(0x121)],'fromBotMenu':!![],'url':this['url'],'platform':_0xd60146(0x146)}));a3_0x349f0c['info'](_0xd60146(0x11b)+this[_0xd60146(0x154)]+'\x20-\x20Webview\x20Connected');const _0xac3ccf=_0x5ae635['url'];return Helper[_0xd60146(0x126)](_0xac3ccf,0x3);}catch(_0x3adbf5){throw _0x3adbf5;}}}