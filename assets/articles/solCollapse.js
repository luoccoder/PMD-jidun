import collapse1 from '../img/solution/solC1.png'
import collapse2 from '../img/solution/solC2.png'
import collapse3 from '../img/solution/solC3.png'

import icon1 from '../img/collapse/icon/icon1.png'
import icon2 from '../img/collapse/icon/icon2.png'
import icon3 from '../img/collapse/icon/icon3.png'


export function getArticles(){
  const articles=[
    {
      key:1,
      title:'安全数据孤岛',
      iconUrl:icon1,
      imgUrl:collapse1,
      content:"传统的安全设备没法将自身有价值的安全日志共享出去，也没法利用三方安全设备共享的威胁情报来降低自身的误杀率，提升检出率。面向较为复杂的安全分析场景安全人员工作效率低下、分析出来的结果，没法有效沉淀成知识库与策略模型"
    },
    {
      key:2,
      title:'安全运营之困',
      iconUrl:icon2,
      imgUrl:collapse2,
      content:"传统的安全设备的检测能力与处置能力深度耦合，导致安全检测能力低下，其场景化的安全响应能力跟不上实际安全业务场景。传统SIEM分析、响应手段依然薄弱，还是没有解决上述问题"
    },{
      key:3,
      title:'平台性能问题',
      iconUrl:icon3,
      imgUrl:collapse3,
      content:"传统SIEM架构扩展性差，处理性能没法横向扩容，面向海量安全数据实时查询场景存在响应慢或不响应的情况。传统SIEM平台面向海量安全数据分析场景时，在低延时、计算准确性、高可靠性上三者难以兼得"
    }
  ];
  return articles;
}
