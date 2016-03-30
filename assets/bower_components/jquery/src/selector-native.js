define(["./core","./var/document","./var/documentElement","./var/hasOwn","./var/indexOf"],function(e,t,n,r,i){function o(n,r){if(n===r)return s=!0,0;var o=!n.compareDocumentPosition-!r.compareDocumentPosition;return o?o:(o=(n.ownerDocument||n)===(r.ownerDocument||r)?n.compareDocumentPosition(r):1,1&o?n===t||n.ownerDocument===t&&e.contains(t,n)?-1:r===t||r.ownerDocument===t&&e.contains(t,r)?1:u?i.call(u,n)-i.call(u,r):0:4&o?-1:1)}function a(e){var t,n=[],r=0,i=0;if(s=!1,u=!c&&e.slice(0),e.sort(o),s){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return u=null,e}var s,u,c=e.expando.split("").sort(o).join("")===e.expando,l=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector;e.extend({find:function(n,r,i,o){var a,s,u=0;if(i=i||[],r=r||t,!n||"string"!=typeof n)return i;if(1!==(s=r.nodeType)&&9!==s)return[];if(o)for(;a=o[u++];)e.find.matchesSelector(a,n)&&i.push(a);else e.merge(i,r.querySelectorAll(n));return i},uniqueSort:a,unique:a,text:function(t){var n,r="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o)return t.textContent;if(3===o||4===o)return t.nodeValue}else for(;n=t[i++];)r+=e.text(n);return r},contains:function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!n.contains(r))},isXMLDoc:function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},expr:{attrHandle:{},match:{bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:/^[\x20\t\r\n\f]*[>+~]/}}}),e.extend(e.find,{matches:function(t,n){return e.find(t,null,null,n)},matchesSelector:function(e,t){return l.call(e,t)},attr:function(t,n){var i=e.expr.attrHandle[n.toLowerCase()],o=i&&r.call(e.expr.attrHandle,n.toLowerCase())?i(t,n,e.isXMLDoc(t)):void 0;return void 0!==o?o:t.getAttribute(n)}})});