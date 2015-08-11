
/*
	* WOW - v1.0.1 - 2014-08-15
	* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT 
*/

(function ($) {

    (function () { var a, b, c, d = function (a, b) { return function () { return a.apply(b, arguments) } }, e = [].indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b; return -1 }; b = function () { function a() { } return a.prototype.extend = function (a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function (a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function () { function a() { this.keys = [], this.values = [] } return a.prototype.get = function (a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function (a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b); return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () { function a() { console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return a.notSupported = !0, a.prototype.observe = function () { }, a }()), this.WOW = function () { function f(a) { null == a && (a = {}), this.scrollCallback = d(this.scrollCallback, this), this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c } return f.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0 }, f.prototype.init = function () { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = [] }, f.prototype.start = function () { var b, c, d, e; if (this.stopped = !1, this.boxes = function () { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function () { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else { for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0); window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50) } return this.config.live ? new a(function (a) { return function (b) { var c, d, e, f, g; for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function () { var a, b, e, f; for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c)); return f }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, f.prototype.stop = function () { return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0 }, f.prototype.sync = function () { return a.notSupported ? this.doSync(this.element) : void 0 }, f.prototype.doSync = function (a) { var b, c, d, f, g; if (!this.stopped) { if (null == a && (a = this.element), 1 !== a.nodeType) return; for (a = a.parentNode || a, f = a.querySelectorAll("." + this.config.boxClass), g = [], c = 0, d = f.length; d > c; c++) b = f[c], e.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b), this.all.push(b), g.push(this.scrolled = !0)) : g.push(void 0); return g } }, f.prototype.show = function (a) { return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass }, f.prototype.applyStyle = function (a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) { return function () { return f.customStyle(a, b, d, c, e) } }(this)) }, f.prototype.animate = function () { return "requestAnimationFrame" in window ? function (a) { return window.requestAnimationFrame(a) } : function (a) { return a() } }(), f.prototype.resetStyle = function () { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;")); return e }, f.prototype.customStyle = function (a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet = function (a, b) { var c, d, e, f; f = []; for (c in b) d = b[c], a["" + c] = d, f.push(function () { var b, f, g, h; for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d); return h }.call(this)); return f }, f.prototype.vendorCSS = function (a, b) { var c, d, e, f, g, h; for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b); return c }, f.prototype.animationName = function (a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = window.getComputedStyle(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, f.prototype.cacheAnimationName = function (a) { return this.animationNameCache.set(a, this.animationName(a)) }, f.prototype.cachedAnimationName = function (a) { return this.animationNameCache.get(a) }, f.prototype.scrollHandler = function () { return this.scrolled = !0 }, f.prototype.scrollCallback = function () { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function () { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, f.prototype.offsetTop = function (a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, f.prototype.isVisible = function (a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, innerHeight) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, f.prototype.util = function () { return null != this._util ? this._util : this._util = new b }, f.prototype.disabled = function () { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, f }() }).call(this);

}(jQuery));

/*
	*jQuery OwlCarousel v1.27
	*Copyright (c) 2013 Bartosz Wojciechowski
	*http://www.owlgraphic.com/owlcarousel
	*Licensed under MIT
*/

(function ($) {

    eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('7(F 3v.2K!=="9"){3v.2K=9(e){9 t(){}t.5C=e;q 5B t}}(9(e,t,n,r){b i={1K:9(t,n){b r=c;r.6=e.3F({},e.3g.28.6,t);r.27=t;b i=n;b s=e(n);r.$k=s;r.3G()},3G:9(){b t=c;7(F t.6.2Y==="9"){t.6.2Y.U(c,[t.$k])}7(F t.6.38==="3a"){b n=t.6.38;9 r(e){7(F t.6.3d==="9"){t.6.3d.U(c,[e])}p{b n="";1Z(b r 3x e["h"]){n+=e["h"][r]["1W"]}t.$k.29(n)}t.2R()}e.5w(n,r)}p{t.2R()}},2R:9(e){b t=c;t.$k.A({23:0});t.2n=t.6.v;t.3M();t.5p=0;t.21;t.1L()},1L:9(){b e=c;7(e.$k.1Q().14===0){q d}e.1M();e.3T();e.$V=e.$k.1Q();e.J=e.$V.14;e.3Z();e.$L=e.$k.Z(".h-1W");e.$H=e.$k.Z(".h-1g");e.3e="R";e.1i=0;e.m=0;e.40();e.42()},42:9(){b e=c;e.2H();e.2I();e.4c();e.2L();e.4e();e.4f();e.22();e.4l();7(e.6.2j!==d){e.4o(e.6.2j)}7(e.6.N===j){e.6.N=4I}e.1b();e.$k.Z(".h-1g").A("4D","4E");7(!e.$k.2x(":32")){e.37()}p{e.$k.A("23",1)}e.5j=d;e.2l();7(F e.6.3b==="9"){e.6.3b.U(c,[e.$k])}},2l:9(){b e=c;7(e.6.1J===j){e.1J()}7(e.6.1q===j){e.1q()}7(e.6.2g===j){e.2g()}7(F e.6.3i==="9"){e.6.3i.U(c,[e.$k])}},3j:9(){b e=c;7(F e.6.3l==="9"){e.6.3l.U(c,[e.$k])}e.37();e.2H();e.2I();e.4C();e.2L();e.2l();7(F e.6.3o==="9"){e.6.3o.U(c,[e.$k])}},4B:9(e){b t=c;19(9(){t.3j()},0)},37:9(){b e=c;7(e.$k.2x(":32")===d){e.$k.A({23:0});1a(e.1u);1a(e.21)}p{q d}e.21=4z(9(){7(e.$k.2x(":32")){e.4B();e.$k.4y({23:1},2E);1a(e.21)}},4J)},3Z:9(){b e=c;e.$V.4U(\'<M K="h-1g">\').4u(\'<M K="h-1W"></M>\');e.$k.Z(".h-1g").4u(\'<M K="h-1g-4t">\');e.1D=e.$k.Z(".h-1g-4t");e.$k.A("4D","4E")},1M:9(){b e=c;b t=e.$k.1H(e.6.1M);b n=e.$k.1H(e.6.24);e.$k.w("h-4s",e.$k.2c("2d")).w("h-4r",e.$k.2c("K"));7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.24)}},2H:9(){b t=c;7(t.6.2V===d){q d}7(t.6.4q===j){t.6.v=t.2n=1;t.6.1v=d;t.6.1I=d;t.6.1X=d;t.6.1A=d;t.6.1E=d;q d}b n=e(t.6.4p).1h();7(n>(t.6.1v[0]||t.2n)){t.6.v=t.2n}7(n<=t.6.1v[0]&&t.6.1v!==d){t.6.v=t.6.1v[1]}7(n<=t.6.1I[0]&&t.6.1I!==d){t.6.v=t.6.1I[1]}7(n<=t.6.1X[0]&&t.6.1X!==d){t.6.v=t.6.1X[1]}7(n<=t.6.1A[0]&&t.6.1A!==d){t.6.v=t.6.1A[1]}7(n<=t.6.1E[0]&&t.6.1E!==d){t.6.v=t.6.1E[1]}7(t.6.v>t.J){t.6.v=t.J}},4e:9(){b n=c,r;7(n.6.2V!==j){q d}b i=e(t).1h();n.33=9(){7(e(t).1h()!==i){7(n.6.N!==d){1a(n.1u)}4V(r);r=19(9(){i=e(t).1h();n.3j()},n.6.4n)}};e(t).4m(n.33)},4C:9(){b e=c;7(e.B.1j===j){7(e.D[e.m]>e.2a){e.1k(e.D[e.m])}p{e.1k(0);e.m=0}}p{7(e.D[e.m]>e.2a){e.16(e.D[e.m])}p{e.16(0);e.m=0}}7(e.6.N!==d){e.3f()}},4i:9(){b t=c;b n=0;b r=t.J-t.6.v;t.$L.2h(9(i){b s=e(c);s.A({1h:t.P}).w("h-1W",3k(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-2y",n)})},4h:9(){b e=c;b t=0;b t=e.$L.14*e.P;e.$H.A({1h:t*2,X:0});e.4i()},2I:9(){b e=c;e.4g();e.4h();e.4b();e.3t()},4g:9(){b e=c;e.P=1P.57(e.$k.1h()/e.6.v)},3t:9(){b e=c;e.E=e.J-e.6.v;b t=e.J*e.P-e.6.v*e.P;t=t*-1;e.2a=t;q t},47:9(){q 0},4b:9(){b e=c;e.D=[0];b t=0;1Z(b n=0;n<e.J;n++){t+=e.P;e.D.58(-t)}},4c:9(){b t=c;7(t.6.25===j||t.6.1t===j){t.G=e(\'<M K="h-59"/>\').5a("5b",!t.B.Y).5d(t.$k)}7(t.6.1t===j){t.3V()}7(t.6.25===j){t.3R()}},3R:9(){b t=c;b n=e(\'<M K="h-5l"/>\');t.G.1e(n);t.1s=e("<M/>",{"K":"h-1o",29:t.6.2P[0]||""});t.1z=e("<M/>",{"K":"h-R",29:t.6.2P[1]||""});n.1e(t.1s).1e(t.1z);n.z("2s.G 2u.G",\'M[K^="h"]\',9(n){n.1r();7(e(c).1H("h-R")){t.R()}p{t.1o()}})},3V:9(){b t=c;t.1p=e(\'<M K="h-1t"/>\');t.G.1e(t.1p);t.1p.z("2s.G 2u.G",".h-1n",9(n){n.1r();7(3k(e(c).w("h-1n"))!==t.m){t.1m(3k(e(c).w("h-1n")),j)}})},3J:9(){b t=c;7(t.6.1t===d){q d}t.1p.29("");b n=0;b r=t.J-t.J%t.6.v;1Z(b i=0;i<t.J;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.J-t.6.v}b o=e("<M/>",{"K":"h-1n"});b u=e("<3H></3H>",{5x:t.6.31===j?n:"","K":t.6.31===j?"h-5y":""});o.1e(u);o.w("h-1n",r===i?s:i);o.w("h-2y",n);t.1p.1e(o)}}t.2O()},2O:9(){b t=c;7(t.6.1t===d){q d}t.1p.Z(".h-1n").2h(9(n,r){7(e(c).w("h-2y")===e(t.$L[t.m]).w("h-2y")){t.1p.Z(".h-1n").S("2e");e(c).I("2e")}})},36:9(){b e=c;7(e.6.25===d){q d}7(e.6.2f===d){7(e.m===0&&e.E===0){e.1s.I("15");e.1z.I("15")}p 7(e.m===0&&e.E!==0){e.1s.I("15");e.1z.S("15")}p 7(e.m===e.E){e.1s.S("15");e.1z.I("15")}p 7(e.m!==0&&e.m!==e.E){e.1s.S("15");e.1z.S("15")}}},2L:9(){b e=c;e.3J();e.36();7(e.G){7(e.6.v===e.J){e.G.3E()}p{e.G.3B()}}},5A:9(){b e=c;7(e.G){e.G.3c()}},R:9(e){b t=c;7(t.1S){q d}t.1T=t.m;t.m+=t.6.1U===j?t.6.v:1;7(t.m>t.E+(t.6.1U==j?t.6.v-1:0)){7(t.6.2f===j){t.m=0;e="2m"}p{t.m=t.E;q d}}t.1m(t.m,e)},1o:9(e){b t=c;7(t.1S){q d}t.1T=t.m;7(t.6.1U===j&&t.m>0&&t.m<t.6.v){t.m=0}p{t.m-=t.6.1U===j?t.6.v:1}7(t.m<0){7(t.6.2f===j){t.m=t.E;e="2m"}p{t.m=0;q d}}t.1m(t.m,e)},1m:9(e,t,n){b r=c;7(r.1S){q d}r.3h();7(F r.6.1V==="9"){r.6.1V.U(c,[r.$k])}7(e>=r.E){e=r.E}p 7(e<=0){e=0}r.m=r.h.m=e;7(r.6.2j!==d&&n!=="4w"&&r.6.v===1&&r.B.1j===j){r.1x(0);7(r.B.1j===j){r.1k(r.D[e])}p{r.16(r.D[e],1)}r.3z();r.2q();q d}b i=r.D[e];7(r.B.1j===j){r.1Y=d;7(t===j){r.1x("1y");19(9(){r.1Y=j},r.6.1y)}p 7(t==="2m"){r.1x(r.6.2t);19(9(){r.1Y=j},r.6.2t)}p{r.1x("1f");19(9(){r.1Y=j},r.6.1f)}r.1k(i)}p{7(t===j){r.16(i,r.6.1y)}p 7(t==="2m"){r.16(i,r.6.2t)}p{r.16(i,r.6.1f)}}r.2q()},3h:9(){b e=c;e.1i=e.h.1i=e.1T===r?e.m:e.1T;e.1T=r},3r:9(e){b t=c;t.3h();7(F t.6.1V==="9"){t.6.1V.U(c,[t.$k])}7(e>=t.E||e===-1){e=t.E}p 7(e<=0){e=0}t.1x(0);7(t.B.1j===j){t.1k(t.D[e])}p{t.16(t.D[e],1)}t.m=t.h.m=e;t.2q()},2q:9(){b e=c;e.2O();e.36();e.2l();7(F e.6.3s==="9"){e.6.3s.U(c,[e.$k])}7(e.6.N!==d){e.3f()}},W:9(){b e=c;e.3u="W";1a(e.1u)},3f:9(){b e=c;7(e.3u!=="W"){e.1b()}},1b:9(){b e=c;e.3u="1b";7(e.6.N===d){q d}1a(e.1u);e.1u=4z(9(){e.R(j)},e.6.N)},1x:9(e){b t=c;7(e==="1f"){t.$H.A(t.2w(t.6.1f))}p 7(e==="1y"){t.$H.A(t.2w(t.6.1y))}p 7(F e!=="3a"){t.$H.A(t.2w(e))}},2w:9(e){b t=c;q{"-1G-1d":"2p "+e+"1w 2i","-1R-1d":"2p "+e+"1w 2i","-o-1d":"2p "+e+"1w 2i",1d:"2p "+e+"1w 2i"}},3C:9(){q{"-1G-1d":"","-1R-1d":"","-o-1d":"",1d:""}},3D:9(e){q{"-1G-O":"1l("+e+"T, C, C)","-1R-O":"1l("+e+"T, C, C)","-o-O":"1l("+e+"T, C, C)","-1w-O":"1l("+e+"T, C, C)",O:"1l("+e+"T, C,C)"}},1k:9(e){b t=c;t.$H.A(t.3D(e))},3I:9(e){b t=c;t.$H.A({X:e})},16:9(e,t){b n=c;n.26=d;n.$H.W(j,j).4y({X:e},{5r:t||n.6.1f,3L:9(){n.26=j}})},3M:9(){b e=c;b r="1l(C, C, C)",i=n.5q("M");i.2d.3N="  -1R-O:"+r+"; -1w-O:"+r+"; -o-O:"+r+"; -1G-O:"+r+"; O:"+r;b s=/1l\\(C, C, C\\)/g,o=i.2d.3N.5n(s),u=o!==18&&o.14===1;b a="4F"3x t||5h.5e;e.B={1j:u,Y:a}},4f:9(){b e=c;7(e.6.1C!==d||e.6.1B!==d){e.3X();e.3Y()}},3T:9(){b e=c;b t=["s","e","x"];e.13={};7(e.6.1C===j&&e.6.1B===j){t=["41.h 2b.h","2A.h 44.h","2s.h 45.h 2u.h"]}p 7(e.6.1C===d&&e.6.1B===j){t=["41.h","2A.h","2s.h 45.h"]}p 7(e.6.1C===j&&e.6.1B===d){t=["2b.h","44.h","2u.h"]}e.13["46"]=t[0];e.13["2z"]=t[1];e.13["3w"]=t[2]},3Y:9(){b t=c;t.$k.z("55.h",9(e){e.1r()});t.$k.z("2b.4a",9(t){q e(t.1c).2x("54, 52, 51, 4Y")})},3X:9(){9 o(e){7(e.3p){q{x:e.3p[0].3m,y:e.3p[0].4j}}p{7(e.3m!==r){q{x:e.3m,y:e.4j}}p{q{x:e.4X,y:e.4W}}}}9 u(t){7(t==="z"){e(n).z(i.13["2z"],f);e(n).z(i.13["3w"],l)}p 7(t==="Q"){e(n).Q(i.13["2z"]);e(n).Q(i.13["3w"])}}9 a(n){b n=n.35||n||t.34;7(i.26===d&&!i.6.30){q d}7(i.1Y===d&&!i.6.30){q d}7(i.6.N!==d){1a(i.1u)}7(i.B.Y!==j&&!i.$H.1H("2W")){i.$H.I("2W")}i.11=0;i.12=0;e(c).A(i.3C());b r=e(c).2k();s.2J=r.X;s.2G=o(n).x-r.X;s.2F=o(n).y-r.4H;u("z");s.2o=d;s.2C=n.1c||n.4A}9 f(r){b r=r.35||r||t.34;i.11=o(r).x-s.2G;i.3q=o(r).y-s.2F;i.12=i.11-s.2J;7(F i.6.3n==="9"&&s.39!==j&&i.12!==0){s.39=j;i.6.3n.U(c)}7(i.12>8||i.12<-8&&i.B.Y===j){r.1r?r.1r():r.4G=d;s.2o=j}7((i.3q>10||i.3q<-10)&&s.2o===d){e(n).Q("2A.h")}b u=9(){q i.12/5};b a=9(){q i.2a+i.12/5};i.11=1P.3t(1P.47(i.11,u()),a());7(i.B.1j===j){i.1k(i.11)}p{i.3I(i.11)}}9 l(n){b n=n.35||n||t.34;n.1c=n.1c||n.4A;s.39=d;7(i.B.Y!==j){i.$H.S("2W")}7(i.12!==0){b r=i.4x();i.1m(r,d,"4w");7(s.2C===n.1c&&i.B.Y!==j){e(n.1c).z("2X.3y",9(t){t.4K();t.4L();t.1r();e(n.1c).Q("2X.3y")});b o=e.4M(n.1c,"4N")["2X"];b a=o.4O();o.4P(0,0,a)}}u("Q")}b i=c;b s={2G:0,2F:0,4Q:0,2J:0,2k:18,4R:18,4S:18,2o:18,4T:18,2C:18};i.26=j;i.$k.z(i.13["46"],".h-1g",a)},4x:9(){b e=c,t;b t=e.4v();7(t>e.E){e.m=e.E;t=e.E}p 7(e.11>=0){t=0;e.m=0}q t},4v:9(){b t=c;b n=t.D;b r=t.11;b i=18;e.2h(n,9(e,s){7(r-t.P/20>n[e+1]&&r-t.P/20<s&&t.2Q()==="X"){i=s;t.m=e}p 7(r+t.P/20<s&&r+t.P/20>n[e+1]&&t.2Q()==="4k"){i=n[e+1];t.m=e+1}});q t.m},2Q:9(){b e=c,t;7(e.12<0){t="4k";e.3e="R"}p{t="X";e.3e="1o"}q t},40:9(){b e=c;e.$k.z("h.R",9(){e.R()});e.$k.z("h.1o",9(){e.1o()});e.$k.z("h.1b",9(t,n){e.6.N=n;e.1b();e.2N="1b"});e.$k.z("h.W",9(){e.W();e.2N="W"});e.$k.z("h.1m",9(t,n){e.1m(n)});e.$k.z("h.3r",9(t,n){e.3r(n)})},22:9(){b e=c;7(e.6.22===j&&e.B.Y!==j&&e.6.N!==d){e.$k.z("4Z",9(){e.W()});e.$k.z("50",9(){7(e.2N!=="W"){e.1b()}})}},1J:9(){b t=c;7(t.6.1J===d){q d}1Z(b n=0;n<t.J;n++){b i=e(t.$L[n]);7(i.w("h-17")==="17"){4d}b s=i.w("h-1W"),o=i.Z(".53"),u;7(F o.w("2r")!=="3a"){i.w("h-17","17");4d}7(i.w("h-17")===r){o.3E();i.I("49").w("h-17","56")}7(t.6.48===j){u=s>=t.m}p{u=j}7(u&&s<t.m+t.6.v&&o.14){t.43(i,o)}}},43:9(e,t){9 i(){r+=1;7(n.2D(t.2B(0))){s()}p 7(r<=2v){19(i,2v)}p{s()}}9 s(){e.w("h-17","17").S("49");t.5c("w-2r");n.6.3W==="3U"?t.5f(5g):t.3B()}b n=c,r=0;t[0].2r=t.w("2r");i()},1q:9(){9 s(){i+=1;7(t.2D(n.2B(0))){o()}p 7(i<=2v){19(s,2v)}p{t.1D.A("2S","")}}9 o(){b n=e(t.$L[t.m]).2S();t.1D.A("2S",n+"T");7(!t.1D.1H("1q")){19(9(){t.1D.I("1q")},0)}}b t=c;b n=e(t.$L[t.m]).Z("5i");7(n.2B(0)!==r){b i=0;s()}p{o()}},2D:9(e){7(!e.3L){q d}7(F e.3S!=="5k"&&e.3S==0){q d}q j},2g:9(){b t=c;t.$L.S("2e");1Z(b n=t.m;n<t.m+t.6.v;n++){e(t.$L[n]).I("2e")}},4o:9(e){b t=c;t.3Q="h-"+e+"-5m";t.3P="h-"+e+"-3x"},3z:9(){9 u(e,t){q{2k:"5o",X:e+"T"}}b e=c;e.1S=j;b t=e.3Q,n=e.3P,r=e.$L.1O(e.m),i=e.$L.1O(e.1i),s=1P.3O(e.D[e.m])+e.D[e.1i],o=1P.3O(e.D[e.m])+e.P/2;e.$H.I("h-1F").A({"-1G-O-1F":o+"T","-1R-3K-1F":o+"T","3K-1F":o+"T"});b a="5s 5t 5u 5v";i.A(u(s,10)).I(t).z(a,9(){e.2T=j;i.Q(a);e.2U(i,t)});r.I(n).z(a,9(){e.2Z=j;r.Q(a);e.2U(r,n)})},2U:9(e,t){b n=c;e.A({2k:"",X:""}).S(t);7(n.2T&&n.2Z){n.$H.S("h-1F");n.2T=d;n.2Z=d;n.1S=d}},4l:9(){b e=c;e.h={27:e.27,5z:e.$k,V:e.$V,L:e.$L,m:e.m,1i:e.1i,Y:e.B.Y,B:e.B}},3A:9(){b r=c;r.$k.Q(".h h 2b.4a");e(n).Q(".h h");e(t).Q("4m",r.33)},1N:9(){b e=c;7(e.$k.1Q().14!==0){e.$H.2M();e.$V.2M().2M();7(e.G){e.G.3c()}}e.3A();e.$k.2c("2d",e.$k.w("h-4s")||"").2c("K",e.$k.w("h-4r"))},5D:9(){b e=c;e.W();1a(e.21);e.1N();e.$k.5E()},5F:9(t){b n=c;b r=e.3F({},n.27,t);n.1N();n.1K(r,n.$k)},5G:9(e,t){b n=c,i;7(!e){q d}7(n.$k.1Q().14===0){n.$k.1e(e);n.1L();q d}n.1N();7(t===r||t===-1){i=-1}p{i=t}7(i>=n.$V.14||i===-1){n.$V.1O(-1).5H(e)}p{n.$V.1O(i).5I(e)}n.1L()},5J:9(e){b t=c,n;7(t.$k.1Q().14===0){q d}7(e===r||e===-1){n=-1}p{n=e}t.1N();t.$V.1O(n).3c();t.1L()}};e.3g.28=9(t){q c.2h(9(){7(e(c).w("h-1K")===j){q d}e(c).w("h-1K",j);b n=3v.2K(i);n.1K(t,c);e.w(c,"28",n)})};e.3g.28.6={v:5,1v:[5K,4],1I:[5L,3],1X:[5M,2],1A:d,1E:[5N,1],4q:d,1f:2E,1y:5O,2t:5P,N:d,22:d,25:d,2P:["1o","R"],2f:j,1U:d,1t:j,31:d,2V:j,4n:2E,4p:t,1M:"h-5Q",24:"h-24",1J:d,48:j,3W:"3U",1q:d,38:d,3d:d,30:j,1C:j,1B:j,2g:d,2j:d,3l:d,3o:d,2Y:d,3b:d,1V:d,3s:d,3i:d,3n:d}})(5R,5S,5T)', 62, 366, '||||||options|if||function||var|this|false||||owl||true|elem||currentItem|||else|return|||||items|data|||on|css|browser|0px|positionsInArray|maximumItem|typeof|owlControls|owlWrapper|addClass|itemsAmount|class|owlItems|div|autoPlay|transform|itemWidth|off|next|removeClass|px|apply|userItems|stop|left|isTouch|find||newPosX|newRelativeX|ev_types|length|disabled|css2slide|loaded|null|setTimeout|clearInterval|play|target|transition|append|slideSpeed|wrapper|width|prevItem|support3d|transition3d|translate3d|goTo|page|prev|paginationWrapper|autoHeight|preventDefault|buttonPrev|pagination|autoPlayInterval|itemsDesktop|ms|swapSpeed|paginationSpeed|buttonNext|itemsTabletSmall|touchDrag|mouseDrag|wrapperOuter|itemsMobile|origin|webkit|hasClass|itemsDesktopSmall|lazyLoad|init|setVars|baseClass|unWrap|eq|Math|children|moz|isTransition|storePrevItem|scrollPerPage|beforeMove|item|itemsTablet|isCss3Finish|for||checkVisible|stopOnHover|opacity|theme|navigation|isCssFinish|userOptions|owlCarousel|html|maximumPixels|mousedown|attr|style|active|rewindNav|addClassActive|each|ease|transitionStyle|position|eachMoveUpdate|rewind|orignalItems|sliding|all|afterGo|src|touchend|rewindSpeed|mouseup|100|addCssSpeed|is|roundPages|move|touchmove|get|targetElement|completeImg|200|offsetY|offsetX|updateItems|calculateAll|relativePos|create|updateControls|unwrap|hoverStatus|checkPagination|navigationText|moveDirection|logIn|height|endPrev|clearTransStyle|responsive|grabbing|click|beforeInit|endCurrent|dragBeforeAnimFinish|paginationNumbers|visible|resizer|event|originalEvent|checkNavigation|watchVisibility|jsonPath|dragging|string|afterInit|remove|jsonSuccess|playDirection|checkAp|fn|getPrevItem|afterAction|updateVars|Number|beforeUpdate|pageX|startDragging|afterUpdate|touches|newPosY|jumpTo|afterMove|max|apStatus|Object|end|in|disable|singleItemTransition|clearEvents|show|removeTransition|doTranslate|hide|extend|loadContent|span|css2move|updatePagination|perspective|complete|checkBrowser|cssText|abs|inClass|outClass|buildButtons|naturalWidth|eventTypes|fade|buildPagination|lazyEffect|gestures|disabledEvents|wrapItems|customEvents|touchstart|onStartup|lazyPreload|mousemove|touchcancel|start|min|lazyFollow|loading|disableTextSelect|loops|buildControls|continue|response|moveEvents|calculateWidth|appendWrapperSizes|appendItemsSizes|pageY|right|owlStatus|resize|responsiveRefreshRate|transitionTypes|responsiveBaseWidth|singleItem|originalClasses|originalStyles|outer|wrap|improveClosest|drag|getNewPosition|animate|setInterval|srcElement|reload|updatePosition|display|block|ontouchstart|returnValue|top|5e3|500|stopImmediatePropagation|stopPropagation|_data|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|wrapAll|clearTimeout|clientY|clientX|option|mouseover|mouseout|select|textarea|lazyOwl|input|dragstart|checked|round|push|controls|toggleClass|clickable|removeAttr|appendTo|msMaxTouchPoints|fadeIn|400|navigator|img|onstartup|undefined|buttons|out|match|relative|wrapperWidth|createElement|duration|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|text|numbers|baseElement|destroyControls|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'), 0, {}))

}(jQuery));


/*
	*@author       Constantin Saguin - @brutaldesign
	*@link            http://bsign.co
	*@github        http://github.com/brutaldesign/swipebox
	*@version     1.1.2
	*@license      MIT License
*/


(function ($) {

    (function (e, t, n, r) {
        n.swipebox = function (i, s) {
            var o = {
                useCSS: true,
                hideBarsDelay: 3e3
            },
                u = this,
                a = n(i),
                i = i,
                f = i.selector,
                l = n(f),
                c = t.createTouch !== r || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints,
                h = !!e.SVGSVGElement,
                p = '<div id="swipebox-overlay">					<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>					<div id="swipebox-action">						<a id="swipebox-close"></a>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>					</div>			</div>';
            u.settings = {};
            u.init = function () {
                u.settings = n.extend({}, o, s);
                l.click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    index = a.index(n(this));
                    d.target = n(e.target);
                    d.init(index)
                })
            };
            var d = {
                init: function (e) {
                    this.target.trigger("swipebox-start");
                    this.build();
                    this.openSlide(e);
                    this.openImg(e);
                    this.preloadImg(e + 1);
                    this.preloadImg(e - 1)
                },
                build: function () {
                    var t = this;
                    n("body").append(p);
                    if (t.doCssTrans()) {
                        n("#swipebox-slider").css({
                            "-webkit-transition": "left 0.4s ease",
                            "-moz-transition": "left 0.4s ease",
                            "-o-transition": "left 0.4s ease",
                            "-khtml-transition": "left 0.4s ease",
                            transition: "left 0.4s ease"
                        });
                        n("#swipebox-overlay").css({
                            "-webkit-transition": "opacity 1s ease",
                            "-moz-transition": "opacity 1s ease",
                            "-o-transition": "opacity 1s ease",
                            "-khtml-transition": "opacity 1s ease",
                            transition: "opacity 1s ease"
                        });
                        n("#swipebox-action, #swipebox-caption").css({
                            "-webkit-transition": "0.5s",
                            "-moz-transition": "0.5s",
                            "-o-transition": "0.5s",
                            "-khtml-transition": "0.5s",
                            transition: "0.5s"
                        })
                    }
                    if (h) {
                        var r = n("#swipebox-action #swipebox-close").css("background-image");
                        r = r.replace("png", "svg");
                        n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({
                            "background-image": r
                        })
                    }
                    a.each(function () {
                        n("#swipebox-slider").append('<div class="slide"></div>')
                    });
                    t.setDim();
                    t.actions();
                    t.keyboard();
                    t.gesture();
                    t.animBars();
                    n(e).resize(function () {
                        t.setDim()
                    }).resize()
                },
                setDim: function () {
                    var t = {
                        width: n(e).width(),
                        height: e.innerHeight ? e.innerHeight : n(e).height()
                    };
                    n("#swipebox-overlay").css(t)
                },
                supportTransition: function () {
                    var e = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");
                    for (var n = 0; n < e.length; n++) {
                        if (t.createElement("div").style[e[n]] !== r) {
                            return e[n]
                        }
                    }
                    return false
                },
                doCssTrans: function () {
                    if (u.settings.useCSS && this.supportTransition()) {
                        return true
                    }
                },
                gesture: function () {
                    if (c) {
                        var e = this,
                            t = null,
                            r = 10,
                            i = {},
                            s = {};
                        var o = n("#swipebox-caption, #swipebox-action");
                        o.addClass("visible-bars");
                        e.setTimeout();
                        n("body").bind("touchstart", function (e) {
                            n(this).addClass("touching");
                            s = e.originalEvent.targetTouches[0];
                            i.pageX = e.originalEvent.targetTouches[0].pageX;
                            n(".touching").bind("touchmove", function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                s = e.originalEvent.targetTouches[0]
                            });
                            return false
                        }).bind("touchend", function (u) {
                            u.preventDefault();
                            u.stopPropagation();
                            t = s.pageX - i.pageX;
                            if (t >= r) {
                                e.getPrev()
                            } else if (t <= -r) {
                                e.getNext()
                            } else {
                                if (!o.hasClass("visible-bars")) {
                                    e.showBars();
                                    e.setTimeout()
                                } else {
                                    e.clearTimeout();
                                    e.hideBars()
                                }
                            }
                            n(".touching").off("touchmove").removeClass("touching")
                        })
                    }
                },
                setTimeout: function () {
                    if (u.settings.hideBarsDelay > 0) {
                        var t = this;
                        t.clearTimeout();
                        t.timeout = e.setTimeout(function () {
                            t.hideBars()
                        }, u.settings.hideBarsDelay)
                    }
                },
                clearTimeout: function () {
                    e.clearTimeout(this.timeout);
                    this.timeout = null
                },
                showBars: function () {
                    var e = n("#swipebox-caption, #swipebox-action");
                    if (this.doCssTrans()) {
                        e.addClass("visible-bars")
                    } else {
                        n("#swipebox-caption").animate({
                            top: 0
                        }, 500);
                        n("#swipebox-action").animate({
                            bottom: 0
                        }, 500);
                        setTimeout(function () {
                            e.addClass("visible-bars")
                        }, 1e3)
                    }
                },
                hideBars: function () {
                    var e = n("#swipebox-caption, #swipebox-action");
                    if (this.doCssTrans()) {
                        e.removeClass("visible-bars")
                    } else {
                        n("#swipebox-caption").animate({
                            top: "-50px"
                        }, 500);
                        n("#swipebox-action").animate({
                            bottom: "-50px"
                        }, 500);
                        setTimeout(function () {
                            e.removeClass("visible-bars")
                        }, 1e3)
                    }
                },
                animBars: function () {
                    var e = this;
                    var t = n("#swipebox-caption, #swipebox-action");
                    t.addClass("visible-bars");
                    e.setTimeout();
                    n("#swipebox-slider").click(function (n) {
                        if (!t.hasClass("visible-bars")) {
                            e.showBars();
                            e.setTimeout()
                        }
                    });
                    n("#swipebox-action").hover(function () {
                        e.showBars();
                        t.addClass("force-visible-bars");
                        e.clearTimeout()
                    }, function () {
                        t.removeClass("force-visible-bars");
                        e.setTimeout()
                    })
                },
                keyboard: function () {
                    var t = this;
                    n(e).bind("keyup", function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (e.keyCode == 37) {
                            t.getPrev()
                        } else if (e.keyCode == 39) {
                            t.getNext()
                        } else if (e.keyCode == 27) {
                            t.closeSlide()
                        }
                    })
                },
                actions: function () {
                    var e = this;
                    if (a.length < 2) {
                        n("#swipebox-prev, #swipebox-next").hide()
                    } else {
                        n("#swipebox-prev").bind("click touchend", function (t) {
                            t.preventDefault();
                            t.stopPropagation();
                            e.getPrev();
                            e.setTimeout()
                        });
                        n("#swipebox-next").bind("click touchend", function (t) {
                            t.preventDefault();
                            t.stopPropagation();
                            e.getNext();
                            e.setTimeout()
                        })
                    }
                    n("#swipebox-close").bind("click touchend", function (t) {
                        e.closeSlide()
                        $('.gallery').delay(01).show(0);
                        $('.portfolio-wide').delay(01).show(0);
                    })
                },
                setSlide: function (e, t) {
                    t = t || false;
                    var r = n("#swipebox-slider");
                    if (this.doCssTrans()) {
                        r.css({
                            left: -e * 100 + "%"
                        })
                    } else {
                        r.animate({
                            left: -e * 100 + "%"
                        })
                    }
                    n("#swipebox-slider .slide").removeClass("current");
                    n("#swipebox-slider .slide").eq(e).addClass("current");
                    this.setTitle(e);
                    if (t) {
                        r.fadeIn()
                    }
                    n("#swipebox-prev, #swipebox-next").removeClass("disabled");
                    if (e == 0) {
                        n("#swipebox-prev").addClass("disabled")
                    } else if (e == a.length - 1) {
                        n("#swipebox-next").addClass("disabled")
                    }
                },
                openSlide: function (t) {
                    n("html").addClass("swipebox");
                    n(e).trigger("resize");
                    this.setSlide(t, true)
                },
                preloadImg: function (e) {
                    var t = this;
                    setTimeout(function () {
                        t.openImg(e)
                    }, 1e3)
                },
                openImg: function (e) {
                    var t = this;
                    if (e < 0 || e >= a.length) {
                        return false
                    }
                    t.loadImg(a.eq(e).attr("href"), function () {
                        n("#swipebox-slider .slide").eq(e).html(this)
                    })
                },
                setTitle: function (e, t) {
                    n("#swipebox-caption").empty();
                    if (a.eq(e).attr("title")) {
                        n("#swipebox-caption").append(a.eq(e).attr("title"))
                    }
                },
                loadImg: function (e, t) {
                    var r = n("<img>").on("load", function () {
                        t.call(r)
                    });
                    r.attr("src", e)
                },
                getNext: function () {
                    var e = this;
                    index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                    if (index + 1 < a.length) {
                        index++;
                        e.setSlide(index);
                        e.preloadImg(index + 1)
                    } else {
                        n("#swipebox-slider").addClass("rightSpring");
                        setTimeout(function () {
                            n("#swipebox-slider").removeClass("rightSpring")
                        }, 500)
                    }
                },
                getPrev: function () {
                    var e = this;
                    index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current"));
                    if (index > 0) {
                        index--;
                        e.setSlide(index);
                        e.preloadImg(index - 1)
                    } else {
                        n("#swipebox-slider").addClass("leftSpring");
                        setTimeout(function () {
                            n("#swipebox-slider").removeClass("leftSpring")
                        }, 500)
                    }
                },
                closeSlide: function () {
                    var t = this;
                    n(e).trigger("resize");
                    n("html").removeClass("swipebox");
                    t.destroy()
                },
                destroy: function () {
                    var t = this;
                    n(e).unbind("keyup");
                    n("body").unbind("touchstart");
                    n("body").unbind("touchmove");
                    n("body").unbind("touchend");
                    n("#swipebox-slider").unbind();
                    n("#swipebox-overlay").remove();
                    a.removeData("_swipebox");
                    t.target.trigger("swipebox-destroy")
                }
            };
            u.init()
        };



        n.fn.swipebox = function (e) {
            if (!n.data(this, "_swipebox")) {
                var t = new n.swipebox(this, e);
                this.data("_swipebox", t)
            }
        }
    })(window, document, jQuery)



}(jQuery));

