import collapse1 from '../img/collapse/img/collapse1.png'
import collapse2 from '../img/collapse/img/collapse2.png'
import collapse3 from '../img/collapse/img/collapse3.png'
import collapse4 from '../img/collapse/img/collapse4.png'
import collapse5 from '../img/collapse/img/collapse5.png'
import collapse6 from '../img/collapse/img/collapse6.png'
import icon1 from '../img/collapse/icon/icon1.png'
import icon2 from '../img/collapse/icon/icon2.png'
import icon3 from '../img/collapse/icon/icon3.png'
import icon4 from '../img/collapse/icon/icon4.png'
import icon5 from '../img/collapse/icon/icon5.png'
import icon6 from '../img/collapse/icon/icon6.png'

export function getArticles(){
  const articles=[
    {
      key:1,
      title:'数据汇集和规整',
      iconUrl:icon1,
      imgUrl:collapse1,
      log:'安全日志、网络流量、威胁情报、企业增强数据（CMDB.EHR）',
      content:"万物互联的时代，有价值的安全数据却像金子一般散落在各处。通过自动化的内置机制和智能化的解析机制进行数据汇集和规整，将包括日志、流量、用户行为、终端、安全设备在内的多维数据汇集到平台上，可以更好的去关联、复用和重构。与此同时，通过数据增强机制，利用内外部已有数据源对现有数据进行补充增强，有效助力数据发挥更大的价值"
    },
    {
      key:2,
      title:'安全数据资产化',
      iconUrl:icon2,
      imgUrl:collapse2,
      log:'安全数据湖、风险指标计算、安全策略模型',
      content:"原始数据往往无法直接使用，就像粗金需要进一步加工提纯。利用系统原生的针对安全场景适配的数据中台体系，包含安全数据湖、指标加工体系、标签系统，安全策略主从属性、安全模型特征平台等等，将针对数据进行多层、多维处理，一步步将业务洞见从原始信息中“蒸馏”出来，并整理归纳成标准化的数据资产"
    },{
      key:3,
      title:'安全运营场景落地',
      iconUrl:icon3,
      imgUrl:collapse3,
      log:'安全攻防、人员攻防、合规隐私、数据保护',
      content:"安全运营人员往往需要针对不同场景构建不同的安全解决方案，以数据为驱动的安全运营体系可以有效解决多样性和复杂性难题，在保持灵活性的同时发挥共享和联动的价值。通过内置的安全运营模型，可以快速应对包括攻防对抗，人员内控，数据安全，合规隐私，复杂入侵等等在内的多种安全风险"
    },
    {
      key:4,
      title:'实时安全检测',
      iconUrl:icon4,
      imgUrl:collapse4,
      log:'毫秒级风险行为模型挖掘、任意安全事件关联分析',
      content:"高级自动化攻击对安全检测的时效性提出了更高的要求，响应的有效时间量级从分钟级别的提升到毫秒级别。通过自研的实时计算框架和决策引擎，将从攻击产生到攻击响应的检测时间压缩到10毫秒以内，快速应对包含批量自动化扫描，勒索病毒横向传播，内部员工违规操作等多种实时场景"
    },
    {
      key:5,
      title:'统一安全分析',
      iconUrl:icon5,
      imgUrl:collapse5,
      log:'全局安全事件查询、风险可视化分析、风险仪表盘定制',
      content:"从积累的海量数据中进行数据挖掘和离线分析是安全决策中的重要一环，通过灵活的SQL语句和高级搜索语句，进行快速查询和高级深层分析。精心设计的可视化的人机交互界面，可以充分发挥机器的计算优势和运营专家的推理能力。与此同时还可以将分析流程和分析结果固化到风险仪表盘中，支持分析经验的复用和共享"
    },
    {
      key:6,
      title:'场景化安全响应',
      iconUrl:icon6,
      imgUrl:collapse6,
      log:'安全预警、安全编排、自动化响应',
      content:"响应是安全决策体系的最后一环，通过自动化，场景化的安全响应，不仅可以帮助企业快速拦截风险，最小化损失，同时也能大大降低人工机械化介入的工作，降本增效。更重要的是可以推进形成“收集，检测，响应”的闭环体系，形成正反馈机制，帮助安全运营能力进行不断迭代升级"
    },
  ];
  return articles;
}
