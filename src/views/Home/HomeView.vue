<script setup>
import {ref} from "vue"
// save navigation bar data
const navList = ref([])
const dataList = {
  choseColor :[
    {
      "title": "webgradients",
      "titleLink": "https://webgradients.com/",
      "img": "https://webgradients.com/img/banners/logo.svg",
      "description": "WebGradients是一个免费的渐变色彩选择网站，提供了180多种渐变色彩选择，可以直接复制css代码。"
    },
    {
      "title": "realtimecolors",
      "titleLink": "https://realtimecolors.com/",
      "img": "https://realtimecolors.com/images/favicon.png",
      "description": "Realtime Colors是一个实时颜色选择器，可以实时调整颜色，然后复制css代码。"
    }
    , {
      "title": "shapefactory",
      "titleLink": "https://www.shapefactory.co/",
      "img": "src/assets/img/shapefactory.png",
      "description": "ShapeFactory是简单设计工具，提供Logo、Pigment、Gradient、Duotone四种功能。"
    },
    {
      "title": "colorsupplyyy",
      "titleLink": "https://colorsupplyyy.com/app",
      "img": "https://colorsupplyyy.com/assets/rainbow_logo-c01f4e1fb0ed89bd7fba476e68bf6f05c50d0db9de6dc9a8395b28f421aa9930.svg",
      "description": "来自世界各地的大师的配色方案."
    },
    {
      "title": "colorhunt",
      "titleLink": "https://colorhunt.co/",
      "img": "https://colorhunt.co/img/color-hunt-logo-tongue.svg",
      "description": "Color Hunt是一个免费和开源的平台，用于创建、分享和应用颜色调色板。"
    },
    {
      "title": "colormind",
      "titleLink": "https://colormind.io/",
      "img": "src/assets/img/colormind.png",
      "description": "基于AI的调色网站，可以生成配色方案。"
    },
    {
      "title": "khroma",
      "titleLink": "https://khroma.co/",
      "img": "https://www.khroma.co/assets/images/igbg2x2.png",
      "description": "基于AI的调色网站，实现高精度的配色方案。"
    }, {
      "title": "colorhexa",
      "titleLink": "https://www.colorhexa.com/",
      "img": "https://www.colorhexa.com/static/i/logo.min.svg",
      "description": "一站式网页设计工具。"
    }, {
      "title": "webcolourdata",
      "titleLink": "https://webcolourdata.com/",
      "img": "https://img.sedoparking.com/templates/bg/arrows.png",
      "description": "快速寻找当前网页颜色"
    }, {
      "title": "colorlisa",
      "titleLink": "http://colorlisa.com/",
      "img": "http://colorlisa.com/icons/apple-touch-icon-76x76.png",
      "description": "Color Lisa的色板都是来自于名家的作品"
    }, {
      "title": "colourco",
      "titleLink": "https://colourco.de/",
      "img": "https://toptal.com/designers/colourcode/apple-touch-icon.png",
      "description": "Colourco.de是一个基于Web的工具，可以帮助您创建、保存和共享调色板。"
    }
  ],
  commonTools : [
    {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHTML 压缩/解压工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/47/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/html.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tJS 压缩/解压工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/51/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/js.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tCSS 压缩/解压工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/52/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/css.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tJSON 在线解析 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/53/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/json.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tRGB转16进制工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/55/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/rgb.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线进制转换器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/58/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/binary.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t图片转 BASE64 编码 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/59/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/image2base64.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHTML/CSS/JS 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/61/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/htmlcssjs.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t随机密码生成器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/686/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/key.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHTML 编码/解码 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/691/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/1473407898_Coding-Html.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tBase64 编码/解码 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/693/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/45920.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tURL 编码/解码 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/695/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/1473410242_url.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tSQL 格式化/压缩工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/701/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/sql_query-128.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tMD5 加密 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/703/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/md5.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tSHA 加密 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/706/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/olive-data-encryption-128.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tXML、JSON 在线转换 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/708/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/images.jpeg"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线 XML 格式化 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/710/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/iconfinder_application-xml_28904.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tMarkdown 在线编辑器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/712/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/09/markdown-icon.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHTML 转 JavaScript 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/846/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/11/1480248614_Html.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tUNIX 时间戳转换 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/852/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/11/history-128.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t正则表达式在线测试 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/854/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/11/regular.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tRGB HSV 转换 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/868/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/12/1481023129_HSV.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tRGB CMYK 转换工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/870/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/12/1481023045_cmyk.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHEX CMYK 转换工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/873/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/12/1481024809_CMYK.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHEX HSV 转换工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/875/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/12/1481025911_Colours_CMYK.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHSV CMYK 转换工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/877/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2016/12/1481026587_Colours_RGB.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线二维码生成器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/3454/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2017/08/if_qrcode_173080.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线 Unicode 编码转换 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/3602/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2017/09/unicode_convert.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tIP 地址查询 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/5445/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2018/11/IPaddress_IP.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHTML 取色器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/5449/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2018/11/3LkGs.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t汉字转拼音 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/5523/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2018/12/hzp.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t代码在线高亮 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/5536/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2019/02/iconfinder_Technology_Mix_-_Final-11_998692.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t长度单位换算 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/5575/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2019/05/length-unit.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线繁体字转换器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/5579/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2019/05/fan2jian.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线字数统计工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/5580/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2019/05/count-word.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t今日日期 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/5672/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2021/03/iconfinder_calendar_285670.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t取色器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6210/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2021/08/colorpicker11.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t图片取色器/拾色器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6214/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2021/09/color-picker-image.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tCSS 按钮生成器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6222/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2021/10/StandAloneButton.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tPNG/JPEG 图片压缩 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6232/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/02/530-compress-jpeg-1.jpeg"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tASCII 表 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6318/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/ascii-logo.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t调色板 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6327/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/html-color-codes.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t图片加水印 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6502/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/sy-logo.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t颜色选择器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6656/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/color-select.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t随机数生成器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6680/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/26-266723_numbers.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线涂鸦画板 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6900/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/1814074_draw_edit_pencile_write_icon.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线计算器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/6904/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/2530794_accounting_calculate_calculation_calculator_general_icon.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tJavaScript 混淆/加密 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/6939/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/4021438_code_lock_protect_security_shield_icon.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tpdf 转图片(jpg,png) \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/7271/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/pdf2image-logo.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t代码生成图片 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/7433/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/code2image.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线 JSON 解析 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/7438/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/4691282_json_icon.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t图片转PDF \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/7574/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/image2pdf.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t正则表达式可视化工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/7625/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/regex-image-logo.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tJSON 转义/去除转义 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/7683/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/08/2993435_array_data_file_javascript_json_icon.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tHTML 表格生成器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://tools.haiyong.site/front-end/7688/index.html",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/307999_cell_table_icon.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线汇率换算器 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/7939/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/coins-conveter.png"
    }, {
      "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线文本比对工具 \n\t\t\t\t\t\t\t\t\t\t",
      "titleLink": "https://c.runoob.com/front-end/8006/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/10/9022487_git_diff_duotone_icon.png"
    }],
  compileTools : [{
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tPHP 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/1/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/php.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tPython2 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/6/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/python.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tPython3 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/9/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/python.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tJava 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/10/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/java.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tC 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/11/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/c.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tC++ 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/12/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/cpp.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tRuby 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/13/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/ruby.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tC# 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/14/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/csharp.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tScala 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/15/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/scala.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tErlang 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/16/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/iconfinder_115_Erlang_logo_logos_4373173.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tPerl 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/17/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/perl.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tBash 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/18/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/bash.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tRUST 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/19/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/iconfinder_rust_4691305.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tSwift 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/20/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/swift.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tGo 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/21/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/go.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tNode.js 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/22/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/node.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tLua 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/66/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/lua.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tPascal 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/73/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2016/01/pascal.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tKotlin 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/2960/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2017/06/kotlin.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tTypeScript 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/5577/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2019/05/typescript.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tVB.NET 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/5648/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2020/05/iconfinder_Vb_program_programming_file_extension_3044873.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tR 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/5649/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2020/05/iconfinder_285_R_Project_4518765.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tAssembly 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/6206/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2021/08/general-assembly-logo.png"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t\t\t\t\t\t\tGroovy 在线工具 \n\t\t\t\t\t\t\t\t\t\t",
    "titleLink": "https://c.runoob.com/compile/6208/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2021/08/Groovy.png"
  }],
  technologyLearning : [{
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tStack Overflow",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/14-e1647306997102.png",
    "titleLink": "https://stackoverflow.com/search",
    "description": " 大部分编程问题都能在这里找到答案。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t博客园",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/cnblogs-logo.png",
    "titleLink": "https://www.cnblogs.com/",
    "description": " 开发者的网上家园"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCSDN",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/csdn-logo.jpeg",
    "titleLink": "https://www.csdn.net/",
    "description": " 专业开发者社区"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t开源中国",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/%E5%BC%80%E6%BA%90%E4%B8%AD%E5%9B%BD.jpg",
    "titleLink": "https://www.oschina.net/",
    "description": " 中文开源技术交流社区"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tSF思否",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/segmentfault.png",
    "titleLink": "https://segmentfault.com/",
    "description": " 一个开放的技术社区"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t掘金",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/%E6%8E%98%E9%87%91.png",
    "titleLink": "https://juejin.cn/",
    "description": " 代码不止，掘金不停"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t前端开发",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/532707_api_coding_developer_development_man_icon.png",
    "titleLink": "https://tools.haiyong.site/web-developer/",
    "description": " 中国领先的IT技术网站"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tDEV Community",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/dev-logo.png",
    "titleLink": "https://dev.to/",
    "description": " 国外技术分享社区，技术分类比较多，包含 C、 Java、Python 等"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tInfoQ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/infoq-logo.png",
    "titleLink": "https://www.infoq.cn/",
    "description": " 以社区为中心的技术媒体平台，致力于促进软件开发及相关领域知识与创新的传播"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tChinaUnix",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/china-unix.jpg",
    "titleLink": "http://www.chinaunix.net/",
    "description": " 专业的Linux/Unix应用与开发者社区，是IT人的网上家园"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t编程测验",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/quiz-icon.png",
    "titleLink": "https://tools.haiyong.site/quiz/",
    "description": " 包含各种语言在线测验题"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tGo语言中文网",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/golang.jpg",
    "titleLink": "https://studygolang.com/",
    "description": " 中国Golang社区，是Go语言爱好者的学习家园"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tV2EX",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/v2ex-logo.png",
    "titleLink": "http://www.v2ex.com/",
    "description": " 一个汇集各类奇妙好玩的话题和流行动向的网站，V2EX提供特别有用的小工具『ZEN』,帮助你掌握自己的时间"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCNode",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/cnode.png",
    "titleLink": "https://cnodejs.org/",
    "description": " Node.js专业中文社区"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tLinux 公社",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/linuxidc-logo.png",
    "titleLink": "https://www.linuxidc.com/",
    "description": " Linux 系统门户网站，实时发布最新 Linux 资讯。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tMSDN",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/msdn-logo.png",
    "titleLink": "https://docs.microsoft.com/zh-cn/documentation/",
    "description": " 搜索有关 Microsoft 开发人员工具和技术的深度文章。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tdeveloperWork",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/develper.png",
    "titleLink": "https://developer.ibm.com/",
    "description": " IBM的官方开发者项目，在这里你可以访问和下载试用版软件，查找丰富的IT技术资源，和专业的IT从业人员交流"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t力扣",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/leetcode-logo.png",
    "titleLink": "https://leetcode-cn.com/",
    "description": " 刷题及面试资源，帮助你高效提升编程技能"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tReddit",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/reddit-logo.png",
    "titleLink": "https://www.reddit.com/r/programming/",
    "description": " 和世界各地的程序员探讨和交流技术问题或 IT 热点资讯。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tHacker News",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/hn-logo.png",
    "titleLink": "https://news.ycombinator.com/",
    "description": " 计算机黑客和创业公司的社会化新闻网站"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tFreeBuf",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/freebuf-logo.png",
    "titleLink": "https://www.freebuf.com/",
    "description": " 国内网络安全行业门户，适合相对资深的极客、黑客人群，以及网站安全类岗位的从业人员。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tW3School",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/w3-logo.png",
    "titleLink": "https://www.w3school.com.cn/",
    "description": " 包含了比较全面的中文 Web 技术教程"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t51CTO",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/51otc.jpg",
    "titleLink": "https://www.51cto.com/",
    "description": " 中国领先的IT技术网站"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tDzone",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/dz-logo-v.svg",
    "titleLink": "https://dzone.com/",
    "description": " 技术涵盖比较全面的网站，像云平台、数据库、物联网、开发运维、Java 语言等都有。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t中国大学MOOC",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/mooc-logo.png",
    "titleLink": "https://www.icourse163.org/",
    "description": " 精品课程在线学习平台"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tDevDocs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/devdoc-logo.png",
    "titleLink": "https://devdocs.io/",
    "description": " 开源免费文档查询工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tMDN Web Docs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/mdn-logo.png",
    "titleLink": "https://developer.mozilla.org/zh-CN/",
    "description": " Web 技术，包括 CSS、HTML 和 JavaScript"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tChatGPT",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/openai-avatar.png",
    "titleLink": "https://chat-gpt-next-2xjpm2t58-hua123an.vercel.app",
    "description": " 一款功能丰富、智能化、易用性强的人工智能工具，适用于各种内容创作者"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tAlgorithms",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/logo_t.svg",
    "titleLink": "https://the-algorithms.com/",
    "description": " GitHub 最大的开源算法库"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t编程书籍",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/285636_book_icon.png",
    "titleLink": "https://c.runoob.com/books/",
    "description": " 各类编程书籍推荐"
  }],
  developSoftware : [{
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t软件下载中心",
    "titleLink": "https://pc.qq.com/category/c13.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/ruanjianxiazai.jpg",
    "description": " 腾讯编程软件下载中心推荐2022年最新编程软件高速免费下载，提供多维度编程软件排行榜和编程哪个好等参考信息。全部软件都已经过安全杀毒检测，安全放心。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tVS Code",
    "titleLink": "https://code.visualstudio.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/vs-code.jpg",
    "description": " 微软开发且跨平台的免费源代码编辑器，很好用"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tIntelliJ IDEA",
    "titleLink": "https://www.jetbrains.com/idea/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/intellij.png",
    "description": " 好用的 Java 编程工具，要付钱"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tPuTTY",
    "titleLink": "https://www.putty.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/putty-logo.png",
    "description": " 远程连接 Linux 工具，开源免费"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tSublime Text",
    "titleLink": "https://www.sublimetext.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/sublime-text.jpg",
    "description": " 跨平台代码编辑器，挺好用"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tsecureCRT&FX",
    "titleLink": "https://www.vandyke.com/download/index.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/vandyke.jpg",
    "description": " 超好用的 FTP、SSH 连接工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tNavicat",
    "titleLink": "https://www.navicat.com.cn/download/navicat-premium",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/navicat.jpg",
    "description": " 数据库管理工具，用以管理 MySQL、Oracle、PostgreSQL、SQLite、SQL Server、MariaDB 和/或 MongoDB\n\t\t\t\t\t\t\t\t\t\t\t\t等不同类型的数据库。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tPostman",
    "titleLink": "https://www.postman.com/downloads/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/postman.jpg",
    "description": " 接口调试与测试工具，提供功能强大的 Web API & HTTP 请求调试。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t宝塔",
    "titleLink": "https://www.bt.cn/new/index.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/bt_logo_new.png",
    "description": " 简单好用的 Linux/Windows 服务器运维管理面板"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tEclipse",
    "titleLink": "https://www.eclipse.org/downloads/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/eclipse.jpg",
    "description": " 是著名的跨平台的自由集成开发环境（IDE）,Eclipse集成了重构的工具，使得代码的优化变得尤为简单."
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tAtom",
    "titleLink": "https://atom.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/atom.jpg",
    "description": " Github 专门为程序员推出的一个跨平台文本编辑器。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tWebStorm",
    "titleLink": "https://www.jetbrains.com/webstorm/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/webstorm.jpg",
    "description": " 适用于 Web、JavaScript 的集成开发环境。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tPyCharm",
    "titleLink": "https://www.jetbrains.com/pycharm/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/pycharm.jpg",
    "description": " Python IDE，提高 Python 语言开发效率。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tAndroid Studio",
    "titleLink": "https://developer.android.com/studio",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/android.jpg",
    "description": " 谷歌推出的一个 Android 集成开发工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tDataGrip",
    "titleLink": "https://www.jetbrains.com/datagrip/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/datagrip.jpg",
    "description": " JetBrains旗下的一款数据库管理工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tDBeaver",
    "titleLink": "https://dbeaver.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/dbeaver.jpg",
    "description": " 免费和开源（GPL）为开发人员和数据库管理员通用数据库工具。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tStudio 3T",
    "titleLink": "https://studio3t.com/download/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/studio-3t.jpg",
    "description": " 是一款十分优秀的数据库管理软件,该软件拥有业界顶尖的图形化操作界面,内置了先进的聚合编辑器,能够帮助用户高效率地完成数据库编辑管理."
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tRedis Desktop Manager",
    "titleLink": "https://resp.app/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/redis.jpg",
    "description": " 是目前最好用的Redis可视化管理工具."
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tAnother Redis Desktop Manager",
    "titleLink": "https://github.com/qishibo/AnotherRedisDesktopManager",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/another.jpg",
    "description": " 开源免费的 Redis 可视化管理工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tFiddler",
    "titleLink": "https://www.telerik.com/download/fiddler",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/fiddle.jpg",
    "description": " 强大的抓包工具，Web 调试工具，能记录客户端和服务器的 http/https 请求，允许你监视，设置断点，甚至修改输入输出数据。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tEditPlus",
    "titleLink": "https://www.editplus.com/download.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/editplus.png",
    "description": " 一款小巧的但是功能强大的代码编辑器。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tBeyond Compare",
    "titleLink": "https://www.scootersoftware.com/download.php",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/beyond.jpg",
    "description": " 专业且好用的文件对比软件"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tFinalShell",
    "titleLink": "https://www.hostbuf.com/t/988.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/shell-logo.png",
    "description": " 是一体化的的服务器，网络管理软件，不仅是ssh客户端,还是功能强大的开发，运维工具，充分满足开发，运维需求。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tSnipPaste",
    "titleLink": "https://www.snipaste.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Snipaste.png",
    "description": " 是一款非常高效的屏幕截图软件。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tPotPlayer",
    "titleLink": "https://pc.qq.com/detail/14/detail_15654.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/potplayer.jpg",
    "description": " 一款非常专业的视频播放器,PotPlayer软件自带专业的编解码器，方便快捷，一同安装后可观看任何格式视频文件，功能非常强大."
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tChiner",
    "titleLink": "https://gitee.com/robergroup/chiner",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/gitee.jpg",
    "description": " 一款丰富数据库生态，独立于具体数据库之外的，数据库关系模型设计平台."
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tMac 软件下载",
    "titleLink": "https://www.macwk.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/macwk-logo.png",
    "description": " 提供很多精品Mac软件下载"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tVagrant",
    "titleLink": "https://www.vagrantup.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/vagrant_logo.png",
    "description": " 创建和部署虚拟化开发环境"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tVirtualBox",
    "titleLink": "https://www.virtualbox.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/VirtualBox.png",
    "description": " 开源虚拟机软件"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tGitHub Desktop",
    "titleLink": "https://desktop.github.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/githubdesktop.jpeg",
    "description": " Github 官方的 Git 界面操作"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tKangaroo",
    "titleLink": "https://www.datatable.online/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/kangaroo.svg",
    "description": " 流行数据库的 SQL 客户端和管理工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tHeidiSQL",
    "titleLink": "https://www.heidisql.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/HeidiSQL-1.jpg",
    "description": " 是MariaDB、MySQL、Microsoft SQL Server、PostgreSQL和SQLite的免费且功能强大的客户端"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\ttableplus",
    "titleLink": "https://tableplus.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/tableplus.png",
    "description": " 用于数据库管理的现代本地工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tsequelpro",
    "titleLink": "https://sequelpro.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/09/sequel.png",
    "description": " 是一个快速、易于使用的Mac数据库管理应用程序，用于处理MySQL数据库。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCursor",
    "titleLink": "https://www.cursor.so/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/f1a6cd24acefcc687dea963158cdc42e.png",
    "description": " 使用 GPT-4 编写代码"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCopilot X",
    "titleLink": "https://github.com/features/preview/copilot-x",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/copilot-x.png",
    "description": " GitHub 和 OpenAI 合作开发的一个代码自动生成工具"
  }],
  publicIcon : [{
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tStaticfile CDN",
    "titleLink": "https://www.staticfile.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/staticfile-logo.png",
    "description": " 提供免费、快速、开放的 CDN 服务，也提供开源库源接入的入口，让所有人都可以提交开源库。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tcdnjs",
    "titleLink": "https://cdnjs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/csdnjs-logo.png",
    "description": " 是一个通过快速 CDN 基础设施为开发人员和组织提供流行的前端 Web 开发资源的项目，帮助代码库与框架开发者分发他们的项目。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t微软CDN",
    "titleLink": "https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/%E5%BE%AE%E8%BD%AFCDN.png",
    "description": " 微软公司提供的公共CDN服务。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tjsDelivr",
    "titleLink": "https://www.jsdelivr.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jsdelivr.jpg",
    "description": " 免费开源的 CDN 解决方案，用于帮助开发者和站长。包含 JavaScript 库、jQuery 插件、CSS 框架、字体等等 Web 上常用的静态资源。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tjQuery CDN",
    "titleLink": "https://releases.jquery.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/jQuery%E4%B9%8B%E5%AE%B6.jpg",
    "description": " jQuery 官网提供的 CDN 服务"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t阿里图标库",
    "titleLink": "https://www.iconfont.cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/%E9%98%BF%E9%87%8C%E5%9B%BE%E6%A0%87%E5%BA%93.png",
    "description": " 国内功能很强大且图标内容很丰富的矢量图标库"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t矢量 logo下载",
    "titleLink": "https://worldvectorlogo.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/%E7%9F%A2%E9%87%8Flogo.jpg",
    "description": " 知名 logo 矢量资源下载"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tUNPKG",
    "titleLink": "https://unpkg.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/unpkg.jpg",
    "description": " 前端 CDN 库，适用于 npm 上的所有内容。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tFont Awesome",
    "titleLink": "https://fontawesome.com/icons",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/fontawesome.jpg",
    "description": " 一套绝佳的图标字体库和CSS框架"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tIcoMoon",
    "titleLink": "https://icomoon.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/icomoon.jpg",
    "description": " 免费的开源字体图标库"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tpictonic",
    "titleLink": "https://pictonic.co/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/pictonic.jpg",
    "description": " 国外一个有362个免费字体图标库"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tMFG labs icon set",
    "titleLink": "http://mfglabs.github.io/mfglabs-iconset/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/MFG.png",
    "description": " 免费字体图标库"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tLigature Symbols",
    "titleLink": "https://c.runoob.com/more/LigatureSymbols/site/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/ligature-symbols.png",
    "description": " 免费字体图标库"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tBootstrap Icons",
    "titleLink": "https://icons.getbootstrap.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Bootstrap-Icons.png",
    "description": " 专门为著名的前端开发 UI 框架 Bootstrap 的组件和文档定制开发的图标库"
  }],
  onlineTools :  [{
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tRegExr",
    "titleLink": "https://regexr.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/regexrcom-logo.png",
    "description": " 正则表达式在线测试工具。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t在线编译工具",
    "titleLink": "https://ide.judge0.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/judge-logo.jpg",
    "description": " 可以在线执行编程语言与 SQL 语句"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\trextester",
    "titleLink": "https://rextester.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/rextester.png",
    "description": " 在线执行 PHP、Python、C、Java 等各种语言代码。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tIdeone",
    "titleLink": "https://ideone.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/g7o8ow0dockrtsdxym8m.webp",
    "description": " 在线执行 PHP、Python、C、Java 等各种语言代码。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tGDB online Debugger",
    "titleLink": "https://www.onlinegdb.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/GDB1.png",
    "description": " 在线执行 PHP、Python、C、Java 等各种语言代码。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tJSFiddle",
    "titleLink": "https://jsfiddle.net/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/JSF.jpg",
    "description": " 前端代码在线执行工具。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCodePen",
    "titleLink": "https://codepen.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/codepen-512.png",
    "description": " 前端代码在线执行工具。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tJSON 解析器",
    "titleLink": "https://c.runoob.com/front-end/53",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/json.png",
    "description": " 在线 JSON 工具，可以格式化 JSON 数据。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tRedis 在线测试",
    "titleLink": "https://try.redis.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/redis-logo.png",
    "description": " Redis 命令在线测试工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tPaiza",
    "titleLink": "https://paiza.io/en?locale=en-us",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/paiza.png",
    "description": " 在线编译工具，包含Python、Java、MySQL 等。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tLearn Git Branching",
    "titleLink": "https://learngitbranching.js.org/?locale=zh_CN",
    "img": "https://static.runoob.com/images/svg/logo-git.svg",
    "description": " Git 学习命令，可以动画演示命令执行过程"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tJS Bin",
    "titleLink": "https://jsbin.com/?html,output",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/js-bin.png",
    "description": " 前端代码在线执行工具。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t正则可视化工具",
    "titleLink": "https://c.runoob.com/codedemo/7625/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/regex-image-logo.png",
    "description": " 将正则表达式转化成可视化图片"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t代码转图片工具",
    "titleLink": "https://carbon.now.sh/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/carbon-logo.png",
    "description": " 代码转为图片，代码美化"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t算法可视化学习",
    "titleLink": "https://visualgo.net/zh",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/visualgo-logo.jpeg",
    "description": " 各种算法可视化，让算法更直观，学起来不那么枯燥。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tasciiflow",
    "titleLink": "https://asciiflow.com/#/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/asciiflow.png",
    "description": " 一款通过 ASCII 编码来绘制图表的在线工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tcodelf",
    "titleLink": "https://unbug.github.io/codelf/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/codelf.png",
    "description": " 变量命名神器"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tDesmos",
    "titleLink": "https://www.desmos.com/calculator?lang=zh-CN",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/desmos.jpg",
    "description": " 免费的在线函数图形计算器"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tSQL OnLine IDE",
    "titleLink": "https://sqliteonline.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/07/315102_sql_file_icon.png",
    "description": " SQL 在线执行测试工具，支持 SQLite、Oracle、MariaDB等各种数据。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tregex101",
    "titleLink": "https://regex101.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/regex101.png",
    "description": " 正则表达式在线测试学习工具"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCodex",
    "titleLink": "https://chat-gpt-next-2xjpm2t58-hua123an.vercel.app/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/openai-avatar.png",
    "description": " AI 代码生成，通过输入需求生成对应各种语言的代码"
  }],
  codeManager : [{
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tGitHub",
    "titleLink": "https://github.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/github.png",
    "description": " 是一个面向开源及私有软件项目的托管平台"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t1024code",
    "titleLink": "https://1024code.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/07/icon-32x32.png",
    "description": " 用1024Code, 让编程重回乐趣"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCoding",
    "titleLink": "https://coding.net/products/repo",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/coding-1.png",
    "description": " 一站式软件研发管理平台"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t码云",
    "titleLink": "https://gitee.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/mayun_logo.png",
    "description": " 基于 Git 的代码托管和研发协作平台"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tBitbucket",
    "titleLink": "https://bitbucket.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Bitbucket.jpg",
    "description": " 为团队提供了一个规划项目、协作编写代码、测试和部署的场所"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tGitLab",
    "titleLink": "https://about.gitlab.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/gitlab.jpg",
    "description": " 一个DevOps平台，一个方便软件开发的强大完整应用"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tGitshell",
    "titleLink": "https://gitshell.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/Gitshell.png",
    "description": " 稳定、快速的Git代码托管服务"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tSvn China",
    "titleLink": "http://www.svnchina.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/svn.png",
    "description": " 中国源代码托管中心，支持Subversion权限管理、版本管理、修订纪录订阅、SVN库备份导入导出等功能"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t云效代码管理Codeup",
    "titleLink": "https://codeup.aliyun.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/codeup-logo.png",
    "description": " 阿里云出品的一款企业级代码管理平台"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\t腾讯工蜂",
    "titleLink": "https://git.code.tencent.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/C05522D8-1582-4522-A41E-410EB8696421.jpeg",
    "description": " 腾讯家的代码托管服务"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tSourcetree",
    "titleLink": "https://www.runoob.com/git/source-tree-intro.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/4375088_logo_sourcetree_icon.png",
    "description": " Git 客户端管理工具，适用于 Windows 和 Mac 系统。"
  }, {
    "title": "\n\t\t\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t\t\t\tCodeberg",
    "titleLink": "https://codeberg.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/codeberg-logo.jpeg",
    "description": " 协作平台和 git 托管"
  }],
  searchEngine : [{
    "title": " \n            Google        ",
    "titleLink": "https://www.google.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/googe.png",
    "description": " 最好用，但是要访问需要点技术。"
  }, {
    "title": " \n            Baidu        ",
    "titleLink": "https://www.baidu.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/baidu.jpg",
    "description": " 搜索结果不一定是你想要的，广告也多。"
  }, {
    "title": " \n            DuckDuckGo        ",
    "titleLink": "https://duckduckgo.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/duck.jpg",
    "description": " 从官网的介绍来看这个搜索引擎不收集用户信息，而且没有广告。"
  }, {
    "title": " \n            Gitlogs        ",
    "titleLink": "https://www.gitlogs.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/gitlog-log.png",
    "description": " Gitlogs 是专门针对 GitHub 项目的搜索引擎，我们通过他可以快速找到想要项目。"
  }, {
    "title": " \n            Stack Overflow        ",
    "titleLink": "https://stackoverflow.com/search",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/14-e1647306997102.png",
    "description": " 大部分编程问题都能在这里找到答案。"
  }, {
    "title": " \n            Github        ",
    "titleLink": "https://github.com/search",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20220315103508.png",
    "description": " 最大的开源项目资源网站。"
  }, {
    "title": " \n            Iconfinder        ",
    "titleLink": "https://www.iconfinder.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/iconfinder.png",
    "description": " 用来查找一些类似 logo 的小图标。"
  }, {
    "title": " \n            必应搜索        ",
    "titleLink": "https://cn.bing.com/",
    "img": "https://static.runoob.com/images/svg/bing.svg",
    "description": " 微软公司的搜索引擎"
  }, {
    "title": " \n            头条搜索        ",
    "titleLink": "https://m.toutiao.com/search",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/toutiao.png",
    "description": " 今日头条的搜索引擎"
  }, {
    "title": " \n            Similarsitesearch        ",
    "titleLink": "https://www.similarsitesearch.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Similarsitesearch.png",
    "description": " 寻找类似网站的最佳地点"
  }, {
    "title": " \n            CC Search        ",
    "titleLink": "https://ccsearch.creativecommons.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/CC.jpg",
    "description": " CC Search 上搜索到的图片资源都是无版权的，我们可以免费的使用。"
  }, {
    "title": " \n            Pexels        ",
    "titleLink": "https://www.pexels.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/pexels.png",
    "description": " 高质量的图片网站，可以免费使用。"
  }, {
    "title": " \n            Unsplash        ",
    "titleLink": "https://unsplash.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/unsplash.png",
    "description": " 免费高清素材网站。"
  }, {
    "title": " \n            知乎搜索        ",
    "titleLink": "https://zhihu.sogou.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/zhihu.png",
    "description": " 搜索知乎的内容"
  }, {
    "title": " \n            SimilarWeb        ",
    "titleLink": "https://www.similarweb.com/zh/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Similarweb.jpg",
    "description": " 站点流量 — 查看并分析任何网站"
  }, {
    "title": " \n            Goobe        ",
    "titleLink": "https://goobe.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/goobe.png",
    "description": " 为程序员服务的互联网搜索引擎"
  }, {
    "title": " \n            F搜        ",
    "titleLink": "https://fsoufsou.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/11/F.png",
    "description": " 是一个搜索引擎，提供了无广告、过滤内容农场的搜索结果，支持翻译、天气、IP 查询等功能"
  }, {
    "title": " \n            TinEye        ",
    "titleLink": "https://www.tineye.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/tineye.png",
    "description": " 用图片来检索图片，我们可以上传图片或输入图片的 URL 来检索。"
  }, {
    "title": " \n            开发者搜索        ",
    "titleLink": "https://kaifa.baidu.com/",
    "img": "https://static.runoob.com/images/svg/search-solid.svg",
    "description": " 针对开发人员的搜索，百度提供"
  }, {
    "title": " \n            SemanticScholar        ",
    "titleLink": "https://www.semanticscholar.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/seman.jpg",
    "description": " 一个免费学术搜索引擎，其检索结果来自于期刊、学术会议资料或者"
  }, {
    "title": " \n            WikiHow        ",
    "titleLink": "https://zh.wikihow.com/%E9%A6%96%E9%A1%B5",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/WikiHow.png",
    "description": " 是一个综合技能搜索网站，万事指南网站"
  }, {
    "title": " \n            知网        ",
    "titleLink": "https://www.cnki.net/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/zw-logo.png",
    "description": " 精品论文搜索网站"
  }, {
    "title": " \n            Startpage        ",
    "titleLink": "https://www.startpage.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/startpage-log.webp",
    "description": " 不收集个人数据的搜索引擎"
  }, {
    "title": " \n            Yandex        ",
    "titleLink": "https://yandex.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/4375136_international_logo_yandex_icon.png",
    "description": " 俄罗斯的搜索引擎"
  }, {
    "title": " \n            LibreStock        ",
    "titleLink": "https://librestock.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/libre-1.png",
    "description": " 可以检索一些优质的高清图片。"
  }, {
    "title": " \n            The App Store        ",
    "titleLink": "https://theappstore.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/app-store.png",
    "description": " 一个针对苹果手机、iPad、Mac 设备的应用搜索工具。"
  }, {
    "title": " \n            WolframAlpha        ",
    "titleLink": "https://www.wolframalpha.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/WolframAlpha.jpg",
    "description": " 一个更专业的学术搜索网站"
  }, {
    "title": " \n            Google 图书搜索        ",
    "titleLink": "https://books.google.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Google.jpg",
    "description": " 索引了大部分正规出版的书籍、杂志、报纸等的摘要"
  }, {
    "title": " \n            Internet Archive        ",
    "titleLink": "https://archive.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Internet-Archive.jpg",
    "description": " 用户能在 Internet Archive 搜索到上百万的免费资源"
  }, {
    "title": " \n            Ebooke        ",
    "titleLink": "https://ebookee.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/03/ebooke.png",
    "description": " 一个基于互联网并提供免费电子图书下载的搜索引擎网站。"
  }, {
    "title": " \n            FindIcons        ",
    "titleLink": "https://findicons.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/fdicons-logo.png",
    "description": " 优秀图标素材库"
  }, {
    "title": " \n            Wikipedia        ",
    "titleLink": "https://www.wikipedia.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/100066_wikipedia_icon.png",
    "description": " 自由的百科全书"
  }, {
    "title": " \n            Tunefind        ",
    "titleLink": "https://www.tunefind.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Tunefind.png",
    "description": " 方便搜索 BGM"
  }, {
    "title": " \n            trace.moe        ",
    "titleLink": "https://trace.moe/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/trace.moe_.jpg",
    "description": " 是一款识别率惊人的开源动画搜索引擎"
  }, {
    "title": " \n            Qwant        ",
    "titleLink": "https://www.qwant.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Qwant.png",
    "description": " 法国的搜索引擎"
  }, {
    "title": " \n            Dogpile        ",
    "titleLink": "https://www.dogpile.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Dogpile.jpg",
    "description": " 属于元搜索引擎"
  }, {
    "title": " \n            Peekier        ",
    "titleLink": "https://peekier.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Peekier.png",
    "description": " 注重用户隐私的搜索引擎之一，搜索速度较快"
  }, {
    "title": " \n            ecosia        ",
    "titleLink": "https://www.ecosia.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ecosia.png",
    "description": " 是一款环保的浏览器"
  }, {
    "title": " \n            gigablast        ",
    "titleLink": "https://www.gigablast.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/gigablast.png",
    "description": " 个人搜索引擎，访问速度较快"
  }, {
    "title": " \n            鸠摩搜书        ",
    "titleLink": "https://www.jiumodiary.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/jiumodiary-logo.png",
    "description": " 可以用来找一些技术文档手册，很多在百度网盘里。"
  }, {
    "title": " \n            ProSettings        ",
    "titleLink": "https://prosettings.net/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/prosettings.png",
    "description": " 电竞比赛中的最佳设置和设定"
  }, {
    "title": " \n            搜狗微信搜索        ",
    "titleLink": "https://weixin.sogou.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/9318110f2e5f49c407fe810dc9697766_512_512-1-1.jpg",
    "description": " 搜狗提供的订阅号及文章内容搜索"
  }, {
    "title": " \n            国家安全信息泄露共享平台        ",
    "titleLink": "https://www.cnvd.org.cn/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/guojiaxinxianquan.png",
    "description": " 国家计算机网络应急技术处理协调中心联合建立的信息安全漏洞信息共享知识库"
  }, {
    "title": " \n            Windy        ",
    "titleLink": "https://www.windy.com/?29.878,121.549,5,i:pressure",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/windy.png",
    "description": " 查天气，数据全"
  }, {
    "title": " \n            可视化看中国        ",
    "titleLink": "https://vis.pku.edu.cn/vis4china/#/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/keshihua.png",
    "description": " 全面了解中国"
  }, {
    "title": " \n            The pudding        ",
    "titleLink": "https://pudding.cool/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/pudding.jpg",
    "description": " 用视觉文章解释文化中争论的观点"
  }, {
    "title": " \n            Stanford Encyclopedia of Philosophy        ",
    "titleLink": "https://plato.stanford.edu/index.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/stanford.png",
    "description": " 斯坦福哲学百科全书"
  }, {
    "title": " \n            WordHippo        ",
    "titleLink": "https://www.wordhippo.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/wordhippo.png",
    "description": " 词库和文字工具"
  }, {
    "title": " \n            全历史        ",
    "titleLink": "https://www.allhistory.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/quanlishi.png",
    "description": " 可视化历史进程解析"
  }, {
    "title": " \n            visualcapitalist        ",
    "titleLink": "https://www.visualcapitalist.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/visual.png",
    "description": " 可视化数据网站"
  }, {
    "title": " \n            TOP 500        ",
    "titleLink": "https://www.top500.org/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/TOP500.png",
    "description": " 世界超级计算机排名网站"
  }, {
    "title": " \n            怡口水质地图        ",
    "titleLink": "https://ecowater.com.cn/service-and-support/eco-water-quality/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/yikou.jpg",
    "description": " 数据可视化水质地图，很直观"
  }, {
    "title": " \n            STARSHIP DIMENSIONS        ",
    "titleLink": "https://www.merzo.net/indexSD.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/tongxin-baike.jpg",
    "description": " 是飞行器爱好者或者科幻迷必看网站"
  }, {
    "title": " \n            BetaWiki        ",
    "titleLink": "https://betawiki.net/wiki/Main_Page",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/betawiki.png",
    "description": " 软件史的开放百科全书"
  }, {
    "title": " \n            华为IP知识百科        ",
    "titleLink": "https://info.support.huawei.com/info-finder/encyclopedia/zh/index.html",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/huawei.png",
    "description": " 为数据通信领域的热点技术提供简单、易懂的定义和解释"
  }, {
    "title": " \n            PDF Drive        ",
    "titleLink": "https://www.pdfdrive.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/pdf-drive.png",
    "description": " 免费搜索和下载PDF文件"
  }]
}
// nav list
const listData = ref([
  {'data' : "配色网站" , "href" : "#choseColor"},
  {'data' : '常用工具' , 'href' : '#commonTools'},
  {'data' : '编译工具' , 'href' : '#compileTools'},
  {'data' : '技术学习' ,'href' : '#technologyLearning'},
  {'data' : '开发软件' ,'href' : '#developSoftware'},
  {'data' : '公共图标库' ,'href' : '#publicIcon'},
  {'data' : '在线工具' ,'href' : '#onlineTools'},
  {'data' : '代码托管' ,'href' : '#codeManager'},
  {'data' : '搜索引擎' ,'href' : '#searchEngine'},
])
</script>

