/**
 * @package SP Page Builder
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2023 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */
function initSPPageBuilderGMap(t) {
    var e = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode: function (t) {
            var a,
                r,
                o,
                n,
                d,
                i,
                s = "",
                c = 0;
            for (t = t.replace(/[^A-Za-z0-9+/=]/g, ""); c < t.length; )
                (a = (this._keyStr.indexOf(t.charAt(c++)) << 2) | ((n = this._keyStr.indexOf(t.charAt(c++))) >> 4)),
                    (r = ((15 & n) << 4) | ((d = this._keyStr.indexOf(t.charAt(c++))) >> 2)),
                    (o = ((3 & d) << 6) | (i = this._keyStr.indexOf(t.charAt(c++)))),
                    (s += String.fromCharCode(a)),
                    64 != d && (s += String.fromCharCode(r)),
                    64 != i && (s += String.fromCharCode(o));
            return (s = e._utf8_decode(s));
        },
        _utf8_decode: function (t) {
            for (var e = "", a = 0, r = (c1 = c2 = 0); a < t.length; )
                (r = t.charCodeAt(a)) < 128
                    ? ((e += String.fromCharCode(r)), a++)
                    : r > 191 && r < 224
                    ? ((c2 = t.charCodeAt(a + 1)), (e += String.fromCharCode(((31 & r) << 6) | (63 & c2))), (a += 2))
                    : ((c2 = t.charCodeAt(a + 1)), (c3 = t.charCodeAt(a + 2)), (e += String.fromCharCode(((15 & r) << 12) | ((63 & c2) << 6) | (63 & c3))), (a += 3));
            return e;
        },
    };
    jQuery(".sppb-addon-gmap-canvas", t).each(function (a) {
        var r = jQuery(this).attr("id"),
            o = Number(jQuery(this).attr("data-mapzoom")),
            n = jQuery(this).attr("data-infowindow"),
            d = "true" === jQuery(this).attr("data-mousescroll"),
            i = "true" === jQuery(this).attr("data-show-controll"),
            s = jQuery(this).attr("data-maptype"),
            c = { lat: Number(jQuery(this).attr("data-lat")), lng: Number(jQuery(this).attr("data-lng")) },
            u = new google.maps.Map(t.getElementById(r), { center: new google.maps.LatLng(c), zoom: o, scrollwheel: d, disableDefaultUI: i });
        if (void 0 !== jQuery(this).attr("data-location")) {
            for (
                var h = jQuery(this).attr("data-lat"),
                    l = jQuery(this).attr("data-lng"),
                    g = e.decode(n),
                    f = JSON.stringify([{ address: g, latitude: h, longitude: l }]),
                    p = e.decode(jQuery(this).attr("data-location")),
                    m = JSON.parse(f),
                    y = JSON.parse(p),
                    C = m.concat(y),
                    S = [],
                    j = 0;
                j < C.length;
                j++
            ) {
                var Q = C[j];
                S.push([Q.address] + ";" + [Q.latitude] + ";" + [Q.longitude]);
            }
            for (var w = [], v = 0; v < S.length; v++) w.push(S[v].split(";"));
            var A,
                _ = w;
            n = new google.maps.InfoWindow();
            for (j = 0; j < _.length; j++)
                (A = new google.maps.Marker({ position: new google.maps.LatLng(_[j][1], _[j][2]), map: u })),
                    google.maps.event.addListener(
                        A,
                        "click",
                        (function (t, e) {
                            return function () {
                                _[e][0] && (n.setContent(_[e][0]), n.open(u, t));
                            };
                        })(A, j)
                    );
        }
        u.setMapTypeId(google.maps.MapTypeId[s]);
    });
}
jQuery(window).on("load", function () {
    initSPPageBuilderGMap(document);
});
