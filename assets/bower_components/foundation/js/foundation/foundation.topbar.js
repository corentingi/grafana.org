!function(t,e,n,i){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.4.7",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all"},init:function(e,n,i){Foundation.inherit(this,"add_custom_rule register_media throttle");var r=this;r.register_media("topbar","foundation-mq-topbar"),this.bindings(n,i),r.S("["+this.attr_name()+"]",this.scope).each(function(){var e=t(this),n=e.data(r.attr_name(!0)+"-init");r.S("section, .top-bar-section",this);e.data("index",0);var i=e.parent();i.hasClass("fixed")||r.is_sticky(e,i,n)?(r.settings.sticky_class=n.sticky_class,r.settings.sticky_topbar=e,e.data("height",i.outerHeight()),e.data("stickyoffset",i.offset().top)):e.data("height",e.outerHeight()),n.assembled||r.assemble(e),n.is_hover?r.S(".has-dropdown",e).addClass("not-click"):r.S(".has-dropdown",e).removeClass("not-click"),r.add_custom_rule(".f-topbar-fixed { padding-top: "+e.data("height")+"px }"),i.hasClass("fixed")&&r.S("body").addClass("f-topbar-fixed")})},is_sticky:function(t,e,n){var i=e.hasClass(n.sticky_class);return i&&"all"===n.sticky_on?!0:i&&this.small()&&"small"===n.sticky_on?matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:i&&this.medium()&&"medium"===n.sticky_on?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:i&&this.large()&&"large"===n.sticky_on?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&matchMedia(Foundation.media_queries.large).matches:!1},toggle:function(n){var i,r=this;i=n?r.S(n).closest("["+this.attr_name()+"]"):r.S("["+this.attr_name()+"]");var o=i.data(this.attr_name(!0)+"-init"),s=r.S("section, .top-bar-section",i);r.breakpoint()&&(r.rtl?(s.css({right:"0%"}),t(">.name",s).css({right:"100%"})):(s.css({left:"0%"}),t(">.name",s).css({left:"100%"})),r.S("li.moved",s).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),o.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(o.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),r.S("body").removeClass("f-topbar-fixed"),e.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),r.S("body").addClass("f-topbar-fixed")):(r.is_sticky(i,i.parent(),o)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded"),r.S("body").addClass("f-topbar-fixed")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(n){var i=this,r=this.S;r(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(t){t.preventDefault(),i.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(e){var n=t(this).closest("li");!i.breakpoint()||n.hasClass("back")||n.hasClass("has-dropdown")||i.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(e){var n=r(this),o=r(e.target),s=n.closest("["+i.attr_name()+"]"),a=s.data(i.attr_name(!0)+"-init");return o.data("revealId")?void i.toggle():void(i.breakpoint()||(!a.is_hover||Modernizr.touch)&&(e.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),t(n).siblings().removeClass("hover"),"A"===o[0].nodeName&&o.parent().hasClass("has-dropdown")&&e.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(t){if(i.breakpoint()){t.preventDefault();var e=r(this),n=e.closest("["+i.attr_name()+"]"),o=n.find("section, .top-bar-section"),s=(e.next(".dropdown").outerHeight(),e.closest("li"));n.data("index",n.data("index")+1),s.addClass("moved"),i.rtl?(o.css({right:-(100*n.data("index"))+"%"}),o.find(">.name").css({right:100*n.data("index")+"%"})):(o.css({left:-(100*n.data("index"))+"%"}),o.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",e.siblings("ul").outerHeight(!0)+n.data("height"))}}),r(e).off(".topbar").on("resize.fndtn.topbar",i.throttle(function(){i.resize.call(i)},50)).trigger("resize").trigger("resize.fndtn.topbar").load(function(){r(this).trigger("resize.fndtn.topbar")}),r("body").off(".topbar").on("click.fndtn.topbar",function(t){var e=r(t.target).closest("li").closest("li.hover");e.length>0||r("["+i.attr_name()+"] li.hover").removeClass("hover")}),r(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(t){t.preventDefault();var e=r(this),n=e.closest("["+i.attr_name()+"]"),o=n.find("section, .top-bar-section"),s=(n.data(i.attr_name(!0)+"-init"),e.closest("li.moved")),a=s.parent();n.data("index",n.data("index")-1),i.rtl?(o.css({right:-(100*n.data("index"))+"%"}),o.find(">.name").css({right:100*n.data("index")+"%"})):(o.css({left:-(100*n.data("index"))+"%"}),o.find(">.name").css({left:100*n.data("index")+"%"})),0===n.data("index")?n.css("height",""):n.css("height",a.outerHeight(!0)+n.data("height")),setTimeout(function(){s.removeClass("moved")},300)}),r(this.scope).find(".dropdown a").focus(function(){t(this).parents(".has-dropdown").addClass("hover")}).blur(function(){t(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var e,i=t.S(this),r=i.data(t.attr_name(!0)+"-init"),o=i.parent("."+t.settings.sticky_class);if(!t.breakpoint()){var s=i.hasClass("expanded");i.css("height","").removeClass("expanded").find("li").removeClass("hover"),s&&t.toggle(i)}t.is_sticky(i,o,r)&&(o.hasClass("fixed")?(o.removeClass("fixed"),e=o.offset().top,t.S(n.body).hasClass("f-topbar-fixed")&&(e-=i.data("height")),i.data("stickyoffset",e),o.addClass("fixed")):(e=o.offset().top,i.data("stickyoffset",e)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(e){var n=this,i=e.data(this.attr_name(!0)+"-init"),r=n.S("section, .top-bar-section",e);r.detach(),n.S(".has-dropdown>a",r).each(function(){var e,r=n.S(this),o=r.siblings(".dropdown"),s=r.attr("href");o.find(".title.back").length||(e=t(1==i.mobile_show_parent_link&&s?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="'+s+'">'+r.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==i.custom_back_text?t("h5>a",e).html(i.back_text):t("h5>a",e).html("&laquo; "+r.html()),o.prepend(e))}),r.appendTo(e),this.sticky(),this.assembled(e)},assembled:function(e){e.data(this.attr_name(!0),t.extend({},e.data(this.attr_name(!0)),{assembled:!0}))},height:function(e){var n=0,i=this;return t("> li",e).each(function(){n+=i.S(this).outerHeight(!0)}),n},sticky:function(){var t=this;this.S(e).on("scroll",function(){t.update_sticky_positioning()})},update_sticky_positioning:function(){var t="."+this.settings.sticky_class,n=this.S(e),i=this;if(i.settings.sticky_topbar&&i.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var r=this.settings.sticky_topbar.data("stickyoffset");i.S(t).hasClass("expanded")||(n.scrollTop()>r?i.S(t).hasClass("fixed")||(i.S(t).addClass("fixed"),i.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=r&&i.S(t).hasClass("fixed")&&(i.S(t).removeClass("fixed"),i.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(e).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);