/*
	* ScrollIt
 	* ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages.
 	*
 	* Latest version: https://github.com/cmpolis/scrollIt.js
 	*
 	* License <https://github.com/cmpolis/scrollIt.js/blob/master/LICENSE.txt>
*/

(function ($) {

    var pluginName = "ScrollIt", pluginVersion = "1.0.3"; var defaults = { upKey: 38, downKey: 40, easing: "linear", scrollTime: 600, activeClass: "active", onPageChange: null, topOffset: 0 };
    $.scrollIt = function (options) {
        var settings = $.extend(defaults, options), active = 0, lastIndex = $("[data-scroll-index]:last").attr("data-scroll-index"); var navigate = function (ndx) { if (ndx < 0 || ndx > lastIndex) return; var targetTop = $("[data-scroll-index=" + ndx + "]").offset().top + settings.topOffset + 1; $("html,body").animate({ scrollTop: targetTop }, settings.scrollTime, settings.easing) }; var doScroll = function (e) {
            var target = $(e.target).closest("[data-scroll-nav]").attr("data-scroll-nav") || $(e.target).closest("[data-scroll-goto]").attr("data-scroll-goto");
            navigate(parseInt(target))
        }; var keyNavigation = function (e) { var key = e.which; if ($("html,body").is(":animated") && (key == settings.upKey || key == settings.downKey)) return false; if (key == settings.upKey && active > 0) { navigate(parseInt(active) - 1); return false } else if (key == settings.downKey && active < lastIndex) { navigate(parseInt(active) + 1); return false } return true }; var updateActive = function (ndx) {
            if (settings.onPageChange && ndx && active != ndx) settings.onPageChange(ndx); active = ndx; $("[data-scroll-nav]").removeClass(settings.activeClass);
            $("[data-scroll-nav=" + ndx + "]").addClass(settings.activeClass)
        }; var watchActive = function () { var winTop = $(window).scrollTop(); var visible = $("[data-scroll-index]").filter(function (ndx, div) { return winTop >= $(div).offset().top + settings.topOffset && winTop < $(div).offset().top + settings.topOffset + $(div).outerHeight() }); var newActive = visible.first().attr("data-scroll-index"); updateActive(newActive) }; $(window).on("scroll", watchActive).scroll(); $(window).on("keydown", keyNavigation); $("body").on("click", "[data-scroll-nav], [data-scroll-goto]",
        function (e) { e.preventDefault(); doScroll(e) })
    };

}(jQuery));


