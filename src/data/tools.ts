export interface ToolLink {
  name: string;
  description: string;
  url: string;
}

export interface ToolCategory {
  title: string;
  subtitle: string;
  description: string;
  links?: ToolLink[];
  children?: ToolCategory[];
}

const legacyCategories: ToolCategory[] = [
  {
    title: "官方站点",
    subtitle: "Official Links",
    description: "从 Lodestone、数据库到新手指南，艾欧泽亚的官方入口。",
    links: [
      { name: "FFXIV The Lodestone", description: "冒险者档案与官方资讯", url: "https://na.finalfantasyxiv.com/lodestone/" },
      { name: "FFXIV The Lodestone 1.0", description: "旧版官方资料入口", url: "https://lodestone.finalfantasyxiv.com/" },
      { name: "Lodestone DB", description: "官方道具、任务与内容数据库", url: "https://jp.finalfantasyxiv.com/lodestone/playguide/db/" },
      { name: "数据中心旅行指南", description: "数据中心与服务器旅行说明", url: "https://jp.finalfantasyxiv.com/lodestone/playguide/contentsguide/datacentertravel/" },
      { name: "SQUARE ENIX PRESS", description: "官方新闻与媒体资料", url: "https://press.na.square-enix.com/FINAL-FANTASY-XIV-Shadowbringers#" },
      { name: "初心者的馆", description: "新米冒险者官方指南", url: "https://www.finalfantasyxiv.com/beginner/read/index.html" },
      { name: "SQUARE ENIX Forum", description: "官方社区论坛", url: "https://forum.square-enix.com/ffxiv" },
    ],
  },
  {
    title: "百科与资料",
    subtitle: "Encyclopedias",
    description: "查找物品、任务、职业和世界设定的常用资料库。",
    links: [
      { name: "最终幻想XIV中文维基", description: "中文综合百科", url: "https://ff14.huijiwiki.com/" },
      { name: "Garland Tools Database", description: "国际服综合数据库", url: "https://www.garlandtools.org/" },
      { name: "Garland Tools Database（旧地址）", description: "国际服综合数据库旧入口", url: "http://www.garlandtools.org/" },
      { name: "Garland 中文站", description: "国服资料数据库", url: "http://www.garlandtools.cn/" },
      { name: "FF14 ERIONES", description: "日服道具与生产资料", url: "https://eriones.com/" },
      { name: "Gamer Escape WIKI", description: "英文综合 Wiki", url: "https://ffxiv.gamerescape.com/" },
      { name: "Console Games WIKI", description: "英文综合 Wiki", url: "https://ffxiv.consolegameswiki.com/" },
      { name: "FF用語辞典", description: "日文术语辞典", url: "https://wikiwiki.jp/ffdic/" },
    ],
  },
  {
    title: "攻略与职业",
    subtitle: "Guides & Jobs",
    description: "副本攻略、职业指南与国际服高难内容参考。",
    links: [
      { name: "XivStrat", description: "中文副本攻略站", url: "https://xivstrat.com/" },
      { name: "最终幻想14中文攻略站", description: "玩家投稿攻略资料", url: "https://www.ffxiv.cn/" },
      { name: "AkhMorning", description: "国际服攻略与职业资料", url: "https://www.akhmorning.com/" },
      { name: "SaltedXIV", description: "国际服职业与副本攻略", url: "https://saltedxiv.com/" },
      { name: "The Balance", description: "职业循环与配装指南", url: "https://www.thebalanceffxiv.com/" },
      { name: "Eorzea World", description: "综合玩家指南", url: "https://eorzeaworld.com/en/home" },
      { name: "ff14moomoo", description: "日文攻略与资料", url: "https://ff14moomoo.com/" },
      { name: "萌神神的攻略站", description: "玩家攻略资料", url: "https://moeshen.cn/" },
      { name: "gl.ffsusu.com", description: "玩家投稿攻略", url: "https://gl.ffsusu.com/" },
      { name: "肥肥咖啡 FFCAFE", description: "国服资料站", url: "https://www.ffcafe.cn/" },
      { name: "新大陆见闻录", description: "实用新手手册", url: "https://ff14.org/" },
    ],
  },
  {
    title: "生产与采集",
    subtitle: "Crafting & Gathering",
    description: "配方、生产模拟、采集时钟和钓鱼辅助工具。",
    links: [
      { name: "BestCraft FF14", description: "生产配方与计算工具", url: "https://tnze.yyyy.games/" },
      { name: "FFXIV Teamcraft", description: "生产模拟与制作清单", url: "https://ffxivteamcraft.com/simulator/custom" },
      { name: "采集时钟", description: "采集节点时间查询", url: "https://caiji.ffxiv.cn/#/" },
      { name: "饥饿的猫", description: "钓鱼时间与鱼类资料", url: "http://cn.ff14angler.com/" },
      { name: "鱼糕钓鱼时钟", description: "钓鱼窗口查询", url: "https://fish.ffmomola.com/" },
      { name: "FFXIV Crafting Macros", description: "生产宏资料整理", url: "https://ashe10.home.blog/shb-crafting-macros/" },
      { name: "配方计算器 V7", description: "生产配方计算", url: "https://yyyy.games/fco/#/simulator" },
      { name: "生产模拟器 V5", description: "生产技能模拟", url: "http://ffxiv.tk/crafter/#/solver" },
      { name: "配方计算器 V5+", description: "生产配方计算", url: "https://5p.nbbjack.com/" },
      { name: "FFXIV Crafting Optimizer", description: "国际服生产优化", url: "http://ffxiv-beta.lokyst.net/" },
      { name: "FF14俺tools", description: "生产与采集工具", url: "http://ffxiv.gt.exdreams.net/" },
      { name: "FFX|V Fish Tracker App", description: "国际服钓鱼追踪", url: "http://fish.senriakane.com/" },
      { name: "鱼糕钓鱼时钟（旧版）", description: "旧版钓鱼窗口查询", url: "https://ricecake404.gitee.io/ff14-list" },
      { name: "ffxiv-610-helper", description: "已停止维护的生产工具", url: "https://white94850.gitee.io/ffxiv-610-helper/" },
      { name: "莫古锤子", description: "采集辅助工具", url: "https://mooglecrafter.cn/" },
      { name: "HQ Helper", description: "生产成本计算器", url: "https://hqhelper.nbb.fan/#/" },
    ],
  },
  {
    title: "住宅与幻化",
    subtitle: "Housing & Glamours",
    description: "寻找房屋、规划装修，并浏览来自玩家的时装灵感。",
    links: [
      { name: "艾欧泽亚售楼中心", description: "房屋检索与价格信息", url: "https://house.ffxiv.cyou/#/" },
      { name: "艾欧泽亚售楼中心（新版）", description: "房屋检索新版本", url: "https://househelper.ffxiv.cyou/#/" },
      { name: "I Wana Home", description: "住宅搜索工具", url: "https://wanahome.ffxiv.bingyin.org/" },
      { name: "I Wana Home（旧版）", description: "住宅搜索旧版本", url: "http://wh.nyao.xyz/?" },
      { name: "FFXIV Housing", description: "住宅设计与家具资料", url: "https://en.ff14housing.com/" },
      { name: "FFXIV Housing（旧入口）", description: "原工具页保留的旧协议入口", url: "http://en.ff14housing.com/" },
      { name: "FFXIV Housing 中文站", description: "中文住宅资料", url: "https://cn.ff14housing.com/" },
      { name: "Housing Snap", description: "玩家住宅作品集", url: "https://housingsnap.com/" },
      { name: "FF14 栽培手册", description: "住宅园艺资料", url: "http://zh.ffxivgardening.com/" },
      { name: "FFXIV Chocobo Colour Calculator", description: "陆行鸟染色计算", url: "http://ffxivchocobo.com/" },
      { name: "MakePlace 装修模拟器", description: "住宅装修模拟", url: "shturl.cc/zrkJrRUBPp031lBSoroPhq6Gc" },
      { name: "住宅工具旧入口", description: "原工具页保留的旧链接", url: "https://47.96.176.209/" },
      { name: "Eorzea Collection", description: "国际服幻化搭配社区", url: "https://ffxiv.eorzeacollection.com/" },
      { name: "FFXIV Mirapri Snap", description: "日服装备搭配记录", url: "https://mirapri.com/" },
      { name: "游玩C哩酱", description: "中文幻化资料", url: "https://youwanc.com/" },
      { name: "光之收藏家", description: "国服幻化搭配", url: "https://www.ffxivsc.cn/#/" },
    ],
  },
  {
    title: "战斗与记录",
    subtitle: "Combat & Logs",
    description: "战斗记录、日志分析、配装与市场价格参考。",
    links: [
      { name: "FF Logs", description: "战斗记录与团队分析", url: "https://cn.fflogs.com/" },
      { name: "Xivanalysis", description: "战斗日志自动分析", url: "https://xivanalysis.com" },
      { name: "Ariyala's Toolkit", description: "配装与属性计算", url: "https://ffxiv.ariyala.com/" },
      { name: "Universalis", description: "跨服务器市场价格", url: "https://universalis.app/" },
      { name: "FFXIV Collect", description: "收集品进度追踪", url: "https://ffxivcollect.com/" },
      { name: "FFXIV Interactive Map", description: "艾欧泽亚互动地图", url: "https://map.wakingsands.com/#f=area&id=92" },
      { name: "XIV ToDo", description: "收集与日常事项追踪", url: "https://xivtodo.com/" },
    ],
  },
  {
    title: "特殊场景",
    subtitle: "Field Operations",
    description: "优雷卡、博兹雅、新月岛与其他特殊内容的辅助工具。",
    links: [
      { name: "禁地优雷卡综合管理平台", description: "优雷卡资料与进度工具", url: "https://e.ffxivsc.cn/" },
      { name: "Eureka Tracker", description: "优雷卡刷新与追踪", url: "https://ffxiv-eureka.com/" },
      { name: "南方博兹雅战线监控板", description: "博兹雅事件监控", url: "https://bzy.mocca-works.site/#/" },
      { name: "新月岛史官", description: "新月岛内容资料", url: "https://xyd.zzmelon.com/" },
      { name: "新月岛史官 Ver1.0.0", description: "新月岛旧版工具", url: "https://hurui.dead-war.cn/crescent_south.html" },
    ],
  },
  {
    title: "国服官方与活动",
    subtitle: "China Official",
    description: "原工具页收录的国服官网、社区、活动、服务器与服务入口。",
    links: [
      { name: "中文官方网站", description: "国服官方网站", url: "https://ff.web.sdo.com/" },
      { name: "石之家社区", description: "国服玩家社区", url: "https://ff14risingstones.web.sdo.com/pc/index.html" },
      { name: "萌新招待", description: "新玩家招待活动", url: "https://actff1.web.sdo.com/20190315Zhaodai/index.html#/index" },
      { name: "艾欧泽亚活动中心", description: "国服活动入口", url: "https://actff1.web.sdo.com/Project/20181018ffactive/index.html" },
      { name: "陌迪翁监狱", description: "违规信息查询活动", url: "https://actff1.web.sdo.com/project/20210621ffviolation/index.html#/index" },
      { name: "服务器状况", description: "国服服务器状态", url: "https://ff.web.sdo.com/web8/index.html#/servers" },
      { name: "传送指南", description: "数据中心旅行指南", url: "https://actff1.web.sdo.com/project/20190613worldvisit/d9o81h971g9128hiashd21/pc/datacentertravel.html" },
      { name: "商城", description: "国服官方商城", url: "https://ff.web.sdo.com/web8/index.html#/shop" },
      { name: "游戏充值中心", description: "国服充值入口", url: "https://pay.sdo.com/" },
      { name: "大国防联军后勤补给站", description: "国服活动页面", url: "https://actff1.web.sdo.com/project/141028dgf/index.html" },
      { name: "陆行鸟礼物站", description: "礼物兑换服务", url: "https://ffpay.sdo.com/pc/giftsStation/index.html#/index" },
      { name: "积分中心", description: "国服积分服务", url: "https://qu.sdo.com/personal-center" },
      { name: "竞猜中心", description: "官方竞猜活动", url: "https://actff1.web.sdo.com/20200908JingCai/index.html#/index" },
      { name: "官方职业指南", description: "国服职业介绍", url: "https://actff1.web.sdo.com/project/20190917jobguid/#/index" },
      { name: "拂晓招募", description: "已废弃的官方项目", url: "https://act1.ff.sdo.com/recruit/web/" },
      { name: "随身神典石", description: "已废弃的官方项目", url: "https://actff1.web.sdo.com/Project/ff14help/jp/index.htm" },
      { name: "水晶传承站", description: "已废弃的官方项目", url: "https://actff1.web.sdo.com/project/151019shuijin/index.asp" },
      { name: "重建伊修加德", description: "联合生产采集内容", url: "https://actff1.web.sdo.com/project/200103ishgardian/index.html" },
      { name: "宇宙探索", description: "联合生产采集内容", url: "https://actff1.web.sdo.com/project/20250619cosmicexploration/v4kjfz92uewnum597r5wr0fa3km7bg/index.html#/cosmic_exploration" },
    ],
  },
  {
    title: "社区与论坛",
    subtitle: "Community & Forums",
    description: "玩家交流、招募、PVP 与限时事件信息。",
    links: [
      { name: "NGA 最终幻想14版块", description: "中文玩家论坛", url: "http://bbs.ngacn.cc/thread.php?fid=-362960" },
      { name: "萨雷安大图书馆", description: "玩家攻略与手记", url: "https://bbs.tggfl.com/" },
      { name: "以太流社区", description: "中文 PVP 社区", url: "https://www.ff14pvp.com/" },
      { name: "光之泥头车时间发布站", description: "狩猎时间信息", url: "https://www.ffxivhunt.cn/" },
      { name: "FF14 招募查询", description: "队伍与活动招募", url: "https://xivpf.ff14.xin/" },
      { name: "光之导航站", description: "FF14 资源导航", url: "http://ff14nav.tianbianyu.com/" },
      { name: "零的 FF14 导航", description: "FF14 资源导航", url: "https://www.ask0.cc/" },
    ],
  },
  {
    title: "排行榜与挑战",
    subtitle: "Rankings & Challenges",
    description: "深层迷宫、英雄榜、PVP 与斗兽奇弈相关排行榜。",
    links: [
      { name: "死者宫殿排行榜", description: "深层迷宫队伍排行", url: "https://actff1.web.sdo.com/DeathRank20170502/index.html?rank=party" },
      { name: "天之御柱排行榜", description: "深层迷宫队伍排行", url: "https://actff1.web.sdo.com/20181108deepdungeon2/index1.html?rank=party" },
      { name: "正统优雷卡排行榜", description: "深层迷宫排行榜", url: "https://actff1.web.sdo.com/20230711deepdungeon3/" },
      { name: "朝圣交错路排行榜", description: "深层迷宫排行榜", url: "https://actff1.web.sdo.com/20251103deepdungeon4/" },
      { name: "巴哈姆特远征军英雄榜", description: "旧零式英雄榜", url: "http://act.ff.sdo.com/project/20140926bhmt/index.asp" },
      { name: "亚历山大零式英雄榜", description: "英雄榜记录", url: "https://actff1.web.sdo.com/HeroList/index0224.html" },
      { name: "欧米茄零式英雄榜", description: "英雄榜记录", url: "https://actff1.web.sdo.com/20180525HeroList/index190128.html" },
      { name: "伊甸零式英雄榜", description: "英雄榜记录", url: "https://actff1.web.sdo.com/20180525HeroList/index210406.html" },
      { name: "零式万魔殿英雄榜", description: "英雄榜记录", url: "https://actff1.web.sdo.com/20180525HeroList/index220401.html" },
      { name: "阿卡迪亚零式英雄榜", description: "英雄榜记录", url: "https://actff1.web.sdo.com/20180525HeroList/index260105.html" },
      { name: "水晶冲突排行榜", description: "PVP 排位信息", url: "https://actff1.web.sdo.com/project/ffcrystranking/index.html#/index" },
      { name: "狼群盛宴排行榜", description: "PVP 排位信息", url: "https://actff1.web.sdo.com/arenaRank/reward.html" },
      { name: "斗兽奇弈排行榜", description: "斗兽奇弈排行", url: "https://actff1.web.sdo.com/project/20260819crucible_ranking/d10gyvdniqje/index.html#/" },
    ],
  },
  {
    title: "配装与战斗日志",
    subtitle: "Gear & Combat Logs",
    description: "配装模拟、战斗日志解析与团队表现分析。",
    links: [
      { name: "Ariyala's Final Fantasy XIV Toolkit", description: "国际服配装工具", url: "https://ffxiv.ariyala.com/" },
      { name: "最终幻想14配装器", description: "中文配装工具", url: "https://gearing.ffsusu.com/" },
      { name: "ffxiv-gearing", description: "配装与属性工具", url: "https://asvel.github.io/ffxiv-gearing/" },
      { name: "FFXIV Cactpot Solver", description: "仙人彩玩法计算", url: "http://super-aardvark.github.io/yuryu/" },
      { name: "FF Logs", description: "战斗记录与分析", url: "https://cn.fflogs.com/" },
      { name: "Xivanalysis", description: "战斗日志自动分析", url: "https://xivanalysis.com" },
      { name: "酥卷", description: "战斗记录工具", url: "https://sumemo.dev/" },
      { name: "导随记录器", description: "副本记录工具", url: "https://dlog.luyulight.cn" },
      { name: "日志解析工具", description: "战斗日志解析", url: "https://parser.ffxiv.cyou/" },
      { name: "日志查看器", description: "战斗日志查看", url: "https://ffxivlog.orz.tools/" },
    ],
  },
  {
    title: "插件与脚本工具",
    subtitle: "Plugins & Scripts",
    description: "原页面明确提示：游戏官方禁止使用 Mod、插件与脚本。本组链接仅供兴趣研究与技术交流，请勿在游戏中使用破坏平衡或影响运营的软件。",
    links: [
      { name: "GShade / GPOSERS", description: "画面工具资源站", url: "https://gposers.com/" },
      { name: "XIV Mod Archive", description: "Mod 资源档案", url: "https://www.xivmodarchive.com/" },
      { name: "Advanced Combat Tracker", description: "战斗记录软件", url: "https://advancedcombattracker.com/" },
      { name: "XIVLauncher", description: "第三方启动器", url: "https://goatcorp.github.io/" },
      { name: "Ottercorp Launcher", description: "国服第三方启动器", url: "https://ottercorp.github.io/" },
      { name: "Aonyx Launcher", description: "国服第三方启动器", url: "https://aonyx.ffxiv.wang/" },
      { name: "大合奏 Livehouse", description: "演奏工具资源", url: "https://blog.ffxiv.cat/download/" },
      { name: "Midi Repository", description: "Midi 资源库", url: "https://bmp.trotlinebeercan.com/" },
      { name: "The Eorzea Songbook", description: "演奏曲谱资源", url: "https://eorzeasongbook.com/" },
      { name: "XIV on Mac", description: "Mac 平台工具", url: "https://www.xivmac.com/" },
      { name: "FFXIV TexTools", description: "Mod 编辑工具", url: "https://www.ffxiv-textools.net/" },
      { name: "RebornBuddy", description: "第三方软件站点", url: "https://rebornbuddy.com/xf/" },
      { name: "Guabot FFXIV", description: "第三方工具站点", url: "http://www.guabot.com/" },
      { name: "ACT 呆萌版", description: "ACT 第三方版本", url: "https://act.diemoe.net/" },
      { name: "ACT Cafe版", description: "ACT 第三方版本", url: "https://www.ffcafe.cn/act/" },
      { name: "Heliosphere", description: "Mod 资源站", url: "https://heliosphere.app" },
      { name: "水獭下崽器", description: "国服客户端工具", url: "https://ff14-clientdown.bluefissure.com/" },
    ],
  },
  {
    title: "市场与其他工具",
    subtitle: "Market & Utilities",
    description: "市场、蓝魔法、无人岛、天气、战术板、模型查看与开发接口。",
    links: [
      { name: "Universalis", description: "跨服务器市场价格", url: "https://universalis.app/" },
      { name: "亚历山德里亚经济系统", description: "市场价格参考", url: "https://www.ffxiv.ws/" },
      { name: "杂七杂八工具箱", description: "综合辅助工具", url: "https://ff14.unlucky.ninja/" },
      { name: "罗薇娜的手抄本", description: "市场与生产资料", url: "https://www.ff14pvp.top/" },
      { name: "FF14 交易计算工具", description: "交易价格计算", url: "https://gamecircum.com/tools/ffxiv-trade-calculator/" },
      { name: "BlueMagicebook", description: "青魔法技能资料", url: "http://www.timelysnow.com.cn/bluemagicebook/" },
      { name: "青魔法师技能学习指南", description: "青魔法技能学习路线", url: "https://thewakingsands.github.io/blue-mage/" },
      { name: "幻巧拼图小工具", description: "幻巧拼图计算器", url: "https://leejswit-hcn.github.io/foxcalculator/" },
      { name: "幻巧拼图计算器", description: "Faux Hollows 求解器", url: "https://thewakingsands.github.io/FauxHollowsProbabilisticSolver/" },
      { name: "无人岛工坊求解器", description: "无人岛生产规划", url: "https://island.ffxiv.cyou/" },
      { name: "文本检索工具", description: "游戏文本检索", url: "https://strings.wakingsands.com/" },
      { name: "今天什么战场？", description: "PVP 战场查询", url: "https://nekowoods.github.io/what-zc-today/index.html" },
      { name: "FFXIV Venues", description: "玩家场所索引", url: "https://ffxivvenues.com/" },
      { name: "Mogship", description: "潜水艇与飞空艇工具", url: "https://www.mogship.com/" },
      { name: "探索笔记时钟", description: "观光探索笔记辅助", url: "https://annangela.github.io/FFXIVSightseeingGuide/#/" },
      { name: "限时奖励监控", description: "限时内容追踪", url: "https://uptime.ff14.xin/" },
      { name: "天气查询", description: "区域天气查询", url: "https://asvel.github.io/ffxiv-weather/" },
      { name: "艾欧泽亚天气", description: "天气预测工具", url: "https://eorzea-weather.com/" },
      { name: "FFXIV Squadron", description: "冒险者小队数值工具", url: "http://ffxivsquadron.com/" },
      { name: "XIVSim", description: "战斗模拟器", url: "https://www.xivsim.com/game/" },
      { name: "战术版在线编辑器", description: "团队战术板", url: "https://board.ff14.xin/" },
      { name: "Toolbox 战术板", description: "团队机制标记板", url: "https://ff14.toolboxgaming.space/" },
      { name: "FFXIV Web Model Viewer", description: "角色与装备模型查看", url: "https://ffxiv.dlunch.net/model" },
      { name: "dlunch's FFXIV Tools", description: "综合资料工具", url: "https://ffxiv.dlunch.net/" },
      { name: "素素辣鸡排", description: "综合工具箱", url: "https://tools.ffxiv.cn/lajipai/index.html" },
      { name: "寻找宗长 V1.2", description: "旧版辅助工具", url: "http://118.195.206.75:88/ff14/" },
      { name: "FFXIV 中文 RP Wiki", description: "中文角色扮演资料", url: "https://ff14rp.miraheze.org" },
      { name: "FFXIV 中文 RP Wiki（旧版）", description: "不再维护的 RP 资料", url: "https://ff14rp.fandom.com/zh/wiki/%E6%9C%80%E7%BB%88%E5%B9%BB%E6%83%B3XIV%E4%B8%AD%E6%96%87RP_Wiki" },
      { name: "石之家人口普查计划", description: "玩家人口资料项目", url: "https://yilegendoflink.github.io/" },
      { name: "Stratmaker", description: "已不再维护的战术板", url: "https://stratmaker.est.institute/" },
      { name: "Faux Hollows Solver（英文）", description: "幻巧拼图求解器", url: "https://sturalke.github.io/FauxHollowsProbabilisticSolver/" },
      { name: "BlueMagicebook（旧版）", description: "青魔法技能资料旧版", url: "http://kdygsz.vps6.mydnns.com/BlueMagicebook/" },
      { name: "XIV ToDo", description: "收集与日常事项追踪", url: "https://xivtodo.com/" },
      { name: "XIV API", description: "FFXIV 开发者接口", url: "https://xivapi.com/" },
    ],
  },
];

