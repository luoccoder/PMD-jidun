<template>
  <div id="collapse">
    <a-collapse
      accordion
      :bordered="false"
      expandIconPosition='right'
    >
      <template #expandIcon="props">
        <img style="width:15px" :src="props.isActive ? close:open" />
      </template>
      <a-collapse-panel class="col" v-for="(item,index) in articles" :key="index" :style="customStyle" >
        <template slot="header" >
          <div style="height:0.9rem">
            <img class="icon" :src="item.iconUrl"><span class="title">{{item.title}}</span>
            <hr class="sol">
          </div>
        </template>

        <img class="Aimg" :src="item.imgUrl" :alt="item.title">
        <p>{{item.content}}</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import open from '../../assets/img/navbar/go.png'
import close from '../../assets/img/navbar/down.png'
import {getArticles} from '../../assets/articles/solCollapse'
export default {
  data() {
    return {
      articles:getArticles(),
      customStyle:'border-bottom:#F5F5F5 1px solid',
      open:open,
      close:close
    }
  },

  components: {

  }
}
</script>

<style scoped>
.sol{
  background-color: #F5F5F5;
  width: 9.06rem;
  bottom: -0.019rem;
  position: absolute;
  border:none;
  right: 1px;
  height: 1px;
}
.title{
  font-size:0.4rem;
  position: relative;
  top:0.19rem
}
.ant-collapse{
  background-color: white;
}
.ant-collapse-content-box{
  text-align: left;
  font-family: 'PingFangSC-Medium';
}

.open{
  transform: rotate(90deg);
  width: 15px;
}
.icon{
  width: 24px;
  margin-right: 13px;
  position: relative;
  top:0.15rem
}
.Aimg{
  width: 100%;
  margin: 0 auto;
  margin: 15px 0 20px 0;
}
.col h3{
  color: #0CA06C ;
  font-family: 'PingFangSC-Medium';
  font-size: 0.38rem;
  font-weight: bold;
  text-align: left;
  margin: 10px 10px 10px 0;
}
.col p{
  text-align: left;
  font-size: 0.35rem;
  line-height: 0.80rem;
}
#item{
  text-align: left;
}
</style>
