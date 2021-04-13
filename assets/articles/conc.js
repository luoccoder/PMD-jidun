import conc1 from '../img/solution/con1.png'
import conc2 from '../img/solution/con2.png'
import conc3 from '../img/solution/con3.png'
import conc4 from '../img/solution/con4.png'
export function getConcArticles(){
  const concArticles=[
    {
      key:1,
      imgUrl:conc1,
      log:'全方位安全检测',
      content: "打通安全数据孤岛，依托平台策略模型+任意安全事件关联实时分析能力,有效解决安全盲点"
    },
    {
      key:2,
      imgUrl:conc2,
      log:'一天内产品上线',
      content: "快速完成所有安全数据对接，策略模型上线"
    },
    {
      key:3,
      imgUrl:conc3,
      log:'场景化安全响应',
      content: "提取预置场景化安全响应流程与机制，联动恰当的安全设备"
    },
    {
      key:4,
      imgUrl:conc4,
      log:'快速调查取证',
      content: "灵活的事件查询、聚合、可视化组件，方便事件溯源"
    }
  ]
  return concArticles
}
