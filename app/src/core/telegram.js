const a4_0x3e5650=a4_0x4cec;(function(_0x1161b1,_0x35e1ef){const _0xc27edc=a4_0x4cec,_0x4f9f46=_0x1161b1();while(!![]){try{const _0x5f199d=-parseInt(_0xc27edc(0xa9))/0x1+parseInt(_0xc27edc(0xc7))/0x2*(parseInt(_0xc27edc(0xd4))/0x3)+-parseInt(_0xc27edc(0xac))/0x4*(-parseInt(_0xc27edc(0xb4))/0x5)+-parseInt(_0xc27edc(0x9c))/0x6*(-parseInt(_0xc27edc(0x99))/0x7)+-parseInt(_0xc27edc(0x9e))/0x8+-parseInt(_0xc27edc(0xb2))/0x9*(parseInt(_0xc27edc(0xb1))/0xa)+parseInt(_0xc27edc(0xb9))/0xb;if(_0x5f199d===_0x35e1ef)break;else _0x4f9f46['push'](_0x4f9f46['shift']());}catch(_0x2b0d2e){_0x4f9f46['push'](_0x4f9f46['shift']());}}}(a4_0x1fa0,0x594ef));import a4_0x392e02 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a4_0x3fd8a2 from'../utils/logger.js';function a4_0x1fa0(){const _0x4ea32c=['Enter\x20your\x20Telegram\x20Password?','3898048qQVrdy','stringify','Welcome\x20to\x20Cowtopia\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a','onBoarding','invoke','RequestWebView','session','text','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','Your\x20session\x20List\x20:\x0a\x20\x0a','proxy','155643IAtAuI','client','save','193324Eoylyk','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','init','Session\x20','url','88300YBLliT','171OnYKdP','You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first','45SymzEw','resolvePeer','android','storeSession','start','5203814zkfdui','\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:','warn','serverAddress','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','\x20|\x20FloodWait\x20','info','sessions','Invalid\x20input,\x20Please\x20try\x20again','disconnect','getSession','\x20-\x20Resolving\x20Peer','getTelegramQuery','resetSession','2CRPwdx','log','length','catopia_game_bot','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','delay','\x20-\x20Created','message','sessionName','useSession','peer','bot','\x20-\x20Webview\x20Connected','97191QVsMHV','seconds','destroy','agent','sessionCreation','826091cSjIJr','\x20|\x20Sleep\x20','error','12Xvfqxt'];a4_0x1fa0=function(){return _0x4ea32c;};return a4_0x1fa0();}import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';function a4_0x4cec(_0x33bb51,_0xb48ac7){const _0x1fa04a=a4_0x1fa0();return a4_0x4cec=function(_0x4cecfd,_0x587b7e){_0x4cecfd=_0x4cecfd-0x99;let _0xa29ac5=_0x1fa04a[_0x4cecfd];return _0xa29ac5;},a4_0x4cec(_0x33bb51,_0xb48ac7);}import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{['storeSession'];constructor(){const _0x25a0ca=a4_0x4cec;this['sessionName']=_0x25a0ca(0xc0),this[_0x25a0ca(0xb0)]='https://cowtopia-prod.tonfarmer.com/',this[_0x25a0ca(0xd2)]=_0x25a0ca(0xca);}async[a4_0x3e5650(0xae)](){const _0x26b76e=a4_0x3e5650;try{await this['onBoarding']();}catch(_0x58b1c2){console[_0x26b76e(0xc8)](_0x58b1c2),a4_0x3fd8a2[_0x26b76e(0x9b)](''+JSON[_0x26b76e(0x9f)](_0x58b1c2));throw _0x58b1c2;}}async['onBoarding'](){const _0x5b6580=a4_0x3e5650;try{let _0x1cf682=_0x5b6580(0xa0);const _0x43c3a7=Helper[_0x5b6580(0xc3)](_0x5b6580(0xc0));if(_0x43c3a7[_0x5b6580(0xc9)]==0x0)_0x1cf682+=_0x5b6580(0xbd);else for(const _0x472dc9 of _0x43c3a7){_0x1cf682+='-\x20'+_0x472dc9+'\x0a';}_0x1cf682+=_0x5b6580(0xad),_0x1cf682+=_0x5b6580(0xba);const _0x5d2d53=await a4_0x392e02[_0x5b6580(0xa5)](_0x1cf682);if(_0x5d2d53==0x1)await this[_0x5b6580(0xd8)]();else{if(_0x5d2d53==0x2)Helper[_0x5b6580(0xc6)](this[_0x5b6580(0xcf)]),await Helper[_0x5b6580(0xcc)](0xbb8),await this['onBoarding']();else _0x5d2d53==0x3?Helper[_0x5b6580(0xc3)](this[_0x5b6580(0xcf)])?.[_0x5b6580(0xc9)]==0x0&&(console[_0x5b6580(0xbf)](_0x5b6580(0xb3)),await this[_0x5b6580(0xa1)]()):(console[_0x5b6580(0x9b)](_0x5b6580(0xc1)),await this['onBoarding']());}}catch(_0x173dcd){throw _0x173dcd;}}async[a4_0x3e5650(0xd8)](){const _0x46d807=a4_0x3e5650;try{const _0x427d59=Helper[_0x46d807(0xc3)](_0x46d807(0xc0));let _0x979486=_0x46d807(0xa7);for(const _0x88c2 of _0x427d59){_0x979486+=_0x427d59['indexOf'](_0x88c2)+0x1+'.\x20'+_0x88c2+'\x0a';}_0x427d59[_0x46d807(0xc9)]==0x0?_0x979486+=_0x46d807(0xbd):_0x979486+='\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:';const _0x7fd8aa=await a4_0x392e02[_0x46d807(0xa5)](_0x979486);this[_0x46d807(0xcf)]=Helper['createDir'](_0x7fd8aa),await this['useSession'](this[_0x46d807(0xcf)]),await this[_0x46d807(0xc2)](),a4_0x3fd8a2[_0x46d807(0xbf)](_0x46d807(0xaf)+this[_0x46d807(0xcf)]+'\x20-\x20Created'),console[_0x46d807(0xc8)]('Session\x20'+this[_0x46d807(0xcf)]+_0x46d807(0xcd)),this['storeSession'][_0x46d807(0xab)](),await Helper[_0x46d807(0xcc)](0xbb8),await this[_0x46d807(0xae)]();}catch(_0x12d4fe){throw _0x12d4fe;}}async[a4_0x3e5650(0xd0)](_0x432f8e,_0x2bf6a6){const _0x2ec7dc=a4_0x3e5650;try{this[_0x2ec7dc(0xa8)]=_0x2bf6a6;const _0x363446={'connectionRetries':0x5};this[_0x2ec7dc(0xa8)]&&(_0x363446[_0x2ec7dc(0xd7)]=new HttpsProxyAgent(this[_0x2ec7dc(0xa8)])),this[_0x2ec7dc(0xb7)]=new StoreSession(_0x432f8e),this[_0x2ec7dc(0xaa)]=new TelegramClient(this[_0x2ec7dc(0xb7)],Config['TELEGRAM_APP_ID'],Config['TELEGRAM_APP_HASH'],_0x363446),this[_0x2ec7dc(0xb7)][_0x2ec7dc(0xab)](),await this['client'][_0x2ec7dc(0xb8)]({'phoneNumber':async()=>await a4_0x392e02[_0x2ec7dc(0xa5)](_0x2ec7dc(0xa6)),'password':async()=>await a4_0x392e02[_0x2ec7dc(0xa5)](_0x2ec7dc(0x9d)),'phoneCode':async()=>await a4_0x392e02[_0x2ec7dc(0xa5)](_0x2ec7dc(0xcb)),'onError':_0x34e07e=>{const _0x12810b=_0x2ec7dc;console[_0x12810b(0xc8)](_0x34e07e[_0x12810b(0xce)]);}}),console[_0x2ec7dc(0xc8)]();}catch(_0x46f72c){throw _0x46f72c;}}async[a4_0x3e5650(0xb5)](){const _0x56baa1=a4_0x3e5650;try{a4_0x3fd8a2['info'](_0x56baa1(0xaf)+this[_0x56baa1(0xa4)]+_0x56baa1(0xc4));while(this[_0x56baa1(0xd1)]==undefined){try{this[_0x56baa1(0xd1)]=await this['client']['getEntity'](this['bot']);break;}catch(_0x230b83){if(_0x230b83 instanceof FloodWaitError){const _0x4617a9=_0x230b83[_0x56baa1(0xd5)];a4_0x3fd8a2[_0x56baa1(0xbb)](this[_0x56baa1(0xaa)][_0x56baa1(0xa4)][_0x56baa1(0xbc)]+_0x56baa1(0xbe)+_0x230b83),a4_0x3fd8a2['info'](this['client'][_0x56baa1(0xa4)][_0x56baa1(0xbc)]+_0x56baa1(0x9a)+_0x4617a9+'s'),await Helper['delay']((_0x4617a9+0x3)*0x3e8);}else throw _0x230b83;}}}catch(_0x3a93b5){throw _0x3a93b5;}}async[a4_0x3e5650(0xc2)](){const _0x40b075=a4_0x3e5650;await this[_0x40b075(0xaa)][_0x40b075(0xc2)](),await this[_0x40b075(0xaa)][_0x40b075(0xd6)](),this[_0x40b075(0xd1)]=undefined,this[_0x40b075(0xcf)]=undefined;}async['initWebView'](){const _0x25bced=a4_0x3e5650;try{const _0x50fd06=await this[_0x25bced(0xaa)][_0x25bced(0xa2)](new Api['messages'][(_0x25bced(0xa3))]({'peer':this['peer'],'bot':this[_0x25bced(0xd1)],'fromBotMenu':!![],'url':this[_0x25bced(0xb0)],'platform':_0x25bced(0xb6)}));a4_0x3fd8a2[_0x25bced(0xbf)](_0x25bced(0xaf)+this[_0x25bced(0xa4)]+_0x25bced(0xd3));const _0x446430=_0x50fd06[_0x25bced(0xb0)];return Helper[_0x25bced(0xc5)](_0x446430,0x3);}catch(_0x1cce48){throw _0x1cce48;}}}