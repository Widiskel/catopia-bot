const a6_0x46cb58=a6_0x50fd;(function(_0x1c4d64,_0x108ba9){const _0x4a8908=a6_0x50fd,_0x1e3420=_0x1c4d64();while(!![]){try{const _0x50de8b=parseInt(_0x4a8908(0x134))/0x1+parseInt(_0x4a8908(0x125))/0x2+parseInt(_0x4a8908(0x128))/0x3*(-parseInt(_0x4a8908(0x126))/0x4)+-parseInt(_0x4a8908(0x124))/0x5+-parseInt(_0x4a8908(0x130))/0x6*(-parseInt(_0x4a8908(0x12e))/0x7)+parseInt(_0x4a8908(0x136))/0x8+-parseInt(_0x4a8908(0x12c))/0x9*(parseInt(_0x4a8908(0x132))/0xa);if(_0x50de8b===_0x108ba9)break;else _0x1e3420['push'](_0x1e3420['shift']());}catch(_0x4f16a1){_0x1e3420['push'](_0x1e3420['shift']());}}}(a6_0xb481,0x3a037));import{createLogger,format,transports}from'winston';import a6_0x299b3b from'fs';function a6_0x50fd(_0x41d038,_0x26e324){const _0xb4818a=a6_0xb481();return a6_0x50fd=function(_0x50fd32,_0x2aa6d7){_0x50fd32=_0x50fd32-0x11f;let _0x26ea20=_0xb4818a[_0x50fd32];return _0x26ea20;},a6_0x50fd(_0x41d038,_0x26e324);}const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x3b59d1,message:_0x302651,timestamp:_0x2fedf8})=>{const _0x3d510c=a6_0x50fd;return _0x2fedf8+'\x20['+_0x3b59d1+_0x3d510c(0x12b)+_0x302651;});class Logger{constructor(){const _0x2918ff=a6_0x50fd;this[_0x2918ff(0x127)]=createLogger({'level':_0x2918ff(0x129),'format':combine(timestamp({'format':_0x2918ff(0x133)}),colorize(),customFormat),'transports':[new transports['File']({'filename':'log/app.log'})],'exceptionHandlers':[new transports['File']({'filename':_0x2918ff(0x135)})],'rejectionHandlers':[new transports[(_0x2918ff(0x12d))]({'filename':_0x2918ff(0x135)})]});}[a6_0x46cb58(0x12f)](_0x31282b){const _0x5d9c1b=a6_0x46cb58;this[_0x5d9c1b(0x127)][_0x5d9c1b(0x12f)](_0x31282b);}[a6_0x46cb58(0x131)](_0x2771c1){const _0x160e3b=a6_0x46cb58;this['logger'][_0x160e3b(0x131)](_0x2771c1);}[a6_0x46cb58(0x12a)](_0x53342e){const _0x20db84=a6_0x46cb58;this['logger'][_0x20db84(0x12a)](_0x53342e);}[a6_0x46cb58(0x129)](_0x30da3b){const _0x3a45d4=a6_0x46cb58;this[_0x3a45d4(0x127)][_0x3a45d4(0x129)](_0x30da3b);}['setLevel'](_0x517229){const _0x150f7e=a6_0x46cb58;this[_0x150f7e(0x127)][_0x150f7e(0x137)]=_0x517229;}[a6_0x46cb58(0x122)](){const _0x339867=a6_0x46cb58;a6_0x299b3b[_0x339867(0x123)](_0x339867(0x135),0x0,_0x4d24d0=>{const _0x1f7c04=_0x339867;_0x4d24d0?this[_0x1f7c04(0x127)][_0x1f7c04(0x12a)](_0x1f7c04(0x121)+_0x4d24d0[_0x1f7c04(0x120)]):this['logger'][_0x1f7c04(0x12f)](_0x1f7c04(0x11f));});}}function a6_0xb481(){const _0x5b8534=['1640888NlIQel','level','Log\x20file\x20cleared','message','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','clear','truncate','436315eBwnMp','841462ryfuRE','20836esZXpq','logger','213NWSbbD','debug','error',']:\x20','81EjRDgZ','File','56931oymKTc','info','174wvmNiD','warn','571090CndqvI','YYYY-MM-DD\x20HH:mm:ss','347007OGVaGD','log/app.log'];a6_0xb481=function(){return _0x5b8534;};return a6_0xb481();}export default new Logger();