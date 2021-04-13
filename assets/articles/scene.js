import scene1 from '../img/solution/scene1.png'
import scene2 from '../img/solution/scene2.png'
import scene3 from '../img/solution/scene3.png'
import scene4 from '../img/solution/scene4.png'
export function getSceneArticles(){
  const sceneArticles=[
    {
      key:1,
      imgUrl:scene4,
      content: "针对能源行业的安全痛点，提供面向海里安全数据的实时威胁检测、预警、响应的安全解决方案"
    },

    {
      key:2,
      imgUrl:scene2,
      content: "针对《个人金融信息保护技术规范》相关要求，提供金融数据全生命周期安全保护解决方案"
    },
    {
      key:3,
      imgUrl:scene3,
      content: "运营商存在人多、设备多、业务多等特点，为运营商提供综合性安全解决方案，有效降低全局性安全风险"
    },
    {
      key:4,
      imgUrl:scene1,
      content: "在数字化转型的大背景下，为制造行业提供以人员审计日志为基础的人员内部安全风险控制解决方案"
    },
  ]
  return sceneArticles
}

