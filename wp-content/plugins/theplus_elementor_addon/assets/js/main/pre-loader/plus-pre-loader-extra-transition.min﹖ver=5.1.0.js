/*preloader*/
(function(a) {
    'use strict';
    a(document).ready(function() {
        var b, c, d, e = "";
        if (a(".tp-4-preload-topleft").length || a(".tp-4-preload-topright").length || a(".tp-4-preload-bottomleft").length || a(".tp-4-preload-bottomright").length) {
            var f = {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                g = Math.sqrt(Math.pow(f.width, 2) + Math.pow(f.height, 2));
            b = c = g + "px", a(".tp-4-preload-topleft").length ? d = "translate3d(-50%,-50%,0) rotate3d(0,0,1,135deg) translate3d(0," + g + "px,0)" : a(".tp-4-preload-topright").length ? d = "translate3d(-50%,-50%,0) rotate3d(0,0,1,-135deg) translate3d(0," + g + "px,0)" : a(".tp-4-preload-bottomleft").length ? d = "translate3d(-50%,-50%,0) rotate3d(0,0,1,45deg) translate3d(0," + g + "px,0)" : a(".tp-4-preload-bottomright").length && (d = "translate3d(-50%,-50%,0) rotate3d(0,0,1,-45deg) translate3d(0," + g + "px,0)")
        } else a(".tp-4-preload-left").length || a(".tp-4-preload-right").length ? (b = "100vh", c = "100vw", e = "right", a(".tp-4-preload-left").length && (e = "left"), d = "translate3d(-50%,-50%,0) rotate3d(0,0,1," + ("left" === e ? 90 : -90) + "deg) translate3d(0,100%,0)") : (a(".tp-4-preload-top").length || a(".tp-4-preload-bottom").length) && (b = "100vw", c = "100vh", e = "bottom", a(".tp-4-preload-top").length && (e = "top"), d = "top" === e ? "rotate3d(0,0,1,180deg)" : "none");
        (a(".tp-4-preload-topleft").length || a(".tp-4-preload-topright").length || a(".tp-4-preload-bottomleft").length || a(".tp-4-preload-bottomright").length || a(".tp-4-preload-left").length || a(".tp-4-preload-right").length || a(".tp-4-preload-top").length || a(".tp-4-preload-bottom").length) && a(".tp-loader-wrapper .tp-preload-reveal-layer-box").css("width", b).css("height", c).css("transform", d).css("-webkit-transform", d).css("opacity", 1)
    })
})(jQuery);