<template>
  <div>
    <div id="banner">
      <h1>解决方案</h1>
      <h2>我们致力于解决您的数据安全问题</h2>
    </div>

    <CommonCItem :title='"企业安全能力短板"'>
      <SolutionCollapse />
    </CommonCItem>

    <CommonHItem :title='"接入极盾"'>
      <a-carousel autoplay :autoplaySpeed='5000' dots='false' :after-change="concChange">
        <div class="conc" v-for="(item,index) in concArticles" :key="index">
          <img class="ccarouselImg" :src="item.imgUrl">
          <h3>{{item.log}}</h3>
            <p>{{item.content}}</p>
        </div>
      </a-carousel>
    </CommonHItem>
    <div class="dot">
      <ul class="concCurrent">
        <li v-for="(item,index) in concArticles" :key="index">
          <span :style="{backgroundColor:(index===concCurrentIndex?'#0CA06C':'rgb(241, 236, 236)')}"></span>
        </li>
      </ul>
    </div>

    <CommonHItem :title='"客户收益"'>
      <div class="profit" v-for="(item,index) in profitArticles" :key="index">
        <ul>
          <li><img class="pImg" :src="item.imgUrl"><p>{{item.content}}</p></li>
        </ul>
        <a-divider v-if="index!=3" />
        <!-- <div id="spaceEnd" v-if="index==3"> -->
      </div>
    </CommonHItem>

    <SolutionPercent :title='"一个月内交付，达成效果"' />

    <CommonHItem :title='"覆盖多行业安全场景"'>
      <a-carousel autoplay :autoplaySpeed='5000' dots='false' :after-change="sceneChange">
        <div class="adv" v-for="(item,index) in sceneArticles" :key="index">
          <img class="scarouselImg" :src="item.imgUrl">
          <p>{{item.content}}</p>
        </div>
      </a-carousel>
    </CommonHItem>
    <div class="dot">
      <ul class="advCurrent">
        <li v-for="(item,index) in sceneArticles" :key="index">
          <span :style="{backgroundColor:(index===sceneCurrentIndex?'#0CA06C':'rgb(241, 236, 236)')}"></span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {getConcArticles} from '../assets/articles/conc'
import {getProfitArticles} from '../assets/articles/profit'
import {getSceneArticles} from '../assets/articles/scene'
export default {
  data() {
    return {
      concArticles:getConcArticles(),
      profitArticles:getProfitArticles(),
      sceneArticles:getSceneArticles(),
      concCurrentIndex:0,
      sceneCurrentIndex:0,
    }
  },
  components: {
  },
  methods:{
    concChange(a){
      this.concCurrentIndex=a
    },
    sceneChange(a){
      this.sceneCurrentIndex=a
    },
  },
  head(){
    return {
      title: "极盾科技-解决方案",
      meta: [
        {

          name: "keywords",
          content: "数据治理,打通数据孤岛,数据实时分析,事件关联,提升安全运营效率,量化企业数据指标,提升企业安全能力,降低安全部门人力成本,怎么组建企业安全部门,人员内控,人员风险管理,企业员工风控,企业员工风险管理"
        },
        {

          name: 'description',
          content: 'Solution page of JIDUN' }
        ]
    }
  },
}
</script>

<style scoped>

.ant-divider{
  background-color:#F5F5F5 ;
  margin: 0;
}
#spaceEnd{
  height: 1rem;
}
h2{
  font-size: 0.6rem;
  padding-top:20px;
  padding-bottom:18px;
  margin: 0 auto;
}
#banner{
  width: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url('../assets/img/solution/banner.png');
  padding: 60px 40px 40px 40px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#banner h1{
  color: #fff;
  font-size: 0.9rem;
  font-family:'PingFangSC-Light';
}
#banner h2{
  color: #DDFFEE ;
  position: relative;
  bottom: 0.9rem;
  font-size: 0.4rem;
  font-weight:normal
}
.conc{
  padding: 0 20px 20px 20px;
  text-align: center;
  font-size: 0.35rem;

}
.conc h3 {
  color: #0CA06C ;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  font-size: 0.42rem;
  margin: 15px;
}
.concCurrent{
  width: 90px;
  padding-left: 6px;
  margin-bottom: 80px;
}
.concCurrent li span{
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 13px;
  background-color: rgb(241, 236, 236) ;
}
.ccarouselImg{
  width: 30%;
  padding-top:20px;
  margin: 0 auto;
}
.dot{
  display: flex;
  justify-content: center;
  margin-bottom: -90px;
}
.profit{
  width: 102%;
  position: relative;
  right: 0.08rem;
  padding: 20px 15px 0 15px;
}
.profit ul li img{
  width: 38px;
  position: relative;
  bottom: 0.17rem;
}
.profit ul {
  display: flex;
  justify-content: space-between;
}
.profit li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.profit ul li p {
  width: 100%;
  font-size: 0.35rem;
  margin-left: 15px;
}
.scarouselImg{
  width: 95%;
  padding-top: 20px;
  margin: 0 auto;
}
.adv{
  padding-bottom: 20px;
}
.adv h3 {
  color: #0CA06C ;
  font-size: 0.5rem;
  margin: 15px;
}
.adv p{
  font-size: 0.35rem;
  margin: 15px;
}
.advCurrent{
  width: 90px;
  padding-left: 6px;
  margin-bottom: 4rem;
}
.advCurrent li span{
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 13px;
  background-color: rgb(241, 236, 236) ;
}
</style>
