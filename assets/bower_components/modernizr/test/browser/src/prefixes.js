describe("prefixes",function(){var t,e,n,i=function(e,i){return function(){define("ModernizrProto",[],function(){return{_config:{usePrefixes:i}}}),n(["prefixes"],function(n){t=n,e()})}()},r=function(){t=void 0,n.undef("prefixes"),n.undef("ModernizrProto")};before(function(t){define("package",[],function(){return{}}),(n=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}}))(["cleanup"],function(n){e=n,t()})}),describe("prefixes enabled",function(){before(function(t){i(t,!0)}),after(r),it("returns prefixes",function(t){n(["prefixes"],function(e){expect(e).to.be.an("array"),expect(e).to.not.have.length(0),t()})})}),describe("prefixes disabled",function(){before(function(t){i(t,!1)}),after(r),it("returns no prefixes",function(t){n(["prefixes"],function(e){expect(e).to.be.an("array"),expect(e).to.have.length(0),t()})})}),after(function(){e()})});