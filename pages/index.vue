<template>
  <div class="container">
    <!--轮播图-->
    <a-carousel autoplay :autoplaySpeed='5000' >
      <div><img class="carouselImg" src="../assets/img/index/carousel-1.png" alt="极盾科技"></div>
      <div>
        <button class="carouselImg" @click="toStrategies()">
        <br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br>
        </button>
      </div>
    </a-carousel>

    <CommonCItem :title='"产品功能"'>
      <IndexCollapse  />
    </CommonCItem>

    <CommonHItem :title='"核心优势"'>
      <a-carousel autoplay :autoplaySpeed='5000' dots='false' :after-change="advChange">
        <div class="adv" v-for="(item,index) in advArticles" :key="index">
          <img class="scarouselImg" :src="item.imgUrl">
          <h3>{{item.log}}</h3>
          <p>{{item.content}}</p>
        </div>
      </a-carousel>
    </CommonHItem>
    <div class="dot">
      <ul class="advCurrent">
        <li v-for="(item,index) in advArticles" :key="index">
          <span :style="{backgroundColor:(index===advCurrentIndex?'#0CA06C':'rgb(241, 236, 236)')}"></span>
        </li>
      </ul>
    </div>
    <CommonHItem :title='"产品架构"' />
    <div id="production">
      <p>致力于利用最先进的机器学习，实时计算，知识图谱等技术，将丰富安全运营经验与海量数据分析能力深度融合，用直观、高性能分析和无缝连接事件响应工作流程，实现自动化报警处理，帮助企业有效降低安全运营成本，快速提升智能安全决策能力。</p>
      <img src="../assets/img/index/prod.png">
    </div>

    <CommonHItem :title='"适用场景"'>
      <div id="funcMain">
        <div v-for="(item,index) in funcArticles" :key="index">
          <img :src="item.imgUrl">
          <div class="funcContent">
            <h3>{{item.log}}</h3>
            <p>
              {{item.content}}
              <a-divider v-if="index!=2" />
            </p>
          </div>
        </div>
        <div id="sceneend"></div>
      </div>
    </CommonHItem>

    <CommonHItem :title='"性能优异，可高用性"'>
      <a-carousel autoplay :autoplaySpeed='5000' dots='false' :after-change="perfChange">
        <div class="per" v-for="(item,index) in perArticles" :key="index">
          <img class="pcarouselImg" :src="item.imgUrl">
          <h3>{{item.log}}</h3>
            <p>{{item.content}}</p>
        </div>
      </a-carousel>
    </CommonHItem>
    <div class="dot">
      <ul class="perCurrent">
        <li v-for="(item,index) in perArticles" :key="index">
          <span :style="{backgroundColor:(index===perCurrentIndex?'#0CA06C':'rgb(241, 236, 236)')}"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getAdvArticles} from '../assets/articles/adv'
import {getFuncArticles} from '../assets/articles/func'
import {getPerArticles} from '../assets/articles/per'

export default {
  data(){
    return{
      funcArticles:getFuncArticles(),
      advArticles:getAdvArticles(),
      perArticles:getPerArticles(),
      advCurrentIndex:0,
      perCurrentIndex:0,
    }
  },
  methods:{
    toStrategies(){
      this.$router.push('/strategies');
    },
    advChange(a){
      this.advCurrentIndex=a
    },
    perfChange(a){
      this.perCurrentIndex=a
    }
  },
}
</script>
<style>
.ant-divider{
  background-color:#F5F5F5 ;
}
#sceneend{
  height: 0.7rem;
}
.carouselImg{
  width: 100%;
  background-image: url('../assets/img/index/carousel-2.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 8.5rem;
  border: none;
  outline: none;
}
.scarouselImg{
  width: 100%;
  margin-top: 20px;
}
.pcarouselImg{
  width: 30%;
  padding-top:20px;
  margin: 0 auto;
}
.ant-carousel .slick-dots li.slick-active button{
  background-color: #0CA06C ;
}
.adv{
  padding-bottom: 20px;
   text-align: center;
}
.adv h3 {
  color: #0CA06C ;
  font-size: 0.38rem;
  margin: 15px;
   text-align: center;
}

.adv p{
  font-size: 0.35rem;
  margin: 15px;
  text-align: center;
}
.per{
  padding: 0 20px 20px 20px;
  font-size: 0.35rem;
  text-align: center;
  width: 105%;
}
.per p{
  text-align: center;
}
.per h3 {
  color: #0CA06C ;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
  font-size: 0.42rem;
  margin: 15px;
}

.advCurrent{
  width: 90px;
  padding-left: 6px;
}
.advCurrent li span{
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 13px;
  background-color: rgb(241, 236, 236) ;
}
.perCurrent{
  width: 90px;
  padding-left: 6px;
  margin-bottom: 80px;
  text-align: center;
}
.perCurrent li span{
  float: left;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 13px;
  background-color: rgb(241, 236, 236) ;
}
.dot{
  display: flex;
  justify-content: center;
  margin-bottom: -20px;
}
#production{
  width: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url('../assets/img/index/productionBack.png');
  padding: 64px 25px 64px 25px;
}
#production p{
  color: #FFFFFF;
  font-size: 0.35rem;
  margin-bottom: 35px;
}
#production img{
  width: 100%;
}
#funcMain{
  padding-top: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#funcMain img{
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.funcContent{
  width: 90%;
  margin: 0 auto;
}
.funcContent p{
  font-size: 0.35rem;
}
.funcContent h3{
  color: #0CA06C ;
  font-weight: bold;
  font-size: 0.4rem;
  padding: 18px 8px 0 0;
}
</style>
