(()=>{"use strict";({777:function(){var n=this&&this.__awaiter||function(n,e,t,l){return new(t||(t=Promise))((function(o,a){function s(n){try{c(l.next(n))}catch(n){a(n)}}function i(n){try{c(l.throw(n))}catch(n){a(n)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(s,i)}c((l=l.apply(n,e||[])).next())}))};function e(e,t,l){return n(this,void 0,void 0,(function*(){var n=e.value.substring(t+1,l);let o=!1;return chrome.storage.sync.get(n,(function(n){let a=Object.entries(n)[0];null!=a?(e.value=e.value.substring(0,t)+a[1]+e.value.substring(l+1,e.value.length),"."===e.value[e.value.length-1]&&(e.value=e.value.substring(0,e.value.length-1))):o=!1})),o}))}function t(t){return n(this,void 0,void 0,(function*(){for(var n=0;n<t.value.length;){if("<"==t.value[n]){let l=n+1;for(;l<t.value.length&&">"!=t.value[l];)l+=1;l!=t.value.length&&(yield e(t,n,l))}n+=1}}))}const l=n=>{var e=document.querySelectorAll(n);for(let n=0;n<e.length;n++){let l=e[n];try{l.addEventListener("keydown",(function(n){"."==n.key&&t(l)}))}catch(n){}}};window.onload=function(){const n=["input","textarea"],e=n.map((n=>document.querySelectorAll(n).length));!function(n){n.forEach((n=>l(n)))}(n),function(){var n=document.getElementsByClassName("kvH3mc BToiNc UK95Uc");for(let l=0;l<n.length;l++){var e=n[l],t=document.createElement("div");t.innerHTML='\n      <style> \n      .box{\n        display: flex;\n        justify-content: space-between;\n\n      }\n\n      .logo{\n        width: 24px;\n        height: 24px;\n      }\n\n      </style>\n        <div class="box"> \n          <div class="left">\n            <img class="logo" src="./assets/logonew.png" alt="logo">\n            <span> Ditch the seo </span>\n          </div>\n          <div class="right">\n          <span class="likes"> 225 people </span>\n          <span class = "comments"> comments </span>\n          </div>\n        </div>\n      ',e.append(t)}}(),setInterval((()=>function(n,e){var t=n.map((n=>document.querySelectorAll(n).length));for(let o=0;o<t.length;o++)t[o]!=e[o]&&(e[o]=t[o],l(n[o]))}(n,e)),5e3)}}})[777]()})();