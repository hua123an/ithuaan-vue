<script setup>
import {ref} from "vue"
const dataList = {
  developTools : [
    {
      "title" : "git",
      "titleLink" : "https://git-scm.com/",
      "img" : "https://git-scm.com/images/logo@2x.png",
      "description" : "git是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理"
    },
    {
      "title" : "git-lfs",
      "titleLink" : "https://git-lfs.com/",
      "img" : "https://git-lfs.com/favicon.png",
      "description" : "git-lfs是git的一个扩展，用于管理大文件，可以将大文件存储在git-lfs服务器上，而不是git服务器上"
    }
    ,{
      "title" : "IntelliJ IDEA",
      "titleLink" : "https://www.jetbrains.com/idea/",
      "img" : "src/assets/img/idea.ico",
      "description" : "jetbrains公司出品的java开发工具，支持java、kotlin、groovy、scala、android、maven、gradle、git、svn等多种语言开发"
    },{
      "title" : "PyCharm",
      "titleLink" : "https://www.jetbrains.com/pycharm/",
      "img" : "src/assets/img/pycharm.ico",
      "description" : "jetbrains公司出品的python开发工具，也是市面上兼容python程度最高的开发工具"
    },
    {
      "title" : "WebStorm",
      "titleLink" : "https://www.jetbrains.com/webstorm/",
      "img" : "src/assets/img/webstorm.ico",
      "description" : "jetbrains公司出品的web开发工具，支持市面上绝大多数js框架"
    },
    {
      "title" : "DataGrip",
      "titleLink" : "https://www.jetbrains.com/datagrip/",
      "img" : "src/assets/img/datagrip.ico",
      "description" : "jetbrains公司出品的数据库开发工具，支持MySQL、Oracle、SQL Server、PostgreSQL、SQLite、MariaDB、MongoDB、Redis等多种数据库"
    },
    {
      "title" : "Clion",
      "titleLink" : "https://www.jetbrains.com/clion/",
      "img" : "src/assets/img/clion.ico",
      "description" : "jetbrains公司出品的c程序开发工具，支持c、c++、c#等多种语言开发"
    },
    {
      "title" : "fleet",
      "titleLink" : "https://www.jetbrains.com/fleet/",
      "img" : "src/assets/img/fleet.ico",
      "description" : "jetbrains公司出品的集成开发工具，现在还在公共预览阶段，可以通过jetbrainsToolbox下载，支持多种编程语言"
    },
    {
      "title" : "aqua",
      "titleLink" : "https://www.jetbrains.com/aqua/",
      "img" : "src/assets/img/aqua.ico",
      "description" : "jetbrains公司新出品的集成开发工具，主要用于测试，同时也支持java、web以及selenium测试环境"
    },
    {
      "title" : "Android Studio",
      "titleLink" : "https://developer.android.google.cn/studio/",
      "img" : "src/assets/img/studio.ico",
      "description" : "google公司出品的android开发工具，支持java、kotlin、c++等多种语言开发，主要用于android开发"
    },
    {
      "title" : "AppCode",
      "titleLink" : "https://www.jetbrains.com/objc/",
      "img" : "src/assets/img/AppCode.png",
      "description" : "jetbrains公司出品的ios开发工具，支持swift、objective-c等多种语言开发，主要用于ios开发"
    },
    {
      "title" : "Goland",
      "titleLink" : "https://www.jetbrains.com/goland/",
      "img" : "src/assets/img/goland.ico",
      "description" : "jetbrains公司出品的go语言开发工具，支持go语言开发"
    },
    {
      "title" : "PhpStorm",
      "titleLink" : "https://www.jetbrains.com/phpstorm/",
      "img" : "src/assets/img/phpstorm.ico",
      "description" : "jetbrains公司出品的php开发工具，支持php、html、css、javascript等多种语言开发"
    },
    {
      "title" : "Hbuilder X",
      "titleLink" : "https://www.dcloud.io/hbuilderx.html",
      "img" : "src/assets/img/hbuilderx.jpg",
      "description" : "DCloud公司出品的web开发工具，支持html、css、javascript等多种语言开发，主要用于uni-app开发"
    },
    {
      "title" : "CodeSandbox",
      "titleLink" : "https://codesandbox.io/",
      "img" : "src/assets/img/CodeSandbox.png",
      "description" : "一款在线使用的web开发工具，个人免费，支持公开项目个性化的设置，跨平台使用，除了支持PC端，还可以下载app在手机上编程，支持导入github项目"
    },
    {
      "title" : "CodePen",
      "titleLink" : "https://codepen.io/",
      "img" : "https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png",
      "description" : "一款在线使用的web开发工具，它的slogan是The best place to build, test, and discover front-end code."
    },
    {
      "title" : "StackBlitz",
      "titleLink" : "https://stackblitz.com/ ",
      "img" : "https://c.staticblitz.com/assets/icons/icon-512x512-eb09dde1908d3c6968da8cda947cf8a1a1b966c8f54886a7a188e41e5576d829.png",
      "description" : "一款在线使用的web开发工具，支持angular、react、vue等多种框架，支持导入github项目"
    },
    {
      "title" : "Gitpod",
      "titleLink" : "https://www.gitpod.io/",
      "img" : "https://www.gitpod.io/favicon192.png",
      "description" : "一款在线使用的web开发工具，在github已经拥有11.3K的star，可同步在线开发github项目，但每个月只有50个使用时间，超过需付费"
    },
    {
      "title" : "PhCode",
      "titleLink" : "https://phcode.dev/",
      "img" : "https://phcode.dev/assets/phoenix-splash/images/phoenix-logo.svg",
      "description" : "Adobe 公司开发过一个代码编辑器 Bracket，现在将其做成了 Web 版，重新命名为 Phoenix，可以当作线上 IDE 使用"
    },
    {
      "title" : "Eclipse",
      "titleLink" : "https://www.eclipse.org/",
      "img" : "https://www.eclipse.org/downloads/assets/public/images/logo-eclipse.png",
      "description" : "一款跨平台的集成ide环境，支持多种语言，也是java开发人员最喜欢的ide之一"
    },
    {
      "title" : "Visual Studio Code",
      "titleLink" : "https://code.visualstudio.com/",
      "img" : "https://code.visualstudio.com/favicon.ico",
      "description" : "微软公司出品的一款轻量级的代码编辑器，支持多种语言，支持插件扩展，支持多种操作系统，支持远程开发"
    },
    {
      "title" : "Sublime Text",
      "titleLink" : "https://www.sublimetext.com/",
      "img" : "https://www.sublimetext.com/images/icon.png",
      "description" : "一款轻量级的代码编辑器，支持多种语言，支持插件扩展，支持多种操作系统"
    },
    {
      "title" : "Atom",
      "titleLink" : "https://atom.io/",
      "img" : "https://avatars.githubusercontent.com/u/9919?v=4&s=200",
      "description" : "github公司出品的一款轻量级的代码编辑器，支持多种语言，支持插件扩展，支持多种操作系统"
    },
    {
      "title" : "Notepad++",
      "titleLink" : "https://notepad-plus-plus.org/",
      "img" : "https://notepad-plus-plus.org/favicon.ico",
      "description" : "一款轻量级的代码编辑器，支持多种语言，支持插件扩展，支持多种操作系统"
    },
    {
      "title" : "Vim",
      "titleLink" : "https://www.vim.org/",
      "img" : "https://www.vim.org/images/vim_shortcut.ico",
      "description" : "一款轻量级的代码编辑器，支持多种语言，支持插件扩展，支持多种操作系统"
    },
    {
      "title" : "Emacs",
      "titleLink" : "https://www.gnu.org/software/emacs/",
      "img" : "https://www.gnu.org/software/emacs/favicon.png",
      "description" : "一款轻量级的代码编辑器，支持多种语言，支持插件扩展，支持多种操作系统"
    },
    {
      "title" : "Java",
      "titleLink" : "https://www.java.com/",
      "img" : "https://www.java.com/favicon.ico",
      "description" : "一款跨平台的编程语言，由sun公司开发，现在由oracle公司维护"
    },
    {
      "title" : "c",
      "titleLink" : "https://en.wikipedia.org/wiki/C_(programming_language)",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png",
      "description" : "一款跨平台的编程语言，高级编程语言鼻祖"
    },
    {
      "title" : "c++",
      "titleLink" : "https://c-cpp.com/cpp",
      "img" : "src/assets/img/cpp.png",
      "description" : "一款跨平台的编程语言，c语言的超集"
    },
    {
      "title" : "c#",
      "titleLink" : "https://docs.microsoft.com/en-us/dotnet/csharp/",
      "img" : "src/assets/img/CSharp.png",
      "description" : "一款跨平台的编程语言，由微软公司开发"
    },
    {
      "title" : "Python",
      "titleLink" : "https://www.python.org/",
      "img" : "https://www.python.org/static/favicon.ico",
      "description" : "一款跨平台的编程语言"
    },
    {
      "title" : "PHP",
      "titleLink" : "https://www.php.net/",
      "img" : "https://www.php.net/favicon.ico",
      "description" : "一款跨平台的编程语言，网页开发首选"
    },
    {
      "title" : "JavaScript",
      "titleLink" : "https://www.javascript.com/",
      "img" : "https://www.javascript.com/favicon.ico",
      "description" : "一款跨平台的编程语言，由ECMA开发"
    },
    {
      "title" : "NodeJS",
      "titleLink" : "https://nodejs.org/",
      "img" : "https://nodejs.org/static/images/logo.svg",
      "description" : "一款跨平台的编程环境，由JavaScript开发"

    },
    {
      "title" : "Go",
      "titleLink" : "https://golang.org/",
      "img" : "https://golang.org/favicon.ico",
      "description" : "一款跨平台的编程语言，由google公司开发"
    },
    {
      "title" : "Rust",
      "titleLink" : "https://www.rust-lang.org/",
      "img" : "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
      "description" : "一款跨平台的编程语言，微软正在使用此编程语言开发windows系统"
    },
    {
      "title" : "Object-C",
      "titleLink" : "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html",
      "img" : "https://developer.apple.com/library/archive/Resources/1282/Images/apple2.png",
      "description" : "由苹果公司开发,现在已经逐步被swift取代"
    },
    {
      "title" : "Swift",
      "titleLink" : "https://swift.org/",
      "img" : "https://swift.org/assets/images/swift.svg",
      "description" : "IOS、MacOS、watchOS、tvOS现在的主要开发语言，由苹果公司开发"
    },
    {
      "title" : "Kotlin",
      "titleLink" : "https://kotlinlang.org/",
      "img" : "https://kotlinlang.org/assets/images/index/banners/kotlinconf24.jpg",
      "description" : "一款跨平台的编程语言，由JetBrains公司开发,一些安卓应用正在使用此编程语言开发"
    },
    {
      "title" : "TypeScript",
      "titleLink" : "https://www.typescriptlang.org/",
      "img" : "https://www.typescriptlang.org/favicon.ico",
      "description" : "一款跨平台的编程语言，由微软公司开发"
    },
    {
      "title" : "Ruby",
      "titleLink" : "https://www.ruby-lang.org/en/",
      "img" : "https://www.ruby-lang.org/favicon.ico",
      "description" : "Ruby 是一种用于前端和后端 Web 开发以及其他类似应用的脚本语言。它是一种强健的、动态键入的、面向对象的语言，具有高层次的语法。"
    }
  ],
  systemDownload :  [
    {
      "title" : "Windows10",
      "titleLink" : "https://www.microsoft.com/zh-cn/software-download/windows10",
      "img" : "https://www.microsoft.com/favicon.ico",
      "description" : "微软公司开发的操作系统,目前使用人数最广泛的windows系统"
    },
    {
      "title" : "windows11",
      "titleLink" : "https://www.microsoft.com/zh-cn/windows/windows-11",
      "img" : "https://www.microsoft.com/favicon.ico",
      "description" : "微软公司开发的操作系统,目前最新的windows系统"
    }
    ,
    {
      "title" : "MacOS 11 Big Sur",
      "titleLink" : "https://www.apple.com.cn/macos/big-sur/",
      "img" : "https://www.apple.com.cn/favicon.ico",
      "description" : "苹果公司开发的第十一代操作系统"
    }
    ,
    {
      "title" : "MacOS 12 Monterey",
      "titleLink" : "https://www.apple.com.cn/macos/monterey/",
      "img" : "https://www.apple.com.cn/favicon.ico",
      "description" : "苹果公司开发的第十二代操作系统"
    },
    {
      "title" : " MacOS 13 Ventura",
      "titleLink" : "https://www.apple.com/macos/ventura/",
      "img" : "https://www.apple.com.cn/favicon.ico",
      "description" : "苹果公司开发的第十三代操作系统"
    },
    {
      "title" : "MacOS 14 Sonoma",
      "titleLink" : "https://www.apple.com.cn/macos/sonoma-preview/",
      "img" : "https://www.apple.com.cn/favicon.ico",
      "description" : "苹果公司开发的第十四代操作系统"
    },
    {
      "title" : "Red Hat Enterprise Linux",
      "titleLink" : "https://www.redhat.com/zh",
      "img" : "https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg",
      "description" : "Red Hat Enterprise Linux（RHEL）是一种基于Linux内核的开源操作系统，由红帽公司负责维护。"
    },
    {
      "title" : "Cent OS",
      "titleLink" : "https://www.centos.org/",
      "img" : "https://www.centos.org/assets/img/logo.png",
      "description" : "Red Hat Enterprise Linux（RHEL）源代码的二进制兼容的Linux发行版。虽然Cent OS 8已经发布很久了，但是Cent OS 7仍然是目前使用人数最多的版本"
    },
    {
      "title" : "Fedora",
      "titleLink" : "https://getfedora.org/",
      "img" : "https://getfedora.org/favicon.ico",
      "description" : "Fedora是一个由Fedora项目社区开发、Red Hat赞助的以社群为中心的Linux发行版，其目标是为了让Linux及自由及开放源代码软件永远免费。"
    },
    {
      "title" : "openSUSE",
      "titleLink" : "https://www.opensuse.org/",
      "img" : "https://www.opensuse.org/favicon.ico",
      "description" : "openSUSE是一款基于Linux内核的开源操作系统，由SUSE Linux GmbH负责维护。"

    },
    {
      "title" : "Debian",
      "titleLink" : "https://www.debian.org/",
      "img" : "https://www.debian.org/favicon.ico",
      "description" : "Debian是一个自由操作系统，它的内核以Linux命名，其开发由全球的社群组成。Debian常用来做服务器系统，也是Ubuntu的基础系统。"
    },
    {
      "title" : "Ubuntu",
      "titleLink" : "https://ubuntu.com/",
      "img" : "https://ubuntu.com/favicon.ico",
      "description" : "Ubuntu是一个以桌面应用为主的开源GNU/Linux操作系统，Ubuntu是基于Debian GNU/Linux，支持x86、amd64（即x64）和ARM架构。"
    },
    {
      "title" : "Deepin",
      "titleLink" : "https://www.deepin.org/",
      "img" : "https://www.deepin.org/favicon.ico",
      "description" : "Deepin是一个基于Debian的Linux发行版，由中国深圳市深度科技（原深圳深度操作系统研究中心）研发，目前最新版本为Deepin V23"
    },
    {
      "title" : "uos",
      "tileLink" : "https://www.uniontech.com/",
      "img" : "https://www.uniontech.com/wp-content/uploads/2021/10/logo2.jpg",
      "description" : "基于debian的linux发行版，国产操作系统。"
    },
    {
      "title" : "Open Kylin",
      "titleLink" : "https://www.openkylin.top/",
      "img" : "https://www.openkylin.top/favicon.ico",
      "description" : "Open Kylin是基于Ubuntu的Linux发行版，由中国科学院软件研究所研发，目前最新版本为Open Kylin 1.0"
    },
    {
      "title" : "Arch Linux",
      "titleLink" : "https://archlinux.org/",
      "img" : "https://archlinux.org/static/logos/archlinux-logo-dark-90dpi.ebdee92a15b3.png",
      "description" : "Arch Linux是一款基于Linux内核的x86-64架构发行版，其个性化程度高，软件包管理简单，滚动更新。"
    },
    {
      "title" : "Manjaro",
      "titleLink" : "https://manjaro.org/",
      "img" : "src/assets/img/manjaro.png",
      "description" : "Manjaro是一款基于Arch Linux的Linux发行版，其目标是提供一个用户友好的操作系统，同时仍然保持Arch Linux的特点。"
    },
    {
      "title" : "EndeavourOS",
      "titleLink" : "https://endeavouros.com/",
      "img" : "https://i0.wp.com/endeavouros.com/wp-content/uploads/2021/03/cropped-cropped-Endeavour-horizontal-black.png?fit=690%2C184&ssl=1",
      "description" : "EndeavourOS是一款基于Arch Linux的Linux发行版。"
    },
    {
      "title" : "Kali Linux",
      "titleLink" : "https://www.kali.org/",
      "img" : "https://www.kali.org/images/kali-logo.svg",
      "description" : "Kali Linux是一款基于Debian的Linux发行版，其主要用于渗透测试和数字取证。"
    }
  ]
}
// nav list
const listData = ref([
  {'data' : "开发工具" , "href" : "developTools"},
  {'data' : '系统下载' , 'href' : 'systemDownload'},
])
</script>

<template>
  <div class="main">
    <div class="list" style="margin-bottom: 40px">
      <a-tabs v-for="(i , index) in listData" :key="index" :hoverable="true" style="list-style: none;float: left">
        <a-list-item style="margin-left: 70px"><a-link :href=" '#' + i.href">{{i.data}}</a-link></a-list-item>
      </a-tabs>
      <br>
    </div>
    <div class="card">
      <div class="developTools">
        <h2 id="developTools">开发工具</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.developTools" target="_blank">
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
      <div class="systemDownload">
        <h2 id="systemDownload">系统下载</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.systemDownload" target="_blank">
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