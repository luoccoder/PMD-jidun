import service1 from '../img/support/service1.png'
import service2 from '../img/support/service2.png'
import service3 from '../img/support/service3.png'
import service4 from '../img/support/service4.png'
import service5 from '../img/support/service5.png'
import service6 from '../img/support/service6.png'
export function getServiceArticles(){
  const serviceArticles=[
    {
      key:1,
      imgUrl:service1,
      log:'安全咨询',
      content: "根据客户需求与安全现状，提供安全体系建设规划、安全运营咨询、安全策略建模等高价值服务"
    },
    {
      key:2,
      imgUrl:service2,
      log:'数据集成',
      content: "根据客户需求，提供对安全设备、业务系统、三方数据等数据源对接、适配服务*24小时稳定运行。"
    },
    {
      key:3,
      imgUrl:service3,
      log:'产品部署',
      content: "通过现场、远程等方式为客户提供产品安装部署服务"
    },
    {
      key:4,
      imgUrl:service4,
      log:'产品培训',
      content: "7*24小时热线电话支持，5*8小时现场技术支持，5*8小时邮件服务支持：support@jidun.cn"
    },
    {
      key:5,
      imgUrl:service5,
      log:'需求定制化',
      content: "实时分析性能P99 ≤20毫秒实时查询性能P99 ≤5毫秒"
    },
    {
      key:6,
      imgUrl:service6,
      log:'售后支持',
      content: "任意组件均支持横向扩展实现对整体性能的近线性能提升"
    }
  ]
  return serviceArticles
}