/*
	* Snap.js
	*
	* Copyright 2013, Jacob Kelley - http://jakiestfu.com/
	* Released under the MIT Licence
	* http://opensource.org/licenses/MIT
	*
	* Github:  http://github.com/jakiestfu/Snap.js/
	* Version: 1.9.2
*/
/*jslint browser: true*/
/*global define, module, ender*/

(function ($) {

    (function (e, t) {
        "use strict";
        var n = n || function (n) {
            var r = {
                dragger: null,
                disable: '',
                addBodyClasses: true,
                hyperextensible: true,
                resistance: 0.5,
                flickThreshold: 50,
                transitionSpeed: 0.35,
                easing: 'ease-in-out',
                maxPosition: 266,
                minPosition: -266,
                tapToClose: true,
                touchToDrag: true,
                slideIntent: 40, // degrees
                minDragDistance: 5
            },
                i = {
                    simpleStates: {
                        opening: null,
                        towards: null,
                        hyperExtending: null,
                        halfway: null,
                        flick: null,
                        translation: {
                            absolute: 0,
                            relative: 0,
                            sinceDirectionChange: 0,
                            percentage: 0
                        }
                    }
                },
                s = {},
                o = {
                    hasTouch: t.ontouchstart === null,
                    eventType: function (e) {
                        var t = {
                            down: o.hasTouch ? "touchstart" : "mousedown",
                            move: o.hasTouch ? "touchmove" : "mousemove",
                            up: o.hasTouch ? "touchend" : "mouseup",
                            out: o.hasTouch ? "touchcancel" : "mouseout"
                        };
                        return t[e]
                    },
                    page: function (e, t) {
                        return o.hasTouch && t.touches.length && t.touches[0] ? t.touches[0]["page" + e] : t["page" + e]
                    },
                    klass: {
                        has: function (e, t) {
                            return e.className.indexOf(t) !== -1
                        },
                        add: function (e, t) {
                            if (!o.klass.has(e, t) && r.addBodyClasses) {
                                e.className += " " + t
                            }
                        },
                        remove: function (e, t) {
                            if (r.addBodyClasses) {
                                e.className = e.className.replace(t, "").replace(/^\s+|\s+$/g, "")
                            }
                        }
                    },
                    dispatchEvent: function (e) {
                        if (typeof s[e] === "function") {
                            return s[e].call()
                        }
                    },
                    vendor: function () {
                        var e = t.createElement("div"),
                            n = "webkit Moz O ms".split(" "),
                            r;
                        for (r in n) {
                            if (typeof e.style[n[r] + "Transition"] !== "undefined") {
                                return n[r]
                            }
                        }
                    },
                    transitionCallback: function () {
                        return i.vendor === "Moz" || i.vendor === "ms" ? "transitionend" : i.vendor + "TransitionEnd"
                    },
                    canTransform: function () {
                        return typeof r.element.style[i.vendor + "Transform"] !== "undefined"
                    },
                    deepExtend: function (e, t) {
                        var n;
                        for (n in t) {
                            if (t[n] && t[n].constructor && t[n].constructor === Object) {
                                e[n] = e[n] || {};
                                o.deepExtend(e[n], t[n])
                            } else {
                                e[n] = t[n]
                            }
                        }
                        return e
                    },
                    angleOfDrag: function (e, t) {
                        var n, r;
                        r = Math.atan2(-(i.startDragY - t), i.startDragX - e);
                        if (r < 0) {
                            r += 2 * Math.PI
                        }
                        n = Math.floor(r * (180 / Math.PI) - 180);
                        if (n < 0 && n > -180) {
                            n = 360 - Math.abs(n)
                        }
                        return Math.abs(n)
                    },
                    events: {
                        addEvent: function (t, n, r) {
                            if (t.addEventListener) {
                                return t.addEventListener(n, r, false)
                            } else if (t.attachEvent) {
                                return t.attachEvent("on" + n, r)
                            }
                        },
                        removeEvent: function (t, n, r) {
                            if (t.addEventListener) {
                                return t.removeEventListener(n, r, false)
                            } else if (t.attachEvent) {
                                return t.detachEvent("on" + n, r)
                            }
                        },
                        prevent: function (e) {
                            if (e.preventDefault) {
                                e.preventDefault()
                            } else {
                                e.returnValue = false
                            }
                        }
                    },
                    parentUntil: function (e, t) {
                        var n = typeof t === "string";
                        while (e.parentNode) {
                            if (n && e.getAttribute && e.getAttribute(t)) {
                                return e
                            } else if (!n && e === t) {
                                return e
                            }
                            e = e.parentNode
                        }
                        return null
                    }
                },
                u = {
                    translate: {
                        get: {
                            matrix: function (t) {
                                if (!o.canTransform()) {
                                    return parseInt(r.element.style.left, 10)
                                } else {
                                    var n = e.getComputedStyle(r.element)[i.vendor + "Transform"].match(/\((.*)\)/),
                                        s = 8;
                                    if (n) {
                                        n = n[1].split(",");
                                        if (n.length === 16) {
                                            t += s
                                        }
                                        return parseInt(n[t], 10)
                                    }
                                    return 0
                                }
                            }
                        },
                        easeCallback: function () {
                            r.element.style[i.vendor + "Transition"] = "";
                            i.translation = u.translate.get.matrix(4);
                            i.easing = false;
                            clearInterval(i.animatingInterval);
                            if (i.easingTo === 0) {
                                o.klass.remove(t.body, "snapjs-right");
                                o.klass.remove(t.body, "snapjs-left")
                            }
                            o.dispatchEvent("animated");
                            o.events.removeEvent(r.element, o.transitionCallback(), u.translate.easeCallback)
                        },
                        easeTo: function (e) {
                            if (!o.canTransform()) {
                                i.translation = e;
                                u.translate.x(e)
                            } else {
                                i.easing = true;
                                i.easingTo = e;
                                r.element.style[i.vendor + "Transition"] = "all " + r.transitionSpeed + "s " + r.easing;
                                i.animatingInterval = setInterval(function () {
                                    o.dispatchEvent("animating")
                                }, 1);
                                o.events.addEvent(r.element, o.transitionCallback(), u.translate.easeCallback);
                                u.translate.x(e)
                            }
                            if (e === 0) {
                                r.element.style[i.vendor + "Transform"] = ""
                            }
                        },
                        x: function (n) {
                            if (r.disable === "left" && n > 0 || r.disable === "right" && n < 0) {
                                return
                            }
                            if (!r.hyperextensible) {
                                if (n === r.maxPosition || n > r.maxPosition) {
                                    n = r.maxPosition
                                } else if (n === r.minPosition || n < r.minPosition) {
                                    n = r.minPosition
                                }
                            }
                            n = parseInt(n, 10);
                            if (isNaN(n)) {
                                n = 0
                            }
                            if (o.canTransform()) {
                                var s = "translate3d(" + n + "px, 0,0)";
                                r.element.style[i.vendor + "Transform"] = s
                            } else {
                                r.element.style.width = (e.innerWidth || t.documentElement.clientWidth) + "px";
                                r.element.style.left = n + "px";
                                r.element.style.right = ""
                            }
                        }
                    },
                    drag: {
                        listen: function () {
                            i.translation = 0;
                            i.easing = false;
                            o.events.addEvent(r.element, o.eventType("down"), u.drag.startDrag);
                            o.events.addEvent(r.element, o.eventType("move"), u.drag.dragging);
                            o.events.addEvent(r.element, o.eventType("up"), u.drag.endDrag)
                        },
                        stopListening: function () {
                            o.events.removeEvent(r.element, o.eventType("down"), u.drag.startDrag);
                            o.events.removeEvent(r.element, o.eventType("move"), u.drag.dragging);
                            o.events.removeEvent(r.element, o.eventType("up"), u.drag.endDrag)
                        },
                        startDrag: function (e) {
                            var t = e.target ? e.target : e.srcElement,
                                n = o.parentUntil(t, "data-snap-ignore");
                            if (n) {
                                o.dispatchEvent("ignore");
                                return
                            }
                            if (r.dragger) {
                                var s = o.parentUntil(t, r.dragger);
                                if (!s && i.translation !== r.minPosition && i.translation !== r.maxPosition) {
                                    return
                                }
                            }
                            o.dispatchEvent("start");
                            r.element.style[i.vendor + "Transition"] = "";
                            i.isDragging = true;
                            i.hasIntent = null;
                            i.intentChecked = false;
                            i.startDragX = o.page("X", e);
                            i.startDragY = o.page("Y", e);
                            i.dragWatchers = {
                                current: 0,
                                last: 0,
                                hold: 0,
                                state: ""
                            };
                            i.simpleStates = {
                                opening: null,
                                towards: null,
                                hyperExtending: null,
                                halfway: null,
                                flick: null,
                                translation: {
                                    absolute: 0,
                                    relative: 0,
                                    sinceDirectionChange: 0,
                                    percentage: 0
                                }
                            }
                        },
                        dragging: function (e) {
                            if (i.isDragging && r.touchToDrag) {
                                var n = o.page("X", e),
                                    s = o.page("Y", e),
                                    a = i.translation,
                                    f = u.translate.get.matrix(4),
                                    l = n - i.startDragX,
                                    c = f > 0,
                                    h = l,
                                    p;
                                if (i.intentChecked && !i.hasIntent) {
                                    return
                                }
                                if (r.addBodyClasses) {
                                    if (f > 0) {
                                        o.klass.add(t.body, "snapjs-left");
                                        o.klass.remove(t.body, "snapjs-right")
                                    } else if (f < 0) {
                                        o.klass.add(t.body, "snapjs-right");
                                        o.klass.remove(t.body, "snapjs-left")
                                    }
                                }
                                if (i.hasIntent === false || i.hasIntent === null) {
                                    var d = o.angleOfDrag(n, s),
                                        v = d >= 0 && d <= r.slideIntent || d <= 360 && d > 360 - r.slideIntent,
                                        m = d >= 180 && d <= 180 + r.slideIntent || d <= 180 && d >= 180 - r.slideIntent;
                                    if (!m && !v) {
                                        i.hasIntent = false
                                    } else {
                                        i.hasIntent = true
                                    }
                                    i.intentChecked = true
                                }
                                if (r.minDragDistance >= Math.abs(n - i.startDragX) || i.hasIntent === false) {
                                    return
                                }
                                o.events.prevent(e);
                                o.dispatchEvent("drag");
                                i.dragWatchers.current = n;
                                if (i.dragWatchers.last > n) {
                                    if (i.dragWatchers.state !== "left") {
                                        i.dragWatchers.state = "left";
                                        i.dragWatchers.hold = n
                                    }
                                    i.dragWatchers.last = n
                                } else if (i.dragWatchers.last < n) {
                                    if (i.dragWatchers.state !== "right") {
                                        i.dragWatchers.state = "right";
                                        i.dragWatchers.hold = n
                                    }
                                    i.dragWatchers.last = n
                                }
                                if (c) {
                                    if (r.maxPosition < f) {
                                        p = (f - r.maxPosition) * r.resistance;
                                        h = l - p
                                    }
                                    i.simpleStates = {
                                        opening: "left",
                                        towards: i.dragWatchers.state,
                                        hyperExtending: r.maxPosition < f,
                                        halfway: f > r.maxPosition / 2,
                                        flick: Math.abs(i.dragWatchers.current - i.dragWatchers.hold) > r.flickThreshold,
                                        translation: {
                                            absolute: f,
                                            relative: l,
                                            sinceDirectionChange: i.dragWatchers.current - i.dragWatchers.hold,
                                            percentage: f / r.maxPosition * 100
                                        }
                                    }
                                } else {
                                    if (r.minPosition > f) {
                                        p = (f - r.minPosition) * r.resistance;
                                        h = l - p
                                    }
                                    i.simpleStates = {
                                        opening: "right",
                                        towards: i.dragWatchers.state,
                                        hyperExtending: r.minPosition > f,
                                        halfway: f < r.minPosition / 2,
                                        flick: Math.abs(i.dragWatchers.current - i.dragWatchers.hold) > r.flickThreshold,
                                        translation: {
                                            absolute: f,
                                            relative: l,
                                            sinceDirectionChange: i.dragWatchers.current - i.dragWatchers.hold,
                                            percentage: f / r.minPosition * 100
                                        }
                                    }
                                }
                                u.translate.x(h + a)
                            }
                        },
                        endDrag: function (e) {
                            if (i.isDragging) {
                                o.dispatchEvent("end");
                                var t = u.translate.get.matrix(4);
                                if (i.dragWatchers.current === 0 && t !== 0 && r.tapToClose) {
                                    o.dispatchEvent("close");
                                    o.events.prevent(e);
                                    u.translate.easeTo(0);
                                    i.isDragging = false;
                                    i.startDragX = 0;
                                    return
                                }
                                if (i.simpleStates.opening === "left") {
                                    if (i.simpleStates.halfway || i.simpleStates.hyperExtending || i.simpleStates.flick) {
                                        if (i.simpleStates.flick && i.simpleStates.towards === "left") {
                                            u.translate.easeTo(0)
                                        } else if (i.simpleStates.flick && i.simpleStates.towards === "right" || i.simpleStates.halfway || i.simpleStates.hyperExtending) {
                                            u.translate.easeTo(r.maxPosition)
                                        }
                                    } else {
                                        u.translate.easeTo(0)
                                    }
                                } else if (i.simpleStates.opening === "right") {
                                    if (i.simpleStates.halfway || i.simpleStates.hyperExtending || i.simpleStates.flick) {
                                        if (i.simpleStates.flick && i.simpleStates.towards === "right") {
                                            u.translate.easeTo(0)
                                        } else if (i.simpleStates.flick && i.simpleStates.towards === "left" || i.simpleStates.halfway || i.simpleStates.hyperExtending) {
                                            u.translate.easeTo(r.minPosition)
                                        }
                                    } else {
                                        u.translate.easeTo(0)
                                    }
                                }
                                i.isDragging = false;
                                i.startDragX = o.page("X", e)
                            }
                        }
                    }
                },
                a = function (e) {
                    if (e.element) {
                        o.deepExtend(r, e);
                        i.vendor = o.vendor();
                        u.drag.listen()
                    }
                };
            this.open = function (e) {
                o.dispatchEvent("open");
                o.klass.remove(t.body, "snapjs-expand-left");
                o.klass.remove(t.body, "snapjs-expand-right");
                if (e === "left") {
                    i.simpleStates.opening = "left";
                    i.simpleStates.towards = "right";
                    o.klass.add(t.body, "snapjs-left");
                    o.klass.remove(t.body, "snapjs-right");
                    u.translate.easeTo(r.maxPosition)
                } else if (e === "right") {
                    i.simpleStates.opening = "right";
                    i.simpleStates.towards = "left";
                    o.klass.remove(t.body, "snapjs-left");
                    o.klass.add(t.body, "snapjs-right");
                    u.translate.easeTo(r.minPosition)
                }
            };
            this.close = function () {
                o.dispatchEvent("close");
                u.translate.easeTo(0)
            };
            this.expand = function (n) {
                var r = e.innerWidth || t.documentElement.clientWidth;
                if (n === "left") {
                    o.dispatchEvent("expandLeft");
                    o.klass.add(t.body, "snapjs-expand-left");
                    o.klass.remove(t.body, "snapjs-expand-right")
                } else {
                    o.dispatchEvent("expandRight");
                    o.klass.add(t.body, "snapjs-expand-right");
                    o.klass.remove(t.body, "snapjs-expand-left");
                    r *= -1
                }
                u.translate.easeTo(r)
            };
            this.on = function (e, t) {
                s[e] = t;
                return this
            };
            this.off = function (e) {
                if (s[e]) {
                    s[e] = false
                }
            };
            this.enable = function () {
                o.dispatchEvent("enable");
                u.drag.listen()
            };
            this.disable = function () {
                o.dispatchEvent("disable");
                u.drag.stopListening()
            };
            this.settings = function (e) {
                o.deepExtend(r, e)
            };
            this.state = function () {
                var e, t = u.translate.get.matrix(4);
                if (t === r.maxPosition) {
                    e = "left"
                } else if (t === r.minPosition) {
                    e = "right"
                } else {
                    e = "closed"
                }
                return {
                    state: e,
                    info: i.simpleStates
                }
            };
            a(n)
        };
        if (typeof module !== "undefined" && module.exports) {
            module.exports = n
        }
        if (typeof ender === "undefined") {
            this.Snap = n
        }
        if (typeof define === "function" && define.amd) {
            define("snap", [], function () {
                return n
            })
        }
    }).call(this, window, document)

}(jQuery));


