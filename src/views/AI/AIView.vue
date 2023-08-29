<script setup>
import {ref} from "vue"
const dataList = {
  // the data of aiApplication
  aiApplication : [{
    "title": " \n            文心一言        ",
    "titleLink": "https://yiyan.baidu.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/wxyy.png",
    "description": " 百度出品的人工智能语言模型"
  }, {
    "title": " \n            ChatGPT        ",
    "titleLink": "http://chat-gpt-next-2xjpm2t58-hua123an.vercel.app",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/openai-avatar.png",
    "description": " 一款功能丰富、智能化、易用性强的人工智能工具，适用于各种内容创作者"
  }, {
    "title": "claude",
    "titleLink": "https://claudeai.ai/",
    "img": "https://www.anthropic.com/images/icons/apple-touch-icon.png",
    "description": "一个比肩gpt4的大型语言模型，目前还在测试阶段，功能丰富，未来会持续更新"
  },
    {
      "title": " \n            通义千问        ",
      "titleLink": "https://tongyi.aliyun.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/ty.png",
      "description": " 阿里开发的大语言模型"
    },
    {
      "title": " \n            Notion AI        ",
      "titleLink": "https://www.notion.so/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/11/notion.png",
      "description": " 这是真人工智能，不是人工智障"
    }, {
      "title": " \n            Stable Diffusion WebUI        ",
      "titleLink": "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/stablediffusionweb.png",
      "description": " Github 源码，可以自己搭建一个 Stable Diffusion 算法的 Web 版"
    }, {
      "title": " \n            头像生成卡通        ",
      "titleLink": "https://toonme.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/favicon-32x32-1.png",
      "description": " 把头像交给 AI，实现你的卡通梦"
    }, {
      "title": " \n            DALL·E 2        ",
      "titleLink": "https://openai.com/dall-e-2/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/DALL%C2%B7E-2.jpg",
      "description": " OpenAI旗下DALL·E 2模型，可以从自然语言的description中创造出现实的图像和艺术"
    }, {
      "title": " \n            NUWA        ",
      "titleLink": "https://nuwa-infinity.microsoft.com/#/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/nuwa.png",
      "description": " 一个多模态生成模型，旨在从给定的文本、图像或视频输入中生成高质量的图像和视频"
    }, {
      "title": " \n            Stability AI        ",
      "titleLink": "https://stability.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/stability.png",
      "description": " 根据你输入的文字description，生成相应的img"
    }, {
      "title": " \n            Novel AI        ",
      "titleLink": "https://novelai.net/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/novel.png",
      "description": " 用于人工智能辅助写作、讲故事、虚拟陪伴"
    }, {
      "title": " \n            6pen art        ",
      "titleLink": "https://6pen.art/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/6open-art.png",
      "description": " 利用文本生成绘画作品的产品"
    }, {
      "title": " \n            Deep Dream Generator        ",
      "titleLink": "https://deepdreamgenerator.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/deep-dream-1.png",
      "description": " 在文本框内输入文字内容，选择想要的img格式、风格等"
    }, {
      "title": " \n            Parti        ",
      "titleLink": "https://parti.research.google/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/pencil.png",
      "description": " 一款文本、图像生成工具"
    }, {
      "title": " \n            DeepAI        ",
      "titleLink": "https://deepai.org/machine-learning-model/text2img",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/deep-ai.jpg",
      "description": " 文本转图像--AI图像生成器API"
    }, {
      "title": " \n            fotor        ",
      "titleLink": "https://www.fotor.com/features/ai-image-generator/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/fotor.png",
      "description": " AI图像生成器"
    }, {
      "title": " \n            Runway        ",
      "titleLink": "https://runwayml.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/runway.png",
      "description": " 由人工智能驱动的创意工具"
    }, {
      "title": " \n            即时AI        ",
      "titleLink": "https://js.design/AI-gallery",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/jishi-ai.png",
      "description": " 将创意一键变成创作"
    }, {
      "title": " \n            PicSo        ",
      "titleLink": "https://picso.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/picso.png",
      "description": " 是一个文本到图像的人工智能艺术生成器应用和创意数字艺术的在线平台"
    }, {
      "title": " \n            Dream AI        ",
      "titleLink": "https://dream.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/dream-ai.png",
      "description": " 利用人工智能的力量创造美丽的艺术作品"
    }, {
      "title": " \n            LuciaAI        ",
      "titleLink": "https://luciaai.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/lucia.png",
      "description": " 是一个先进的人工智能写作助手"
    }, {
      "title": " \n            Tome AI        ",
      "titleLink": "https://beta.tome.app/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/TOME.png",
      "description": " 由AI驱动的讲故事形式"
    }, {
      "title": " \n            beautiful.ai        ",
      "titleLink": "https://www.beautiful.ai/presentation-maker",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/beautiful.png",
      "description": " 第一个具有人工智能设计的演示文稿制作器"
    }, {
      "title": " \n            DeckRobot        ",
      "titleLink": "https://www.deckrobot.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/deckrobot.png",
      "description": " 将毫不费力地设计出数百张幻灯片"
    }, {
      "title": " \n            Slidekick        ",
      "titleLink": "https://www.sitekick.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/Slidekick.png",
      "description": " AI登陆页面构建器"
    }, {
      "title": " \n            Presentations.AI        ",
      "titleLink": "https://presentations.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/presentations.png",
      "description": " 瞬间获得演讲超能力"
    }, {
      "title": " \n            Alpaca        ",
      "titleLink": "https://www.getalpaca.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/Alpaca.png",
      "description": " 用于图像生成的AI模型"
    }, {
      "title": " \n            AI Render        ",
      "titleLink": "https://airender.gumroad.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/AI-Render.png",
      "description": " 使用稳定扩散AI创造令人惊奇的图像"
    }, {
      "title": " \n            autobackend        ",
      "titleLink": "https://www.autobackend.dev/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/autobackend.png",
      "description": " 在几秒钟内创建一个后端"
    }, {
      "title": " \n            ABtesting.ai        ",
      "titleLink": "https://abtesting.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/abtesting.png",
      "description": " 用AI A/B测试软件提高转化率"
    }, {
      "title": " \n            Mutiny        ",
      "titleLink": "https://www.mutinyhq.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/mutiny-1.png",
      "description": " 把你的网站变成你的第一收入渠道"
    }, {
      "title": " \n            QuickBooks        ",
      "titleLink": "https://quickbooks.intuit.com/global/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/presentations.png",
      "description": " 适用于小型企业的智能、简单的在线会计软件"
    }, {
      "title": " \n            AdCreative.ai        ",
      "titleLink": "https://www.adcreative.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/adcreative.jpg",
      "description": " 生成广告创意，帮助你销售更多"
    }, {
      "title": " \n            Adflow        ",
      "titleLink": "https://www.adflow.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/Adflow.jpg",
      "description": " 为你的广告文案增光添彩"
    }, {
      "title": " \n            Anyword        ",
      "titleLink": "https://anyword.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/Anyword.png",
      "description": " AI文案写作，AI写作助手& 文本生成器"
    }, {
      "title": " \n            Osmosis        ",
      "titleLink": "https://osmosis.studio/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/Osmosis.jpg",
      "description": " 一个基于内容意识的网络协作设计工具，用于生成销售真实产品的人工智能广告"
    }, {
      "title": " \n            Pencil        ",
      "titleLink": "https://www.trypencil.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/pencil.png",
      "description": " 为电子商务提供无限的广告创意"
    }, {
      "title": " \n            LensAI        ",
      "titleLink": "https://lens-ai.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/lensai.jpg",
      "description": " 人工智能驱动的上下文计算机视觉广告解决方案"
    }, {
      "title": " \n            SuperBuzz        ",
      "titleLink": "https://www.superbuzz.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/superbuzz.png",
      "description": " 使用GPT-3技术提高保留流量和利润"
    }, {
      "title": " \n            AI21 Labs        ",
      "titleLink": "https://www.ai21.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/ai21.png",
      "description": " 通过使机器成为人类的思想伙伴来重新想象我们的阅读和写作方式"
    }, {
      "title": " \n            Aleph Alpha        ",
      "titleLink": "https://www.aleph-alpha.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/Aleph-Alpha.png",
      "description": " 人工智能领导者"
    }, {
      "title": " \n            Anthropic        ",
      "titleLink": "https://www.anthropic.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/anthropic.jpg",
      "description": " 是一家人工智能安全和研究公司"
    }, {
      "title": " \n            Cohere        ",
      "titleLink": "https://cohere.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/cohere.png",
      "description": " 开发人员的NLP工具包和语言模型"
    }, {
      "title": " \n            DeepMind        ",
      "titleLink": "https://www.deepmind.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/DeepMind.jpg",
      "description": " 研究和建立安全的人工智能系统"
    }, {
      "title": " \n            Meta AI        ",
      "titleLink": "https://ai.facebook.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/meta-ai.png",
      "description": " 专注于生成式人工智能"
    }, {
      "title": " \n            Alpa        ",
      "titleLink": "https://opt.alpa.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/alpa.jpg",
      "description": " 服务于OPT-175B语言模型"
    }, {
      "title": " \n            BLOOM        ",
      "titleLink": "https://bigscience.notion.site/BLOOM-BigScience-176B-Model-ad073ca07cdf479398d5f95d88e218c4",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/BLOOM.png",
      "description": " 为你的笔记、任务、维基和数据库提供一体化的工作空间"
    }, {
      "title": " \n            Cedille        ",
      "titleLink": "https://cedille.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Cedille.jpg",
      "description": " 用于文本生成的NLP平台"
    }, {
      "title": " \n            Perplexity        ",
      "titleLink": "https://www.perplexity.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/1679494099Perplexity.png",
      "description": " 智能总结并展示信息源"
    }, {
      "title": " \n            Hugging Face        ",
      "titleLink": "https://huggingface.co/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/DistilBERT.png",
      "description": " 开源数据集和预训练模型"
    }, {
      "title": " \n            HyperCLOVA        ",
      "titleLink": "https://www.navercorp.com/promotion/pressReleasesView/30546",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/HyperCLOVA.png",
      "description": " 一个类似于GPT-3的韩语模型训练网站"
    }, {
      "title": " \n            LaMDA        ",
      "titleLink": "https://www.blog.google/technology/ai/lamda/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/LaMDA.png",
      "description": " 突破性的对话技术"
    }, {
      "title": " \n            Turing-NLG        ",
      "titleLink": "https://turing.microsoft.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Turing-NLG.png",
      "description": " 微软图灵项目"
    }, {
      "title": " \n            Megatron NLG        ",
      "titleLink": "https://developer.nvidia.com/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-largest-and-most-powerful-generative-language-model/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Megatron-NLG.jpg",
      "description": " 生成语言模型 "
    }, {
      "title": " \n            Muse        ",
      "titleLink": "https://muse.lighton.ai/home",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/muse.png",
      "description": " 是一个访问VLM-4的API"
    }, {
      "title": " \n            SambaNova Systems        ",
      "titleLink": "https://sambanova.ai/solutions/gpt/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/SambaNova-Systems.jpg",
      "description": " SambaNova套件简化了类似于人类的语言"
    }, {
      "title": " \n            Wu Dao 1.0        ",
      "titleLink": "https://syncedreview.com/2021/03/23/chinas-gpt-3-baai-introduces-superscale-intelligence-model-wu-dao-1-0/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Wu-Dao-1.0.jpg",
      "description": " BAAI推出超大规模智能模型"
    }, {
      "title": " \n            youtube        ",
      "titleLink": "https://www.youtube.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/youtube.jpg",
      "description": " 用GitHub Copilot设计一个API"
    }, {
      "title": " \n            Interior AI        ",
      "titleLink": "https://interiorai.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Interior-AI.png",
      "description": " 室内设计理念的灵感，以及使用人工智能的虚拟分期应用程序"
    }, {
      "title": " \n            Adobe Podcast        ",
      "titleLink": "https://podcast.adobe.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Adobe-Podcast.png",
      "description": " 人工智能音频录制和编辑"
    }, {
      "title": " \n            Atomic AI        ",
      "titleLink": "https://atomic.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Atomic-AI.jpg",
      "description": " 人工智能驱动的RNA药物发现，具有原子级的精确性"
    }, {
      "title": " \n            Character AI        ",
      "titleLink": "https://beta.character.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Character-AI.jpg",
      "description": " 是一个神经语言模型的聊天机器人网络应用"
    }, {
      "title": " \n            D-ID        ",
      "titleLink": "https://studio.d-id.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/did.png",
      "description": " 使用带有文字或音频的静止图像，就能创建专业视频"
    }, {
      "title": " \n            Lensa        ",
      "titleLink": "https://prisma-ai.com/lensa",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Lensa.jpg",
      "description": " 是一个多合一的图像编辑应用程序"
    }, {
      "title": " \n            MegaPortraits        ",
      "titleLink": "https://samsunglabs.github.io/MegaPortraits/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/MegaPortraits.jpg",
      "description": " 一次性拍摄百万像素的神经头像"
    }, {
      "title": " \n            MyHeritage        ",
      "titleLink": "https://www.myheritage.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/MyHeritage.png",
      "description": " 人工智能生成的图像"
    }, {
      "title": " \n            Photo AI        ",
      "titleLink": "https://photoai.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/photoai.jpg",
      "description": " 第一个人工智能摄影师"
    }, {
      "title": " \n            Profile Picture        ",
      "titleLink": "https://www.profilepicture.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Profile-Picture.jpg",
      "description": " AI资料img的生成和制作"
    }, {
      "title": " \n            Ready Player Me        ",
      "titleLink": "https://labs.readyplayer.me/avatar",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Ready-Player-Me.jpg",
      "description": " 一个使用Dall-E的人工智能化身创造者"
    }, {
      "title": " \n            Wonder-AI        ",
      "titleLink": "https://www.wonder-ai.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Wonder-AI.jpg",
      "description": " 一个生成性人工智能系统，专门生成奇幻生物和环境的图像"
    }, {
      "title": " \n            Flowrite        ",
      "titleLink": "https://www.flowrite.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Flowrite.jpg",
      "description": " 为你的日常沟通增色"
    }, {
      "title": " \n            Blog Idea Generator        ",
      "titleLink": "https://www.usetopic.com/blog-idea-generator",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Blog-Idea-Generator.png",
      "description": " 博客创意生成器--即时的内容灵感"
    }, {
      "title": " \n            Makelog        ",
      "titleLink": "https://www.makelog.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/makelog.png",
      "description": " 将产品更新转化为你最有力的资产"
    }, {
      "title": " \n            AI Buddy        ",
      "titleLink": "https://aibuddy.chat/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/AI-Buddy.png",
      "description": " 用于WhatsApp的聊天工具"
    }, {
      "title": " \n            AskBrian        ",
      "titleLink": "https://www.askbrian.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/AskBrian.jpg",
      "description": " 专业人士的人工智能助手"
    }, {
      "title": " \n            BLOONY        ",
      "titleLink": "https://bloony.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/BLOONY.png",
      "description": " 人工智能聊天伙伴"
    }, {
      "title": " \n            Jerome Powell Bot        ",
      "titleLink": "https://www.institutionalinvestor.com/article/b1tktmhcfdyqsk/An-Interview-With-a-Hyper-Realistic-AI-Powered-Simulation-of-Jerome-Powell",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Jerome-Powell-Bot.jpg",
      "description": " 采访超现实的、由人工智能驱动的杰罗姆-鲍威尔的模拟人"
    }, {
      "title": " \n            Kuki        ",
      "titleLink": "https://www.kuki.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/kuki.png",
      "description": " 一个人工智能大脑，旨在为人类提供娱乐服务"
    }, {
      "title": " \n            Project December        ",
      "titleLink": "https://projectdecember.net/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Project-December.jpg",
      "description": " 使用GPT-3来创建超现实的聊天机器人"
    }, {
      "title": " \n            Quickchat        ",
      "titleLink": "https://www.quickchat.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Quickchat.png",
      "description": " 建立像人一样说话的人工智能助理的技术"
    }, {
      "title": " \n            Emerson        ",
      "titleLink": "https://www.quickchat.ai/emerson",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Emerson.png",
      "description": " 是一台可以和你对话的人工智能计算机"
    }, {
      "title": " \n            Grammarly        ",
      "titleLink": "https://www.grammarly.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2022/06/grammarly.jpg",
      "description": " 是一款在线语法纠正和校对工具"
    }, {
      "title": " \n            Bing AI 作图        ",
      "titleLink": "https://cn.bing.com/create",
      "img": "https://static.runoob.com/images/svg/bing.svg",
      "description": " 必应图像创作器，输入文字生成img"
    }, {
      "title": " \n            Tabnine        ",
      "titleLink": "https://www.tabnine.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/tabnine.png",
      "description": " 是一个AI代码助手"
    }, {
      "title": " \n            Copilot X        ",
      "titleLink": "https://github.com/features/preview/copilot-x",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/copilot-x.png",
      "description": " GitHub 和 OpenAI 合作开发的一个代码自动生成工具"
    }, {
      "title": " \n            RemoveBG        ",
      "titleLink": "https://www.remove.bg/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/remove-bg.jpg",
      "description": " img去除背景"
    }, {
      "title": " \n            Outplay        ",
      "titleLink": "https://outplayhq.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Outplay.jpg",
      "description": " AI生成销售话术"
    }, {
      "title": " \n            CoWriter        ",
      "titleLink": "https://cowriter.org/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/cowriter.png",
      "description": " AI辅助写作"
    }, {
      "title": " \n            AI Data Sidekick        ",
      "titleLink": "https://www.airops.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/ai-data-sidekick-1.jpg",
      "description": " AI编写SQL代码 "
    }, {
      "title": " \n            Fireflies        ",
      "titleLink": "https://fireflies.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Fireflies.png",
      "description": " 该工具可插入 Zoom、Teams 或 Webex 等流行的视频会议工具，并自动执行做笔记和创建转录的过程"
    }, {
      "title": " \n            dreamlike.art        ",
      "titleLink": "https://dreamlike.art/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/dreamlike.jpg",
      "description": " 在几秒钟内创造出令人惊叹的原创艺术"
    }, {
      "title": " \n            Phygital+        ",
      "titleLink": "https://phygital.plus/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/P.jpg",
      "description": " 让创作者在没有代码的情况下使用神经网络"
    }, {
      "title": " \n            ARC Lab        ",
      "titleLink": "https://arc.tencent.com/zh/ai-demos/faceRestoration",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/arclab1.jpg",
      "description": " 腾讯ARC实验室推出的AI人像修复小工具"
    }, {
      "title": " \n            Papercup        ",
      "titleLink": "https://www.papercup.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/papercup.png",
      "description": " 人工智能驱动的配音"
    }, {
      "title": " \n            Voice Mode        ",
      "titleLink": "https://www.voicemod.net/zh/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Voice-Mode.png",
      "description": " 免费即时变声器"
    }, {
      "title": " \n            Soundraw        ",
      "titleLink": "https://soundraw.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/soundraw.jpg",
      "description": " 全新的AI音乐平台"
    }, {
      "title": " \n            LALAL        ",
      "titleLink": "https://www.lalal.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/lalal.png",
      "description": " 提供音乐源分离服务，使用ai技术从任何音频中提取人声，伴奏和多种乐器"
    }, {
      "title": " \n            Boomy        ",
      "titleLink": "https://www.boomy.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/boomy.png",
      "description": " 在几秒钟内创作出原创歌曲"
    }, {
      "title": " \n            Endel        ",
      "titleLink": "https://endel.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/endel.jpg",
      "description": " 个性化的声音景观"
    }, {
      "title": " \n            MURF        ",
      "titleLink": "https://murf.ai/%20",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/murf.png",
      "description": " 将文字输出为语音，可用于视频制作"
    }, {
      "title": " \n            Mubert        ",
      "titleLink": "https://mubert.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/mubert.jpg",
      "description": " 为内容创作者、品牌和开发者提供的新的免版税音乐生态系统 "
    }, {
      "title": " \n            Riffusion        ",
      "titleLink": "https://www.riffusion.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/riffusion.png",
      "description": " 一个基于AI生成音乐的项目"
    }, {
      "title": " \n            polyAI        ",
      "titleLink": "https://poly.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/poly.png",
      "description": " 语音助手，企业智能客服语音服务"
    }, {
      "title": " \n            Cascadeur        ",
      "titleLink": "https://cascadeur.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Cascadeur.jpg",
      "description": " 最简单的AI辅助关键帧动画制作软件"
    }, {
      "title": " \n            MunchAI        ",
      "titleLink": "https://www.getmunch.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/munch.png",
      "description": " 自动将长视频转换为数据驱动的短片，用于社交媒体"
    }, {
      "title": " \n            Fliki        ",
      "titleLink": "https://fliki.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/fliki.jpg",
      "description": " 用AI语音将文字变成视频"
    }, {
      "title": " \n            pollinations        ",
      "titleLink": "https://pollinations.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/pollinations.jpg",
      "description": " 您的引擎 个性化的媒体"
    }, {
      "title": " \n            Autodraw        ",
      "titleLink": "https://www.autodraw.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/autodraw-1.jpg",
      "description": " 人工智能画画平台"
    }, {
      "title": " \n            通义千问        ",
      "titleLink": "https://tongyi.aliyun.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/ty.png",
      "description": " 阿里开发的大语言模型"
    }, {
      "title": " \n            Bard        ",
      "titleLink": "https://bard.google.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/googleBard.png",
      "description": " Google 推出的 AI 聊天对话机器人 Bard"
    }, {
      "title": " \n            Codeium        ",
      "titleLink": "https://codeium.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/1679564778Codeium.png",
      "description": " 人工智能编码及检索"
    }, {
      "title": " \n            CodiumAI        ",
      "titleLink": "https://www.codium.ai/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/1679564753CodiumAI.png",
      "description": " AI 代码测试工具"
    }, {
      "title": " \n            Codiga        ",
      "titleLink": "https://www.codiga.io/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Codiga.png",
      "description": " AI 代码实时分析"
    }, {
      "title": " \n            Hocoos AI 建站        ",
      "titleLink": "https://hocoos.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/hocoos-logo.jpeg",
      "description": " AI 建站神器，5 分钟完成建站"
    }, {
      "title": " \n            Replicate        ",
      "titleLink": "https://replicate.com/",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/replicate-logo.png",
      "description": " 使用云 API 运行开源机器学习模型"
    }, {
      "title": "         Codex        ",
      "titleLink": "https://openai.com/blog/openai-codex",
      "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/qmruasgh98rw6a4u4yop.webp",
      "description": " OpenAI 旗下 AI 代码生成训练模型，AI 系统可以将自然语言翻译成代码，"
    }],
//   the data of aiProgramming
  aiProgramming : [{
    "title": " \n            autobackend        ",
    "titleLink": "https://www.autobackend.dev/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/autobackend.png",
    "description": " 在几秒钟内创建一个后端"
  }, {
    "title": " \n            BerriAI        ",
    "titleLink": "https://berri.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/berri-ai.png",
    "description": " 连接您的数据并在几分钟内建立生产就绪的chatGPT应用程序"
  }, {
    "title": " \n            AutoRegex        ",
    "titleLink": "https://www.autoregex.xyz/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/autogerex.jpg",
    "description": " 使用人工智能更容易创建正则表达式"
  }, {
    "title": " \n            Tabnine        ",
    "titleLink": "https://www.tabnine.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/tabnine.png",
    "description": " 是一个AI代码助手"
  }, {
    "title": " \n            Code Snippets        ",
    "titleLink": "https://codesnippets.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/codesnippets.png",
    "description": " GPT-4驱动的VSCode的代码片段"
  }, {
    "title": " \n            HeyCLI        ",
    "titleLink": "https://www.heycli.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/HeyCLI.png",
    "description": " 将自然语言翻译成终端命令"
  }, {
    "title": " \n            Bifrost        ",
    "titleLink": "https://www.bifrost.so/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Bifrost.png",
    "description": " 将Figma设计自动转化为干净的React代码"
  }, {
    "title": " \n            SpellBox        ",
    "titleLink": "https://spellbox.app/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/SpellBbx.png",
    "description": " 人工智能编程助手"
  }, {
    "title": " \n            Debuild        ",
    "titleLink": "https://debuild.app/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Debuild.png",
    "description": " 快速构建网络应用程序"
  }, {
    "title": " \n            AirOps        ",
    "titleLink": "https://www.airops.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/AirOps.jpg",
    "description": " 使用强大的配方集编写SQL、文档和更多内容"
  }, {
    "title": " \n            AI Query        ",
    "titleLink": "https://aiquery.co/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/AI-Query.jpg",
    "description": " 在几秒钟内用人工智能生成SQL查询"
  }, {
    "title": " \n            HTTPie AI        ",
    "titleLink": "https://httpie.io/ai",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/HTTPie-AI.png",
    "description": " 一种与API互动的新方式"
  }, {
    "title": " \n            Ghostwriter        ",
    "titleLink": "https://replit.com/site/ghostwriter",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Ghostwriter.jpg",
    "description": " 用人工智能加速编码-replit"
  }, {
    "title": " \n            ExplainDev        ",
    "titleLink": "https://explain.dev/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/ExplainDev.png",
    "description": " 根据上下文回答你的问题的代码解释器"
  }, {
    "title": " \n            Codeball        ",
    "titleLink": "https://codeball.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/codeball.png",
    "description": " 人工智能驱动的代码审查"
  }, {
    "title": " \n            What The Diff        ",
    "titleLink": "https://whatthediff.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/What-The-Diff-1.png",
    "description": " 由人工智能驱动的代码审查助手"
  }, {
    "title": " \n            Ask Command        ",
    "titleLink": "https://askcommand.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/ask-command.png",
    "description": " 人工智能驱动的开发者助手"
  }, {
    "title": " \n            PLZ-CIL        ",
    "titleLink": "https://github.com/m1guelpf/plz-cli",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/plz-cli.png",
    "description": " 用自然语言查找终端命令"
  }, {
    "title": " \n            Codeium        ",
    "titleLink": "https://codeium.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/1679564778Codeium.png",
    "description": " 人工智能编码及检索"
  }, {
    "title": " \n            CodiumAI        ",
    "titleLink": "https://www.codium.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/1679564753CodiumAI.png",
    "description": " AI 代码测试工具"
  }, {
    "title": " \n            Codiga        ",
    "titleLink": "https://www.codiga.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Codiga.png",
    "description": " AI 代码实时分析"
  }, {
    "title": " \n            Warp.AI        ",
    "titleLink": "https://www.warp.dev/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/warp.png",
    "description": " 与您的终端完全集成的 AI"
  }, {
    "title": " \n            Safurai        ",
    "titleLink": "https://www.safurai.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/safurai-1.png",
    "description": " 是一个基于人工智能的IDE扩展，旨在帮助开发人员进行编码、调试和重构"
  }, {
    "title": " \n            brancher.ai        ",
    "titleLink": "https://www.brancher.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/brancher.png",
    "description": " 是一个无代码平台，它可以让你仅用很短的时间通过连接 AI 模型来创建 AI 驱动的应用程序"
  }, {
    "title": " \n            GitHub Copilot        ",
    "titleLink": "https://copilot.github.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/github-copilot.jpg",
    "description": " 你的人工智能配对程序员"
  }, {
    "title": " \n            Akkio        ",
    "titleLink": "https://www.akkio.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/akkio.png",
    "description": " 是一个易于使用、可扩展和负担得起的无代码人工智能平台，用于实时决策"
  }, {
    "title": " \n            Browse AI        ",
    "titleLink": "https://www.browse.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/browse.png",
    "description": " 监控任何网页的变化"
  }],
  aiWrite : [{
    "title": " \n            FlowUs        ",
    "titleLink": "https://flowus.cn/login",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/11/flowus.jpg",
    "description": " 一款具有特色的、 Notion 类的 All in One 生产力工具"
  }, {
    "title": " \n            Compose AI        ",
    "titleLink": "https://www.compose.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/Compose.png",
    "description": " AI写作工具"
  }, {
    "title": " \n            Jasper        ",
    "titleLink": "https://www.jasper.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/jaster.png",
    "description": " 文本生成器，使用 AI 制作出令人惊叹的文案"
  }, {
    "title": " \n            Texta        ",
    "titleLink": "https://texta.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/texta.png",
    "description": " 为你的博客获得高质量的SEO优化和吸引人的内容"
  }, {
    "title": " \n            Writeseed        ",
    "titleLink": "https://writeseed.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/writeseed.jpg",
    "description": " 最好的人工智能写作工具"
  }, {
    "title": " \n            Elephas        ",
    "titleLink": "https://elephas.app/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Elephas.png",
    "description": " 适用于Mac的个人AI写作助手"
  }, {
    "title": " \n            Everylead        ",
    "titleLink": "https://www.everylead.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/everylead.png",
    "description": " 个性化每条线索"
  }, {
    "title": " \n            Automata        ",
    "titleLink": "https://byautomata.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/automata.png",
    "description": " 将博客和视频作为LinkedIn的帖子、Twitter的线程和新闻通讯重新使用"
  }, {
    "title": " \n            Gramara        ",
    "titleLink": "https://gramara.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/gramara.jpg",
    "description": " 立即写出流利的英语"
  }, {
    "title": " \n            Coda AI        ",
    "titleLink": "https://coda.io/product/ai-alpha",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/coda.png",
    "description": " 使用Coda AI来拉动背景信息并帮助你添加内容"
  }, {
    "title": " \n            Type        ",
    "titleLink": "https://type.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/type.jpg",
    "description": " 由人工智能驱动的文件编辑器"
  }, {
    "title": " \n            GoCharlie        ",
    "titleLink": "https://gocharlie.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/gocharlie.jpg",
    "description": " 为内容创作者提供的生成性人工智能平台"
  }, {
    "title": " \n            HyperWrite        ",
    "titleLink": "https://www.hyperwriteai.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/HyperWrite.jpg",
    "description": " 最先进的人工智能写作伴侣"
  }, {
    "title": " \n            Hoppy Copy        ",
    "titleLink": "https://www.hoppycopy.co/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Hoppy-Copy.png",
    "description": " 邮件AI，自动帮你写回复邮件"
  }, {
    "title": " \n            Writers Brew        ",
    "titleLink": "https://writersbrew.app/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Writers-Brew.png",
    "description": " 加速阅读和写作2倍的速度和效果"
  }, {
    "title": " \n            Jenni        ",
    "titleLink": "https://jenni.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/jenni.png",
    "description": " 与Jenni AI一起为你的写作增色"
  }, {
    "title": " \n            Easy Peasy        ",
    "titleLink": "https://easy-peasy.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/easy-peasy.png",
    "description": " 最佳人工智能作家"
  }, {
    "title": " \n            Moonbeam        ",
    "titleLink": "https://www.gomoonbeam.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Moonbeam.png",
    "description": " 是一个长篇写作的AI助手"
  }, {
    "title": " \n            Rytr        ",
    "titleLink": "https://rytr.me/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/rytr.png",
    "description": " 写作助手"
  }, {
    "title": " \n            Writerly        ",
    "titleLink": "https://writerly.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Writerly.jpg",
    "description": " 在几秒钟内产生超相关的、SEO优化的内容。"
  }, {
    "title": " \n            Frase        ",
    "titleLink": "https://www.frase.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/frase.png",
    "description": " 研究、撰写和优化高质量的SEO内容"
  }, {
    "title": " \n            Quillbot        ",
    "titleLink": "https://quillbot.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/quillbot.jpg",
    "description": " 一个人工智能驱动的转述工具，可以增强你的写作能力"
  }, {
    "title": " \n            Sudowrite        ",
    "titleLink": "https://www.sudowrite.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Sudowrite.jpg",
    "description": " 神奇的写作AI打破作家的障碍"
  }, {
    "title": " \n            Writer        ",
    "titleLink": "https://writer.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Writer.png",
    "description": " 使用Writer的人工智能写作平台大规模解锁品牌内容"
  }, {
    "title": " \n            Supernormal        ",
    "titleLink": "https://supernormal.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/supernormal.jpg",
    "description": " 更快地编写会议笔记"
  }, {
    "title": " \n            SEO AI        ",
    "titleLink": "https://seo.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/SEO.png",
    "description": " 在更短的时间内创建更多高质量的SEO内容，并确保其性能"
  }, {
    "title": " \n            Writesonic        ",
    "titleLink": "https://writesonic.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/writersonic.jpg",
    "description": " 创作的最佳AI作家"
  }, {
    "title": " \n            Copy.AI        ",
    "titleLink": "https://www.copy.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/copy.png",
    "description": " 为企业生成高质量的文案"
  }, {
    "title": " \n            Boo.ai        ",
    "titleLink": "https://boo.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/booai.png",
    "description": " 是一种新型的文本编辑器，它使用人工智能生成副本并帮助您集思广益"
  }, {
    "title": " \n            Orchard        ",
    "titleLink": "https://www.orchard.ink/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/orchard.png",
    "description": " 是一个文本编辑器，可以帮助作家构思、迭代和创新"
  }, {
    "title": " \n            Notion AI        ",
    "titleLink": "https://www.notion.so/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/notion.png",
    "description": " 工作更快，写得更好，想得更多"
  }, {
    "title": " \n            Readwise Reader        ",
    "titleLink": "https://readwise.io/read?ref=ness_labs",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/readwise.png",
    "description": " 第一款为实力派读者打造的 \"稍后阅读 \"应用程序"
  }, {
    "title": " \n            纯纯写作        ",
    "titleLink": "https://writer.drakeet.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/chunchun-xiezuo.png",
    "description": " 绝不丢失文本编辑器"
  }, {
    "title": " \n            秘塔写作猫        ",
    "titleLink": "https://www.xiezuocat.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/mita-xiezuomao.png",
    "description": " 集AI写作、多人协作、文本校对、改写润色、自动配图等功能为一体"
  }, {
    "title": " \n            Wordtune        ",
    "titleLink": "https://www.wordtune.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Wordtune.png",
    "description": " 你的个人写作助理"
  }, {
    "title": " \n            copysmith        ",
    "titleLink": "https://copysmith.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/copysmith.jpg",
    "description": " 为企业和电子商务提供人工智能内容创作"
  }, {
    "title": " \n            通义听悟        ",
    "titleLink": "https://tingwu.aliyun.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/tingwu-logo.png",
    "description": " 实时记录交流内容，多语言翻译"
  }],
  aiDesign : [{
    "title": " \n            Adobe Firefly        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/adobe-firefly.jpg",
    "titleLink": "https://firefly.adobe.com/",
    "description": " 用Firefly做出无限的创作"
  }, {
    "title": " \n            Fiction        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/fiction.png",
    "titleLink": "https://www.fiction.com/",
    "description": " AI照片和头像生成器"
  }, {
    "title": " \n            Uizard        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/uizard.jpg",
    "titleLink": "https://uizard.io/autodesigner/",
    "description": " 使用简单的文本来生成应用程序和网站的多屏幕模拟图"
  }, {
    "title": " \n            Contentinator        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/contentinator.png",
    "titleLink": "https://contentinator.com/",
    "description": " 为您的 Figma 设计生成逼真的内容"
  }, {
    "title": " \n            Galileo AI        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Galileo-AI.png",
    "titleLink": "https://www.usegalileo.ai/",
    "description": " 界面设计的副手"
  }, {
    "title": " \n            Clickable        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/clickable.png",
    "titleLink": "https://www.clickable.so/",
    "description": " 用AI在几秒钟内生成广告"
  }, {
    "title": " \n            Flair        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/flair.png",
    "titleLink": "https://flair.ai/",
    "description": " 用你自己的品牌对象生成产品照片"
  }, {
    "title": " \n            Pebblely        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/pebblely.png",
    "titleLink": "https://pebblely.com/",
    "description": " 用AI在几秒钟内创建漂亮的产品照片"
  }, {
    "title": " \n            MakeLogoAI        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/makelogo.png",
    "titleLink": "https://makelogo.ai/",
    "description": " 独特的标志，100%由人工智能生成"
  }, {
    "title": " \n            Hothot        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/hotpot.jpg",
    "titleLink": "https://hotpot.ai/",
    "description": " 帮助你创建惊人的图形、图片和文本"
  }, {
    "title": " \n            Magician        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/magician.png",
    "titleLink": "https://magician.design/",
    "description": " 一个由人工智能驱动的Figma的神奇设计工具"
  }, {
    "title": " \n            爱设计 PPT        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/isheji-ai-ppt.png",
    "titleLink": "https://ppt.isheji.com/",
    "description": " AI 快速生成高质量 PPT"
  }],
  aiPainting : [{
    "title": " \n            PicWish        ",
    "titleLink": "https://picwish.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2022/04/picwish.png",
    "description": "  一个多功能的图像创意平台"
  }, {
    "title": " \n            Stable Diffusion        ",
    "titleLink": "https://stability.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/1679494097Stable-Diffusion.png",
    "description": " AI 绘画，输入关键字生成img"
  }, {
    "title": " \n            Civitai        ",
    "titleLink": "https://civitai.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/civitai-icon-filled-36.png",
    "description": " 训练好的模型分享网站"
  }, {
    "title": " \n            文心一格        ",
    "titleLink": "https://yige.baidu.com/creation",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/ppbaidu.png",
    "description": " 百度 AI 产品，创意和艺术辅助产品"
  }, {
    "title": " \n            Nijijourney        ",
    "titleLink": "https://nijijourney.com/zh/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/niji-journey.png",
    "description": " 魔法般的二次元绘画生成"
  }, {
    "title": " \n            Midjourney        ",
    "titleLink": "https://www.midjourney.com/home/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/midjourney.png",
    "description": " 是一款搭载在 Discord 上的人工智能绘画聊天工具"
  }, {
    "title": " \n            NightCafe Creator        ",
    "titleLink": "https://creator.nightcafe.studio/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/night-cafe-1.png",
    "description": " AI艺术生成器"
  }, {
    "title": " \n            fotor        ",
    "titleLink": "https://www.fotor.com/features/ai-image-generator/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/fotor.png",
    "description": " AI图像生成器"
  }, {
    "title": " \n            StarryAI        ",
    "titleLink": "https://starryai.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/starry.png",
    "description": " AI艺术生成器应用程序"
  }, {
    "title": " \n            Hugging Face        ",
    "titleLink": "https://huggingface.co/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/DistilBERT.png",
    "description": " 开源数据集和预训练模型"
  }, {
    "title": " \n            Adobe Firefly        ",
    "titleLink": "https://firefly.adobe.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/adobe-firefly.jpg",
    "description": " 用Firefly做出无限的创作"
  }, {
    "title": " \n            Hothot        ",
    "titleLink": "https://hotpot.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/hotpot.jpg",
    "description": " 帮助你创建惊人的图形、img和文本"
  }, {
    "title": " \n            HeadshotPro        ",
    "titleLink": "https://www.headshotpro.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/headshotpro.png",
    "description": " 为远程团队提供专业的公司头像"
  }, {
    "title": " \n            Variart        ",
    "titleLink": "https://variart.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/variart.jpg",
    "description": " 输入你想使用的img，即可生成一个没有任何版权限制的类似img"
  }, {
    "title": " \n            Scribble Diffusion        ",
    "titleLink": "https://scribblediffusion.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/scribble.jpg",
    "description": " 使用AI将你的草图变成一个精致的图像"
  }, {
    "title": " \n            BoothAI        ",
    "titleLink": "https://www.booth.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/booth.png",
    "description": " 用AI创建专业品质的产品摄影"
  }, {
    "title": " \n            Draw Things        ",
    "titleLink": "https://drawthings.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/draw-things.png",
    "description": " AI辅助的图像生成"
  }, {
    "title": " \n            DiffusionBee        ",
    "titleLink": "https://diffusionbee.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/DiffusionBee.jpg",
    "description": " 稳定的扩散应用于AI艺术"
  }, {
    "title": " \n            Glazeroom        ",
    "titleLink": "https://glazeroom.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/glazeroom.png",
    "description": " 利用AI帮助艺术家更快地提供更好的艺术作品"
  }, {
    "title": " \n            Astria        ",
    "titleLink": "https://www.astria.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/astria.png",
    "description": " 量身定制的AI图像生成"
  }, {
    "title": " \n            Lexica        ",
    "titleLink": "https://lexica.art/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/lexica.png",
    "description": " 稳定扩散的搜索引擎"
  }, {
    "title": " \n            Erase BG        ",
    "titleLink": "https://www.erase.bg/zh/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/erase-bg.png",
    "description": " 免费去背景软件"
  }, {
    "title": " \n            Clipdrop        ",
    "titleLink": "https://clipdrop.co/tools",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Clipdrop.jpg",
    "description": " AI 技术处理图像的工具"
  }, {
    "title": " \n            Artbreeder        ",
    "titleLink": "https://www.artbreeder.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Artbreeder.jpg",
    "description": " 创建令人惊叹的插画和艺术"
  }, {
    "title": " \n            dreamlike.art        ",
    "titleLink": "https://dreamlike.art/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/dreamlike.jpg",
    "description": " 在几秒钟内创造出令人惊叹的原创艺术"
  }, {
    "title": " \n            getimg.ai        ",
    "titleLink": "https://getimg.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/getimg.png",
    "description": " 创造出令人惊叹的头像"
  }, {
    "title": " \n            stockimg        ",
    "titleLink": "https://stockimg.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/stockimg.jpg",
    "description": " 可帮助用户在几分钟内生成徽标、书籍封面、横幅等   "
  }, {
    "title": " \n            Profile Pic Maker        ",
    "titleLink": "https://pfpmaker.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Profile-Pic-Maker.png",
    "description": " 一个在线的头像制作网站"
  }, {
    "title": " \n            Watermark Remover        ",
    "titleLink": "https://www.watermarkremover.io/zh",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Watermark-Remover.png",
    "description": " 从图像中删除水印"
  }, {
    "title": " \n            ThisPersonDoesNotExist        ",
    "titleLink": "https://www.thispersondoesnotexist.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/ThisPersonDoesNotExist.jpg",
    "description": " 生成一张不真实存在的人脸照片"
  }, {
    "title": " \n            Playground        ",
    "titleLink": "https://playgroundai.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Playground.png",
    "description": " AI绘画网站"
  }, {
    "title": " \n            Shrink media        ",
    "titleLink": "https://www.shrink.media/zh",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/shrink.png",
    "description": " 通过巧妙的压缩和降维来减小图像的文件大小，并免费下载压缩后的图像"
  }, {
    "title": " \n            Upscale.media        ",
    "titleLink": "https://www.upscale.media/zh",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Upscale.png",
    "description": " 改变img的分辨率"
  }, {
    "title": " \n            photosonic        ",
    "titleLink": "https://photosonic.writesonic.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/photosonic.png",
    "description": " 用AI创造独特的图像"
  }, {
    "title": " \n            Arthub.ai        ",
    "titleLink": "https://arthub.ai/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/arthub.jpg",
    "description": " 发现、上传和分享人工智能生成的艺术"
  }, {
    "title": " \n            DreamStudio        ",
    "titleLink": "https://beta.dreamstudio.ai/generate",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/dream-studio.png",
    "description": "  AI 图像生成器"
  }, {
    "title": " \n            无界AI        ",
    "titleLink": "https://www.wujieai.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/wu-jie.png",
    "description": " 人人都是艺术家"
  }, {
    "title": " \n            Maze Guru        ",
    "titleLink": "https://maze.guru/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Maze-Guru.jpg",
    "description": " 一个由 AI 驱动的 AI 绘画生成平台"
  }, {
    "title": " \n            Stable Diffusion Online        ",
    "titleLink": "https://stablediffusionweb.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Stable-Diffusion-Online.jpg",
    "description": " 能够在任何文本输入的情况下生成照片般逼真的图像"
  }, {
    "title": " \n            Craiyon        ",
    "titleLink": "http://https//www.craiyon.com",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Craiyon.jpg",
    "description": " 可以根据任意文本生成img的网站"
  }, {
    "title": " \n            Magic Eraser        ",
    "titleLink": "https://www.magiceraser.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Magic-Eraser.png",
    "description": " 一款操作简单的在线P图网站"
  }, {
    "title": " \n            This Beach Does Not Exist        ",
    "titleLink": "https://thisbeachdoesnotexist.com/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/this-beach-does-not.jpg",
    "description": " 基于人工智能的合成海滩发生器"
  }, {
    "title": " \n            Let’s Enhance        ",
    "titleLink": "https://letsenhance.io/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Lets-Enhance.jpg",
    "description": " 一款简单易用的在线img无损放大工具"
  }, {
    "title": " \n            Generated Photos        ",
    "titleLink": "https://generated.photos/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Generated-Photos.png",
    "description": " 是一个专门提供人像照片的网站"
  }, {
    "title": " \n            Imagen        ",
    "titleLink": "https://imagen.research.google/",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Imagen.jpg",
    "description": " 文本到图像的扩散模型"
  }],
  aiModel : [{
    "title": " \n            Codex        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/qmruasgh98rw6a4u4yop.webp",
    "titleLink": "https://openai.com/blog/openai-codex",
    "description": " OpenAI 旗下 AI 代码生成训练模型，AI 系统可以将自然语言翻译成代码，"
  }, {
    "title": " \n            Imagen        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/imagen-1.jpg",
    "titleLink": "https://imagen.research.google/",
    "description": " 文本到图像扩散模型"
  }, {
    "title": " \n            LLaMA        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/llama-1.png",
    "titleLink": "https://github.com/facebookresearch/llama",
    "description": " 火焰模型推理代码"
  }, {
    "title": " \n            Lobe        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/lobe-1.png",
    "titleLink": "https://www.lobe.ai/",
    "description": " 一个免费、易于使用的工具来训练机器学习模型"
  }, {
    "title": " \n            Scale        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/scale-2.jpg",
    "titleLink": "https://scale.com/",
    "description": " 加快人工智能应用的发展"
  }, {
    "title": " \n            Evidently AI        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/06/evidently-1.png",
    "titleLink": "https://www.evidentlyai.com/",
    "description": " 开源机器学习监控"
  }],
  aiAudio :  [{
    "title": " \n            Runway        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/runway.png",
    "titleLink": "https://runwayml.com/",
    "description": " 由人工智能驱动的创意工具"
  }, {
    "title": " \n            Synthesia        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/Synthesia.jpg",
    "titleLink": "https://www.synthesia.io/",
    "description": " 该平台提供了一个直观的界面，可以简化任何人的视频创作"
  }, {
    "title": " \n            LyricStudio        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/LyricStudio.png",
    "titleLink": "https://lyricstudio.net/",
    "description": " 根据你的主题和风格建议独特的歌词创意"
  }, {
    "title": " \n            FakeYou        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/FakeYou.png",
    "titleLink": "https://fakeyou.com/",
    "description": " 是一个文本到语音的仙境"
  }, {
    "title": " \n            Artflow        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Artflow.png",
    "titleLink": "https://www.app.artflow.ai/",
    "description": " 使用人工智能生成的资产，创建自己独特的动画故事"
  }, {
    "title": " \n            Crypko        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Crypko.png",
    "titleLink": "https://crypko.ai/cn/",
    "description": " 可以自动生成动漫人物，且可为动漫人物添加流畅的动画效果"
  }, {
    "title": " \n            Nova A.I.        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/nova.png",
    "titleLink": "https://wearenova.ai/",
    "description": " 简单的在线视频编辑软件"
  }, {
    "title": " \n            Make-A-Video        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Make-A-Video.png",
    "titleLink": "https://makeavideo.studio/",
    "description": " 根据文字提示生成高质量视频"
  }, {
    "title": " \n            Verw        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/verw.png",
    "titleLink": "https://vrew.voyagerx.com/zh-TW/",
    "description": " 用AI语音识别自动上字幕"
  }, {
    "title": " \n            Descript        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/descript.png",
    "titleLink": "https://www.descript.com/",
    "description": " 一个音视频编辑器"
  }, {
    "title": " \n            Uberduck        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Uberduck.png",
    "titleLink": "https://uberduck.ai/",
    "description": " 开源语音AI社区"
  }, {
    "title": " \n            AIVA        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/AIVA.jpg",
    "titleLink": "https://www.aiva.ai/",
    "description": " 人工智能谱写情感原声音乐"
  }, {
    "title": " \n            Supertone        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Supertone.jpg",
    "titleLink": "https://supertone.ai/",
    "description": " 使用AI创作音乐、声音和其他声音"
  }, {
    "title": " \n            Jukebox        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/jukebox.jpg",
    "titleLink": "https://openai.com/research/jukebox",
    "description": " 是OpenAI的一款AI音乐生成器"
  }, {
    "title": " \n            Altered        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Altered.png",
    "titleLink": "https://www.altered.ai/",
    "description": " 是一款专业的 AI 变声软件"
  }, {
    "title": " \n            Unscreen        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Unscreen.jpg",
    "titleLink": "https://www.unscreen.com/",
    "description": " 移除视频背景"
  }, {
    "title": " \n            Topaz video AI        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Topaz-video-AI.png",
    "titleLink": "https://www.topazlabs.com/topaz-video-ai",
    "description": " 是一款人工智能视频无损放大软件,"
  }],
  aiWorking : [{
    "title": " \n            Tome AI        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/02/TOME.png",
    "titleLink": "https://beta.tome.app/",
    "description": " 由AI驱动的讲故事形式"
  }, {
    "title": " \n            tiledesk        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/tiledesk.png",
    "titleLink": "https://tiledesk.com/chatbot-design-studio/",
    "description": " 聊天机器人设计工作室"
  }, {
    "title": " \n            IngestAI        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/ingestai.jpg",
    "titleLink": "https://ingestai.io/",
    "description": " 把你的知识库变成一个类似于ChatGPT的上下文感知机器人"
  }, {
    "title": " \n            Frase        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/03/frase.png",
    "titleLink": "https://www.frase.io/",
    "description": " 研究、撰写和优化高质量的SEO内容"
  }, {
    "title": " \n            Mem.ai        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/mem.jpg",
    "titleLink": "https://mem.ai/",
    "description": " 让 AI 组织您团队的工作"
  }, {
    "title": " \n            Resume Worded        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/resume-worded.png",
    "titleLink": "https://resumeworded.com/index.php",
    "description": " 是一个在线简历改进工具"
  }, {
    "title": " \n            ChatExcel        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/chatexcel.png",
    "titleLink": "https://chatexcel.com/",
    "description": " 仅通过聊天来操控您的Excel表格"
  }, {
    "title": " \n            Todoist        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/todoist.png",
    "titleLink": "https://todoist.com/zh-CN",
    "description": " 管理您的工作和生活"
  }, {
    "title": " \n            ChatBCG        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/chatbcg.png",
    "titleLink": "https://www.chatbcg.com/",
    "description": " 一个通过AI生成PPT的工具"
  }, {
    "title": " \n            Poised        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Poised.jpg",
    "titleLink": "https://www.poised.com/",
    "description": " 是一个 AI 支持的沟通教练，通过观察用户在线上会议中的表现，为用户提供个性化的沟通课程和改进反馈"
  }, {
    "title": " \n            TLDR this        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/TLDR-this.png",
    "titleLink": "https://tldrthis.com/",
    "description": " 是一个免费的在线文本摘要工具"
  }, {
    "title": " \n            Iris.ai        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Iris.png",
    "titleLink": "https://ted.iris.ai/",
    "description": " 您的科学助理"
  }, {
    "title": " \n            wizdom.ai        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/wizdom.jpg",
    "titleLink": "https://www.wizdom.ai/",
    "description": " 是一个自然语言处理平台，帮助人们通过理解和从数据中提取见解来做出更好的决策"
  }, {
    "title": " \n            Simpread        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/simpread.png",
    "titleLink": "https://ksria.com/simpread/",
    "description": "  如杂志般沉浸式阅读体验的扩展"
  }, {
    "title": " \n            Semantic Scholar        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/Semantic-Scholar.png",
    "titleLink": "https://www.semanticscholar.org/",
    "description": " 人工智能驱动的研究工具"
  }, {
    "title": " \n            Elicit        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/elicit.png",
    "titleLink": "https://elicit.org/",
    "description": " 使用机器学习来帮助您进行研究"
  }, {
    "title": " \n            Bardeen        ",
    "img": "https://tools.haiyong.site/wp-content/uploads/2023/04/bardeen.png",
    "titleLink": "https://www.bardeen.ai/",
    "description": " 引入突破性的 AI 来自动化手动工作流程，节省您的时间并激发您的创造力。"
  }]
}
// save navigation bar data
const listData = ref([
  {'data' : "AI应用" , "href" : "aiApplication"},
  {'data' : 'AI编程' , 'href' : 'aiProgramming'},
  {'data' : 'AI写作' , 'href' : 'aiWrite'},
  {'data' : 'AI设计' ,'href' : 'aiDesign'},
  {'data' : 'AI绘画' ,'href' : 'aiPainting'},
  {'data' : 'AI模型' ,'href' : 'aiModel'},
  {'data' : 'AI影音' ,'href' : 'aiAudio'},
  {'data' : 'AI办公' ,'href' : 'aiWorking'},
])
</script>

