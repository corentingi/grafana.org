describe("mStyle",function(){var e,t,n,r;before(function(){r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}})}),beforeEach(function(o){e={_q:[]},define("Modernizr",[],function(){return e}),(r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["mStyle","cleanup"],function(e,r){t=e,n=r,o()})}),it("returns an object with a style prop",function(){expect(t).to.be.an("object"),expect(t.style).to.not.be(void 0)}),it("pushes a function onto the Modernizr._q",function(){expect(e._q[0]).to.be.a("function")}),it("deletes mStyle.style after the `_q` runs",function(){expect(t.style).to.not.be(void 0),e._q[0](),expect(t.style).to.be(void 0)}),afterEach(function(){r.undef("Modernizr"),r.undef("mStyle")}),after(function(){n()})});