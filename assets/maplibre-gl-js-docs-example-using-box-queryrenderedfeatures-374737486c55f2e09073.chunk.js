(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{KyNt:function(e,t,n){var r=n("vQ8j");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Highlight features within a bounding box",description:"Hold the Shift key and drag the map to query features using queryRenderedFeatures.",topics:["User interaction"],thumbnail:"using-box-queryrenderedfeatures",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './using-box-queryrenderedfeatures.html';"]}}}},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},lzsW:function(e,t,n){"use strict";n.r(t),t.default="<style>\n    .boxdraw {\n        background: rgba(56, 135, 190, 0.1);\n        border: 2px solid #3887be;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 0;\n        height: 0;\n    }\n</style>\n\n<div id=\"map\"></div>\n\n<script>\n    var map = new mapboxgl.Map({\n        container: 'map',\n        style: 'mapbox://styles/mapbox/streets-v11',\n        center: [-98, 38.88],\n        minZoom: 2,\n        zoom: 3\n    });\n\n    // Disable default box zooming.\n    map.boxZoom.disable();\n\n    // Create a popup, but don't add it to the map yet.\n    var popup = new mapboxgl.Popup({\n        closeButton: false\n    });\n\n    map.on('load', function () {\n        var canvas = map.getCanvasContainer();\n\n        // Variable to hold the starting xy coordinates\n        // when `mousedown` occured.\n        var start;\n\n        // Variable to hold the current xy coordinates\n        // when `mousemove` or `mouseup` occurs.\n        var current;\n\n        // Variable for the draw box element.\n        var box;\n\n        // Add the source to query. In this example we're using\n        // county polygons uploaded as vector tiles\n        map.addSource('counties', {\n            'type': 'vector',\n            'url': 'mapbox://mapbox.82pkq93d'\n        });\n\n        map.addLayer(\n            {\n                'id': 'counties',\n                'type': 'fill',\n                'source': 'counties',\n                'source-layer': 'original',\n                'paint': {\n                    'fill-outline-color': 'rgba(0,0,0,0.1)',\n                    'fill-color': 'rgba(0,0,0,0.1)'\n                }\n            },\n            'settlement-label'\n        ); // Place polygon under these labels.\n\n        map.addLayer(\n            {\n                'id': 'counties-highlighted',\n                'type': 'fill',\n                'source': 'counties',\n                'source-layer': 'original',\n                'paint': {\n                    'fill-outline-color': '#484896',\n                    'fill-color': '#6e599f',\n                    'fill-opacity': 0.75\n                },\n                'filter': ['in', 'FIPS', '']\n            },\n            'settlement-label'\n        ); // Place polygon under these labels.\n\n        // Set `true` to dispatch the event before other functions\n        // call it. This is necessary for disabling the default map\n        // dragging behaviour.\n        canvas.addEventListener('mousedown', mouseDown, true);\n\n        // Return the xy coordinates of the mouse position\n        function mousePos(e) {\n            var rect = canvas.getBoundingClientRect();\n            return new mapboxgl.Point(\n                e.clientX - rect.left - canvas.clientLeft,\n                e.clientY - rect.top - canvas.clientTop\n            );\n        }\n\n        function mouseDown(e) {\n            // Continue the rest of the function if the shiftkey is pressed.\n            if (!(e.shiftKey && e.button === 0)) return;\n\n            // Disable default drag zooming when the shift key is held down.\n            map.dragPan.disable();\n\n            // Call functions for the following events\n            document.addEventListener('mousemove', onMouseMove);\n            document.addEventListener('mouseup', onMouseUp);\n            document.addEventListener('keydown', onKeyDown);\n\n            // Capture the first xy coordinates\n            start = mousePos(e);\n        }\n\n        function onMouseMove(e) {\n            // Capture the ongoing xy coordinates\n            current = mousePos(e);\n\n            // Append the box element if it doesnt exist\n            if (!box) {\n                box = document.createElement('div');\n                box.classList.add('boxdraw');\n                canvas.appendChild(box);\n            }\n\n            var minX = Math.min(start.x, current.x),\n                maxX = Math.max(start.x, current.x),\n                minY = Math.min(start.y, current.y),\n                maxY = Math.max(start.y, current.y);\n\n            // Adjust width and xy position of the box element ongoing\n            var pos = 'translate(' + minX + 'px,' + minY + 'px)';\n            box.style.transform = pos;\n            box.style.WebkitTransform = pos;\n            box.style.width = maxX - minX + 'px';\n            box.style.height = maxY - minY + 'px';\n        }\n\n        function onMouseUp(e) {\n            // Capture xy coordinates\n            finish([start, mousePos(e)]);\n        }\n\n        function onKeyDown(e) {\n            // If the ESC key is pressed\n            if (e.keyCode === 27) finish();\n        }\n\n        function finish(bbox) {\n            // Remove these events now that finish has been called.\n            document.removeEventListener('mousemove', onMouseMove);\n            document.removeEventListener('keydown', onKeyDown);\n            document.removeEventListener('mouseup', onMouseUp);\n\n            if (box) {\n                box.parentNode.removeChild(box);\n                box = null;\n            }\n\n            // If bbox exists. use this value as the argument for `queryRenderedFeatures`\n            if (bbox) {\n                var features = map.queryRenderedFeatures(bbox, {\n                    layers: ['counties']\n                });\n\n                if (features.length >= 1000) {\n                    return window.alert('Select a smaller number of features');\n                }\n\n                // Run through the selected features and set a filter\n                // to match features with unique FIPS codes to activate\n                // the `counties-highlighted` layer.\n                var filter = features.reduce(\n                    function (memo, feature) {\n                        memo.push(feature.properties.FIPS);\n                        return memo;\n                    },\n                    ['in', 'FIPS']\n                );\n\n                map.setFilter('counties-highlighted', filter);\n            }\n\n            map.dragPan.enable();\n        }\n\n        map.on('mousemove', function (e) {\n            var features = map.queryRenderedFeatures(e.point, {\n                layers: ['counties-highlighted']\n            });\n            // Change the cursor style as a UI indicator.\n            map.getCanvas().style.cursor = features.length ? 'pointer' : '';\n\n            if (!features.length) {\n                popup.remove();\n                return;\n            }\n\n            var feature = features[0];\n\n            popup\n                .setLngLat(e.lngLat)\n                .setText(feature.properties.COUNTY)\n                .addTo(map);\n        });\n    });\n<\/script>\n"},mOgX:function(e,t,n){"use strict";n.r(t);var r=n("f4rJ");n("yr+R");function o(e,t){return t&&t.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(e)}t.default={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),i=n("v8ZZ"),s=n.n(i),c=n("irdr"),u=n.n(c),l=n("M4Oy"),p=n.n(l),f=n("umIL"),d=n("wdKx");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,i=v(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).state={unsupported:!1},t}return t=c,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=d.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),s()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(s()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),c}(o.a.Component);O(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},vQ8j:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("q1tI")),a=(n("yr+R"),n("cQZ0"),c(n("uLm5"))),i=c(n("lzsW")),s=c(n("1wO5"));function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y={title:"Highlight features within a bounding box",description:"Hold the Shift key and drag the map to query features using queryRenderedFeatures.",topics:["User interaction"],thumbnail:"using-box-queryrenderedfeatures",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(m,e);var t,n,r,c=d(m);function m(){return l(this,m),c.apply(this,arguments)}return t=m,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(s.default,u({},e,{frontMatter:y}),o.default.createElement("div",null,o.default.createElement("p",null,"Hold ",o.default.createElement("kbd",null,"Shift")," and drag the map to query features using ",o.default.createElement("a",{href:"/mapbox-gl-js/api/map/#map#queryrenderedfeatures"},o.default.createElement("code",null,"queryRenderedFeatures")),"."),o.default.createElement(a.default,u({html:i.default},this.props))))}}])&&p(t.prototype,n),r&&p(t,r),m}(o.default.PureComponent);t.default=b},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,s=/<body[\s\S]*?>((.|\n)*)<\/body>/,c=e.match(i),u="".concat(e.replace(a,"")),l=e.match(a)[1];c&&(c.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),u="".concat(u.replace(i,"")));if(e.match(r)){var p=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),u="".concat(u.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),u="".concat(u.replace(/<link[\s\S]*?>/g,""))}u.match(s)&&(u=u.match(s)[1]);return{html:u,css:t,js:l,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-using-box-queryrenderedfeatures-374737486c55f2e09073.chunk.js.map