<template>
  <div class="main">
    <div class="list" style="margin-bottom: 40px">
      <a-tabs v-for="(i , index) in listData" :key="index" :hoverable="true" style="list-style: none;float: left">
        <a-list-item style="margin-left: 70px"><a-link :href="i.href">{{i.data}}</a-link></a-list-item>
      </a-tabs>
      <br>
    </div>
    <div class="card">
      <div class="choseColor">
        <h2 id="choseColor">选色网站</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.choseColor" target="_blank">
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
      <div class="commonTools">
        <h2 id="commonTools">常用工具</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.commonTools" target="_blank">
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
      <div class="compileTools">
        <h2 id="compileTools">编译工具</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.compileTools" target="_blank">
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
      <div class="technologyLearning">
        <h2 id="technologyLearning">技术学习</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.technologyLearning" target="_blank">
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
      <div class="developSoftware">
        <h2 id="developSoftware">开发软件</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.developSoftware" target="_blank">
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
      <div class="publicIcon">
        <h2 id="publicIcon">公共图标库</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.publicIcon" target="_blank">
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
      <div class="onlineTools">
        <h2 id="onlineTools">在线工具</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.onlineTools" target="_blank">
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
      <div class="codeManager">
        <h2 id="codeManager">代码托管</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.codeManager" target="_blank">
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
      <div class="searchEngine">
        <h2 id="searchEngine">搜索引擎</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.searchEngine" target="_blank">
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