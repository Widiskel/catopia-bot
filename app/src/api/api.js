const a1_0x1d4c1a=a1_0x7102;(function(_0x3c9ca5,_0x5750f8){const _0x294a47=a1_0x7102,_0x24156f=_0x3c9ca5();while(!![]){try{const _0x57bd8f=-parseInt(_0x294a47(0xbb))/0x1+-parseInt(_0x294a47(0xc0))/0x2+parseInt(_0x294a47(0xbd))/0x3+-parseInt(_0x294a47(0xc5))/0x4+-parseInt(_0x294a47(0xb2))/0x5*(parseInt(_0x294a47(0xb0))/0x6)+parseInt(_0x294a47(0xc2))/0x7*(-parseInt(_0x294a47(0xa9))/0x8)+parseInt(_0x294a47(0xb9))/0x9*(parseInt(_0x294a47(0xc7))/0xa);if(_0x57bd8f===_0x5750f8)break;else _0x24156f['push'](_0x24156f['shift']());}catch(_0xf40c3f){_0x24156f['push'](_0x24156f['shift']());}}}(a1_0x1a1d,0x4a2d8));import{HttpsProxyAgent}from'https-proxy-agent';import{Helper}from'../utils/helper.js';import a1_0x5d1ce7 from'../utils/logger.js';function a1_0x7102(_0x140712,_0x3819e0){const _0x1a1dd9=a1_0x1a1d();return a1_0x7102=function(_0x7102a,_0x171c72){_0x7102a=_0x7102a-0xa9;let _0x11de68=_0x1a1dd9[_0x7102a];return _0x11de68;},a1_0x7102(_0x140712,_0x3819e0);}export class API{constructor(_0x5c861c,_0xef87cc,_0x4c5c27){const _0x3e9dec=a1_0x7102;this['url']=_0xef87cc,this['origin']=_0xef87cc,this['ua']=Helper[_0x3e9dec(0xac)](),this[_0x3e9dec(0xb3)]=_0x5c861c,this[_0x3e9dec(0xba)]=_0x4c5c27;}['generateHeaders'](_0x236c8f){const _0x2cad3d=a1_0x7102,_0xf30ee6={'Accept':_0x2cad3d(0xbc),'Accept-Language':_0x2cad3d(0xb6),'Content-Type':_0x2cad3d(0xb5),'Sec-Fetch-Dest':'empty','Sec-Fetch-Site':_0x2cad3d(0xc9),'Sec-Fetch-Mode':_0x2cad3d(0xb8),'Host':this[_0x2cad3d(0xca)],'Origin':this[_0x2cad3d(0xaf)],'Referer':this['origin']+'/'};return _0x236c8f&&(_0xf30ee6['Authorization']='Bearer\x20'+_0x236c8f),_0xf30ee6;}async[a1_0x1d4c1a(0xc1)](_0x1df7ba,_0x2c4257,_0x49e265,_0x26f694={},_0x567dc4={}){const _0xb091ac=a1_0x1d4c1a;try{const _0x274f3a=''+this['url']+_0x1df7ba,_0x31e757={..._0x567dc4,...this[_0xb091ac(0xae)](_0x49e265)},_0x35d947={'headers':_0x31e757,'method':_0x2c4257};this['proxy']&&(_0x35d947[_0xb091ac(0xb7)]=new HttpsProxyAgent(this[_0xb091ac(0xba)]));a1_0x5d1ce7[_0xb091ac(0xc4)](_0x2c4257+'\x20:\x20'+_0x274f3a+'\x20'+(this['proxy']?this['proxy']:'')),a1_0x5d1ce7[_0xb091ac(0xc4)](_0xb091ac(0xc6)+JSON['stringify'](_0x31e757));_0x2c4257!==_0xb091ac(0xaa)&&(_0x35d947[_0xb091ac(0xc3)]=''+JSON[_0xb091ac(0xab)](_0x26f694),a1_0x5d1ce7[_0xb091ac(0xc4)]('Request\x20Body\x20:\x20'+_0x35d947[_0xb091ac(0xc3)]));const _0x233f73=await fetch(_0x274f3a,_0x35d947);a1_0x5d1ce7[_0xb091ac(0xc4)](_0xb091ac(0xb1)+_0x233f73[_0xb091ac(0xbf)]+'\x20'+_0x233f73[_0xb091ac(0xb4)]);if(_0x233f73['ok']||_0x233f73[_0xb091ac(0xbf)]==0x190||_0x233f73[_0xb091ac(0xbf)]==0x193){const _0x55898c=await _0x233f73[_0xb091ac(0xad)]();return a1_0x5d1ce7[_0xb091ac(0xc4)]('Response\x20Data\x20:\x20'+JSON[_0xb091ac(0xab)](_0x55898c)),_0x55898c;}else throw new Error(_0x233f73[_0xb091ac(0xbf)]+'\x20-\x20'+_0x233f73[_0xb091ac(0xb4)]);}catch(_0x8c81e1){a1_0x5d1ce7[_0xb091ac(0xbe)]('Error\x20:\x20'+_0x8c81e1[_0xb091ac(0xc8)]);throw _0x8c81e1;}}}function a1_0x1a1d(){const _0x56f800=['cors','14213583xQmJkm','proxy','465772slIsQe','application/json,\x20text/plain,\x20*/*','381183HWQeQh','error','status','289140FxMPQd','fetch','7SMrQJz','body','info','269948drUHIL','Request\x20Header\x20:\x20','10knhOym','message','same-site','host','939192ascZLn','GET','stringify','randomUserAgent','json','generateHeaders','origin','6gjuAKd','Response\x20:\x20','3036440UJhIDr','query','statusText','application/json','en-US,en;q=0.9,id;q=0.8','agent'];a1_0x1a1d=function(){return _0x56f800;};return a1_0x1a1d();}