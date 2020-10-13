(function(W) {
  self.Worker = function Worker(url, opts) {
    if (opts && opts.type=='module') {
      opts = { name: url };
      url = typeof document=='undefined' ? location.href : document.currentScript && document.currentScript.src || (new Error).stack.match(/((file|https?):\/\/[^)]+?):\d+(:\d+)?\)/)[1];
    }
    return new W(url, opts);
  }

  function p(){
    // esm-polyfill
    var r={}, n={};
    function e(r,e){for(e=e.replace(/^(\.\.\/|\.\/)/,r.replace(/[^/]+$/g,"")+"$1");e!==(e=e.replace(/[^/]+\/\.\.\//g,"")););return e.replace(/\.\//g,"")}
    function t(s,u){var o,a=s;return u&&(s=e(u,s)),r[s]||(r[s]=fetch(s).then((function(u){if((a=u.url)!==s){if(null!=r[a])return r[a];r[a]=r[s]}return u.text().then((function(r){if(!u.ok)throw r;var s={exports:{}};o=n[a]||(n[a]=s.exports);var i=function(r){return t(r,a)},c=[];return r=function(r,e){e=e||[];var n,t=[],s=0;function u(r,e){for(var s,u=/(?:^|,)\s*([\w$]+)(?:\s+as\s+([\w$]+))?\s*/g,o=[];s=u.exec(r);)e?t.push((s[2]||s[1])+":"+s[1]):o.push((s[2]||s[1])+"="+n+"."+s[1]);return o}return(r=r.replace(/(?:^(.*)\/\/.*$|\/\*[\s\S]*?\*\/)/gm,"$1").replace(/(^\s*|[;}\s\n]\s*)import\s*(?:(?:([\w$]+)(?:\s*\,\s*\{([^}]+)\})?|\{([^}]*)\})\s*from)?\s*(['"])(.+?)\5/g,(function(r,t,o,a,i,c,p){return e.push(p),t+="var "+(n="$im$"+ ++s)+"=require("+c+p+c+")",o&&(t+=";var "+o+" = 'default' in "+n+" ? "+n+".default : "+n),(a=a||i)&&(t+=";var "+u(a,!1)),t})).replace(/((?:^|[;}\s\n])\s*)export\s*(?:\s+(default)\s+|((?:async\s+)?function\s*\*?|const\s|let\s|var\s)\s*([a-zA-Z0-9$_]+))/g,(function(r,e,n,u,o){if(n){var a="$im$"+ ++s;return t.push("default:"+a),e+"const "+a+"="}return t.push(o+":"+o),e+u+" "+o})).replace(/((?:^|[;}\s\n])\s*)export\s*\{([^}]+)\}\s*;?/g,(function(r,e,n){return u(n,!0),e})).replace(/((?:^|[^a-zA-Z0-9$_@`'".])\s*)(import\s*\([\s\S]+?\))/g,"$1$$$2")).replace(/((?:^|[^a-zA-Z0-9$_@`'".])\s*)import\.meta\.url/g,"$1"+JSON.stringify(s))+"\nmodule.exports={"+t.join(",")+"}"}(r,c),Promise.all(c.map((function(r){var s=e(a,r);return s in n?n[s]:t(s)}))).then((function(e){var n=new Function("$import","require","module","exports",r)(i,(function(r){return e[c.indexOf(r)]}),s,s.exports);return null!=n&&(s.exports=n),Object.assign(o,s.exports),s.exports}))}))})))}
    try{t=new Function("i","return import(i)")}catch(r){}

    // import while queuing messages
    var q=[],m=q.push.bind(q);
    addEventListener('message',m);
    function d(){removeEventListener('message',m),q.map(dispatchEvent)}
    t(self.name).then(d,d);
  }
  
  if (typeof document == 'undefined') p();
})(self.Worker);