/*
	* countdown is a simple jquery plugin for countdowns
	* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	* and GPL-3.0 (http://opensource.org/licenses/GPL-3.0) licenses.
	* @source: http://github.com/rendro/countdown/
	* @autor: Robert Fleischmann
	* @version: 1.0.1
*/


(function ($) {

    (function () { (function (e) { e.countdown = function (t, n) { var r, i = this; this.el = t; this.$el = e(t); this.$el.data("countdown", this); this.init = function () { i.options = e.extend({}, e.countdown.defaultOptions, n); if (i.options.refresh) { i.interval = setInterval(function () { return i.render() }, i.options.refresh) } i.render(); return i }; r = function (t) { var n, r; t = Date.parse(e.isPlainObject(i.options.date) ? i.options.date : new Date(i.options.date)); r = (t - Date.parse(new Date)) / 1e3; if (r <= 0) { r = 0; if (i.interval) { i.stop() } i.options.onEnd.apply(i) } n = { years: 0, days: 0, hours: 0, min: 0, sec: 0, millisec: 0 }; if (r >= 365.25 * 86400) { n.years = Math.floor(r / (365.25 * 86400)); r -= n.years * 365.25 * 86400 } if (r >= 86400) { n.days = Math.floor(r / 86400); r -= n.days * 86400 } if (r >= 3600) { n.hours = Math.floor(r / 3600); r -= n.hours * 3600 } if (r >= 60) { n.min = Math.floor(r / 60); r -= n.min * 60 } n.sec = r; return n }; this.leadingZeros = function (e, t) { if (t == null) { t = 2 } e = String(e); while (e.length < t) { e = "0" + e } return e }; this.update = function (e) { i.options.date = e; return i }; this.render = function () { i.options.render.apply(i, [r(i.options.date)]); return i }; this.stop = function () { if (i.interval) { clearInterval(i.interval) } i.interval = null; return i }; this.start = function (t) { if (t == null) { t = i.options.refresh || e.countdown.defaultOptions.refresh } if (i.interval) { clearInterval(i.interval) } i.render(); i.options.refresh = t; i.interval = setInterval(function () { return i.render() }, i.options.refresh); return i }; return this.init() }; e.countdown.defaultOptions = { date: "June 7, 2087 15:03:25", refresh: 1e3, onEnd: e.noop, render: function (t) { return e(this.el).html("" + t.years + " years, " + t.days + " days, " + this.leadingZeros(t.hours) + " hours, " + this.leadingZeros(t.min) + " min and " + this.leadingZeros(t.sec) + " sec") } }; e.fn.countdown = function (t) { return e.each(this, function (n, r) { var i; i = e(r); if (!i.data("countdown")) { return i.data("countdown", new e.countdown(r, t)) } }) }; return void 0 })(jQuery) }).call(this)

}(jQuery));


