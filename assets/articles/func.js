import func1 from '../img/index/func1.png'
import func2 from '../img/index/func2.png'
import func3 from '../img/index/func3.png'

export function getFuncArticles(){
  const funcArticles=[
    {
      key:1,
      imgUrl:func1,
      log:"安全攻防",
      content:"提供海量安全数据威胁检测、预警、定制场景化安全响应流程与动作，有效防御攻击者。"
    },
    {
      key:2,
      imgUrl:func2,
      log:"数据安全",
      content:"拉通数据采集、传输、使用、存储、共享等阶段相关操作数据，构建企业数据全生命安全监控与响应措施，确保企业数据安全与合规。"
    },
    {
      key:3,
      imgUrl:func3,
      log:"人员内控",
      content:"拉通内部账号管理、认证、权限、流程、操作相关数据，提取风险行为变量与违规行为模式，捉住企业“内鬼”。"
    }
  ]
  return funcArticles
}
