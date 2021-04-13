import time1 from '../img/support/time1.png'
import time2 from '../img/support/time2.png'
import time3 from '../img/support/time3.png'

export function getTimelineArticles(){
  const timelinecArticles=[
    {
      key:1,
      imgUrl:time1,
      log:"数据快速对接",
      content:"预置业内数千种常见的安全设备与三方系统日志格式解析模型，通过交互式的对接配置流程实现分钟级别的数据对接"
    },
    {
      key:2,
      imgUrl:time2,
      log:"产品标准部署",
      content:"1小时内完成基础版本部署上线，包含数据对接与策略模型初始化"
    },
    {
      key:3,
      imgUrl:time3,
      log:"效果显现",
      content:"产品上线以后在1周内即可对相关运营数据的效果监控做到面面俱到。若您存在场景化响应定制需求，我们也可进行需求对接与开发定制"
    }
  ]
  return timelinecArticles
}
