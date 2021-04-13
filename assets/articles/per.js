import per1 from '../img/index/per1.png'
import per2 from '../img/index/per2.png'
import per3 from '../img/index/per3.png'
import per4 from '../img/index/per4.png'
export function getPerArticles(){
  const perArticles=[
    {
      key:1,
      imgUrl:per1,
      log:'高吞吐',
      content: "单节点日志量分析处理性能可达千万级别集群部署可达亿级别以上。"
    },
    {
      key:2,
      imgUrl:per2,
      log:'高可靠',
      content: "产品底层组件均采用分布式设计，确保分布式集群7*24小时稳定运行。"
    },
    {
      key:3,
      imgUrl:per3,
      log:'低延迟',
      content: "实时分析性能P99 ≤20毫秒实时查询性能P99 ≤5毫秒"
    },
    {
      key:4,
      imgUrl:per4,
      log:'可扩展',
      content: "任意组件均支持横向扩展实现对整体性能的近线性能提升"
    }
  ]
  return perArticles
}
