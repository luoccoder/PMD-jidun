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
  margin-bottom:18px;
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
  width: 95%;
  text-align: center;
  margin-left: 0.32rem;
  padding-left: 10px;
}
li{
  float: left;
  width: 45%;
  padding-top: 15px;
  font-size: 0.37rem;
  box-shadow: rgb(226,227,230,0.2) 0 5px 15px 0;
  border: 1px solid rgba(30,34,45,0.05);
  margin-right: 16px;
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
