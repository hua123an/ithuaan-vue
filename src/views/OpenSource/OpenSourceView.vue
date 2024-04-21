<script setup>
import {ref} from "vue"
const dataList = {
  vueProject : [{
    "title" : " vue2-elm",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/bailicangdu/vue2-elm",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用"
  },{
    "title" : "vue-manage-system",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/lin-xin/vue-manage-system",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "基于Vue3 + Element Plus 的后台管理系统解决方案"
  },{
    "title" : "vue2-manage",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/bailicangdu/vue2-manage",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "基于 vue2 + element-ui 的后台管理系统"
  },{
    "title" : "DataV",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/DataV-Team/DataV",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "Vue数据可视化组件库（类似阿里DataV）"
  },{
    "title" : "form-generator",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/JakHuang/form-generator",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "Element UI表单设计及代码生成器"
  },{
    "title" : "vue-form-making",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/GavinZhuLei/vue-form-making",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "vue表单设计器，与代码生成器配套使用，一键生成vue表单"
  },{
    "title" : "gods-pen",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/ymm-tech/gods-pen",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "一款基于vue+canvas的可视化建站工具，通过拖拽的形式生成一个PC端的整站页面，让建站变得像搭积木一样简单"
  },{
    "title" : "vue-framework-wz",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/wangzhengyi/vue-framework-wz",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "基于vue2.0+vuex+axios+webpack+element-ui+less+mockjs+vue-router+echarts等开发的后台管理系统"
  }
  ],
  javaProject : [{
    "title" : "CS-Notes",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/CyC2018/CS-Notes",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "这个项目主要包括了，技术面试必备基础知识、力码、计算机、计算机网络、系统设计等知识，值得每一个 Java 程序员学习。"
  },{
    "title" : "advanced-java",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/doocs/advanced-java",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "互联网 Java 工程师进阶知识完全扫盲：涵盖高并发、分布式、高可用、微服务、海量数据处理等领域知识，特别适合进阶 Java 学习，尤其是工作者。"
  },{
    "title" : "mall",
    "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/macrozheng/mall",
    "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
    "description" : "mall项目是一套电商系统，包括前台商城系统及后台管理系统，基于SpringBoot+MyBatis实现，采用Docker容器化部署。"
  },
    {
      "title" : "hello-algorithm",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/geekxh/hello-algorithm",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "针对小白的算法训练 | 还包括：1、阿里、字节、滴滴 百篇大厂面经汇总 2、千本开源电子书 3、百张思维导图"
    },{
      "title" : "spring-boot-examples",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/ityouknow/spring-boot-examples",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "Spring Boot 教程、技术栈示例代码，快速简单上手教程。"
    },{
      "title" : "jeecg-boot",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/jeecgboot/jeecg-boot",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "「企业级低代码平台」前后端分离架构SpringBoot 2.x，SpringCloud，Ant Design&Vue，Mybatis-plus，Shiro，JWT。强大的代码生成器让前后端代码一键生成，无需写任何代码，绝对是全栈开发福音！"
    },{
      "title" : "spring-boot-demo",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/xkcoding/spring-boot-demo",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "spring boot demo 是一个用来深度学习并实战 spring boot 的项目，目前总共包含 65 个集成demo，已经完成 53 个。"
    },{
      "title" : "miaosha",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/qiurunze123/miaosha",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "高性能秒杀系统设计与实现.互联网工程师进阶与分析"
    },{
      "title" : "canal",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/alibaba/canal",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "阿里巴巴 MySQL binlog 增量订阅&消费组件"
    },{
      "title" : "cat",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/dianping/cat",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "CAT是一款实时应用监控平台，提供了实时的应用监控、服务中间件监控、JVM监控以及报警等一系列完整的监控功能。"
    }
  ],
  goProject : [
    {
      "title" : "the way to go 中文版",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/unknwon/the-way-to-go_ZH_CN",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "github上开源的go语言入门教程"
    },{
      "title" : "LeetCode-Go",
      "titleLink" : "hhttps://link.zhihu.com/?target=https%3A//github.com/halfrost/LeetCode-Go",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "github上开源go语言LeetCode算法题"
    },{
      "title" : "advanced-go-programming-book",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/chai2010/advanced-go-programming-book",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "github上开源的go语言进阶书籍，适合go语言进阶"
    },{
      "title" : "7-days-golang",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/geektutu/7days-golang",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "github上开源的go语言入门教程,适合小白快速入门go语言"
    },
    {
      "title" : "The-Golang-Standard-Library-by-Example",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/polaris1119/The-Golang-Standard-Library-by-Example",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "github上开源的go语言标准库学习"
    },
    {
      "title" : "golang-design-pattern",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/senghoo/golang-design-pattern",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "github上开源的go语言设计模式"
    },
    {
      "title" : " go-admin-team/go-admin",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/go-admin-team/go-admin",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "基于Gin + Vue + Element UI的前后端分离权限管理系统脚手架"
    },
    {
      "title" : "aceld/zinx",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/aceld/zinx",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "基于Golang轻量级TCP并发服务器框架"
    },
    {
      "title" : "interview-go",
      "titleLink" : "https://link.zhihu.com/?target=https%3A//github.com/lifei6671/interview-go",
      "img" : "https://avatars.githubusercontent.com/u/97239258?v=4",
      "description" : "go语言面试总结"
    },
  ]


}
// nav list
const listData = ref([
  {'data' : "go项目" , "href" : "goProject"},
  {'data' : 'java项目' , 'href' : 'javaProject'},
  {'data' : 'vue项目' , 'href' : 'vueProject'},
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
      <div class="goProject">
        <h2 id="goProject">go项目</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.goProject" target="_blank">
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
      <div class="javaProject">
        <h2 id="javaProject">java项目</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.javaProject" target="_blank">
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
      <div class="vueProject">
        <h2 id="vueProject">vue项目</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.vueProject" target="_blank">
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