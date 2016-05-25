define(["isSVG"],function(n){var e;return n||!function(n,e){function t(n,e){var t=n.createElement("p"),r=n.getElementsByTagName("head")[0]||n.documentElement;return t.innerHTML="x<style>"+e+"</style>",r.insertBefore(t.lastChild,r.firstChild)}function r(){var n=E.elements;return"string"==typeof n?n.split(" "):n}function i(n,e){var t=E.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof n&&(n=n.join(" ")),E.elements=t+" "+n,c(e)}function o(n){var e=x[n[b]];return e||(e={},j++,n[b]=j,x[j]=e),e}function u(n,t,r){if(t||(t=e),g)return t.createElement(n);r||(r=o(t));var i;return i=r.cache[n]?r.cache[n].cloneNode():w.test(n)?(r.cache[n]=r.createElem(n)).cloneNode():r.createElem(n),!i.canHaveChildren||y.test(n)||i.tagUrn?i:r.frag.appendChild(i)}function a(n,t){if(n||(n=e),g)return n.createDocumentFragment();t=t||o(n);for(var i=t.frag.cloneNode(),u=0,a=r(),f=a.length;f>u;u++)i.createElement(a[u]);return i}function f(n,e){e.cache||(e.cache={},e.createElem=n.createElement,e.createFrag=n.createDocumentFragment,e.frag=e.createFrag()),n.createElement=function(t){return E.shivMethods?u(t,n,e):e.createElem(t)},n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(n){return e.createElem(n),e.frag.createElement(n),'c("'+n+'")'})+");return n}")(E,e.frag)}function c(n){n||(n=e);var r=o(n);return!E.shivCSS||v||r.hasCSS||(r.hasCSS=!!t(n,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||f(n,r),n}function s(n){for(var e,t=n.getElementsByTagName("*"),i=t.length,o=RegExp("^(?:"+r().join("|")+")$","i"),u=[];i--;)e=t[i],o.test(e.nodeName)&&u.push(e.applyElement(l(e)));return u}function l(n){for(var e,t=n.attributes,r=t.length,i=n.ownerDocument.createElement(k+":"+n.nodeName);r--;)e=t[r],e.specified&&i.setAttribute(e.nodeName,e.nodeValue);return i.style.cssText=n.style.cssText,i}function p(n){for(var e,t=n.split("{"),i=t.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),u="$1"+k+"\\:$2";i--;)e=t[i]=t[i].split("}"),e[e.length-1]=e[e.length-1].replace(o,u),t[i]=e.join("}");return t.join("{")}function h(n){for(var e=n.length;e--;)n[e].removeNode()}function d(n){function e(){clearTimeout(u._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,i,u=o(n),a=n.namespaces,f=n.parentWindow;return!S||n.printShived?n:("undefined"==typeof a[k]&&a.add(k),f.attachEvent("onbeforeprint",function(){e();for(var o,u,a,f=n.styleSheets,c=[],l=f.length,h=Array(l);l--;)h[l]=f[l];for(;a=h.pop();)if(!a.disabled&&C.test(a.media)){try{o=a.imports,u=o.length}catch(d){u=0}for(l=0;u>l;l++)h.push(o[l]);try{c.push(a.cssText)}catch(d){}}c=p(c.reverse().join("")),i=s(n),r=t(n,c)}),f.attachEvent("onafterprint",function(){h(i),clearTimeout(u._removeSheetTimer),u._removeSheetTimer=setTimeout(e,500)}),n.printShived=!0,n)}var v,g,m="3.7.2",_=n.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,w=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",j=0,x={};!function(){try{var n=e.createElement("a");n.innerHTML="<xyz></xyz>",v="hidden"in n,g=1==n.childNodes.length||function(){e.createElement("a");var n=e.createDocumentFragment();return"undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}()}catch(t){v=!0,g=!0}}();var E={elements:_.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:_.shivCSS!==!1,supportsUnknownElements:g,shivMethods:_.shivMethods!==!1,type:"default",shivDocument:c,createElement:u,createDocumentFragment:a,addElements:i};n.html5=E,c(e);var C=/^$|\b(?:all|print)\b/,k="html5shiv",S=!g&&function(){var t=e.documentElement;return!("undefined"==typeof e.namespaces||"undefined"==typeof e.parentWindow||"undefined"==typeof t.applyElement||"undefined"==typeof t.removeNode||"undefined"==typeof n.attachEvent)}();E.type+=" print",E.shivPrint=d,d(e)}(this,document),e});