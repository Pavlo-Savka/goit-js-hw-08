var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const e=document.querySelector("iframe"),n=new Vimeo.Player(e);var i={},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return d.Date.now()};function m(t,e,n){var i,r,o,u,f,a,c=0,l=!1,d=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function T(t){return c=t,f=setTimeout(j,e),l?m(t):u}function h(t){var n=t-a;return void 0===a||n>=e||n<0||d&&t-c>=o}function j(){var t=y();if(h(t))return w(t);f=setTimeout(j,function(t){var n=e-(t-a);return d?v(n,o-(t-c)):n}(t))}function w(t){return f=void 0,s&&i?m(t):(i=r=void 0,u)}function x(){var t=y(),n=h(t);if(i=arguments,r=this,a=t,n){if(void 0===f)return T(a);if(d)return f=setTimeout(j,e),m(a)}return void 0===f&&(f=setTimeout(j,e)),u}return e=b(e)||0,g(n)&&(l=!!n.leading,o=(d="maxWait"in n)?p(b(n.maxWait)||0,e):o,s="trailing"in n?!!n.trailing:s),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},x.flush=function(){return void 0===f?u:w(y())},x}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=u.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}i=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(t,e,{leading:i,maxWait:e,trailing:r})};n.on("timeupdate",i((function(t){localStorage.setItem("videoplayer-current-time",t.seconds)}),1e3));try{n.setCurrentTime(localStorage.getItem("videoplayer-current-time"))}catch(t){n.setCurrentTime(0)}
//# sourceMappingURL=02-video.a3fd410e.js.map
