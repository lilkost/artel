
function ooze() {
    Curves.init(document.querySelector(".canvas__parent"))
}

Curves = function() {
    function e(e, t) {
        this.points = e,
        this.color = t
    }
    function t(e) {
        a.width = c,
        a.height = d,
        e.appendChild(a),
        l.fillStyle = "#000000",
        i(),
        window.onresize = function() {
            r()
        }
    }
    function n() {
        s = window.requestAnimationFrame(n),
        l.fillRect(0, 0, c, d),
        p.forEach(function(e) {
            e.render(l, c, d)
        })
    }
    function i() {
        n()
    }
    function o() {
        window.cancelAnimationFrame(s)
    }
    function r() {
        a.width = c = window.innerWidth,
        a.height = d = window.innerHeight
    }
    var s = 0;
    if (e.prototype.render = function(e, t, n) {
        var i = this;
        e.save(),
        e.lineWidth = 2,
        e.strokeStyle = "#fff",
        e.fillStyle = "rgba(255, 255, 255, 0)",
        e.fillStyle = this.color,
        e.beginPath(),
        e.moveTo(this.points[0].x, this.points[0].y),
        this.points.forEach(function(t, n) {
            t.y = t.oldY + 35 * Math.sin(t.angle),
            t.angle += t.speed;
            var o = i.points[n + 1];
            if (o) {
                var r = {
                    x: (t.x + o.x) / 2,
                    y: (t.y + o.y) / 2
                };
                e.quadraticCurveTo(t.x, t.y, r.x, r.y)
            }
        }),
        e.lineTo(t, n),
        e.lineTo(0, n),
        e.fill(),
        e.restore()
    }
    ,
    $("#ooze").length)
        var a = document.getElementById("ooze")
          , l = a.getContext("2d");
    var c = window.innerWidth
      , d = window.innerHeight
      , u = ["#2f3030", "#5e6060", "#ecf0f1", "#8d9090", "#bcc0c0", "#ecf0f1"]
      , p = function(t, n, i) {
        for (var o = [], r = 0; r < t; r += 1) {
            for (var s = [], a = 0, l = 0; l <= c + c / 4; l += i) {
                var d = 360 * Math.random();
                0 === r && (a = 20 + 40 * Math.random() - 10),
                1 === r && (a = 80 + 60 * Math.random() - 10),
                2 === r && (a = 110 + 80 * Math.random() - 10),
                3 === r && (a = 150 + 100 * Math.random() - 10),
                4 === r && (a = 200 + 130 * Math.random() - 10),
                5 === r && (a = 250 + 170 * Math.random() - 10),
                a -= l / 20;
                var p = {
                    x: l,
                    y: n + a + 10 + 20 * Math.random(),
                    oldY: n + a,
                    angle: d,
                    speed: .015
                };
                s.push(p)
            }
            var f = new e(s,u[r]);
            o.push(f)
        }
        return o
    }(3, d / 1.5, c / 20);
    return {
        init: t,
        startRender: i,
        stopRender: o
    }
}();
$(function() {
    // var e = {
    //     prefetch: !0,
    //     cacheLength: 4,
    //     blacklist: "form, .no-smoothState",
    //     onStart: {
    //         duration: 1500,
    //         render: function(e) {
    //             $(".cbp-spmenu").removeClass("cbp-spmenu-open"),
    //             $(".shape-overlays").css("display", "block").fadeIn("fast"),
    //             function() {
    //                 var e = document.querySelector(".shape-overlays");
    //                 new ShapeOverlays(e).toggle()
    //             }(),
    //             hideModals(),
    //             e.addClass("is-exiting")
    //         }
    //     },
    //     onReady: {
    //         duration: 0,
    //         render: function(e, t) {
    //             e.removeClass("is-exiting"),
    //             e.html(t)
    //         }
    //     },
    //     onAfter: function() {
    //         // prepOnLoad(),
    //         prep(),
    //         $("#ooze").length && (Curves.stopRender(),
    //         Curves.startRender()),
    //         $(".shape-overlays").fadeOut("slow").delay(1e3).css("display", "none)"),
    //         dataLayer.push({
    //             event: "virtualPageView",
    //             virtualUrl: location.pathname,
    //             virtualTitle: document.title
    //         }),
    //         $(window).trigger("resize")
    //     }
    // };
    // $("#main").smoothState(e).data("smoothState")
}),
$(document).ready(function() {
    // prepOnLoad(),
    // prep(),
    // $(window).trigger("resize")
}),
$(window).on("load", function() {
    $.ready.then(function() {
        $("html").css("opacity", "1")
    }),
    $("#ooze").length && (Curves.stopRender(),
    ooze())
});
ooze();
window.addEventListener("resize", ()=> ooze())