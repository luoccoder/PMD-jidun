<template>
  <div id="item">
    <div id="title">
      <strong><h2>{{title}}</h2></strong>
    </div>
    <div id="itemContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

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
  margin-bottom:30px;
}
#title{
  text-align: center;
}
#item{
  margin-top: 55px;
}
#itemContent{
  margin: 0 18px 30px 18px;
  box-shadow: rgb(226,227,230,0.2) 0 5px 15px 0;
  border: 1px solid rgba(30,34,45,0.05);

}
</style>
