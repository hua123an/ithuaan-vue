<script setup>
import {ref} from "vue"
const dataList = {
  class : [{
    "title": " \n            学习 HTML        ",
    "titleLink": "https://www.runoob.com/html/html-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/HTML.png",
    "description": " 超文本标记语言,是一种用于创建网页的标准标记语言。"
  }, {
    "title": " \n            学习 HTML5        ",
    "titleLink": "https://www.runoob.com/html/html5-intro.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/HTML5.png",
    "description": " HTML5 是下一代 HTML 标准"
  }, {
    "title": " \n            学习 CSS        ",
    "titleLink": "https://www.runoob.com/css/css-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/css-logo.png",
    "description": " 层叠样式表 (Cascading Style Sheets)"
  }, {
    "title": " \n            学习 CSS3        ",
    "titleLink": "https://www.runoob.com/css3/css3-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/css3.jpg",
    "description": " CSS3 是最新的 CSS 标准"
  }, {
    "title": " \n            学习 Bootstrap3        ",
    "titleLink": "https://www.runoob.com/bootstrap/bootstrap-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Bootstrap.png",
    "description": " 是一个用于快速开发 Web 应用程序和网站的前端框架"
  }, {
    "title": " \n            学习 Bootstrap4        ",
    "titleLink": "https://www.runoob.com/bootstrap4/bootstrap4-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Bootstrap4.png",
    "description": " 是一套用于 HTML、CSS 和 JS 开发的开源工具集"
  }, {
    "title": " \n            学习 Bootstrap5        ",
    "titleLink": "https://www.runoob.com/bootstrap5/bootstrap5-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Bootstrap5.jpg",
    "description": " Bootstrap5 目前是 Bootstrap 的最新版本"
  }, {
    "title": " \n            学习 Font Awesome        ",
    "titleLink": "https://www.runoob.com/font-awesome/fontawesome-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Font-Awesome.jpg",
    "description": " 是一套绝佳的图标字体库和CSS框架"
  }, {
    "title": " \n            学习 Foundation        ",
    "titleLink": "https://www.runoob.com/foundation/foundation-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/foundation.png",
    "description": " 用于开发响应式的 HTML, CSS and JavaScript 框架"
  }, {
    "title": " \n            学习 JavaScript        ",
    "titleLink": "https://www.runoob.com/js/js-tutorial.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/js-logo.png",
    "description": " JavaScript 是 Web 的编程语言"
  },
    {
      "title": "学习TypeScript",
      "titleLink": "https://wangdoc.com/typescript/",
      "img": "./img/TypeScript.png",
      "description": "网道学习TypeScript网站"

    },
    {
      "title": "学习JavaScript",
      "titleLink": "https://wangdoc.com/javascript/",
      "img": "./img/TypeScript.png",
      "description": "网道学习JavaScript网站"
    },
    {
      "title": "学习HTML",
      "titleLink": "https://wangdoc.com/html/",
      "img": "./img/TypeScript.png",
      "description": "网道学习HTML网站"
    },
    {
      "title": "学习ES6",
      "titleLink": "https://wangdoc.com/es6/",
      "img": "./img/TypeScript.png",
      "description": "网道学习es6网站"
    },
    {
      "title": "学习WebAPI",
      "titleLink": "https://wangdoc.com/webapi/",
      "img": "./img/TypeScript.png",
      "description": "网道学习webapi网站"
    },

    {
      "title": " \n            学习 HTML DOM        ",
      "titleLink": "https://www.runoob.com/htmldom/htmldom-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/html-dom.png",
      "description": " 定义了访问和操作 HTML 文档的标准"
    }, {
      "title": " \n            学习 jQuery        ",
      "titleLink": "https://www.runoob.com/jquery/jquery-intro.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/jquery.png",
      "description": " jQuery 是一个 JavaScript 库"
    }, {
      "title": " \n            学习 AngularJS        ",
      "titleLink": "https://www.runoob.com/angularjs/angularjs-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/angular.jpg",
      "description": " AngularJS 通过新的属性和表达式扩展了 HTML"
    }, {
      "title": " \n            学习 Angular 2        ",
      "titleLink": "https://www.runoob.com/angularjs2/angularjs2-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/angular2.png",
      "description": " Angular2 是一款开源JavaScript库，由Google维护"
    }, {
      "title": " \n            学习 Vue.js        ",
      "titleLink": "https://www.runoob.com/vue2/vue-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/vue-3.png",
      "description": "  是一套构建用户界面的渐进式框架"
    }, {
      "title": " \n            学习 Vue3        ",
      "titleLink": "https://www.runoob.com/vue3/vue3-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/vue-3.png",
      "description": "  是一套构建用户界面的渐进式框架"
    }, {
      "title": " \n            学习 React        ",
      "titleLink": "https://www.runoob.com/react/react-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/react.png",
      "description": " 是一个用于构建用户界面的 JAVASCRIPT 库"
    }, {
      "title": " \n            学习 TypeScript        ",
      "titleLink": "https://www.runoob.com/typescript/ts-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/typescript-logo.jpg",
      "description": " 是 JavaScript 的一个超集，支持 ECMAScript 6 标准"
    }, {
      "title": " \n            学习 jQuery UI        ",
      "titleLink": "https://www.runoob.com/jqueryui/jqueryui-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ui.jpg",
      "description": " 是建立在 jQuery JavaScript 库上的一组用户界面交互、特效、小部件及主题"
    }, {
      "title": " \n            学习 jQuery EasyUI        ",
      "titleLink": "https://www.runoob.com/jeasyui/jqueryeasyui-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/jQuery-EasyUI.jpg",
      "description": " 是一个基于 jQuery 的框架，集成了各种用户界面插件"
    }, {
      "title": " \n            学习 Node.js        ",
      "titleLink": "https://www.runoob.com/nodejs/nodejs-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/nodejs.jpg",
      "description": " 是运行在服务端的 JavaScript"
    }, {
      "title": " \n            学习 AJAX        ",
      "titleLink": "https://www.runoob.com/ajax/ajax-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ajax.png",
      "description": "  是一种用于创建快速动态网页的技术"
    }, {
      "title": " \n            学习 JSON        ",
      "titleLink": "https://www.runoob.com/json/json-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/JSON.jpg",
      "description": " 指的是 JavaScript 对象表示法（JavaScript Object Notation）"
    }, {
      "title": " \n            学习 ECharts        ",
      "titleLink": "https://www.runoob.com/echarts/echarts-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/echarts.png",
      "description": " 是一个使用 JavaScript 实现的开源可视化库"
    }, {
      "title": " \n            学习 Highcharts        ",
      "titleLink": "https://www.runoob.com/highcharts/highcharts-tutorial.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/highcharts.png",
      "description": " 是一个用纯JavaScript编写的一个图表库"
    }, {
      "title": " \n            学习 Google Maps        ",
      "titleLink": "https://www.runoob.com/googleapi/google-maps-basic.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/google-maps.jpg",
      "description": " Google地图接口使用说明"
    }, {
      "title": " \n            前端学习知识图谱        ",
      "titleLink": "https://www.runoob.com/w3cnote/2021-frontend-learnpath.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/5355692_code_coding_development_programming_web_icon.png",
      "description": " 2021 前端技术学习路线图"
    }],
  animation : [
    {
      "title": "three.js",
      "titleLink": "https://threejs.org/",
      "img": "https://threejs.org/files/projects/junni.png",
      "description": " 3D动画库"
    },
    {
      "title": "Animate.css",
      "titleLink": "https://animate.style/",
      "img": "https://animate.style/img/favicon.ico",
      "description": " css动画库"
    },
    {
      "title": "Magic Effects",
      "titleLink": "https://www.minimamente.com/project/magic/",
      "img": "https://www.minimamente.com/project/magic/assets/images/magic_big.png",
      "description": " 动画效果"
    },
    {
      "title": "Hover.css",
      "titleLink": "https://ianlunn.github.io/Hover/",
      "img": "https://ianlunn.github.io/Hover/sequence-logo.png",
      "description": " 鼠标悬停效果"
    },
    {
      "title": "CSSHake",
      "titleLink": "https://elrumordelaluz.github.io/csshake/",
      "img": "https://elrumordelaluz.github.io/csshake/img/csshake-logo.png",
      "description": " 震动摇晃库"
    },
    {
      "title": "anine",
      "titleLink": "https://animejs.com/",
      "img": "https://animejs.com/documentation/assets/img/anime-mini-logo.svg",
      "description": "炫酷效果"
    },
    {
      "title": "textillate",
      "titleLink": "https://textillate.js.org/",
      "img": "",
      "description": "文字动画库"
    },
    {
      "title": "Anijs",
      "titleLink": "http://anijs.github.io/",
      "img": "",
      "description": "板块动画库"
    },
    {
      "title": "100l5",
      "titleLink": "https://10015.io/",
      "img": "https://10015.io/brand/logo-on-light.svg",
      "description": "All Online Tools in “One Box”"
    },
    {
      "title": "Animated Background",
      "titleLink": "https://www.minimamente.com/project/animated-background/",
      "img": "https://www.minimamente.com/project/animated-background/images/bg.png",
      "description": "背景动画"
    },
    {
      "title": "canvas",
      "titleLink": "https://www.w3school.com.cn/tags/tag_canvas.asp",
      "img": "",
      "description": "canvas"
    },
    {
      "title": "whirl",
      "titleLink": "https://whirl.netlify.app/",
      "img": "",
      "description": "loading动画"
    }
  ],
  jsFrame : [{
    "title": " \n            Vue.js中文网        ",
    "titleLink": "https://cn.vuejs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/vue.png",
    "description": " 渐进式 JavaScript 框架"
  }, {
    "title": " \n            React.js 中文网        ",
    "titleLink": "https://zh-hans.reactjs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/react.png",
    "description": " 用于构建用户界面的 JavaScript 库"
  }, {
    "title": " \n            AngularJS        ",
    "titleLink": "https://angularjs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/angular.jpg",
    "description": " 是一款前端JS框架"
  }, {
    "title": " \n            jQuery        ",
    "titleLink": "https://jquery.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jquery.png",
    "description": " 是一个功能丰富的 JavaScript 工具库"
  }, {
    "title": " \n            KISSY        ",
    "titleLink": "https://docs.kissyui.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/kissy-kissy.jpg",
    "description": " 一款全终端支持的 JavaScript 框架"
  }, {
    "title": " \n            Egg        ",
    "titleLink": "https://www.eggjs.org/zh-CN/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Egg.png",
    "description": " 为企业级框架和应用而生"
  }, {
    "title": " \n            ThinkJS        ",
    "titleLink": "https://thinkjs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Thinkjs.png",
    "description": " 是一款使用 ES6/7 特性全新开发的 Node.js MVC 框架"
  }, {
    "title": " \n            D3        ",
    "titleLink": "https://d3js.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/D3.jpg",
    "description": " 是一个JavaScript库，用于根据数据操作文档"
  }, {
    "title": " \n            JSLite        ",
    "titleLink": "https://jslite.github.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jslite.png",
    "description": " 针对现代高级浏览器的JavaScript库"
  }, {
    "title": " \n            Redom        ",
    "titleLink": "https://redom.js.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/redom.png",
    "description": " 用于创建用户界面"
  }],
  uiFrame : [
    {
      "title": " \n            Element UI      ",
      "titleLink": "https://element.eleme.cn/#/zh-CN",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Element.jpg",
      "description": " 网站快速成型工具"
    },
    {
      "title": "nextui",
      "titleLink": "https://nextui.org/",
      "img": "https://nextui.org/twitter-cards/nextui.jpeg",
      "description": "Make beautiful websites regardless of your design experience."

    },

    {
      "title": 'Navie UI',
      "titleLink": "https://www.naiveui.com/zh-CN/os-theme",
      "img": "https://www.naiveui.com/assets/naivelogo-93278402.svg",
      "description": "一个 Vue 3 组件库,比较完整，主题可调，使用 TypeScript,快,有点意思"
    },
    {
      "title": "View UI",
      "titleLink": "https://www.iviewui.com/view-ui-plus/guide/introduce",
      "img": "https://file.iviewui.com/view-design-dist/img/logo-small.4a34a883.png",
      "description": "企业级中后台UI框架"
    },
    {
      "title": "Vant UI",
      "titleLink": "https://vant-ui.github.io/vant/#/zh-CN",
      "img": "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
      "description": "轻量、可定制的移动端 Vue 组件库"
    },
    {
      "title": "ikun-ui",
      "titleLink": "https://ikun-ui.netlify.app/",
      "img": "https://ikun-ui.netlify.app/logo.svg",
      "description": "别闹，人家可以正经的ui框架，常用的组件都有"
    },
    {
      "title" : "tdesign",
      "titleLink" : "https://tdesign.tencent.com",
      "img" : "https://cdc.cdn-go.cn/tdc/latest/images/prowork.svg",
      "description" : "腾讯开源的一款ui组件库"
    },{
      "title" : "Mzl UI",
      "titleLink" : "https://mzlui.codeym.com/",
      "img" : "https://mzlui.codeym.com/assets/logo.35ebc5f4.png",
      "description" : "一套适合开发者使用的轻量级UI组件库，完美支持vue3"
    },
    {
      "title" : "Balm UI",
      "titleLink": "https://material.balmjs.com/",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "Build beautiful products, faster for Vue.js(google)"
    },
    {
      "title" : "Arco design",
      "titleLink" : "https://arco.design/",
      "img" : "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
      "description" : "字节团队企业级产品设计系统"
    },
    {
      "title" : "iDUX",
      "titleLink" : "https://idux.site",
      "img" : "https://idux.site/favicon.ico",
      "description" : "Vue3.x 的 UI 组件库，完全使用 TypeScript 开发"
    },
    {
      "title" : " DevUI",
      "titleLink" : "http://vue-devui.github.io/",
      "img" : "https://vue-devui.github.io/assets/logo.svg",
      "description" : "一个基于DevUI Design的vue3组件库(华为)"
    },
    {
      "title" : "vuestic-ui",
      "titleLink" : "http://vuestic.dev",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "Vue 3 的免费和开源 UI 库 ,UI非常好看，并且有可用后台管理界面"
    },
    {
      "title" : "Headless UI",
      "titleLink" : "http://headlessui.com",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "完全无样式、完全可访问的 UI 组件，旨在与 Tailwind CSS 完美集成。"
    },
    {
      "title" : "vbestui",
      "titleLink" : "https://fudaosheng.gitee.io/vbest-ui/",
      "img" : "https://fudaosheng.gitee.io/vbest-ui/img/icon.jpg",
      "description" : "友好，丰富"
    },
    {
      "title": "Quasar",
      "titleLink": "https://quasar.dev/",
      "img": "https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg",
      "description": "Beyond the framework"
    },
    {
      "title": "Vuetify",
      "titleLink": "https://vuetifyjs.com/zh-Hans/",
      "img": "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-light.svg",
      "description": "Vuetify 是一个零设计经验可用的 Vue 界面组件框架，包含了很多优美的自定义 Vue 组件。"
    },
    {
      "title": "FlowBit",
      "titleLink": "https://flowbite.com/docs/getting-started/introduction/",
      "img": "https://flowbite.com/images/logo.svg",
      "description": "Flowbite is a free Open Source UI Kit that provides a flexible and modern looking theme for your next project."

    },
    {
      "title": "NutUI",
      "titleLink": "https://nutui.jd.com/#/index",
      "img": "https://nutui.jd.com/favicon.ico",
      "description": "京东风格的移动端组件库"
    },
    {
      "title": " \n            Bootstrap        ",
      "titleLink": "https://bootstrap-vue.org/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/bootstrap.jpg",
      "description": " bootstrap vue版本"
    }, {
      "title": "Buefy",
      "titileLink": "https://buefy.org",
      "img": "https://buefy.org/static/img/buefy.1d65c18.png",
      "description": "Lightweight UI components for Vue.js based on Bulma"

    },

    {
      "title": " \n            Foundation        ",
      "titleLink": "https://get.foundation/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Foundation.png",
      "description": " 用于构建基于任何设备上的web运用"
    }, {
      "title": "Ant Design Vue",
      "titleLink": "https://2x.antdv.com/docs/vue/introduce-cn/",
      "img": "https://aliyuncdn.antdv.com/v2/assets/logo.1ef800a8.svg",
      "description": "企业级中后台UI框架"
    }, {
      "title": "CoreUI Vue",
      "titleLink": "https://coreui.io/vue/",
      "img": "https://coreui.io/images/bgs/kv_dark.webp",
      "description": "专注于后台管理系统的UI库"
    }, {
      "title": "Vue Material",
      "titileLink": "https://vuematerial.io",
      "img": "https://img.shields.io/npm/l/vue-material.svg",
      "description": "Build beautiful apps with Material Design and Vue.js"
    }, {
      "title": "Vuesax",
      "titleLink": "https://vuesax.com",
      "img": "https://vuesax.com/vuesax-only.png",
      "description": "Vuesax FrameworkComponents for Vuejs"

    }, {
      "title": "Vue Material Kit",
      "titileLink": "https://www.creative-tim.com/product/vue-material-kit/?partner=49926",
      "img": "https://www.creative-tim.com/assets/logo/logo-ct-simple-16d93649feac156e5ece8e12e8f9c383d7a732b1e787d7bbdf7292cc8b946580.png",
      "description": "Its amazing design is inspired by Material Design and contains all the components you need for your development"

    }, {
      "title": "PrimeVue",
      "titleLink": "https://primevue.org/",
      "img": "https://primefaces.org/cdn/primevue/images/landing/overview-icon.svg",
      "description": "PrimeTek libraries have reached over 110 Million Downloads on npm! Join the PrimeLand community and experience the difference yourself."
    }, {
      "title": "KeenUI",
      "titleLink": "https://josephuspaye.github.io/Keen-UI/#/ui-alert",
      "img": "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description": "Keen UI is a Vue.js UI library with a simple API, inspired by Google's Material Design."
    },
    {
      "title": "Mint UI",
      "titleLink": "http://mint-ui.github.io",
      "img": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3NXB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTc1IDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy44LjIgKDI5NzUzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nu7/lj7ZAMXg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMjU2LWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MC4wMDAwMDAsIC0yOC4wMDAwMDApIiBmaWxsPSIjMjZhMmZmIj4KICAgICAgICAgICAgPGcgaWQ9Iue7v+WPtiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAyOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zMDQ2ODgsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBDODIuMTA5MzUsMTUxLjY2MDE1OSA4MC4wMzY0ODA3LDE0Ny4xMTY3MTIgNzcuOTA3NTkzMiwxNDEuNzU1NTIgQzc1Ljc3ODcwNTcsMTQ0LjUwMzU5NyA3My40NTk2MzU3LDE0Ny4yNjc0MjMgNzAuOTU3NTYsMTUwLjA2MzU0NCBMNjYuOTk0NDI4MywxNTQuNTc1MDk1IEw2MS45NzQ1Mjc5LDE1Mi40NTQzOCBDNDcuMzA0MTYyNSwxNDYuMjY2ODcxIDQuNzYyMjk2MDksMTI1LjU4MzgyOSAwLjM3NzczMjYxNyw5Mi4xNzYzMDM1IEMtMi43NTk0ODA4Niw1Ny4zNzA5MTY2IDE3LjYwNTc5MzIsMzkuMDg2NDg2MSAxMC4yNDI5MDA0LDE5LjczNzcxMTcgQzM5Ljk0MTA3MDUsMjYuODM4NjU0OSA2My4zNTY0NDA4LDM4LjMzOTkxMDQgNzguMzM2NjAwMiw1My4wNTc5MjExIEMxMDEuODM5Mjg3LDIzLjA1NzkzMDkgMTMxLjk0Mjk0LDIxLjg4MjM0OCAxMzkuOTcyNjY4LDAgQzE5NS43MzkzOTMsNzcuOTQyNzE5OSAxODYuODQzMjc5LDE0OS4xODk5OCA5My44ODgzMDM5LDE2MC42NzQ4ODkgQzg2LjAyNTIzNTQsMTc1LjEzOTEyMyA3Ny4yNjQyODIsMTg4LjU3MDExMyA2Ny43NDA4MDQ5LDIwMCBMNTQuNzA2NzI2NiwxOTEuOTA2MjggQzY1Ljg4MjIzOTUsMTgxLjE3NTUyMyA3NS40NDU1ODczLDE2OC42NDk3OTQgODMuNzI5NDg5NSwxNTUuMDExODc2IEw4My43Mjk0ODk1LDE1NS4wMTE4NzYgTDgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBaIE05Mi42OTcxNzE1LDExNi4xNzk3NjQgQzk0LjYzNTI3ODUsMTIxLjM5ODAyMSA5Ni42MjEwMzA3LDEyNS42MjM1IDk3Ljg5OTg3ODMsMTI4LjE4ODc3MSBDMTExLjQzNDUzMSw5OC44MDA1OTQ1IDEyMC42NzE5MzgsNjYuNjYzOTQyMiAxMjguMTE0MzcyLDM3LjA2OTAzNjkgQzEyMC4wOTIwMjEsNDUuNDA4OTU3MiAxMDQuNjM1NDA4LDQ4LjY2NTU4MyA5Mi41MzA1MTI3LDY1LjQzMjkzOTMgQzkxLjc2ODE4NzksNjYuNTc2NjI1OCA5MS4xMDA1NTU5LDY3Ljc2MDE4MjYgOTAuNTA1Mjg4Nyw2OC45Njc0NjI3IEM5OC4wNjY3MzY1LDgyLjk3MDU5NDUgOTkuMjI2MTcxOSw5OC45NDM3Mjk3IDkyLjY5NzE3MTUsMTE2LjE3OTc2NCBMOTIuNjk3MTcxNSwxMTYuMTc5NzY0IEw5Mi42OTcxNzE1LDExNi4xNzk3NjQgWiBNNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEM0Ny40NjI4NDczLDk5LjA2Mjc0MzQgNDAuNTEyODE0MSw3Mi40MzgzOTI2IDI4LjM1MjQ5ODYsNDguODgwMDg2MyBMMjguMzUyNDk4Niw0OC44ODAwODYzIEM0MS4zMzA5NTc2LDY2Ljk5NzY1ODYgNTYuNDA2NDA3Niw5My4yNjQ1Njk5IDY0LjM5Njg2MjUsMTIyLjk5NDIzOCBDOTIuNDM1MDIyNyw4OS43NjE1NDQzIDc0LjA5NTE3MjEsNTQuOTQwMjA5MiAyMi4zODc0NjcsNDIuNTg5MzEyNSBDMjcuMTkyODYzOSw1NS4yMjY0Nzk3IDEzLjg4ODY2MjcsNjcuMTcyMjkxNiAxNS45Mzc4MDksODkuOTEyNjUzNSBDMTguOTU2MDA5LDExMi44NTkzNDYgNDQuNjI3MjU0NSwxMjQuNDg3Nzg4IDUyLjYwOTczNTQsMTI3LjcxMjMxOCBMNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEw1Mi42MDk3MzU0LDEyNy43MTIzMTggWiBNMTA4Ljc4MTM0NiwxMjkuNjkwMjk2IEMxNTkuNzEwNTc5LDEyMC45MjEzNjggMTY1LjQ0NTE1OSw4MC42ODMwMjIzIDEzNS44MTA3ODEsMzUuNzkwMTg5MyBDMTMyLjAyOTg1OCw2Mi45NTQ1ODY1IDEyMi41OTM4OTcsOTcuMTg4MjI5OSAxMDguNzgxMzQ2LDEyOS42OTAyOTYgTDEwOC43ODEzNDYsMTI5LjY5MDI5NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",
      "description": "Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。"
    }, {
      "title": "Vue Tailwind",
      "titleLink": "https://vue-tailwind.com",
      "img": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNjMyNCwwLDAsMC4wMzYzMjQsMjAsMTQpIj4KICAgICAgICA8cGF0aCBpZD0iVCIgZD0iTTM0MC4wNjUsNTg5TDAsLTBMMjUwMC4wMywwLjAxOEwyMTU5Ljk4LDU4OUwxNzMxLjE3LDU4OUwxMjUwLDE0MjEuOTVMNzY4LjgzMyw1ODlMMzQwLjA2NSw1ODlaIiBzdHlsZT0iZmlsbDpyZ2IoNTksMTMwLDI0Nik7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICAgICAgPGcgaWQ9IlYiIHRyYW5zZm9ybT0ibWF0cml4KC0xLC0xLjUzMTQzZS0xNSwtMS41MzE0M2UtMTUsMSwyNTAwLDU4OSkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTczMS4xNywwTDEyNTAsODMyLjk0OEw3NjguODMzLDBMMCwwTDEyNTAsMjE2NEwyNTAwLDBMMTczMS4xNywwWiIgc3R5bGU9ImZpbGw6cmdiKDQ1LDU1LDcyKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=",
      "description": "Set of Lightview and fully customizable Vue Components optimized for TailwindCss"
    },
    {
      "title": " \n            Semantic UI        ",
      "titleLink": "https://semantic-ui.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/semantic.png",
      "description": " 用来帮助创建人性化的开发框架"
    },
    {
      "title": " \n            jQuery UI        ",
      "titleLink": "https://jqueryui.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jQuery-UI.jpg",
      "description": " 可以直接用它来构建具有很好交互性的web应用程序"
    }, {
      "title": " \n            JQuery EasyUI中文网        ",
      "titleLink": "https://www.jeasyui.net/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/JQuery-EasyUI.png",
      "description": " 帮助web开发者打造出功能丰富并且美观的UI界面"
    }, {
      "title": " \n            LayUI       ",
      "titleLink": "https://www.ilayuis.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/layui.png",
      "description": " 可作为 PC 网页端界面速成开发方案"
    }, {
      "title": " \n            Rubik UI        ",
      "titleLink": "https://ccforward.github.io/rubik/#/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Rubik-UI.jpg",
      "description": "  是一个基于 Vue.js 2.0+ 的开源 UI 组件库"
    }, {
      "title": " \n            UIkit中文网        ",
      "titleLink": "http://www.uikitcss.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/UIkit.jpg",
      "description": " 可快速构建强大的前端web界面"
    }, {
      "title": " \n            Bootflat        ",
      "titleLink": "http://bootflat.github.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/bootflat.png",
      "description": " 提供一种创建web应用程序的便捷方式。"
    }, {
      "title": " \n            ZUI        ",
      "titleLink": "https://www.openzui.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/zui.png",
      "description": " 开源HTML5跨屏框架"
    }, {
      "title": " \n            SUI        ",
      "titleLink": "https://github.com/sdc-alibaba/sui",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/SUI.png",
      "description": " 一套基于bootstrap开发的前端组件库"
    }, {
      "title": " \n            Atui        ",
      "titleLink": "https://aliqin.github.io/atui/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/atui.png",
      "description": " 阿里通信前端UI组件"
    }, {
      "title": " \n            AdminLTE        ",
      "titleLink": "https://adminlte.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/AdminLTEL.png",
      "description": " 是一款建立在Bootstrap3和JQuery1.11+之上的开源模板主题工具"
    }, {
      "title": " \n            Blaze Css        ",
      "titleLink": "https://www.blazeui.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/blaze-css.png",
      "description": " 开源模块化CSS框架"
    }],
  webSource :  [{
    "title": " \n            Staticfile CDN        ",
    "titleLink": "https://www.staticfile.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/staticfile-logo.png",
    "description": " 提供免费、快速、开放的 CDN 服务，也提供开源库源接入的入口，让所有人都可以提交开源库。"
  }, {
    "title": " \n            cdnjs        ",
    "titleLink": "https://cdnjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/csdnjs-logo.png",
    "description": " 是一个通过快速 CDN 基础设施为开发人员和组织提供流行的前端 Web 开发资源的项目，帮助代码库与框架开发者分发他们的项目。"
  }, {
    "title": " \n            微软CDN        ",
    "titleLink": "https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/%E5%BE%AE%E8%BD%AFCDN.png",
    "description": " 微软公司提供的公共CDN服务。"
  }, {
    "title": " \n            jsDelivr        ",
    "titleLink": "https://www.jsdelivr.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jsdelivr.jpg",
    "description": " 免费开源的 CDN 解决方案，用于帮助开发者和站长。包含 JavaScript 库、jQuery 插件、CSS 框架、字体等等 Web 上常用的静态资源。"
  }, {
    "title": " \n            jQuery CDN        ",
    "titleLink": "https://releases.jquery.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jQuery%E4%B9%8B%E5%AE%B6.jpg",
    "description": " jQuery 官网提供的 CDN 服务"
  }, {
    "title": " \n            阿里图标库        ",
    "titleLink": "https://www.iconfont.cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/%E9%98%BF%E9%87%8C%E5%9B%BE%E6%A0%87%E5%BA%93.png",
    "description": " 国内功能很强大且图标内容很丰富的矢量图标库"
  },{
    "title" : "IconPark",
    "titleLink" : "https://iconpark.oceanengine.com/home",
    "img" : "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg",
    "description" : "字节开源的图标库"
  },{
    "title" : "Icones",
    "titleLink" : "https://icones.js.org/",
    "img" : "",
    "description" : "icones 一个收藏了 100+ 款免费图标库，并且矢量图标的数量已经超过 100000 个，由 Iconify 提供了图标框架，你可以混合使用上面所有的图标，各式各样的图标库，以及单色、多彩图标类型都有。"
  }, {
    "title": " \n            矢量 logo下载        ",
    "titleLink": "https://worldvectorlogo.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/%E7%9F%A2%E9%87%8Flogo.jpg",
    "description": " 知名 logo 矢量资源下载"
  }, {
    "title": " \n            UNPKG        ",
    "titleLink": "https://unpkg.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/unpkg.jpg",
    "description": " 前端 CDN 库，适用于 npm 上的所有内容。"
  }, {
    "title": " \n            Font Awesome        ",
    "titleLink": "https://fontawesome.com/icons",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/fontawesome.jpg",
    "description": " 一套绝佳的图标字体库和CSS框架"
  }, {
    "title": " \n            IcoMoon        ",
    "titleLink": "https://icomoon.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/icomoon.jpg",
    "description": " 免费的开源字体图标库"
  }, {
    "title": " \n            pictonic        ",
    "titleLink": "https://pictonic.co/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/pictonic.jpg",
    "description": " 国外一个有362个免费字体图标库"
  }, {
    "title": " \n            MFG labs icon set        ",
    "titleLink": "http://mfglabs.github.io/mfglabs-iconset/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/MFG.png",
    "description": " 免费字体图标库"
  }, {
    "title": " \n            Ligature Symbols        ",
    "titleLink": "https://c.runoob.com/more/LigatureSymbols/site/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/ligature-symbols.png",
    "description": " 免费字体图标库"
  }, {
    "title": " \n            Bootstrap Icons        ",
    "titleLink": "https://icons.getbootstrap.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Bootstrap-Icons.png",
    "description": " 专门为著名的前端开发 UI 框架 Bootstrap 的组件和文档定制开发的图标库"
  }],
  webPlugin : [{
    "title": " \n            Layer        ",
    "titleLink": "https://github.com/layui/layer",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Layer.png",
    "description": " 是一款web弹层组件"
  }, {
    "title": " \n            Lightbox        ",
    "titleLink": "https://github.com/lokesh/lightbox2",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Lightbox.jpg",
    "description": " 是一个用于在当前页面上覆盖图像的脚本"
  }, {
    "title": " \n            Echarts        ",
    "titleLink": "https://echarts.apache.org/zh/index.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Echarts.png",
    "description": " 一个基于 JavaScript 的开源可视化图表库"
  }, {
    "title": " \n            Hint.css        ",
    "titleLink": "https://kushagra.dev/lab/hint/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/hint-css.png",
    "description": " 是一个 CSS 实现的工具提示效果"
  }, {
    "title": " \n            Swiper        ",
    "titleLink": "https://www.swiper.com.cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Swiper.jpg",
    "description": " 强大的触摸滑动插件"
  }, {
    "title": " \n            Background-Blur        ",
    "titleLink": "https://msurguy.github.io/background-blur/#",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/background-blur.png",
    "description": " 用于模糊图像的超小型插件"
  }, {
    "title": " \n            Siema        ",
    "titleLink": "https://pawelgrzybek.github.io/siema/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/siema.png",
    "description": " 轻量级且简单的旋转木马插件，无依赖性"
  }, {
    "title": " \n            Justified-Gallery        ",
    "titleLink": "http://miromannino.github.io/Justified-Gallery/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Justified-Gallery.png",
    "description": " 是一个JavaScript库，可创建高质量的图像库"
  }, {
    "title": " \n            Datatables        ",
    "titleLink": "https://datatables.net/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Datatables.png",
    "description": " 是一款jquery表格插件"
  }, {
    "title": " \n            Validform        ",
    "titleLink": "http://validform.club/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Validform.jpg",
    "description": " 一行代码搞定整站的表单验证"
  }, {
    "title": " \n            Waterfall        ",
    "titleLink": "http://wlog.cn/waterfall/index-zh.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Waterfall.png",
    "description": " 瀑布流布局插件"
  }, {
    "title": " \n            Sticker.js        ",
    "titleLink": "https://github.com/cmiscm/stickerjs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Sticker.jpg",
    "description": " 一个Javascript库"
  }, {
    "title": " \n            multiScroll.js        ",
    "titleLink": "https://alvarotrigo.com/multiScroll/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/multiscroll.png",
    "description": " 创建分割的多滚动页面"
  }, {
    "title": " \n            UEditor        ",
    "titleLink": "https://github.com/fex-team/ueditor",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/UEditor.png",
    "description": " 是一个开源富文本编辑器"
  }, {
    "title": " \n            tinyMCE        ",
    "titleLink": "https://www.tiny.cloud/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/tinyMCE.png",
    "description": " 开源富文本编辑器，适用于想要控制的开发者"
  }, {
    "title": " \n            Qunee        ",
    "titleLink": "https://qunee.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/qunee-1.png",
    "description": " 一套基于HTML5的网络图组件"
  }, {
    "title": " \n            Sortable        ",
    "titleLink": "https://github.com/SortableJS/Sortable",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Sortable.png",
    "description": " 一个能在页面上对表格进行排序的 JavaScript 包"
  }, {
    "title": " \n            jQuery File Upload        ",
    "titleLink": "https://blueimp.github.io/jQuery-File-Upload/index.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jQuery-File-Upload.png",
    "description": " 具有多个功能，用于jQuery的音频和视频的文件上传小部件。"
  }, {
    "title": " \n            highcharts        ",
    "titleLink": "https://www.highcharts.com.cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/highcharts-1.jpg",
    "description": " 让数据可视化更简单"
  }, {
    "title": " \n            Interact.js        ",
    "titleLink": "https://interactjs.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/interact.png",
    "description": " 前端拖拽插件"
  }, {
    "title": " \n            FastClick        ",
    "titleLink": "https://github.com/ftlabs/fastclick",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/FastClick-1.png",
    "description": " 解决移动端click事件延迟300ms"
  }],
  codeHighlight : [{
    "title": " \n            CodeMirror        ",
    "titleLink": "https://codemirror.net/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/CodeMirror.png",
    "description": " 是一个多功能文本编辑器，用JavaScript为浏览器实现，它专门用于编辑代码，并附带了许多语言模式和插件"
  }, {
    "title": " \n            highlight.js        ",
    "titleLink": "https://highlightjs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/highlight.jpg",
    "description": " 是一个用于在任何web页面上着色显示各种示例源代码语法的JS项目"
  }, {
    "title": " \n            Prism        ",
    "titleLink": "https://prismjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/prism.png",
    "description": " 一个简洁的语法高亮插件"
  }, {
    "title": " \n            Monaco Editor        ",
    "titleLink": "https://microsoft.github.io/monaco-editor/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Monaco-Editor.png",
    "description": " 是支持VS代码的代码编辑器"
  }, {
    "title": " \n            code-prettify        ",
    "titleLink": "https://github.com/googlearchive/code-prettify",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/2701148_code_codepen_css_html_javascript_icon.png",
    "description": " Google提供的 JS 高亮插件，非常小巧且配置简单"
  }],
  chart : [{
    "title": " \n            Chart.js        ",
    "titleLink": "https://www.chartjs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/chart.jpg",
    "description": " 是一个开源的JavaScript库，支持八种不同类型的图表"
  }, {
    "title": " \n            FusionCharts        ",
    "titleLink": "https://www.fusioncharts.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/fusioncharts.png",
    "description": " 是最完整的JavaScript库，有90多个图表选项和900张地图"
  }, {
    "title": " \n            Dygraphs        ",
    "titleLink": "https://dygraphs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/Dygraphs.jpg",
    "description": " 是一个开源的库，可以最快速的处理大量的数据"
  }, {
    "title": " \n            Victory        ",
    "titleLink": "https://formidable.com/open-source/victory/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/victory.png",
    "description": " 是开源的，可以用很少的代码创建一些漂亮的图表"
  }, {
    "title": " \n            Chartist.js        ",
    "titleLink": "https://gionkunz.github.io/chartist-js/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/chartist.png",
    "description": " 是一个尖端的SVG库"
  }, {
    "title": " \n            D3.js        ",
    "titleLink": "https://d3js.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/D3.png",
    "description": " 是一个强大的开源JavaScript数据可视化框架"
  }, {
    "title": " \n            Recharts        ",
    "titleLink": "https://recharts.org/en-US/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/recharts.png",
    "description": " 一个建立在React组件上的可组合的图表库"
  }, {
    "title": " \n            AmCharts        ",
    "titleLink": "https://www.amcharts.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/amcharts.png",
    "description": " 编程库，满足你所有的 数据可视化的需要"
  }, {
    "title": " \n            Google Charts        ",
    "titleLink": "https://developers.google.com/chart",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/google-charts.png",
    "description": " 一个被广泛使用的图标包"
  }, {
    "title": " \n            AnyChart        ",
    "titleLink": "https://www.anychart.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/anychart.jpg",
    "description": " 是一个轻量级和强大的JavaScript图表库"
  }, {
    "title": " \n            Highcharts        ",
    "titleLink": "https://www.highcharts.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/highcharts.png",
    "description": " 轻松地为网络和移动平台创建图表"
  }, {
    "title": " \n            Billboard.js        ",
    "titleLink": "https://naver.github.io/billboard.js/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/billboard.png",
    "description": " 可重复使用的简易界面JavaScript图表库"
  }, {
    "title": " \n            ApexCharts.js        ",
    "titleLink": "https://apexcharts.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/apexcharts.jpg",
    "description": " 为网站提供开源的JavaScript图表"
  }, {
    "title": " \n            NVD3        ",
    "titleLink": "https://nvd3.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/NVD3.jpg",
    "description": " 一个最广泛使用的开源库"
  }, {
    "title": " \n            Vis.js        ",
    "titleLink": "https://visjs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/vis.png",
    "description": " 一个动态的、基于浏览器的可视化库"
  }],
  packageManager : [{
    "title": " \n            npm        ",
    "titileLink": "https://www.npmjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/npm-logo.png",
    "description": " 是 JavaScript 世界的包管理工具"
  },
    {
      "title": "nvm",
      "titleLink": "https://github.com/nvm-sh/nvm",
      "img": "https://avatars.githubusercontent.com/u/9892522?s=40&v=4\n",
      "description": "github上开源的node版本切换工具"

    },
    {
      "title": " \n            Yarn        ",
      "titileLink": "https://www.yarnpkg.cn/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/yarn.jpg",
      "description": " 是一个软件包管理器，还可以作为项目管理工具"
    }, {
      "title": " \n            Bower        ",
      "titileLink": "https://bower.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/bower.jpg",
      "description": " web包管理器"
    }, {
      "title": " \n            Browserify        ",
      "titileLink": "https://browserify.org/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/browserify.png",
      "description": " 前端静态资源打包工具"
    }, {
      "title": " \n            JSPM        ",
      "titileLink": "https://jspm.org/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jspm.jpg",
      "description": " JSPM-ES模块包管理器和CDN-JSPM组织"
    }, {
      "title": " \n            IED        ",
      "titileLink": "http://gugel.io/ied/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/IED.jpeg",
      "description": " 与npm类似，但速度更快的另一种包管理器"
    }, {
      "title": " \n            Lerna        ",
      "titileLink": "https://lernajs.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/lerna.png",
      "description": " 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目"
    }, {
      "title": " \n            component        ",
      "titileLink": "https://github.com/componentjs/component",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/component.png",
      "description": " 用于模块化web应用程序的前端包管理器和构建工具"
    }, {
      "title": " \n            DUO        ",
      "titileLink": "https://github.com/duojs/duo",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/DUO.jpg",
      "description": " 面向前端的下一代包管理器"
    }, {
      "title": " \n            FuseBox        ",
      "titileLink": "https://github.com/fuse-box/fuse-box",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/fusebox.png",
      "description": " 一个快速的js绑定器/加载程序，具有全面的API"
    }, {
      "title": " \n            Jam        ",
      "titileLink": "https://hotframeworks.com/jamjs/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jam.jpg",
      "description": " JavaScript包管理器"
    }],
  buildTools : [{
    "title": " \n            Gulp        ",
    "titleLink": "https://www.gulpjs.com.cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/gulp.png",
    "description": " 基于流(stream)的自动化构建工具"
  }, {
    "title": " \n            Grunt中文网        ",
    "titleLink": "https://www.gruntjs.net/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/grunt.png",
    "description": " 是基于 Node.js 的项目构建工具，它可以自动运行你所设定的任务"
  }, {
    "title": " \n            Webpack中文网        ",
    "titleLink": "https://webpack.docschina.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/webpack.png",
    "description": " 是一个模块打包器"
  }, {
    "title": " \n            Yeoman        ",
    "titleLink": "https://yeoman.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/yeoman.png",
    "description": " 工作流制作的网页程序"
  }, {
    "title": " \n            FIS3        ",
    "titleLink": "https://fex-team.github.io/fis3/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Fis3.png",
    "description": " 前端工程构建工具"
  }, {
    "title": " \n            WeFlow        ",
    "titleLink": "https://github.com/Tencent/WeFlow",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/weflow-1.png",
    "description": " 一个高效、强大、跨平台的前端开发工作流工具"
  }, {
    "title": " \n            create-react-app        ",
    "titleLink": "https://github.com/facebook/create-react-app",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/create-react-app.jpg",
    "description": " 通过运行一个命令设置一个现代web应用程序"
  }, {
    "title": " \n            PARCEL中文网        ",
    "titleLink": "https://parceljs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/PARCEL.png",
    "description": " 用于web的零配置构建工具"
  }, {
    "title": " \n            Brunch        ",
    "titleLink": "https://brunch.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/brunch.png",
    "description": " 超快速HTML5构建工具"
  }, {
    "title": " \n            cooking        ",
    "titleLink": "http://elemefe.github.io/cooking/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/cooking.png",
    "description": " 更易上手的前端构建工具，简单快速"
  }, {
    "title": " \n            Microbundle        ",
    "titleLink": "https://github.com/developit/microbundle",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Microbundle.png",
    "description": " 零配置的模块打包器"
  }, {
    "title": " \n            Slush        ",
    "titleLink": "http://slushjs.github.io/generators/#/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/slush.png",
    "description": " 是一种脚手架工具，能快速启动并运行新项目"
  }, {
    "title": " \n            Ender        ",
    "titleLink": "https://github.com/ender-js/Ender",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/ender.png",
    "description": " 是一个全功能的浏览器上的 JavaScript 包管理器"
  }, {
    "title": " \n            tmt-workflow        ",
    "titleLink": "https://github.com/Tencent/tmt-workflow",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/workflow.png",
    "description": " 基于Gulp使用的web开发者工作流，支持跨平台，并准备了解决方案"
  }],
  moduleLoading : [{
    "title": " \n            RequireJS        ",
    "titleLink": "https://requirejs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/requirejs.jpg",
    "description": " 按需加载JS文件"
  }, {
    "title": " \n            Seajs        ",
    "titleLink": "https://seajs.github.io/seajs/docs/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/seajs.png",
    "description": " 模块加载框架"
  }, {
    "title": " \n            Rollup中文文档        ",
    "titleLink": "https://www.rollupjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/rollup.png",
    "description": " 是一个 JavaScript 模块打包器"
  }, {
    "title": " \n            imagesLoaded        ",
    "titleLink": "https://imagesloaded.desandro.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/imagesloaded.png",
    "description": " 检测图像何时加载"
  }, {
    "title": " \n            MOUT        ",
    "titleLink": "https://github.com/mout/mout",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/mout.png",
    "description": " 是一个模块化JavaScript实用程序的集合，可以在浏览器中作为AMD模块或在节点上使用"
  }, {
    "title": " \n            Node.js 中文        ",
    "titleLink": "https://nodejs.org/zh-cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/nodejs.jpg",
    "description": " 是一个基于 Chrome V8 引擎的 JavaScript 运行时"
  }, {
    "title": " \n            Systemjs        ",
    "titleLink": "https://github.com/systemjs/systemjs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/systemjs.jpg",
    "description": " 动态ES模块加载器"
  }, {
    "title": " \n            UMD        ",
    "titleLink": "https://github.com/umdjs/umd",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/UMD.png",
    "description": " UMD（通用模块定义）模式，用于在任何地方工作的JavaScript模块"
  }, {
    "title": " \n            Vue Loader        ",
    "titleLink": "https://vue-loader.vuejs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/vue-loader.jpg",
    "description": " 是网页包的加载程序"
  }, {
    "title": " \n            LABjs        ",
    "titleLink": "https://github.com/getify/LABjs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/LABjs.png",
    "description": " 加载和阻止JavaScript"
  }, {
    "title": " \n            curl        ",
    "titleLink": "https://github.com/cujojs/curl",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/wp2456519.png",
    "description": " 是一款模块加载器，可处理AMD、CommonJS模块/1.1、CSS、HTML/text和遗留脚本"
  }, {
    "title": " \n            ESL        ",
    "titleLink": "https://github.com/ecomfe/esl",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/ESL.jpg",
    "description": " 是一个浏览器端、符合AMD的标准加载器，适合用于现代Web浏览器端应用的入口与模块管理"
  }],
  moduleEngine :  [{
    "title": " \n            doT.js        ",
    "titleLink": "https://github.com/olado/doT",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/dotjs.png",
    "description": " 最快、最简洁的节点javascript模板引擎"
  }, {
    "title": " \n            JADE LANGUAGE        ",
    "titleLink": "https://jade-lang.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/JADE-LANGUAGE.jpg",
    "description": " Jade是一个模板引擎，主要用于NodeJS中的服务器端模板"
  }, {
    "title": " \n            Handlebars.js        ",
    "titleLink": "https://handlebarsjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Handlebars.png",
    "description": " 是 JavaScript 一个语义模板库，通过对view和data的分离来快速构建Web模板"
  }, {
    "title": " \n            ART-TEMPLATE        ",
    "titleLink": "https://aui.github.io/art-template/zh-cn/index.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/arttemplate.png",
    "description": " 高性能 JavaScript 模板引擎"
  }, {
    "title": " \n            Hogan.js        ",
    "titleLink": "https://github.com/twitter/hogan.js",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/hoganjs.jpg",
    "description": " 是Twitter开发的3.4k js模板引擎"
  }, {
    "title": " \n            Nunjucks        ",
    "titleLink": "https://mozilla.github.io/nunjucks/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/nunjucks.jpg",
    "description": " 功能丰富、强大的 JavaScript 专用模板引擎"
  }, {
    "title": " \n            Pug        ",
    "titleLink": "https://pugjs.org/api/getting-started.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Pug-1.png",
    "description": " 是一款功能丰富的Node,js模板引擎"
  }, {
    "title": " \n            mustache        ",
    "titleLink": "https://github.com/janl/mustache.js",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/mustache.jpg",
    "description": " JavaScript中使用{{mustaches}}的最小模板"
  }, {
    "title": " \n            EJS        ",
    "titleLink": "https://github.com/tj/ejs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/EJS.png",
    "description": " 节点的嵌入式JavaScript模板"
  }, {
    "title": " \n            Swig        ",
    "titleLink": "https://github.com/paularmstrong/swig",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/swig.png",
    "description": " JavaScript模板引擎"
  }, {
    "title": " \n            Rivets.js        ",
    "titleLink": "https://github.com/mikeric/rivets",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/rivetsjs.jpg",
    "description": " 轻量级且功能强大的数据绑定+模板解决方案，用于构建现代web应用程序"
  }, {
    "title": " \n            Dust.js        ",
    "titleLink": "https://github.com/linkedin/dustjs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/dustjs.gif",
    "description": " 是一个Javascript模板引擎，在服务器和浏览器上异步运行"
  }, {
    "title": " \n            Consolidate.js        ",
    "titleLink": "https://github.com/tj/consolidate.js",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Consolidate-1.png",
    "description": " 节点的模板引擎合并库"
  }, {
    "title": " \n            lit-html        ",
    "titleLink": "https://github.com/lit/lit",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/lit.png",
    "description": " 是一个简单的库，用于构建快速、轻量级的web组件"
  }, {
    "title": " \n            PhaserJS        ",
    "titleLink": "https://phaser.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/phaserjs.png",
    "description": " 一个快速、有趣、免费的开源HTML5游戏框架"
  }],
  gameEngine : [{
    "title": " \n            白鹭引擎        ",
    "titleLink": "https://www.egret.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/bailuyinqing.jpg",
    "description": " 一站式 完整开发工具流"
  }, {
    "title": " \n            CreatJS        ",
    "titleLink": "https://createjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/createjs.png",
    "description": " 一套用于HTML5的JavaScript库和工具"
  }, {
    "title": " \n            ThreeJS        ",
    "titleLink": "https://threejs.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/threejs.png",
    "description": " JavaScript 3D库"
  }, {
    "title": " \n            Cocos        ",
    "titleLink": "https://www.cocos.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/cocos.png",
    "description": " 开源免费跨平台游戏开发引擎"
  }, {
    "title": " \n            ImpactJS        ",
    "titleLink": "https://impactjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/impact.png",
    "description": " 一个JavaScript游戏引擎，为桌面和移动浏览器开发HTML5游戏"
  }, {
    "title": " \n            2048        ",
    "titleLink": "https://github.com/gabrielecirulli/2048",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/2048.jpg",
    "description": " 一个简单的1024游戏的复制品"
  }, {
    "title": " \n            matter.js        ",
    "titleLink": "https://github.com/liabru/matter-js",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/matter.png",
    "description": " 用于web的二维刚体物理引擎"
  }],
  mobileFrame : [{
    "title": " \n            Ionic        ",
    "titleLink": "http://ionicframework.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Ionic.png",
    "description": " 接近原生的 Html5 移动 App 开发框架"
  }, {
    "title": " \n            Weex        ",
    "titleLink": "http://emas.weex.io/zh/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/weex.png",
    "description": " 一个利用现代网络技术构建高性能移动应用的框架"
  }, {
    "title": " \n            Framework7        ",
    "titleLink": "https://framework7.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/framework7.png",
    "description": " 是免费开源的 HTML 移动端框架"
  }, {
    "title": " \n            Mui        ",
    "titleLink": "https://dev.dcloud.net.cn/mui/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/MUI.png",
    "description": " 最接近原生APP体验的高性能前端框架"
  }, {
    "title": " \n            React Native        ",
    "titleLink": "http://reactnative.dev/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/react-ative.png",
    "description": " 是跨平台移动应用开发框架"
  }, {
    "title": " \n            jQuery Mobile        ",
    "titleLink": "https://jquerymobile.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jquery_mobile-1.jpg",
    "description": " 是一个基于HTML5的用户界面系统，旨在创建可在所有智能手机、平板电脑和桌面设备上访问的响应性网站和应用程序"
  }, {
    "title": " \n            SUI Mobile        ",
    "titleLink": "https://github.com/sdc-alibaba/SUI-Mobile",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/sui-mobile.png",
    "description": " 轻量的开源UI库"
  }, {
    "title": " \n            Zepto.js        ",
    "titleLink": "https://zeptojs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/zepto.png",
    "description": " 是一个面向现代浏览器的简约JavaScript库，具有基本上与jQuery兼容的API"
  }, {
    "title": " \n            NW.js        ",
    "titleLink": "https://nwjs.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/nw.jpg",
    "description": " 是一个使用Web开发技术构建跨平台桌面应用程序的框架"
  }, {
    "title": " \n            jQuery Weui        ",
    "titleLink": "https://jqweui.cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jQuery-weui.png",
    "description": " 是专为微信公众账号开发而设计的一个简洁而强大的UI库"
  }, {
    "title": " \n            VUX        ",
    "titleLink": "https://vux.li/#/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/vux.png",
    "description": " 一个 Vue.js 移动端 UI 组件库"
  }, {
    "title": " \n            Mars        ",
    "titleLink": "https://github.com/AlloyTeam/Mars",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Mars_logo.png",
    "description": " 腾讯移动 Web 前端知识库"
  }, {
    "title": " \n            Mint UI        ",
    "titleLink": "http://mint-ui.github.io/#!/zh-cn",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/mint-ui.png",
    "description": " 基于 Vue.js 的移动端组件库"
  }, {
    "title": " \n            Onsen UI        ",
    "titleLink": "https://onsen.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/onsen-ui.jpg",
    "description": " 漂亮的HTML5混合移动应用框架和工具——Onsen用户界面"
  }, {
    "title": " \n            Brick        ",
    "titleLink": "http://mozbrick.github.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/brick.jpg",
    "description": " 是一组UI组件，旨在快速地构建web应用程序UI"
  }, {
    "title": " \n            Device.js        ",
    "titleLink": "https://github.com/matthewhudson/current-device",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/device.jpg",
    "description": " 检测设备平台，操作系统的javascript库"
  }, {
    "title": " \n            Quojs        ",
    "titleLink": "https://github.com/soyjavi/QuoJS",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/quojs.jpeg",
    "description": " 移动设备的微型JavaScript库"
  }, {
    "title": " \n            Footable        ",
    "titleLink": "https://github.com/fooplugins/FooTable",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/footable.png",
    "description": " jQuery插件，用于生成HTML表"
  }, {
    "title": " \n            Slip        ",
    "titleLink": "https://kornel.ski/slip/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/slip.png",
    "description": " 可排序和可滑动视图"
  }, {
    "title": " \n            Mobi.css        ",
    "titleLink": "https://getmobicss.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/mobi.jpg",
    "description": " 一个轻量级、可扩展、移动优先的css框架"
  }, {
    "title": " \n            Junior        ",
    "titleLink": "https://github.com/justspamjustin/junior",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/junior.jpg",
    "description": " 一个前端框架，用于构建具有本地外观和感觉的HTML5移动应用程序"
  }, {
    "title": " \n            AlloyFinger        ",
    "titleLink": "https://github.com/AlloyTeam/AlloyFinger",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/alloyfinger.png",
    "description": " 轻量级多点触控手势库"
  }, {
    "title": " \n            MontageJS        ",
    "titleLink": "https://github.com/montagejs/montage",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/montage.png",
    "description": " 构建现代 Web App 的 HTML5 框架"
  }, {
    "title": " \n            Muse-UI        ",
    "titleLink": "https://muse-ui.org/#/zh-CN",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/muse.png",
    "description": " 基于 Vue 2.0 的 Material Design UI 组件库"
  }, {
    "title": " \n            GMU        ",
    "titleLink": "https://github.com/fex-team/GMU",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/gmu.jpg",
    "description": " 基于zepto的ui组件库，适用于移动端"
  }, {
    "title": " \n            Mobiscroll        ",
    "titleLink": "https://mobiscroll.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Mobiscroll.png",
    "description": " 响应式用户界面组件"
  }, {
    "title": " \n            Jquery.pep.js        ",
    "titleLink": "https://github.com/briangonzalez/jquery.pep.js",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Jquery-pep.png",
    "description": " 一个jquery插件,支持拖拽等各种方式 ,附件提供了多种案例"
  }, {
    "title": " \n            Zing Touch        ",
    "titleLink": "https://zingchart.github.io/zingtouch/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/zingtouch-1.png",
    "description": " 面向现代web的JavaScript手势检测库"
  }, {
    "title": " \n            Wechat-h5-boilerplate        ",
    "titleLink": "https://github.com/panteng/wechat-h5-boilerplate",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/h5-boilerplate.png",
    "description": " 为腾讯微信优化的H5动效模板，帮助你快速构建全屏滚动型H5页面"
  }, {
    "title": " \n            Pushy        ",
    "titleLink": "https://chrisyee.ca/pushy/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/pushy.png",
    "description": " 是一个使用CSS转换和转换的响应性非画布导航菜单"
  }, {
    "title": " \n            Mobilebone        ",
    "titleLink": "https://github.com/zhangxinxu/mobilebone",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/mobilebone.png",
    "description": " mobile移动端，PC桌面端页面无刷新过场JS骨架，简单、专注"
  }, {
    "title": " \n            Vonic        ",
    "titleLink": "https://github.com/wangdahoo/vonic",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/vonic.png",
    "description": " 一个基于 vue.js 和 ionic 样式的 UI 框架，用于快速构建移动端单页应用"
  }, {
    "title": " \n            Ant Design Mobile        ",
    "titleLink": "https://mobile.ant.design/zh/index-cn",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Ant-Design-Mobile.jpg",
    "description": " 一个基于 Preact/React/React Native 的 UI 组件库"
  }, {
    "title": " \n            TinyNav.js        ",
    "titleLink": "https://github.com/viljamis/TinyNav.js",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/tinynav.jpg",
    "description": " 一个导航插件，将导航转换为小屏幕上的选择下拉列表"
  }, {
    "title": " \n            Flex.css        ",
    "titleLink": "https://github.com/lzxb/flex.css/blob/master/docs/zh-ch.md",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/flexcss.png",
    "description": " 一个声明式的布局框架"
  }, {
    "title": " \n            Jingle        ",
    "titleLink": "https://github.com/shixy/Jingle",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jingle.png",
    "description": " 是一个SPA开发框架，用来开发移动端的html5应用"
  }, {
    "title": " \n            jQuery Touch Events        ",
    "titleLink": "https://github.com/benmajor/jQuery-Touch-Events",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jQuery-Touch-Events.png",
    "description": " jQuery的移动事件插件集合"
  }, {
    "title": " \n            AUI        ",
    "titleLink": "https://github.com/liulangnan/aui",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/AUI.jpg",
    "description": " 一套基于原生javascript开发的移动端UI框架"
  }, {
    "title": " \n            FrozenUI        ",
    "titleLink": "https://github.com/frozenui/frozenui",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/frozen-ui.png",
    "description": "  是一套基于移动端的UI库,遵从手机 QQ 设计规范"
  }]

}
// nav list
const listData = ref([
  {'data' : "前端教程" , "href" : "class"},
  {'data' : '动画库' , 'href' : 'animation'},
  {'data' : 'js框架' , 'href' : 'jsFrame'},
  {'data' : 'UI框架' ,'href' : 'uiFrame'},
  {'data' : 'web资源' ,'href' : 'webSource'},
  {'data' : 'web插件' ,'href' : 'webPlugin'},
  {'data' : '代码高亮' ,'href' : 'codeHighlight'},
  {'data' : '图表库' ,'href' : 'chart'},
  {'data' : '包管理器' ,'href' : 'packageManager'},
  {'data' : '构建工具' ,'href' : 'buildTools'},
  {'data' : '模块加载' ,'href' : 'moduleLoading'},
  {'data' : '模块引擎' ,'href' : 'moduleEngine'},
  {'data' : '游戏引擎' ,'href' : 'gameEngine'},
  {'data' : '移动框架' ,'href' : 'mobileFrame'},
])
</script>

