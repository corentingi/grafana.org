describe("fnBind",function(){var e,t;before(function(n){var r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});r(["fnBind","cleanup"],function(r,i){e=r,t=i,n()})}),it("binds to `this`",function(){var t={x:1},n=function(){return this.x};expect(e(n,t)()).to.equal(1)}),after(function(){t()})});