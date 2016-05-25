!function(e,t,n,i){"use strict";Foundation.libs.tab={name:"tab",version:"5.4.7",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,n){var i=this,r=this.S;this.bindings(t,n),this.handle_location_hash_change(),r("["+this.attr_name()+"] > .active > a",this.scope).each(function(){i.default_tab_hashes.push(this.hash)})},events:function(){var e=this,n=this.S,i=function(t){var i=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");(!i.is_hover||Modernizr.touch)&&(t.preventDefault(),t.stopPropagation(),e.toggle_active_tab(n(this).parent()))};n(this.scope).off(".tab").on("focus.fndtn.tab","["+this.attr_name()+"] > * > a",i).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",i).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var i=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");i.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+this.attr_name()+"]",this.scope).each(function(){var r=n(this).data(t.attr_name(!0)+"-init");if(r.deep_linking){var o;if(o=r.scroll_to_content?t.scope.location.hash:t.scope.location.hash.replace("fndtn-",""),""!=o){var a=n(o);if(a.hasClass("content")&&a.parent().hasClass("tabs-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+o+"]").parent());else{var s=a.closest(".content").attr("id");s!=i&&t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href=#"+s+"]").parent(),o)}}else for(var c=0;c<t.default_tab_hashes.length;c++)t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[c]+"]").parent())}})},toggle_active_tab:function(r,o){var a=this.S,s=r.closest("["+this.attr_name()+"]"),c=r.find("a"),u=r.children("a").first(),l="#"+u.attr("href").split("#")[1],d=a(l),f=r.siblings(),p=s.data(this.attr_name(!0)+"-init"),h=function(t){var i,r=e(this),o=e(this).parents("li").prev().children('[role="tab"]'),a=e(this).parents("li").next().children('[role="tab"]');switch(t.keyCode){case 37:i=o;break;case 39:i=a;break;default:i=!1}i.length&&(r.attr({tabindex:"-1","aria-selected":null}),i.attr({tabindex:"0","aria-selected":!0}).focus()),e('[role="tabpanel"]').attr("aria-hidden","true"),e("#"+e(n.activeElement).attr("href").substring(1)).attr("aria-hidden",null)};a(this).data(this.data_attr("tab-content"))&&(l="#"+a(this).data(this.data_attr("tab-content")).split("#")[1],d=a(l)),p.deep_linking&&(p.scroll_to_content?(t.location.hash=o||l,o==i||o==l?r.parent()[0].scrollIntoView():a(l)[0].scrollIntoView()):o!=i?t.location.hash="fndtn-"+o.replace("#",""):t.location.hash="fndtn-"+l.replace("#","")),r.addClass(p.active_class).triggerHandler("opened"),c.attr({"aria-selected":"true",tabindex:0}),f.removeClass(p.active_class),f.find("a").attr({"aria-selected":"false",tabindex:-1}),d.siblings().removeClass(p.active_class).attr({"aria-hidden":"true",tabindex:-1}),d.addClass(p.active_class).attr("aria-hidden","false").removeAttr("tabindex"),p.callback(r),d.triggerHandler("toggled",[r]),s.triggerHandler("toggled",[d]),c.off("keydown").on("keydown",h)},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document);