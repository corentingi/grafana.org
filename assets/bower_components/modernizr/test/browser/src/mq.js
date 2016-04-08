describe("mq",function(){var t,e,n,i,r,o=window.matchMedia||function(){var t,e=document.documentElement,n=e.firstElementChild||e.firstChild,i=document.createElement("body"),r=document.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(r),function(o){return r.innerHTML='&shy;<style media="'+o+'"> #mq-test-1 { width: 42px; }</style>',e.insertBefore(i,n),t=42===r.offsetWidth,e.removeChild(i),{matches:t,media:o}}}();before(function(e){(r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{sinon:"../test/js/lib/sinon",cleanup:"../test/cleanup"}}))(["injectElementWithStyles","cleanup","sinon"],function(r,o,s){t=r,n=o,i=s,e()})}),window.matchMedia||window.msMatchMedia?describe("matchMedia version",function(){before(function(t){r(["mq"],function(n){e=n,t()})}),it("works",function(){expect(e("only screen")).to.equal(o("only screen").matches),expect(e("only fake rule")).to.equal(o("only fake rule").matches)})}):describe("fallback version",function(){before(function(n){t=i.spy(t),r.undef("injectElementWithStyles"),r.undef("mq"),define("injectElementWithStyles",[],function(){return t}),r(["mq"],function(t){e=t,n()})}),it("works",function(){expect(e("only screen")).to.equal(o("only screen").matches),expect(e("only fake rule")).to.equal(o("only fake rule").matches),expect(t.called).to.be(!0)})}),afterEach(function(){r.undef("mq")}),after(function(){n()})});