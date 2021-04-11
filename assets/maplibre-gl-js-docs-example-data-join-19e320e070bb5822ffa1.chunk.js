(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},Q1b5:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),c=s(n("a+Ag")),i=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y={title:"Join local JSON data with vector tile geometries",description:"Style a choropleth by merging local JSON data with vector tile geometries.",topics:["Sources"],thumbnail:"data-join",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(h,e);var t,n,r,s=d(h);function h(){return l(this,h),s.apply(this,arguments)}return t=h,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(i.default,u({},e,{frontMatter:y}),o.default.createElement("div",null,o.default.createElement("p",null,"Style a choropleth by merging local JSON data with vector tile geometries."),o.default.createElement(a.default,u({html:c.default},this.props))))}}])&&p(t.prototype,n),r&&p(t,r),h}(o.default.PureComponent);t.default=b},XBxu:function(e,t,n){var r=n("Q1b5");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Join local JSON data with vector tile geometries",description:"Style a choropleth by merging local JSON data with vector tile geometries.",topics:["Sources"],thumbnail:"data-join",contentType:"example",layout:"example",language:["JavaScript"],products:["Mapbox GL JS"],prependJs:["import Example from '../../components/example';","import html from './data-join.html';"]}}}},"a+Ag":function(e,t,n){"use strict";n.r(t),t.default='<div id="map"></div>\n<script>\n    var map = new mapboxgl.Map({\n        container: \'map\',\n        style: \'mapbox://styles/mapbox/light-v10\',\n        center: [12, 50],\n        zoom: 1.6\n    });\n\n    // Data: UN Human Development Index 2017 Europe extract\n    // Source: https://ourworldindata.org/human-development-index\n    var data = [{ "code": "ROU", "hdi": 0.811 },\n                { "code": "RUS", "hdi": 0.816 },\n                { "code": "SRB", "hdi": 0.787 },\n                { "code": "SVK", "hdi": 0.855 },\n                { "code": "SVN", "hdi": 0.896 },\n                { "code": "ESP", "hdi": 0.891 },\n                { "code": "SWE", "hdi": 0.933 },\n                { "code": "CHE", "hdi": 0.944 },\n                { "code": "HRV", "hdi": 0.831 },\n                { "code": "CZE", "hdi": 0.888 },\n                { "code": "DNK", "hdi": 0.929 },\n                { "code": "EST", "hdi": 0.871 },\n                { "code": "FIN", "hdi": 0.92 },\n                { "code": "FRA", "hdi": 0.901 },\n                { "code": "DEU", "hdi": 0.936 },\n                { "code": "GRC", "hdi": 0.87 },\n                { "code": "ALB", "hdi": 0.785 },\n                { "code": "AND", "hdi": 0.858 },\n                { "code": "AUT", "hdi": 0.908 },\n                { "code": "BLR", "hdi": 0.808 },\n                { "code": "BEL", "hdi": 0.916 },\n                { "code": "BIH", "hdi": 0.768 },\n                { "code": "BGR", "hdi": 0.813 },\n                { "code": "MKD", "hdi": 0.757 },\n                { "code": "MLT", "hdi": 0.878 },\n                { "code": "MDA", "hdi": 0.7 },\n                { "code": "MNE", "hdi": 0.814 },\n                { "code": "NLD", "hdi": 0.931 },\n                { "code": "NOR", "hdi": 0.953 },\n                { "code": "POL", "hdi": 0.865 },\n                { "code": "PRT", "hdi": 0.847 },\n                { "code": "HUN", "hdi": 0.838 },\n                { "code": "ISL", "hdi": 0.935 },\n                { "code": "IRL", "hdi": 0.938 },\n                { "code": "ITA", "hdi": 0.88 },\n                { "code": "LVA", "hdi": 0.847 },\n                { "code": "LIE", "hdi": 0.916 },\n                { "code": "LTU", "hdi": 0.858 },\n                { "code": "LUX", "hdi": 0.904 },\n                { "code": "UKR", "hdi": 0.751 },\n                { "code": "GBR", "hdi": 0.922 } ]\n\n    map.on(\'load\', function () {\n\n        // Add source for country polygons using the Mapbox Countries tileset\n        // The polygons contain an ISO 3166 alpha-3 code which can be used to for joining the data\n        // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1\n        map.addSource(\'countries\', {\n            type: \'vector\',\n            url: \'mapbox://mapbox.country-boundaries-v1\'\n        });\n\n        // Build a GL match expression that defines the color for every vector tile feature\n        // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape\n        var matchExpression = [\'match\', [\'get\', \'iso_3166_1_alpha_3\']];\n\n        // Calculate color values for each country based on \'hdi\' value\n        data.forEach(function (row) {\n\n            // Convert the range of data values to a suitable color\n            var green = row[\'hdi\'] * 255;\n            var color = \'rgb(0, \'+ green + \', 0)\';\n\n            matchExpression.push(row[\'code\'], color);\n\n        });\n\n        // Last value is the default, used where there is no data\n        matchExpression.push(\'rgba(0, 0, 0, 0)\');\n\n        // Add layer from the vector tile source to create the choropleth\n        // Insert it below the \'admin-1-boundary-bg\' layer in the style\n        map.addLayer({\n            \'id\': \'countries-join\',\n            \'type\': \'fill\',\n            \'source\': \'countries\',\n            \'source-layer\': \'country_boundaries\',\n            \'paint\': {\n                \'fill-color\': matchExpression\n            }\n        }, \'admin-1-boundary-bg\');\n\n    });\n\n<\/script>\n'},mOgX:function(e,t,n){"use strict";n.r(t);var r=n("f4rJ");n("yr+R");function o(e,t){return t&&t.local,"https://unpkg.com/maplibre-gl@".concat(r.a,"/dist/maplibre-gl.").concat(e)}t.default={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n("q1tI"),o=n.n(r),a=(n("17x9"),n("mOgX")),c=n("v8ZZ"),i=n.n(c),s=n("irdr"),u=n.n(s),l=n("M4Oy"),p=n.n(l),f=n("umIL"),d=n("wdKx");function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,r,c=v(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).state={unsupported:!1},t}return t=s,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n<script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin=\"anonymous\"><\/script>\n<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin=\"anonymous\"><\/script>\n\n<script src='").concat(a.default.js({local:!0}),"'><\/script>\n<link href='").concat(a.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n<script>\nif (window.map instanceof mapboxgl.Map) {\n    var i = new instrumentile(map, {\n        token: '").concat(MapboxPageShell.getMapboxAccessToken(),"',\n        api: 'https://api.tiles.mapbox.com',\n        source: 'docs-examples'\n    });\n}\n<\/script>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=d.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(t),highlighter:function(){return f.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),i()()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(i()()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),s}(o.a.Component);x(E,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){const e=document.createElement("canvas");e.width=e.height=1;const t=e.getContext("2d");if(!t)return!1;const n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){const t=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.probablySupportsContext?t.probablySupportsContext("webgl",n)||t.probablySupportsContext("experimental-webgl",n):t.supportsContext?t.supportsContext("webgl",n)||t.supportsContext("experimental-webgl",n):t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!t)return!1;const n=t.createShader(t.VERTEX_SHADER);if(!n||t.isContextLost())return!1;return t.shaderSource(n,"void main() {}"),t.compileShader(n),!0===t.getShaderParameter(n,t.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}e.exports?e.exports=r:window&&(window.mapboxgl=window.mapboxgl||{},window.mapboxgl.supported=r,window.mapboxgl.notSupportedReason=o);var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,c=/<style\b[^>]*>([\s\S]*?)<\/style>/g,i=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(c),u="".concat(e.replace(a,"")),l=e.match(a)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),u="".concat(u.replace(c,"")));if(e.match(r)){var p=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),u="".concat(u.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),u="".concat(u.replace(/<link[\s\S]*?>/g,""))}u.match(i)&&(u=u.match(i)[1]);return{html:u,css:t,js:l,resources:n}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-data-join-19e320e070bb5822ffa1.chunk.js.map