/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


(function ($) {


    (function () { "use strict"; function e(n, r) { function s(e, t) { return function () { return e.apply(t, arguments) } } var i; r = r || {}; this.trackingClick = false; this.trackingClickStart = 0; this.targetElement = null; this.touchStartX = 0; this.touchStartY = 0; this.lastTouchIdentifier = 0; this.touchBoundary = r.touchBoundary || 10; this.layer = n; this.tapDelay = r.tapDelay || 200; if (e.notNeeded(n)) { return } var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"]; var u = this; for (var a = 0, f = o.length; a < f; a++) { u[o[a]] = s(u[o[a]], u) } if (t) { n.addEventListener("mouseover", this.onMouse, true); n.addEventListener("mousedown", this.onMouse, true); n.addEventListener("mouseup", this.onMouse, true) } n.addEventListener("click", this.onClick, true); n.addEventListener("touchstart", this.onTouchStart, false); n.addEventListener("touchmove", this.onTouchMove, false); n.addEventListener("touchend", this.onTouchEnd, false); n.addEventListener("touchcancel", this.onTouchCancel, false); if (!Event.prototype.stopImmediatePropagation) { n.removeEventListener = function (e, t, r) { var i = Node.prototype.removeEventListener; if (e === "click") { i.call(n, e, t.hijacked || t, r) } else { i.call(n, e, t, r) } }; n.addEventListener = function (e, t, r) { var i = Node.prototype.addEventListener; if (e === "click") { i.call(n, e, t.hijacked || (t.hijacked = function (e) { if (!e.propagationStopped) { t(e) } }), r) } else { i.call(n, e, t, r) } } } if (typeof n.onclick === "function") { i = n.onclick; n.addEventListener("click", function (e) { i(e) }, false); n.onclick = null } } var t = navigator.userAgent.indexOf("Android") > 0; var n = /iP(ad|hone|od)/.test(navigator.userAgent); var r = n && /OS 4_\d(_\d)?/.test(navigator.userAgent); var i = n && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent); var s = navigator.userAgent.indexOf("BB10") > 0; e.prototype.needsClick = function (e) { switch (e.nodeName.toLowerCase()) { case "button": case "select": case "textarea": if (e.disabled) { return true } break; case "input": if (n && e.type === "file" || e.disabled) { return true } break; case "label": case "video": return true } return /\bneedsclick\b/.test(e.className) }; e.prototype.needsFocus = function (e) { switch (e.nodeName.toLowerCase()) { case "textarea": return true; case "select": return !t; case "input": switch (e.type) { case "button": case "checkbox": case "file": case "image": case "radio": case "submit": return false } return !e.disabled && !e.readOnly; default: return /\bneedsfocus\b/.test(e.className) } }; e.prototype.sendClick = function (e, t) { var n, r; if (document.activeElement && document.activeElement !== e) { document.activeElement.blur() } r = t.changedTouches[0]; n = document.createEvent("MouseEvents"); n.initMouseEvent(this.determineEventType(e), true, true, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, false, false, false, false, 0, null); n.forwardedTouchEvent = true; e.dispatchEvent(n) }; e.prototype.determineEventType = function (e) { if (t && e.tagName.toLowerCase() === "select") { return "mousedown" } return "click" }; e.prototype.focus = function (e) { var t; if (n && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time") { t = e.value.length; e.setSelectionRange(t, t) } else { e.focus() } }; e.prototype.updateScrollParent = function (e) { var t, n; t = e.fastClickScrollParent; if (!t || !t.contains(e)) { n = e; do { if (n.scrollHeight > n.offsetHeight) { t = n; e.fastClickScrollParent = n; break } n = n.parentElement } while (n) } if (t) { t.fastClickLastScrollTop = t.scrollTop } }; e.prototype.getTargetElementFromEventTarget = function (e) { if (e.nodeType === Node.TEXT_NODE) { return e.parentNode } return e }; e.prototype.onTouchStart = function (e) { var t, i, s; if (e.targetTouches.length > 1) { return true } t = this.getTargetElementFromEventTarget(e.target); i = e.targetTouches[0]; if (n) { s = window.getSelection(); if (s.rangeCount && !s.isCollapsed) { return true } if (!r) { if (i.identifier && i.identifier === this.lastTouchIdentifier) { e.preventDefault(); return false } this.lastTouchIdentifier = i.identifier; this.updateScrollParent(t) } } this.trackingClick = true; this.trackingClickStart = e.timeStamp; this.targetElement = t; this.touchStartX = i.pageX; this.touchStartY = i.pageY; if (e.timeStamp - this.lastClickTime < this.tapDelay) { e.preventDefault() } return true }; e.prototype.touchHasMoved = function (e) { var t = e.changedTouches[0], n = this.touchBoundary; if (Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n) { return true } return false }; e.prototype.onTouchMove = function (e) { if (!this.trackingClick) { return true } if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) { this.trackingClick = false; this.targetElement = null } return true }; e.prototype.findControl = function (e) { if (e.control !== undefined) { return e.control } if (e.htmlFor) { return document.getElementById(e.htmlFor) } return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea") }; e.prototype.onTouchEnd = function (e) { var s, o, u, a, f, l = this.targetElement; if (!this.trackingClick) { return true } if (e.timeStamp - this.lastClickTime < this.tapDelay) { this.cancelNextClick = true; return true } this.cancelNextClick = false; this.lastClickTime = e.timeStamp; o = this.trackingClickStart; this.trackingClick = false; this.trackingClickStart = 0; if (i) { f = e.changedTouches[0]; l = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || l; l.fastClickScrollParent = this.targetElement.fastClickScrollParent } u = l.tagName.toLowerCase(); if (u === "label") { s = this.findControl(l); if (s) { this.focus(l); if (t) { return false } l = s } } else if (this.needsFocus(l)) { if (e.timeStamp - o > 100 || n && window.top !== window && u === "input") { this.targetElement = null; return false } this.focus(l); this.sendClick(l, e); if (!n || u !== "select") { this.targetElement = null; e.preventDefault() } return false } if (n && !r) { a = l.fastClickScrollParent; if (a && a.fastClickLastScrollTop !== a.scrollTop) { return true } } if (!this.needsClick(l)) { e.preventDefault(); this.sendClick(l, e) } return false }; e.prototype.onTouchCancel = function () { this.trackingClick = false; this.targetElement = null }; e.prototype.onMouse = function (e) { if (!this.targetElement) { return true } if (e.forwardedTouchEvent) { return true } if (!e.cancelable) { return true } if (!this.needsClick(this.targetElement) || this.cancelNextClick) { if (e.stopImmediatePropagation) { e.stopImmediatePropagation() } else { e.propagationStopped = true } e.stopPropagation(); e.preventDefault(); return false } return true }; e.prototype.onClick = function (e) { var t; if (this.trackingClick) { this.targetElement = null; this.trackingClick = false; return true } if (e.target.type === "submit" && e.detail === 0) { return true } t = this.onMouse(e); if (!t) { this.targetElement = null } return t }; e.prototype.destroy = function () { var e = this.layer; if (t) { e.removeEventListener("mouseover", this.onMouse, true); e.removeEventListener("mousedown", this.onMouse, true); e.removeEventListener("mouseup", this.onMouse, true) } e.removeEventListener("click", this.onClick, true); e.removeEventListener("touchstart", this.onTouchStart, false); e.removeEventListener("touchmove", this.onTouchMove, false); e.removeEventListener("touchend", this.onTouchEnd, false); e.removeEventListener("touchcancel", this.onTouchCancel, false) }; e.notNeeded = function (e) { var n; var r; var i; if (typeof window.ontouchstart === "undefined") { return true } r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]; if (r) { if (t) { n = document.querySelector("meta[name=viewport]"); if (n) { if (n.content.indexOf("user-scalable=no") !== -1) { return true } if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) { return true } } } else { return true } } if (s) { i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/); if (i[1] >= 10 && i[2] >= 3) { n = document.querySelector("meta[name=viewport]"); if (n) { if (n.content.indexOf("user-scalable=no") !== -1) { return true } if (document.documentElement.scrollWidth <= window.outerWidth) { return true } } } } if (e.style.msTouchAction === "none") { return true } return false }; e.attach = function (t, n) { return new e(t, n) }; if (typeof define == "function" && typeof define.amd == "object" && define.amd) { define(function () { return e }) } else if (typeof module !== "undefined" && module.exports) { module.exports = e.attach; module.exports.FastClick = e } else { window.FastClick = e } })()

}(jQuery));

/*
	*jQuery Contact form developed by CosminCotor & Enabled
	*Licensed to be used ONLY by CosminCotor & Enabled on the Envato Marketplaces 
	*DO NOT use in commercial projects outside Regular or Extended licenses for the marketplaces.
*/

(function ($) {

    var $ = jQuery.noConflict(); var formSubmitted = "false"; jQuery(document).ready(function (e) { function t(t, n) { formSubmitted = "true"; var r = e("#" + t).serialize(); e.post(e("#" + t).attr("action"), r, function (n) { e("#" + t).hide(); e("#formSuccessMessageWrap").fadeIn(500) }) } function n(n, r) { e(".formValidationError").hide(); e(".fieldHasError").removeClass("fieldHasError"); e("#" + n + " .requiredField").each(function (i) { if (e(this).val() == "" || e(this).val() == e(this).attr("data-dummy")) { e(this).val(e(this).attr("data-dummy")); e(this).focus(); e(this).addClass("fieldHasError"); e("#" + e(this).attr("id") + "Error").fadeIn(300); return false } if (e(this).hasClass("requiredEmailField")) { var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; var o = "#" + e(this).attr("id"); if (!s.test(e(o).val())) { e(o).focus(); e(o).addClass("fieldHasError"); e(o + "Error2").fadeIn(300); return false } } if (formSubmitted == "false" && i == e("#" + n + " .requiredField").length - 1) { t(n, r) } }) } e("#formSuccessMessageWrap").hide(0); e(".formValidationError").fadeOut(0); e('input[type="text"], input[type="password"], textarea').focus(function () { if (e(this).val() == e(this).attr("data-dummy")) { e(this).val("") } }); e("input, textarea").blur(function () { if (e(this).val() == "") { e(this).val(e(this).attr("data-dummy")) } }); e("#contactSubmitButton").click(function () { n(e(this).attr("data-formId")); return false }) })

}(jQuery));


(function ($) {

    /*!
     * Waves v0.6.0
     * http://fian.my.id/Waves 
     * 
     * Copyright 2014 Alfiana E. Sibuea and other contributors 
     * Released under the MIT license 
     * https://github.com/fians/Waves/blob/master/LICENSE 
     */
    !function (a) { "use strict"; function b(a) { return null !== a && a === a.window } function c(a) { return b(a) ? a : 9 === a.nodeType && a.defaultView } function d(a) { var b, d, e = { top: 0, left: 0 }, f = a && a.ownerDocument; return b = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = c(f), { top: e.top + d.pageYOffset - b.clientTop, left: e.left + d.pageXOffset - b.clientLeft } } function e(a) { var b = ""; for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";"); return b } function f(a) { if (k.allowEvent(a) === !1) return null; for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) { if (-1 !== c.className.indexOf("waves-effect")) { b = c; break } c = c.parentElement } return b } function g(b) { var c = f(b); null !== c && (j.show(b, c), "ontouchstart" in a && (c.addEventListener("touchend", j.hide, !1), c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), c.addEventListener("mouseleave", j.hide, !1)) } var h = h || {}, i = document.querySelectorAll.bind(document), j = { duration: 750, show: function (a, b) { if (2 === a.button) return !1; var c = b || this, f = document.createElement("div"); f.className = "waves-ripple", c.appendChild(f); var g = d(c), h = a.pageY - g.top, i = a.pageX - g.left, k = "scale(" + c.clientWidth / 100 * 3 + ")"; "touches" in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), f.setAttribute("data-y", h); var l = { top: h + "px", left: i + "px" }; f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", f.setAttribute("style", e(l)) }, hide: function (a) { k.touchup(a); var b = this, c = (1.4 * b.clientWidth, null), d = b.getElementsByClassName("waves-ripple"); if (!(d.length > 0)) return !1; c = d[d.length - 1]; var f = c.getAttribute("data-x"), g = c.getAttribute("data-y"), h = c.getAttribute("data-scale"), i = Date.now() - Number(c.getAttribute("data-hold")), l = 350 - i; 0 > l && (l = 0), setTimeout(function () { var a = { top: g + "px", left: f + "px", opacity: "0", "-webkit-transition-duration": j.duration + "ms", "-moz-transition-duration": j.duration + "ms", "-o-transition-duration": j.duration + "ms", "transition-duration": j.duration + "ms", "-webkit-transform": h, "-moz-transform": h, "-ms-transform": h, "-o-transform": h, transform: h }; c.setAttribute("style", e(a)), setTimeout(function () { try { b.removeChild(c) } catch (a) { return !1 } }, j.duration) }, l) }, wrapInput: function (a) { for (var b = 0; b < a.length; b++) { var c = a[b]; if ("input" === c.tagName.toLowerCase()) { var d = c.parentNode; if ("i" === d.tagName.toLowerCase() && -1 !== d.className.indexOf("waves-effect")) continue; var e = document.createElement("i"); e.className = c.className + " waves-input-wrapper"; var f = c.getAttribute("style"); f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), d.replaceChild(e, c), e.appendChild(c) } } } }, k = { touches: 0, allowEvent: function (a) { var b = !0; return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function () { k.touches > 0 && (k.touches -= 1) }, 500) : "mousedown" === a.type && k.touches > 0 && (b = !1), b }, touchup: function (a) { k.allowEvent(a) } }; h.displayEffect = function (b) { b = b || {}, "duration" in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), "ontouchstart" in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1) }, h.attach = function (b) { "input" === b.tagName.toLowerCase() && (j.wrapInput([b]), b = b.parentElement), "ontouchstart" in a && b.addEventListener("touchstart", g, !1), b.addEventListener("mousedown", g, !1) }, a.Waves = h }(window);
    //# sourceMappingURL=waves.min.js.map

}(jQuery));

/*jquery.mb.YTPlayer 01-07-2015
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() { ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady")) } function uncamel(a) { return a.replace(/([A-Z])/g, function (a) { return "-" + a.toLowerCase() }) } function setUnit(a, b) { return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a } function setFilter(a, b, c) { var d = uncamel(b), e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx; a[e + "filter"] = a[e + "filter"] || "", c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit), a[e + "filter"] += d + "(" + c + ") ", delete a[b] } var ytp = ytp || {}, getYTPVideoID = function (a) { var b, c; return a.indexOf("youtu.be") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null, b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1], c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a, c = b ? null : a), { videoID: b, playlistID: c } }; !function (jQuery, ytp) { jQuery.mbYTPlayer = { name: "jquery.mb.YTPlayer", version: "2.9.4", build: "{{ build }}", author: "Matteo Bicocchi", apiKey: "", defaults: { containment: "body", ratio: "auto", videoURL: null, playlistURL: null, startAt: 0, stopAt: 0, autoPlay: !0, vol: 50, addRaster: !1, opacity: 1, quality: "default", mute: !1, loop: !0, showControls: !0, showAnnotations: !1, showYTLogo: !0, stopMovieOnBlur: !0, realfullscreen: !0, gaTrack: !0, optimizeDisplay: !0, onReady: function (a) { } }, controls: { play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y" }, locationProtocol: "https:", buildPlayer: function (options) { return this.each(function () { var YTPlayer = this, $YTPlayer = jQuery(YTPlayer); YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = { grayscale: { value: 0, unit: "%" }, hue_rotate: { value: 0, unit: "deg" }, invert: { value: 0, unit: "%" }, opacity: { value: 0, unit: "%" }, saturate: { value: 0, unit: "%" }, sepia: { value: 0, unit: "%" }, brightness: { value: 0, unit: "%" }, contrast: { value: 0, unit: "%" }, blur: { value: 0, unit: "px" } }, $YTPlayer.addClass("mb_YTPlayer"); var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property"); "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1; var isIframe = function () { var a = !1; try { self.location.href != top.location.href && (a = !0) } catch (b) { a = !0 } return a }; YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime()); var playerID = "mbYTP_" + YTPlayer.id; YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0; var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1, playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1; YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3"; var playerVars = { autoplay: 0, modestbranding: 1, controls: 0, showinfo: 0, rel: 0, enablejsapi: 1, version: 3, playerapiid: playerID, origin: "*", allowfullscreen: !0, wmode: "transparent", iv_load_policy: YTPlayer.opt.showAnnotations }; document.createElement("video").canPlayType && jQuery.extend(playerVars, { html5: 1 }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1); var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"), overlay = jQuery("<div/>").css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }).addClass("YTPOverlay"); if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) { var isPlayer = YTPlayer.opt.containment.is(jQuery(this)); if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove(); var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID); if (wrapper.css({ position: "absolute", zIndex: 0, minWidth: "100%", minHeight: "100%", left: 0, top: 0, overflow: "hidden", opacity: 0 }), playerBox.css({ position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0, overflow: "hidden" }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () { "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative") }), YTPlayer.isBackground ? (jQuery("body").css({ boxSizing: "border-box" }), wrapper.css({ position: "fixed", top: 0, left: 0, zIndex: 0 }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({ position: "relative" }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({ opacity: 1 }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () { YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible") }).on("mouseleave", function () { YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible") }), ytp.YTAPIReady) setTimeout(function () { jQuery(document).trigger("YTAPIReady") }, 100); else { jQuery("#YTAPI").remove(); var tag = jQuery("<script></script>").attr({ src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version, id: "YTAPI" }); jQuery("head").prepend(tag) } jQuery(document).on("YTAPIReady", function () { YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () { if (!YTPlayer.isInit) { if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) { if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) { YTPlayer.opt.containment.css({ maxWidth: "100%" }); var h = .6 * YTPlayer.opt.containment.outerWidth(); YTPlayer.opt.containment.css({ maxHeight: h }) } return void new YT.Player(playerID, { videoId: YTPlayer.videoID.toString(), height: "100%", width: "100%", events: { onReady: function (a) { YTPlayer.player = a.target, playerBox.css({ opacity: 1 }), YTPlayer.wrapper.css({ opacity: 1 }) } } }) } new YT.Player(playerID, { videoId: YTPlayer.videoID.toString(), playerVars: playerVars, events: { onReady: function (a) { if (YTPlayer.player = a.target, !YTPlayer.isReady) { YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function () { $YTPlayer.optimizeDisplay() }), jQuery.mbYTPlayer.checkForState(YTPlayer); var b = jQuery.Event("YTPUnstarted"); b.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(b) } }, onStateChange: function (event) { if ("function" == typeof event.target.getPlayerState) { var state = event.target.getPlayerState(); if (YTPlayer.state != state) { YTPlayer.state = state; var eventType; switch (state) { case -1: eventType = "YTPUnstarted"; break; case 0: eventType = "YTPEnd"; break; case 1: eventType = "YTPStart", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()); break; case 2: eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play); break; case 3: YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play); break; case 5: eventType = "YTPCued" } var YTPEvent = jQuery.Event(eventType); YTPEvent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent) } } }, onPlaybackQualityChange: function (a) { var b = a.target.getPlaybackQuality(), c = jQuery.Event("YTPQualityChange"); c.quality = b, jQuery(YTPlayer).trigger(c) }, onError: function (a) { 150 == a.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == a.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, a) } } }) } })) }) } }) }, getDataFromAPI: function (a) { if (a.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + a.videoID), jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () { if (a.hasData && a.isPlayer && !a.opt.autoPlay) { var b = a.videoData.thumb_max || a.videoData.thumb_high || a.videoData.thumb_medium; a.opt.containment.css({ background: "rgba(0,0,0,0.5) url(" + b + ") center center", backgroundSize: "cover" }), a.opt.backgroundUrl = b } }), a.videoData) setTimeout(function () { a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.dataReceived = !0, jQuery(a).trigger("YTPChanged"); var b = jQuery.Event("YTPData"); b.prop = {}; for (var c in a.videoData) b.prop[c] = a.videoData[c]; jQuery(a).trigger(b) }, 500), a.hasData = !0; else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (b) { function c(b) { a.videoData = {}, a.videoData.id = a.videoID, a.videoData.channelTitle = b.channelTitle, a.videoData.title = b.title, a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...", a.videoData.aspectratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio, a.opt.ratio = a.videoData.aspectratio, a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null, a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null, a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null, jQuery.mbStorage.set("YYTPlayer_data_" + a.videoID, a.videoData) } a.dataReceived = !0, jQuery(a).trigger("YTPChanged"), c(b.items[0].snippet), a.hasData = !0; var d = jQuery.Event("YTPData"); d.prop = {}; for (var e in a.videoData) d.prop[e] = a.videoData[e]; jQuery(a).trigger(d) }); else { if (setTimeout(function () { jQuery(a).trigger("YTPChanged") }, 50), a.isPlayer && !a.opt.autoPlay) { var b = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + a.videoID + "/hqdefault.jpg"; a.opt.containment.css({ background: "rgba(0,0,0,0.5) url(" + b + ") center center", backgroundSize: "cover" }), a.opt.backgroundUrl = b } a.videoData = null, a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio } a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(a).append(a.loading), a.loading.fadeIn()) }, removeStoredData: function () { jQuery.mbStorage.remove() }, getVideoData: function () { var a = this.get(0); return a.videoData }, getVideoID: function () { var a = this.get(0); return a.videoID || !1 }, setVideoQuality: function (a) { var b = this.get(0); jQuery.browser.chrome || b.player.setPlaybackQuality(a) }, playlist: function (a, b, c) { var d = this, e = d.get(0); return e.isPlayList = !0, b && (a = jQuery.shuffle(a)), e.videoID || (e.videos = a, e.videoCounter = 0, e.videoLength = a.length, jQuery(e).data("property", a[0]), jQuery(e).mb_YTPlayer()), "function" == typeof c && jQuery(e).on("YTPChanged", function () { c(e) }), jQuery(e).on("YTPEnd", function () { jQuery(e).playNext() }), d }, playNext: function () { var a = this.get(0); return a.videoCounter++, a.videoCounter >= a.videoLength && (a.videoCounter = 0), jQuery(a).changeMovie(a.videos[a.videoCounter]), this }, playPrev: function () { var a = this.get(0); return a.videoCounter--, a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1), jQuery(a).changeMovie(a.videos[a.videoCounter]), this }, changeMovie: function (a) { var b = this.get(0); b.opt.startAt = 0, b.opt.stopAt = 0, b.opt.mute = !0, b.hasData = !1, b.hasChanged = !0, a && jQuery.extend(b.opt, b.defaultOpt, a), b.videoID = getYTPVideoID(b.opt.videoURL).videoID, jQuery(b.playerEl).CSSAnimate({ opacity: 0 }, 200, function () { return jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + b.videoID), 1, b.opt.quality), jQuery.mbYTPlayer.checkForState(b), jQuery(b).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(b), this }) }, getPlayer: function () { return jQuery(this).get(0).player }, playerDestroy: function () { var a = this.get(0); ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, a.isInit = !1, a.videoID = null; var b = a.wrapper; return b.remove(), jQuery("#controlBar_" + a.id).remove(), clearInterval(a.checkForStartAt), clearInterval(a.getState), this }, fullscreen: function (real) { function hideMouse() { YTPlayer.overlay.css({ cursor: "none" }) } function RunPrefixMethod(a, b) { for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c];) { if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d) return e = [e[f]], "function" == d ? a[c]() : a[c]; f++ } } function launchFullscreen(a) { RunPrefixMethod(a, "RequestFullScreen") } function cancelFullscreen() { (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen") } var YTPlayer = this.get(0); "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real); var controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"), videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper; if (real) { var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange"; jQuery(document).off(fullscreenchange).on(fullscreenchange, function () { var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen"); a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({ opacity: YTPlayer.opt.opacity }, 500), videoWrapper.css({ zIndex: 0 }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd")) }) } return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({ cursor: "auto" }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({ opacity: YTPlayer.opt.opacity }, 500), videoWrapper.css({ zIndex: 0 })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (a) { YTPlayer.overlay.css({ cursor: "auto" }), clearTimeout(YTPlayer.hideCursor), jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3)) }), hideMouse(), real ? (videoWrapper.css({ opacity: 0 }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () { videoWrapper.CSSAnimate({ opacity: 1 }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0) }, 500)) : videoWrapper.css({ zIndex: 1e4 }).CSSAnimate({ opacity: 1 }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this }, toggleLoops: function () { var a = this.get(0), b = a.opt; return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(), b.loop = 1), this }, play: function () { var a = this.get(0); if (a.isReady) { var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPPlaypause"); return c.html(jQuery.mbYTPlayer.controls.pause), a.player.playVideo(), a.wrapper.CSSAnimate({ opacity: a.isAlone ? 1 : a.opt.opacity }, 2e3), jQuery(a.playerEl).CSSAnimate({ opacity: 1 }, 1e3), jQuery(a).css("background-image", "none"), this } }, togglePlay: function (a) { var b = this.get(0); return 1 == b.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof a && a(b.state), this }, stop: function () { var a = this.get(0), b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPPlaypause"); return c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo(), this }, pause: function () { var a = this.get(0), b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPPlaypause"); return c.html(jQuery.mbYTPlayer.controls.play), a.player.pauseVideo(), this }, seekTo: function (a) { var b = this.get(0); return b.player.seekTo(a, !0), this }, setVolume: function (a) { var b = this.get(0); return a || b.opt.vol || 0 != b.player.getVolume() ? !a && b.player.getVolume() > 0 || a && b.opt.vol == a ? b.isMute ? jQuery(b).YTPUnmute() : jQuery(b).YTPMute() : (b.opt.vol = a, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a)) : jQuery(b).YTPUnmute(), this }, mute: function () { var a = this.get(0); if (!a.isMute) { a.player.mute(), a.isMute = !0, a.player.setVolume(0), a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0); var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPMuteUnmute"); c.html(jQuery.mbYTPlayer.controls.unmute), jQuery(a).addClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted"); var d = jQuery.Event("YTPMuted"); return d.time = a.player.time, a.canTrigger && jQuery(a).trigger(d), this } }, unmute: function () { var a = this.get(0); if (a.isMute) { a.player.unMute(), a.isMute = !1, a.player.setVolume(a.opt.vol), a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10); var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPMuteUnmute"); c.html(jQuery.mbYTPlayer.controls.mute), jQuery(a).removeClass("isMuted"), a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted"); var d = jQuery.Event("YTPUnmuted"); return d.time = a.player.time, a.canTrigger && jQuery(a).trigger(d), this } }, applyFilter: function (a, b) { var c = this.get(0); return c.filters[a].value = b, c.filtersEnabled && this.YTPEnableFilters(), this }, applyFilters: function (a) { var b = this.get(0); return this.on("YTPReady", function () { for (var c in a) b.filters[c].value = a[c], jQuery(b).YTPApplyFilter(c, a[c]); jQuery(b).trigger("YTPFiltersApplied") }), this }, toggleFilter: function (a, b) { return this.each(function () { var c = this; c.filters[a].value ? c.filters[a].value = 0 : c.filters[a].value = b, c.filtersEnabled && jQuery(this).YTPEnableFilters() }) }, toggleFilters: function (a) { return this.each(function () { var b = this; b.filtersEnabled ? (jQuery(b).trigger("YTPDisableFilters"), jQuery(b).YTPDisableFilters()) : (jQuery(b).YTPEnableFilters(), jQuery(b).trigger("YTPEnableFilters")), "function" == typeof a && a(b.filtersEnabled) }) }, disableFilters: function () { return this.each(function () { var a = this, b = jQuery(a.playerEl); b.css("-webkit-filter", ""), b.css("filter", ""), a.filtersEnabled = !1 }) }, enableFilters: function () { return this.each(function () { var a = this, b = jQuery(a.playerEl), c = ""; for (var d in a.filters) a.filters[d].value && (c += d.replace("_", "-") + "(" + a.filters[d].value + a.filters[d].unit + ") "); b.css("-webkit-filter", c), b.css("filter", c), a.filtersEnabled = !0 }) }, removeFilter: function (a, b) { return this.each(function () { "function" == typeof a && (b = a, a = null); var c = this; if (a) jQuery(this).YTPApplyFilter(a, 0), "function" == typeof b && b(a); else for (var d in c.filters) jQuery(this).YTPApplyFilter(d, 0), "function" == typeof b && b(d) }) }, manageProgress: function () { var a = this.get(0), b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPProgress"), d = b.find(".mb_YTPLoaded"), e = b.find(".mb_YTPseekbar"), f = c.outerWidth(), g = Math.floor(a.player.getCurrentTime()), h = Math.floor(a.player.getDuration()), i = g * f / h, j = 0, k = 100 * a.player.getVideoLoadedFraction(); return d.css({ left: j, width: k + "%" }), e.css({ left: 0, width: i }), { totalTime: h, currentTime: g } }, buildControls: function (YTPlayer) { var data = YTPlayer.opt; if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) { YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({ whiteSpace: "noWrap", position: YTPlayer.isBackground ? "fixed" : "absolute", zIndex: YTPlayer.isBackground ? 1e4 : 1e3 }).hide(); var buttonBar = jQuery("<div/>").addClass("buttonBar"), playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () { 1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay() }), MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () { 0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute() }), volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({ display: "inline-block" }); YTPlayer.volumeBar = volumeBar; var idx = jQuery("<span/>").addClass("mb_YTPTime"), vURL = data.videoURL ? data.videoURL : ""; vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL); var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () { window.open(vURL, "viewOnYT") }), onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () { jQuery(YTPlayer).YTPFullscreen(data.realfullscreen) }), progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (a) { timeBar.css({ width: a.clientX - timeBar.offset().left }), YTPlayer.timeW = a.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 }); var b = Math.floor(YTPlayer.player.getDuration()); YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 }) }), loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"), timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute"); progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({ initialval: YTPlayer.opt.vol, scale: 100, orientation: "h", callback: function (a) { 0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(a.value), YTPlayer.isMute || (YTPlayer.opt.vol = a.value) } }) } }, checkForState: function (YTPlayer) { var interval = YTPlayer.opt.showControls ? 100 : 700; return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void (YTPlayer.getState = setInterval(function () { var prog = jQuery(YTPlayer).YTPManageProgress(), $YTPlayer = jQuery(YTPlayer), data = YTPlayer.opt, startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0, stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0; if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) { var YTPEvent = jQuery.Event("YTPTime"); YTPEvent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEvent) } if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) { if (YTPlayer.isEnded) return; if (YTPlayer.isEnded = !0, setTimeout(function () { YTPlayer.isEnded = !1 }, 1e3), YTPlayer.isPlayList) { clearInterval(YTPlayer.getState); var YTPEnd = jQuery.Event("YTPEnd"); return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd) } data.loop ? (startAt = startAt || 1, YTPlayer.player.pauseVideo(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()) : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({ opacity: 0 }, 1e3, function () { var a = jQuery.Event("YTPEnd"); a.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(a), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({ background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center", backgroundSize: "cover" }) })) } }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt)) }, checkForStart: function (a) { var b = jQuery(a); if (!jQuery.contains(document, a)) return void jQuery(a).YTPPlayerDestroy(); if (jQuery.browser.chrome && (a.opt.quality = "default"), a.player.pauseVideo(), jQuery(a).muteYTPVolume(), jQuery("#controlBar_" + a.id).remove(), a.opt.showControls && jQuery.mbYTPlayer.buildControls(a), a.opt.addRaster) { var c = "dot" == a.opt.addRaster ? "raster-dot" : "raster"; a.overlay.addClass(a.isRetina ? c + " retina" : c) } else a.overlay.removeClass(function (a, b) { var c = b.split(" "), d = []; return jQuery.each(c, function (a, b) { /raster.*/.test(b) && d.push(b) }), d.push("retina"), d.join(" ") }); a.checkForStartAt = setInterval(function () { jQuery(a).YTPMute(); var c = a.opt.startAt ? a.opt.startAt : 1, d = a.player.getVideoLoadedFraction() > c / a.player.getDuration(); if (a.player.getDuration() > 0 && a.player.getCurrentTime() >= c && d) { clearInterval(a.checkForStartAt), a.isReady = !0, "function" == typeof a.opt.onReady && a.opt.onReady(a); var e = jQuery.Event("YTPReady"); jQuery(a).trigger(e), a.player.pauseVideo(), a.opt.mute || jQuery(a).YTPUnmute(), a.canTrigger = !0, a.opt.autoPlay ? (b.YTPPlay(), b.css("background-image", "none"), jQuery(a.playerEl).CSSAnimate({ opacity: 1 }, 1e3), a.wrapper.CSSAnimate({ opacity: a.isAlone ? 1 : a.opt.opacity }, 1e3)) : (a.player.pauseVideo(), a.isPlayer || (jQuery(a.playerEl).CSSAnimate({ opacity: 1 }, 1e3), a.wrapper.CSSAnimate({ opacity: a.isAlone ? 1 : a.opt.opacity }, 1e3))), a.isPlayer && !a.opt.autoPlay && (a.loading.html("Ready"), setTimeout(function () { a.loading.fadeOut() }, 100)), a.controlBar && a.controlBar.slideDown(1e3) } else c >= 0 && a.player.seekTo(c, !0) }, 1e3) }, formatTime: function (a) { var b = Math.floor(a / 60), c = Math.floor(a - 60 * b); return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c) } }, jQuery.fn.toggleVolume = function () { var a = this.get(0); if (a) return a.player.isMuted() ? (jQuery(a).YTPUnmute(), !0) : (jQuery(a).YTPMute(), !1) }, jQuery.fn.optimizeDisplay = function () { var a = this.get(0), b = a.opt, c = jQuery(a.playerEl), d = {}, e = a.wrapper; d.width = e.outerWidth(), d.height = e.outerHeight(); var f = 24, g = 100, h = {}; b.optimizeDisplay ? (h.width = d.width + d.width * f / 100, h.height = "16/9" == b.ratio ? Math.ceil(9 * d.width / 16) : Math.ceil(3 * d.width / 4), h.marginTop = -((h.height - d.height) / 2), h.marginLeft = -(d.width * (f / 2) / 100), h.height < d.height && (h.height = d.height + d.height * f / 100, h.width = "16/9" == b.ratio ? Math.floor(16 * d.height / 9) : Math.floor(4 * d.height / 3), h.marginTop = -(d.height * (f / 2) / 100), h.marginLeft = -((h.width - d.width) / 2)), h.width += g, h.height += g, h.marginTop -= g / 2, h.marginLeft -= g / 2) : (h.width = "100%", h.height = "100%", h.marginTop = 0, h.marginLeft = 0), c.css({ width: h.width, height: h.height, marginTop: h.marginTop, marginLeft: h.marginLeft }) }, jQuery.shuffle = function (a) { for (var b = a.slice(), c = b.length, d = c; d--;) { var e = parseInt(Math.random() * c), f = b[d]; b[d] = b[e], b[e] = f } return b }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData }(jQuery, ytp), jQuery.support.CSStransition = function () { var a = document.body || document.documentElement, b = a.style; return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition }(), jQuery.CSS = {
    name: "mb.CSSAnimate", author: "Matteo Bicocchi", version: "2.0.0", transitionEnd: "transitionEnd", sfx: "", filters: { blur: { min: 0, max: 100, unit: "px" }, brightness: { min: 0, max: 400, unit: "%" }, contrast: { min: 0, max: 400, unit: "%" }, grayscale: { min: 0, max: 100, unit: "%" }, hueRotate: { min: 0, max: 360, unit: "deg" }, invert: { min: 0, max: 100, unit: "%" }, saturate: { min: 0, max: 400, unit: "%" }, sepia: { min: 0, max: 100, unit: "%" } }, normalizeCss: function (a) {
        var b = jQuery.extend(!0, {}, a); jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"); for (var c in b) {
            "transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c], delete b[c]), "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c], delete b[c]), "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c], delete b[c]), "blur" === c && setFilter(b, "blur", a[c]), "brightness" === c && setFilter(b, "brightness", a[c]), "contrast" === c && setFilter(b, "contrast", a[c]), "grayscale" === c && setFilter(b, "grayscale", a[c]), "hueRotate" === c && setFilter(b, "hueRotate", a[c]),
            "invert" === c && setFilter(b, "invert", a[c]), "saturate" === c && setFilter(b, "saturate", a[c]), "sepia" === c && setFilter(b, "sepia", a[c]); var d = ""; "x" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateX(" + setUnit(a[c], "px") + ")", delete b[c]), "y" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateY(" + setUnit(a[c], "px") + ")", delete b[c]), "z" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateZ(" + setUnit(a[c], "px") + ")", delete b[c]), "rotate" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotate(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateX(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateY(" + setUnit(a[c], "deg") + ")", delete b[c]), "rotateZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")", delete b[c]), "scale" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scale(" + setUnit(a[c], "") + ")", delete b[c]), "scaleX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleX(" + setUnit(a[c], "") + ")", delete b[c]), "scaleY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleY(" + setUnit(a[c], "") + ")", delete b[c]), "scaleZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleZ(" + setUnit(a[c], "") + ")", delete b[c]), "skew" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skew(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewX(" + setUnit(a[c], "deg") + ")", delete b[c]), "skewY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewY(" + setUnit(a[c], "deg") + ")", delete b[c]), "perspective" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " perspective(" + setUnit(a[c], "px") + ")", delete b[c])
        } return b
    }, getProp: function (a) { var b = []; for (var c in a) b.indexOf(c) < 0 && b.push(uncamel(c)); return b.join(",") }, animate: function (a, b, c, d, e) { return this.each(function () { function f() { g.called = !0, g.CSSAIsRunning = !1, h.off(jQuery.CSS.transitionEnd + "." + g.id), clearTimeout(g.timeout), h.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof e && e.apply(g), "function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null) } var g = this, h = jQuery(this); g.id = g.id || "CSSA_" + (new Date).getTime(); var i = i || { type: "noEvent" }; if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void (g.CSSqueue = function () { h.CSSAnimate(a, b, c, d, e) }); if (g.CSSqueue = null, g.eventType = i.type, 0 !== h.length && a) { if (a = jQuery.normalizeCss(a), g.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (d = c, c = 0), "string" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b) for (var j in jQuery.fx.speeds) { if (b == j) { b = jQuery.fx.speeds[j]; break } b = jQuery.fx.speeds._default } if (b || (b = jQuery.fx.speeds._default), "string" == typeof e && (d = e, e = null), !jQuery.support.CSStransition) { for (var k in a) { if ("transform" === k && delete a[k], "filter" === k && delete a[k], "transform-origin" === k && delete a[k], "auto" === a[k] && delete a[k], "x" === k) { var l = a[k], m = "left"; a[m] = l, delete a[k] } if ("y" === k) { var l = a[k], m = "top"; a[m] = l, delete a[k] } ("-ms-transform" === k || "-ms-filter" === k) && delete a[k] } return void h.delay(c).animate(a, b, e) } var n = { "default": "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)" }; n[d] && (d = n[d]), h.off(jQuery.CSS.transitionEnd + "." + g.id); var o = jQuery.CSS.getProp(a), p = {}; jQuery.extend(p, a), p[jQuery.CSS.sfx + "transition-property"] = o, p[jQuery.CSS.sfx + "transition-duration"] = b + "ms", p[jQuery.CSS.sfx + "transition-delay"] = c + "ms", p[jQuery.CSS.sfx + "transition-timing-function"] = d, setTimeout(function () { h.one(jQuery.CSS.transitionEnd + "." + g.id, f), h.css(p) }, 1), g.timeout = setTimeout(function () { return g.called || !e ? (g.called = !1, void (g.CSSAIsRunning = !1)) : (h.css(jQuery.CSS.sfx + "transition", ""), e.apply(g), g.CSSAIsRunning = !1, void ("function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null))) }, b + c + 10) } }) }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (a) { return this.each(function () { var b = jQuery(this), c = jQuery.normalizeCss(a); b.css(c) }) }; var nAgt = navigator.userAgent; if (!jQuery.browser) { jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10); var nameOffset, verOffset, ix; if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) { jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer"; var start = nAgt.indexOf("rv:") + 3, end = start + 4; jQuery.browser.fullVersion = nAgt.substring(start, end) } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion } jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), !function (a) { /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()); var b = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1; a.simpleSlider = { defaults: { initialval: 0, scale: 100, orientation: "h", readonly: !1, callback: !1 }, events: { start: b ? "touchstart" : "mousedown", end: b ? "touchend" : "mouseup", move: b ? "touchmove" : "mousemove" }, init: function (c) { return this.each(function () { var d = this, e = a(d); e.addClass("simpleSlider"), d.opt = {}, a.extend(d.opt, a.simpleSlider.defaults, c), a.extend(d.opt, e.data()); var f = "h" == d.opt.orientation ? "horizontal" : "vertical", g = a("<div/>").addClass("level").addClass(f); e.prepend(g), d.level = g, e.css({ cursor: "default" }), "auto" == d.opt.scale && (d.opt.scale = a(d).outerWidth()), e.updateSliderVal(), d.opt.readonly || (e.on(a.simpleSlider.events.start, function (a) { b && (a = a.changedTouches[0]), d.canSlide = !0, e.updateSliderVal(a), e.css({ cursor: "col-resize" }), a.preventDefault(), a.stopPropagation() }), a(document).on(a.simpleSlider.events.move, function (c) { b && (c = c.changedTouches[0]), d.canSlide && (a(document).css({ cursor: "default" }), e.updateSliderVal(c), c.preventDefault(), c.stopPropagation()) }).on(a.simpleSlider.events.end, function () { a(document).css({ cursor: "auto" }), d.canSlide = !1, e.css({ cursor: "auto" }) })) }) }, updateSliderVal: function (b) { function c(a, b) { return Math.floor(100 * a / b) } var d = this, e = d.get(0); e.opt.initialval = "number" == typeof e.opt.initialval ? e.opt.initialval : e.opt.initialval(e); var f = a(e).outerWidth(), g = a(e).outerHeight(); e.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - d.offset().left : "number" == typeof b ? b * f / e.opt.scale : e.opt.initialval * f / e.opt.scale, e.y = "object" == typeof b ? b.clientY + document.body.scrollTop - d.offset().top : "number" == typeof b ? (e.opt.scale - e.opt.initialval - b) * g / e.opt.scale : e.opt.initialval * g / e.opt.scale, e.y = d.outerHeight() - e.y, e.scaleX = e.x * e.opt.scale / f, e.scaleY = e.y * e.opt.scale / g, e.outOfRangeX = e.scaleX > e.opt.scale ? e.scaleX - e.opt.scale : e.scaleX < 0 ? e.scaleX : 0, e.outOfRangeY = e.scaleY > e.opt.scale ? e.scaleY - e.opt.scale : e.scaleY < 0 ? e.scaleY : 0, e.outOfRange = "h" == e.opt.orientation ? e.outOfRangeX : e.outOfRangeY, e.value = "undefined" != typeof b ? "h" == e.opt.orientation ? e.x >= d.outerWidth() ? e.opt.scale : e.x <= 0 ? 0 : e.scaleX : e.y >= d.outerHeight() ? e.opt.scale : e.y <= 0 ? 0 : e.scaleY : "h" == e.opt.orientation ? e.scaleX : e.scaleY, "h" == e.opt.orientation ? e.level.width(c(e.x, f) + "%") : e.level.height(c(e.y, g)), "function" == typeof e.opt.callback && e.opt.callback(e) } }, a.fn.simpleSlider = a.simpleSlider.init, a.fn.updateSliderVal = a.simpleSlider.updateSliderVal }(jQuery), !function (a) { a.mbCookie = { set: function (a, b, c, d) { b = JSON.stringify(b), c || (c = 7), d = d ? "; domain=" + d : ""; var e, f = new Date; f.setTime(f.getTime() + 864e5 * c), e = "; expires=" + f.toGMTString(), document.cookie = a + "=" + b + e + "; path=/" + d }, get: function (a) { for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) { for (var e = c[d]; " " == e.charAt(0) ;) e = e.substring(1, e.length); if (0 == e.indexOf(b)) return JSON.parse(e.substring(b.length, e.length)) } return null }, remove: function (b) { a.mbCookie.set(b, "", -1) } }, a.mbStorage = { set: function (a, b) { b = JSON.stringify(b), localStorage.setItem(a, b) }, get: function (a) { return localStorage[a] ? JSON.parse(localStorage[a]) : null }, remove: function (a) { a ? localStorage.removeItem(a) : localStorage.clear() } } }(jQuery);