<template>
  <div class="main">
    <div class="list" style="margin-bottom: 40px">
      <a-tabs v-for="(i , index) in listData" :key="index" :hoverable="true" style="list-style: none;float: left">
        <a-list-item style="margin-left: 70px"><a-link :href="'#' + i.href">{{i.data}}</a-link></a-list-item>
      </a-tabs>
      <br>
    </div>
    <div class="card">
      <div class="aiApplication">
        <h2 id="aiApplication">AI应用</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.
        aiApplication" target="_blank">
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
      <div class="ai">
        <h2 id="aiProgramming">AI编程</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.aiProgramming" target="_blank">
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
      <div class="aiWrite">
        <h2 id="aiWrite">AI写作</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.aiWrite" target="_blank">
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
      <div class="aiDesign">
        <h2 id="aiDesign">AI设计</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.aiDesign" target="_blank">
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
      <div class="aiPainting">
        <h2 id="aiPainting">AI绘画</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.aiPainting" target="_blank">
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
      <div class="aiModel">
        <h2 id="aiModel">AI模型</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.aiModel" target="_blank">
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
      <div class="aiAudio">
        <h2 id="aiAudio">AI影音</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.aiAudio" target="_blank">
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
      <div class="aiWorking">
        <h2 id="aiWorking">AI办公</h2><br>
        <a-link :href="item.titleLink" v-for="item in dataList.aiWorking" target="_blank">
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