<template>
  <div class="main">
    <div class="list" style="margin-bottom: 40px">
      <a-tabs v-for="(i , index) in listData" :key="index" :hoverable="true" style="list-style: none;float: left">
        <a-list-item style="margin-left: 60px"><a-link :href="'#' + i.href">{{i.data}}</a-link></a-list-item>
      </a-tabs>
      <br>
    </div>
    <div class="card">
      <div class="class">
        <h2 id="class">前端教程</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.class" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="animation">
        <h2 id="animation">动画库</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.animation" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="jsFrame">
        <h2 id="jsFrame">js框架</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.jsFrame" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="uiFrame">
        <h2 id="uiFrame">UI框架</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.uiFrame" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="webSource">
        <h2 id="webSource">web资源</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.webSource" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="webPlugin">
        <h2 id="webPlugin">web插件</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.webPlugin" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="codeHighlight">
        <h2 id="codeHighlight">代码高亮</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.codeHighlight" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="chart">
        <h2 id="chart">图表库</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.chart" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="packageManager">
        <h2 id="packageManager">包管理器</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.packageManager" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="buildTools">
        <h2 id="buildTools">构建工具</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.buildTools" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="moduleLoading">
        <h2 id="moduleLoading">模块加载</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.moduleLoading" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="moduleEngine">
        <h2 id="moduleEngine">模块引擎</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.moduleEngine" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="gameEngine">
        <h2 id="gameEngine">游戏引擎</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.gameEngine" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>
      <div class="mobileFrame">
        <h2 id="mobileFrame">移动框架</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.mobileFrame" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{item.description}}
              </template>
            </a-card-meta>
          </a-card>
        </a-link>
      </div>


    </div>
  </div>
</template>

<style scoped>

</style>