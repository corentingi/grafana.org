describe("cssToDOM",function(){var e,t;before(function(n){var r=requirejs.config({context:Math.random().toString().slice(2),baseUrl:"../src",paths:{cleanup:"../test/cleanup"}});r(["cssToDOM","cleanup"],function(r,i){e=r,t=i,n()})}),it("converts kebab to camel",function(){expect(e("fake-detect")).to.equal("fakeDetect")}),after(function(){t()})});