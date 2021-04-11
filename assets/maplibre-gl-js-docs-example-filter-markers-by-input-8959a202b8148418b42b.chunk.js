(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{Dnxb:function(t,e,n){var r=n("auy+");r=r.default||r,t.exports={component:r,props:{frontMatter:{title:"Filter symbols by text input",description:"Filter symbols by icon name by typing in a text input.",topics:["User interaction"],thumbnail:"filter-markers-by-input",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './filter-markers-by-input.html';"]}}}},LMBu:function(t,e,n){"use strict";n.r(e),e.default="<style>\n    .filter-ctrl {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        z-index: 1;\n    }\n\n    .filter-ctrl input[type='text'] {\n        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n        width: 100%;\n        border: 0;\n        background-color: #fff;\n        margin: 0;\n        color: rgba(0, 0, 0, 0.5);\n        padding: 10px;\n        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n        border-radius: 3px;\n        width: 180px;\n    }\n</style>\n<div id=\"map\"></div>\n<div class=\"filter-ctrl\">\n    <input\n        id=\"filter-input\"\n        type=\"text\"\n        name=\"filter\"\n        placeholder=\"Filter by name\"\n    />\n</div>\n\n<script>\n    var places = {\n        'type': 'FeatureCollection',\n        'features': [\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'theatre'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.038659, 38.931567]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'theatre'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.003168, 38.894651]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'bar'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.090372, 38.881189]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'bicycle'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.052477, 38.943951]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'music'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.031706, 38.914581]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'music'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.020945, 38.878241]\n                }\n            },\n            {\n                'type': 'Feature',\n                'properties': {\n                    'icon': 'music'\n                },\n                'geometry': {\n                    'type': 'Point',\n                    'coordinates': [-77.007481, 38.876516]\n                }\n            }\n        ]\n    };\n\n    var layerIDs = []; // Will contain a list used to filter against.\n    var filterInput = document.getElementById('filter-input');\n    var map = new mapboxgl.Map({\n        container: 'map',\n        style: 'mapbox://styles/mapbox/light-v10',\n        center: [-77.04, 38.907],\n        zoom: 11.15\n    });\n\n    map.on('load', function () {\n        // Add a GeoJSON source containing place coordinates and information.\n        map.addSource('places', {\n            'type': 'geojson',\n            'data': places\n        });\n\n        places.features.forEach(function (feature) {\n            var symbol = feature.properties['icon'];\n            var layerID = 'poi-' + symbol;\n\n            // Add a layer for this symbol type if it hasn't been added already.\n            if (!map.getLayer(layerID)) {\n                map.addLayer({\n                    'id': layerID,\n                    'type': 'symbol',\n                    'source': 'places',\n                    'layout': {\n                        'icon-image': symbol + '-15',\n                        'icon-allow-overlap': true,\n                        'text-field': symbol,\n                        'text-font': [\n                            'Open Sans Bold',\n                            'Arial Unicode MS Bold'\n                        ],\n                        'text-size': 11,\n                        'text-transform': 'uppercase',\n                        'text-letter-spacing': 0.05,\n                        'text-offset': [0, 1.5]\n                    },\n                    'paint': {\n                        'text-color': '#202',\n                        'text-halo-color': '#fff',\n                        'text-halo-width': 2\n                    },\n                    'filter': ['==', 'icon', symbol]\n                });\n\n                layerIDs.push(layerID);\n            }\n        });\n\n        filterInput.addEventListener('keyup', function (e) {\n            // If the input value matches a layerID set\n            // it's visibility to 'visible' or else hide it.\n            var value = e.target.value.trim().toLowerCase();\n            layerIDs.forEach(function (layerID) {\n                map.setLayoutProperty(\n                    layerID,\n                    'visibility',\n                    layerID.indexOf(value) > -1 ? 'visible' : 'none'\n                );\n            });\n        });\n    });\n<\/script>\n"},M4Oy:function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;e.default=o},"auy+":function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("q1tI")),i=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),a=s(n("LMBu")),c=s(n("1wO5"));function s(t){return t&&t.__esModule?t:{default:t}}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b={title:"Filter symbols by text input",description:"Filter symbols by icon name by typing in a text input.",topics:["User interaction"],thumbnail:"filter-markers-by-input",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(m,t);var e,n,r,s=y(m);function m(){return l(this,m),s.apply(this,arguments)}return e=m,(n=[{key:"render",value:function(){var t=this.props;return o.default.createElement(c.default,p({},t,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Filter ",o.default.createElement("a",{href:"/mapbox-gl-js/style-spec/layers/#symbol"},"symbols")," by icon name by typing in a text input."),o.default.createElement(i.default,p({html:a.default},this.props))))}}])&&u(e.prototype,n),r&&u(e,r),m}(o.default.PureComponent);e.default=h},mOgX:function(t,e,n){"use strict";n.r(e);var r=n("f4rJ");n("yr+R");function o(t,e){return e&&e.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(t)}e.default={js:function(t){return o("js",t)},css:function(t){return o("css",t)}}},uLm5:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),i=(n("17x9"),n("mOgX")),a=n("v8ZZ"),c=n.n(a),s=n("irdr"),p=n.n(s),l=n("M4Oy"),u=n.n(l),f=n("umIL"),y=n("wdKx");function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=x(t);if(e){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,r,a=v(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).state={unsupported:!1},e}return e=s,(n=[{key:"displayHTML",value:function(t){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n</html>")}},{key:"renderHTML",value:function(t){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(i.default.js({local:!0}),"'><\/script>\n<link href='").concat(i.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(t,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var t=this.props,e=t.html,n=t.location,r=this.displayHTML(e),i=y.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(e),highlighter:function(){return f.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var t=this,e=this.props,n=e.frontMatter,r=e.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),c()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(e){t.iframe=e},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(c()()||this.setState({unsupported:!0}),this.iframe){var t=this.iframe.contentWindow.document;t.open(),t.write(this.renderHTML(this.props.html)),t.close()}}}])&&h(e.prototype,n),r&&h(e,r),s}(o.a.Component);O(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(t,e,n){"use strict";function r(t){return!o(t)}function o(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var t,e,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{e=new Worker(r),t=!0}catch(e){t=!1}e&&e.terminate();return URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const t=document.createElement("canvas");t.width=t.height=1;const e=t.getContext("2d");if(!e)return!1;const n=e.getImageData(0,0,1,1);return n&&n.width===t.width}()?function(t){void 0===i[t]&&(i[t]=function(t){const e=function(t){var e=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=t,e.probablySupportsContext?e.probablySupportsContext("webgl",n)||e.probablySupportsContext("experimental-webgl",n):e.supportsContext?e.supportsContext("webgl",n)||e.supportsContext("experimental-webgl",n):e.getContext("webgl",n)||e.getContext("experimental-webgl",n)}(t);if(!e)return!1;const n=e.createShader(e.VERTEX_SHADER);if(!n||e.isContextLost())return!1;return e.shaderSource(n,"void main() {}"),e.compileShader(n),!0===e.getShaderParameter(n,e.COMPILE_STATUS)}(t));return i[t]}(t&&t.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.exports?t.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var i={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extractor=function(t){var e="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=t.match(a),p="".concat(t.replace(i,"")),l=t.match(i)[1];s&&(s.forEach((function(t){e+=t.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(a,"")));if(t.match(r)){var u=t.match(r).map((function(t){return t.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(u),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(t.match(o)){var f=t.match(o).map((function(t){return t.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(c)&&(p=p.match(c)[1]);return{html:p,css:e,js:l,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-filter-markers-by-input-8959a202b8148418b42b.chunk.js.map