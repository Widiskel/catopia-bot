(function(_0x5b5602,_0x241b66){const _0x3f0424=a0_0x15df,_0xd8c0a6=_0x5b5602();while(!![]){try{const _0x5e55b9=parseInt(_0x3f0424(0x16e))/0x1+parseInt(_0x3f0424(0x156))/0x2*(-parseInt(_0x3f0424(0x150))/0x3)+parseInt(_0x3f0424(0x172))/0x4*(parseInt(_0x3f0424(0x155))/0x5)+parseInt(_0x3f0424(0x14b))/0x6+-parseInt(_0x3f0424(0x148))/0x7+parseInt(_0x3f0424(0x162))/0x8+-parseInt(_0x3f0424(0x169))/0x9;if(_0x5e55b9===_0x241b66)break;else _0xd8c0a6['push'](_0xd8c0a6['shift']());}catch(_0x21b86c){_0xd8c0a6['push'](_0xd8c0a6['shift']());}}}(a0_0x1255,0x48cc3));import{Config}from'./config/config.js';import{Catopia}from'./src/core/catopia.js';import{Telegram}from'./src/core/telegram.js';function a0_0x1255(){const _0x406c8b=['3058WlqZeY','count','delay','missions','getAvailablePlant','map','\x20Processing\x20Complete','harvestAll','clearInfo','getLands','client','goldenCoin','3431872wMgtdV','claimMission','queryToJSON','stringify','initWebView','plant','clear','10320624reypte','info','plantSeed','getMe','pet','579035Wpitut','Not\x20Enough\x20Coin\x20to\x20Buy\x20Grapes','Application\x20Started','name','1518196cUlDSH','level','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','push','emptyLand','Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first','claimed','session','init','error','CATOPIA\x20BOT','BOT\x20STOPPED','log','openChest','getSession','TELEGRAM_APP_ID','isCompleted','length','BOT\x20STARTED','all','user','buyChest','sessions','resolvePeer','2516080RlRlsp','filter','login','2986944dKQaTQ','message','buyingGrapes','Account\x20','TELEGRAM_APP_HASH','159DPpxrO',',\x20Retrying\x20after\x2030\x20Second','getSeedList','then','find','5IJkbac'];a0_0x1255=function(){return _0x406c8b;};return a0_0x1255();}import{Helper}from'./src/utils/helper.js';function a0_0x15df(_0x1500c2,_0x1554cb){const _0x1255fb=a0_0x1255();return a0_0x15df=function(_0x15df80,_0xc7d8eb){_0x15df80=_0x15df80-0x13d;let _0x5186f4=_0x1255fb[_0x15df80];return _0x5186f4;},a0_0x15df(_0x1500c2,_0x1554cb);}import a0_0x41ee71 from'./src/utils/logger.js';import a0_0x4d074b from'./src/utils/twist.js';async function operation(_0x50bbcf,_0x36ca04,_0x517b55){const _0x5133f0=a0_0x15df;try{const _0xff3733=new Catopia(_0x50bbcf,_0x36ca04,_0x517b55);await _0xff3733[_0x5133f0(0x14a)](),await _0xff3733['getUser'](!![]),await _0xff3733[_0x5133f0(0x15f)](!![]);_0xff3733['land']['occupiedLand']!=0x0&&await _0xff3733[_0x5133f0(0x15d)]();await _0xff3733[_0x5133f0(0x152)](),await _0xff3733[_0x5133f0(0x15a)](!![]);while(_0xff3733[_0x5133f0(0x167)]['length']<0x4){if(_0xff3733[_0x5133f0(0x144)][_0x5133f0(0x161)]>0x4e20)await _0xff3733[_0x5133f0(0x14d)]();else{await Helper[_0x5133f0(0x158)](0xbb8,_0x50bbcf,_0x5133f0(0x16f),_0xff3733);break;}}for(const _0x132146 of _0xff3733['land'][_0x5133f0(0x176)]){_0xff3733[_0x5133f0(0x167)][_0x5133f0(0x141)]>=0x1&&await _0xff3733[_0x5133f0(0x16b)](_0x132146['id']);}await _0xff3733['getMission'](!![]);for(const _0x2f7669 of _0xff3733[_0x5133f0(0x159)]){_0x2f7669[_0x5133f0(0x140)]&&!_0x2f7669[_0x5133f0(0x178)]&&await _0xff3733[_0x5133f0(0x163)](_0x2f7669);}while(_0xff3733['user'][_0x5133f0(0x161)]>0x30d40){await _0xff3733[_0x5133f0(0x145)](),await _0xff3733[_0x5133f0(0x13d)]();}await _0xff3733['getPet'](!![]);const _0x58739a=[];for(const _0x4de57a of _0xff3733[_0x5133f0(0x16d)]){const _0x186f4a=_0x58739a[_0x5133f0(0x154)](_0x3e1a63=>_0x3e1a63[_0x5133f0(0x171)]===_0x4de57a[_0x5133f0(0x171)]&&_0x3e1a63[_0x5133f0(0x173)]===_0x4de57a[_0x5133f0(0x173)]);_0x186f4a?_0x186f4a[_0x5133f0(0x157)]+=0x1:_0x58739a[_0x5133f0(0x175)]({..._0x4de57a,'count':0x1});}for(const _0x3f6854 of _0x58739a[_0x5133f0(0x149)](_0x3365ed=>_0x3365ed['count']>=0x5)){await _0xff3733['upgradePet'](_0x3f6854);}await Helper['delay'](0xea60*0xa,_0x50bbcf,_0x5133f0(0x14e)+_0x50bbcf['id']+_0x5133f0(0x15c),_0xff3733),await operation(_0x50bbcf,_0x36ca04,_0x517b55);}catch(_0x54a4f5){a0_0x4d074b[_0x5133f0(0x168)](_0x50bbcf),a0_0x4d074b[_0x5133f0(0x15e)](),await Helper[_0x5133f0(0x158)](0x2710,_0x50bbcf,'Error\x20:\x20'+_0x54a4f5[_0x5133f0(0x14c)]+_0x5133f0(0x151)),await operation(_0x50bbcf,_0x36ca04,_0x517b55);}}let init=![];async function startBot(){return new Promise(async(_0x49faee,_0x5cfaca)=>{const _0x517717=a0_0x15df;try{a0_0x41ee71[_0x517717(0x16a)](_0x517717(0x142));if(Config[_0x517717(0x13f)]==undefined||Config[_0x517717(0x14f)]==undefined)throw new Error(_0x517717(0x177));const _0x398cb7=await new Telegram();init==![]&&(await _0x398cb7[_0x517717(0x17a)](),init=!![]);const _0x26cc85=Helper[_0x517717(0x13e)](_0x517717(0x146)),_0x548964=[];for(const _0x47d77c of _0x26cc85){await _0x398cb7['useSession']('sessions/'+_0x47d77c),_0x398cb7[_0x517717(0x179)]=_0x47d77c;const _0x2e5fd3=await _0x398cb7[_0x517717(0x160)][_0x517717(0x16c)](),_0xf69775=await _0x398cb7[_0x517717(0x147)]()[_0x517717(0x153)](async()=>{const _0x778049=_0x517717;return await _0x398cb7[_0x778049(0x166)]();})['catch'](_0x28821b=>{throw _0x28821b;}),_0x1b0a09=Helper[_0x517717(0x164)](_0xf69775);await _0x398cb7['disconnect'](),_0x548964['push']([_0x2e5fd3,_0xf69775,_0x1b0a09]);}const _0x5da5bd=_0x548964[_0x517717(0x15b)](async _0x307b06=>{await operation(_0x307b06[0x0],_0x307b06[0x1],_0x307b06[0x2]);});await Promise[_0x517717(0x143)](_0x5da5bd),_0x49faee();}catch(_0x50443a){a0_0x41ee71[_0x517717(0x16a)](_0x517717(0x17d)),a0_0x41ee71[_0x517717(0x17b)](JSON[_0x517717(0x165)](_0x50443a)),_0x5cfaca(_0x50443a);}});}((async()=>{const _0x2dde8b=a0_0x15df;try{a0_0x41ee71[_0x2dde8b(0x168)](),a0_0x41ee71[_0x2dde8b(0x16a)](''),a0_0x41ee71[_0x2dde8b(0x16a)](_0x2dde8b(0x170)),console['log'](_0x2dde8b(0x17c)),console[_0x2dde8b(0x17e)]('By\x20:\x20Widiskel'),console[_0x2dde8b(0x17e)](_0x2dde8b(0x174)),await startBot();}catch(_0x5600f0){a0_0x4d074b[_0x2dde8b(0x168)](),a0_0x4d074b['clearInfo'](),console['log']('Error\x20During\x20executing\x20bot',_0x5600f0),await startBot();}})());