<script setup>
import {ref} from "vue"
// save navigation bar data
const navList = ref([])
const academicData = [{
  "title": " \n            SimilarWeb        ",
  "titleLink": "https://www.similarweb.com/zh/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Similarweb.jpg",
  "description": " 站点流量 — 查看并分析任何网站"
}, {
  "title": " \n            知网        ",
  "titleLink": "https://www.cnki.net/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/zw-logo.png",
  "description": " 精品论文搜索网站"
}, {
  "title": " \n            sci-hub        ",
  "titleLink": "http://www.sci-hub.se/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/sci-hub.png",
  "description": " 一个可以下载任意文献杂志的工具"
}, {
  "title": " \n            BASE        ",
  "titleLink": "http://www.base-search.net/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/BASE.png",
  "description": " 一个多学科的学术搜索引擎，提供对全球异构学术资源的集成检索服务"
}, {
  "title": " \n            谷歌学术        ",
  "titleLink": "https://scholar.google.com/?hl=zh-CN",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/gugexueshu.jpg",
  "description": " Google 提供的免费搜索学术文章"
}, {
  "title": " \n            PubMed        ",
  "titleLink": "https://pubmed.ncbi.nlm.nih.gov/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/pubmed-logo.jpeg",
  "description": " 提供生物医学方面的论文搜寻以及摘要，并且免费搜寻的数据库"
}, {
  "title": " \n            百度学术        ",
  "titleLink": "http://xueshu.baidu.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/baidu-xueshu.png",
  "description": " 一个学术信息搜索引擎"
}, {
  "title": " \n            Cnpiec LINK service        ",
  "titleLink": "http://cnplinker.cnpeak.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Cnpiec-LINK-service.jpg",
  "description": " 一个方便快捷的查阅国外各类期刊文献的综合网络平台"
}, {
  "title": " \n            PMC（PubMed Cenral)        ",
  "titleLink": "http://www.ncbi.nlm.nih.gov/pmc/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/PMC.png",
  "description": " 由PMC存档生物医学，生命科学科研文献，可以免费下载"
}, {
  "title": " \n            DOAJ        ",
  "titleLink": "https://doaj.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/DOAJ.png",
  "description": " OA期刊目录网站"
}, {
  "title": " \n            BookSC        ",
  "titleLink": "http://zh.booksc.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/booksc.png",
  "description": " 文献资料多，搜索下载方便"
}, {
  "title": " \n            arXiv        ",
  "titleLink": "https://arxiv.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/arXiv.png",
  "description": " 网站上面的文章大多数都是会投稿到学术期刊的文章，文章类型内容分类非常专业和全面"
}, {
  "title": " \n            万方数据库        ",
  "titleLink": "http://www.wanfangdata.com.cn/index.html",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/wanfangshujuku.png",
  "description": " 一个涵盖期刊、会议纪要、论文、学术成果、学术会议论文的大型网络数据库"
}, {
  "title": " \n            中国科技论文在线        ",
  "titleLink": "http://www.paper.edu.cn/releasepaper/index.shtml",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/zhongguokejilunwenzaixian.png",
  "description": " 科学论文专业网站"
}, {
  "title": " \n            oaLib        ",
  "titleLink": "http://www.oalib.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/OA.png",
  "description": " 致力于让中国人可以免费获得高质量的文献"
}, {
  "title": " \n            PublicLibrary of Science        ",
  "titleLink": "https://www.plos.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/PublicLibrary-of-Science.png",
  "description": " 一家由众多诺贝尔奖得主和慈善机构支持的非赢利性学术组织"
}, {
  "title": " \n            Socolar        ",
  "titleLink": "http://www.socolar.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Socolar.jpg",
  "description": " 是一个旨在为用户提供OA资源检索和全文链接服务的公共服务平台"
}, {
  "title": " \n            本地Pubmed        ",
  "titleLink": "http://www.yuntsg.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Pubmed.png",
  "description": " 一个学术期刊检索平台"
}, {
  "title": " \n            Scientific Research Publishing        ",
  "titleLink": "http://www.scirp.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Scientific-Research-Publishing.jpg",
  "description": " 所有期刊都是开源的，可免费下载所有期刊全文"
}, {
  "title": " \n            NIMS        ",
  "titleLink": "http://www.nims.go.jp/eng/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/NIMS.png",
  "description": " 日本国立材料研究，报告当前的科研进展以及材料科学的重要趋势"
}, {
  "title": " \n            HighWire Press        ",
  "titleLink": "http://highwire.stanford.edu/lists/allsites.dtl",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/HighWire-Press.png",
  "description": " 提供免费全文的学术文献出版商"
}, {
  "title": " \n            Nature        ",
  "titleLink": "http://www.nature.com/nature/index.html",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Nature.jpg",
  "description": " 开放所有研究论文，包括旗下48个杂志"
}, {
  "title": " \n            中国学术会议在线        ",
  "titleLink": "https://www.meeting.edu.cn/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/zhongguo-xueshu-huiyizaixian.png",
  "description": " 适用于投稿学术会议，为用户提供学术会议信息预报"
}, {
  "title": " \n            科学网        ",
  "titleLink": "https://www.sciencenet.cn/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/kexuewang.png",
  "description": " 提供快捷权威的科学新闻报道，丰富实用的科学信息服务以及交流互动的网络平台"
}, {
  "title": " \n            ResearchGATE        ",
  "titleLink": "http://www.researchgate.net/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ResearchGATE.jpg",
  "description": " 全球科学社交网络服务网站"
}, {
  "title": " \n            台大学术期刊资料库        ",
  "titleLink": "http://ejournal.press.ntu.edu.tw/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/taidaxueshuqikan.png",
  "description": " 是查询台湾一流学府之学术研究发展、辅助教学研究之最佳数据库"
}, {
  "title": " \n            SciELO        ",
  "titleLink": "http://www.scielo.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/SciELO.jpg",
  "description": " 科技在线电子图书馆"
}, {
  "title": " \n            NSTL        ",
  "titleLink": "http://oar.nstl.gov.cn/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/NSTL.png",
  "description": " 国家科技图书文献中心"
}, {
  "title": " \n            Exlibris        ",
  "titleLink": "http://coreej.cceu.org.cn/index.html",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Exlibris.png",
  "description": " 开放获取电子期刊查询系统"
}, {
  "title": " \n            国家哲学社会科学文献中心        ",
  "titleLink": "http://www.ncpssd.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/guojia-zhexue-shehui.jpg",
  "description": " 一个资源共享的哲学社会科学研究信息化平台"
}, {
  "title": " \n            SCHOLARVOX International        ",
  "titleLink": "http://www.scholarvox.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/SCHOLARVOX-International.jpg",
  "description": " 网站包括管理学，社会学，工程学，信息学等学科的电子书，有英文有法文，可在线阅读"
}, {
  "title": " \n            EBSCO        ",
  "titleLink": "https://www.ebscohost.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/EBSCO.png",
  "description": " 以商务数据为主，还收录了不少营销学杂志，文献等"
}, {
  "title": " \n            ECONLIT        ",
  "titleLink": "https://www.aeaweb.org/econlit",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ECONLIT.jpg",
  "description": " 收录了各种类型的文学、经济学方面的文章，主要为英文资料"
}, {
  "title": " \n            XERFI        ",
  "titleLink": "http://www.xerfi.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/XERFI.jpg",
  "description": " 以学术研究为主，在这个网站可以找到各领域的研究报告"
}, {
  "title": " \n            Thèses        ",
  "titleLink": "https://www.theses.fr/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Theses.png",
  "description": " 是一个强大的论文库"
}, {
  "title": " \n            JSTOR        ",
  "titleLink": "http://www.jstor.org/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/JSTOR.jpg",
  "description": " 是一个英文网站，上面有很多对于法国作品、文化或者英美文化的分析"
}, {
  "title": " \n            UMI        ",
  "titleLink": "http://wwwlib.umi.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/UMI.png",
  "description": " UMI博硕士论文数据库，是很好的国外资源共享平台"
}, {
  "title": " \n            Engineering & Science        ",
  "titleLink": "http://calteches.library.caltech.edu/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Engineering-Science.png",
  "description": " 《工程与科学》是一本季刊，展示加州理工学院的知识生活和研究活动的生动画面"
}, {
  "title": " \n            Find Articles        ",
  "titleLink": "http://findarticles.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/findarticles.png",
  "description": " 是BNET网站下属的信息检索平台"
}, {
  "title": " \n            ABC Chemistry        ",
  "titleLink": "http://www.abc.chemistry.bsu.by/current/fulltext.htm",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ABC-Chemistry.png",
  "description": " 是化学方面的免费全文网上期刊数据库"
}, {
  "title": " \n            Chemistry Central        ",
  "titleLink": "http://www.chemistrycentral.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Chemistry-Central.png",
  "description": " 是生物医学中心运营的一个独立出版平台"
}, {
  "title": " \n            Genamics JournalSeek        ",
  "titleLink": "http://journalseek.net/index.htm",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Genamics-JournalSeek.jpg",
  "description": " 期刊信息检索系统是互联网上最大的完全分类的免费期刊信息数据库"
}, {
  "title": " \n            Hindawi        ",
  "titleLink": "http://www.hindawi.com/journals/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Hindawi.jpg",
  "description": " 是一个高速成长的OA学术出版机构，学科涵盖STM(科学、技术和医学)大部分领域"
}, {
  "title": " \n            Intel Technology Journal        ",
  "titleLink": "http://www.intel.com/technology/itj/index.htm",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Intel-Technology-Journal.jpg",
  "description": " 由英特尔专家撰写，是一份研究与技术的参考杂志"
}, {
  "title": " \n            MIT Open Access Articles        ",
  "titleLink": "http://dspace.mit.edu/handle/1721.1/49433",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/MIT-Open-Access-Articles.png",
  "description": " 提供麻省理工学院MIT发表的学术论文，包括原始稿，同行评议稿，最终出版的正式文档"
}, {
  "title": " \n            ScienceDirect        ",
  "titleLink": "https://www.sciencedirect.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ScienceDirect.jpg",
  "description": " 是互联网上科技文献搜索引擎之一，用于搜索期刊和专利"
}, {
  "title": " \n            Vascoda        ",
  "titleLink": "https://www.vascoda.de/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Vascoda.jpg",
  "description": " 是一个交叉学科门户网站"
}, {
  "title": " \n            Goole        ",
  "titleLink": "http://www.goole.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/Goole.png",
  "description": " 界面简洁，功能强大，速度快，能搜索到一些google搜索不到的资料"
}, {
  "title": " \n            ojose        ",
  "titleLink": "http://www.ojose.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/ojose.png",
  "description": " 在线期刊搜索引擎是一个强大的免费科学搜索引擎"
}, {
  "title": " \n            CiteSeerX        ",
  "titleLink": "http://citeseer.ist.psu.edu/index;jsessionid=3BB44DCE20946343FF5221A1A8ACDED9",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/CiteSeerX.png",
  "description": " 一个关于计算机和信息科学的搜索引擎"
}, {
  "title": " \n            AMiner        ",
  "titleLink": "https://www.aminer.cn/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/aminer.jpg",
  "description": " 科技情报大数据挖掘与服务系统平台"
}, {
  "title": " \n            掌桥科研        ",
  "titleLink": "https://www.zhangqiaokeyan.com/",
  "img": "https://tools.haiyong.site/wp-content/uploads/2022/05/zhangqiaokeyan.png",
  "description": " 一站式科研服务平台"
}]
</script>

<template>
  <div class="main">
    <div class="card">
      <div class="academic">
        <h2 id="academic" style="text-align: center">学术专区</h2><br>
        <a-link :href="item.titleLink" v-for="item in academicData" target="_blank">
          <a-card :bordered="true" style="height: 200px;width: 200px;border: 3px ">
            <img :src="item.img" alt="" style="height: 50px;width: 50px"><br>
            <a-card-meta :title="item.title">
              <template #description>
                {{ item.description }}
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