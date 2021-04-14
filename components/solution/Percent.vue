<template>
  <div id="item">
    <div id="title">
      <h2>{{title}}</h2>
    </div>
    <div id="itemContent">
      <ul>
        <li v-for="(item,index) in percentArticles" :key="index">
          <p>{{item.content}}</p>
          <img :src="item.imgUrl">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getPercentArticles} from '../../assets/articles/percent'
export default {
  data() {
    return {
      percentArticles:getPercentArticles(),
    }
  },
  components: {

  },
  props:{
    title:String
  }
}
</script>

<style scoped>
h2{
  font-size: 0.6rem;
  font-weight: bold;
  margin-top:20px;
  margin-bottom:40px;
}
#title{
  text-align: center;
}
#item{
  margin-top: 50px;
}
#itemContent{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
ul{
  margin: 0 auto;
  width: 96%;
  text-align: center;
  padding-left: 0.32rem;
}
li{
  float: left;
  width: calc((100%-0.64rem)/2);
  padding-top: 15px;
  font-size: 0.37rem;
  box-shadow: rgb(226,227,230,0.2) 0 5px 15px 0;
  border: 1px solid rgba(30,34,45,0.05);
  margin-right: 0.32rem;
  margin-bottom: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img{
  width: 65%;
  margin: 0 auto;
}
</style>
