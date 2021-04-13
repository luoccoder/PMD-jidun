<template>
  <div>
    <div id="banner">
      <h1>技术支持</h1>
      <h2>我们致力于解决您的数据安全问题</h2>
    </div>

    <CommonHItem :title='"我们的服务"'>
      <div class="profit" v-for="(item,index) in serviceArticles" :key="index">
        <ul>
          <li>
            <h3 class="log"><img :src="item.imgUrl">{{item.log}}</h3>
            <p>{{item.content}}</p>
          </li>
        </ul>

        <a-divider v-if="index!=5" />
        <div id="spaceEnd" v-if="index==5"></div>
      </div>
    </CommonHItem>

    <CommonHItem :title='"我们的服务流程"' />
    <div id="supportMian">
      <img id="serviceDesc" src="../assets/img/support/serviceDesc.png">
      <SupportTimeline />
    </div>

  </div>
</template>

<script>
import {getServiceArticles} from '../assets/articles/ourService'
export default {
  data() {
    return {
      serviceArticles:getServiceArticles(),
    }
  },
  components: {

  }
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
#supportMian{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -3rem;
}
#serviceDesc{
  width: 80%;
  margin-bottom: -1rem;
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
  background-image: url('../assets/img/support/banner.png');
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
.profit{
  padding: 20px;
  margin-top: 25px;
  margin-bottom: -25px;
}
.profit ul li img{
  width: 38px;
  margin-right: 10px;
}
.profit ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profit ul li p {
  width: calc(100%-48px);
  margin-left: 48px;
  margin-top: -0.15rem;
  font-size: 0.35rem;
  line-height: 0.80rem;
}
.log{
  margin-top: -10px;
  font-size: 0.38rem;
  font-weight: bold;
}
.log img{
  position: relative;
  top:0.3rem;
}
</style>
