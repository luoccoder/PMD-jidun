import profit1 from '../img/solution/profit1.png'
import profit2 from '../img/solution/profit2.png'
import profit3 from '../img/solution/profit3.png'
import profit4 from '../img/solution/profit4.png'
export function getProfitArticles(){
  const profitArticles=[
    {
      key:1,
      imgUrl:profit2,
      content: "重新分配机器、人力资源，释放劳动力，降低人力成本，提升安全运营效率"
    },
    {
      key:2,
      imgUrl:profit3,
      content: "量化企业安全运营指标、安全工作价值"
    },
    {
      key:3,
      imgUrl:profit4,
      content: "持续提升企业安全水位，符合监管要求"
    },
    {
      key:4,
      imgUrl:profit1,
      content: "拥有海量安全数据威胁检测、预警、场景化响应能力，获得开箱即用的安全专家策略库实战经验"
    }
  ]
  return profitArticles
}
