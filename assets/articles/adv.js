import adv1 from '../img/index/adv1.png'
import adv2 from '../img/index/adv2.png'
import adv3 from '../img/index/adv3.png'
import adv4 from '../img/index/adv4.png'
export function getAdvArticles(){
  const advArticles=[
    {
      key:1,
      imgUrl:adv1,
      log:'“一键”安全数据接入，打破数据孤岛',
      content: "支持无关具体安全设备/安全数据源的采集，内置1000+常见安全日志、网络流量解析规则，智能解析CEF、JSON等格式的各类安全数据"
    },
    {
      key:2,
      imgUrl:adv2,
      log:'“易”上手的安全分析，洞察安全风险',
      content: '支持安全事件全局明细查询、聚合查询，支持可视化分析、仪表盘定制、安全规则可视化'
    },
    {
      key:3,
      imgUrl:adv3,
      log:'毫秒级智能安全检测，提升威胁感知能力',
      content: '支持实时风险指标计算、行为模式挖掘、任意安全事件关联分析，支持安全风险可视化、内置丰富的专家策略库'
    },
    {
      key:4,
      imgUrl:adv4,
      log:'场景化智能安全决策，提升安全响应能力',
      content: '基于决策结果，定制场景化安全响应动作与流程，可视化拖拉拽，低代码配置响应'
    }
  ]
  return advArticles
}
