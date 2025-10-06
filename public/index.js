(function(){ 
(function(global){
  try{
    var __c = global.console || {};
    var __orig = {};
    ['log','warn','error','info','debug'].forEach(function(k){ __orig[k]=(__c[k]||function(){}); });
    // wrap console methods so messages still show but we prevent easy overwrite
    global.console = {};
    ['log','warn','error','info','debug'].forEach(function(k){
      global.console[k]=function(){ try{ __orig[k].apply(__c, arguments); }catch(e){} };
    });
    // disable clear and table to prevent hiding traces
    global.console.clear = function(){};
    global.console.table = function(){};
    // prevent reassigning console entirely
    Object.defineProperty(global, 'console', { configurable: false, writable: false });
  }catch(e){}
})(typeof window!=='undefined'?window:this);
 })();
(function(){if(typeof atob===(atob('dW5kZWZpbmVk'))){globalThis.atob=function(b){return Buffer.from(b,(atob('YmFzZTY0'))).toString((atob('YmluYXJ5')));};}})();