const officialLinks: ToolLink[] = legacyCategories[0].links ?? [];

export const toolCategories: ToolCategory[] = [
  {
    title: "官方站点",
    subtitle: "Official Links",
    description: "原工具页中的官方入口，按国际服务器与中国服务器分组。",
    children: [
      {
        title: "国际服务器",
        subtitle: "Square Enix JP",
        description: "Square Enix 国际服官方入口。",
        links: officialLinks,
      },
      {
        title: "中国服务器",
        subtitle: "sdo.com",
        description: "盛趣游戏国服官网、社区、活动与服务入口。",
        links: legacyCategories.find((category) => category.title === "国服官方与活动")?.links?.slice(0, 17) ?? [],
        children: [
          {
            title: "联合生产采集",
            subtitle: "Crafting",
            description: "国服联合生产与采集内容。",
            links: [
              { name: "重建伊修加德", description: "联合生产采集内容", url: "https://actff1.web.sdo.com/project/200103ishgardian/index.html" },
              { name: "宇宙探索", description: "联合生产采集内容", url: "https://actff1.web.sdo.com/project/20250619cosmicexploration/v4kjfz92uewnum597r5wr0fa3km7bg/index.html#/cosmic_exploration" },
            ],
          },
          {
            title: "深层迷宫",
            subtitle: "D·D",
            description: "深层迷宫排行榜。",
            links: legacyCategories.find((category) => category.title === "排行榜与挑战")?.links?.slice(0, 4) ?? [],
          },
          {
            title: "英雄榜",
            subtitle: "HeroList",
            description: "各版本零式英雄榜。",
            links: legacyCategories.find((category) => category.title === "排行榜与挑战")?.links?.slice(4, 10) ?? [],
          },
          {
            title: "排位赛",
            subtitle: "PVP",
            description: "PVP 排位与奖励排行。",
            links: legacyCategories.find((category) => category.title === "排行榜与挑战")?.links?.slice(10, 12) ?? [],
          },
          {
            title: "斗兽奇弈",
            subtitle: "Crucible",
            description: "斗兽奇弈排行榜。",
            links: legacyCategories.find((category) => category.title === "排行榜与挑战")?.links?.slice(12) ?? [],
          },
        ],
      },
    ],
  },
  {
    title: "第三方站点",
    subtitle: "Third-Party Links",
    description: "社区维护的百科、攻略、生产、住宅、战斗与其他辅助工具。",
    children: legacyCategories
      .filter((category) => category.title !== "官方站点" && category.title !== "国服官方与活动")
      .filter((category) => !["排行榜与挑战", "配装与战斗日志", "插件与脚本工具", "战斗与记录"].includes(category.title))
      .sort((a, b) => {
        const order = ["百科与资料", "社区与论坛", "攻略与职业", "生产与采集", "住宅与幻化", "特殊场景", "排行榜与挑战", "配装与战斗日志", "插件与脚本工具", "市场与其他工具"];
        return order.indexOf(a.title) - order.indexOf(b.title);
      })
      .map((category) => category.title === "市场与其他工具"
          ? {
            ...category,
            links: undefined,
            children: [
              {
                title: "市场价格",
                subtitle: "Market",
                description: "市场价格、交易与综合经济工具。",
                links: category.links?.slice(0, 5) ?? [],
              },
              {
                title: "配装",
                subtitle: "Equipping Plates",
                description: "装备搭配与属性计算工具。",
                links: [
                  { name: "Ariyala's Final Fantasy XIV Toolkit", description: "国际服配装工具", url: "https://ffxiv.ariyala.com/" },
                  { name: "最终幻想14配装器-素素", description: "中文配装工具", url: "https://gearing.ffsusu.com/" },
                  { name: "ffxiv-gearing", description: "配装与属性工具", url: "https://asvel.github.io/ffxiv-gearing/" },
                  { name: "FFXIV Cactpot Solver", description: "仙人彩玩法计算", url: "http://super-aardvark.github.io/yuryu/" },
                ],
              },
              {
                title: "战斗记录/日志分析",
                subtitle: "Combat Log",
                description: "战斗记录与日志分析工具。",
                links: [
                  { name: "FF Logs - Combat Analysis for FF", description: "战斗记录与团队分析", url: "https://cn.fflogs.com/" },
                  { name: "Xivanalysis", description: "战斗日志自动分析", url: "https://xivanalysis.com" },
                  { name: "酥卷", description: "战斗记录工具", url: "https://sumemo.dev/" },
                  { name: "导随记录器", description: "副本记录工具", url: "https://dlog.luyulight.cn" },
                  { name: "日志解析工具", description: "战斗日志解析", url: "https://parser.ffxiv.cyou/" },
                  { name: "日志查看器", description: "战斗日志查看", url: "https://ffxivlog.orz.tools/" },
                ],
              },
              {
                title: "战斗记录/日志分析（补充）",
                subtitle: "Combat Log",
                description: "原第三方站点列表中的战斗记录与日志分析入口。",
                links: legacyCategories.find((item) => item.title === "战斗与记录")?.links?.slice(0, 2) ?? [],
              },
              {
                title: "MOD 插件和脚本软件",
                subtitle: "Plug-in & script",
                description: "官方明确禁止在游戏中使用 Mod、插件与脚本软件。本组链接仅作兴趣和技术交流，请勿用于破坏游戏平衡或影响游戏运营。",
                links: legacyCategories.find((item) => item.title === "插件与脚本工具")?.links ?? [],
              },
              {
                title: "其他",
                subtitle: "Else",
                description: "蓝魔法、无人岛、天气、战术板、模型查看与开发接口等工具。",
                links: category.links?.slice(5) ?? [],
              },
            ],
          }
        : category.title === "住宅与幻化"
        ? {
            title: "住宅区功能相关 / 外观幻化",
            subtitle: "Housing & Glamours",
            description: category.description,
            children: [
              {
                title: "住宅区功能相关",
                subtitle: "Housing",
                description: "住宅搜索、装修、园艺与陆行鸟染色工具。",
                links: category.links?.slice(0, 12) ?? [],
              },
              {
                title: "外观幻化",
                subtitle: "Glamours",
                description: "浏览玩家幻化搭配与装备灵感。",
                links: category.links?.slice(12) ?? [],
              },
            ],
          }
        : category),
  },
];
