describe("prefixedCSS",function(){var e,t,n={_config:{usePrefixes:!0},_q:[]};before(function(r){define("ModernizrProto",[],function(){return n}),define("package",[],function(){return{version:"v9999"}});var o=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});o(["cleanup","prefixedCSS"],function(n,o){e=o,t=n,r()})}),it("creates a reference on `ModernizrProto`",function(){expect(e).to.equal(n.prefixedCSS)}),it("returns false on unknown properties",function(){expect(e("fart")).to.equal(!1)}),it("returns known values without prefix",function(){expect(e("display")).to.equal("display")}),after(function(){t()})});