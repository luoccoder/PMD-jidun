<template>
  <div id="D">
    <h3>{{log}}</h3>
    <p>{{content}}</p>
    <img :src="imgUrl" class="num">
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
    log:String,
    content:String,
    imgUrl:String
  }
}
</script>

<style scoped>
#D{
  position: relative;
  bottom: 0.64rem;
  background-image: url('../../assets/img/support/D.png');
  background-size: 8rem ;
  background-repeat: no-repeat;
  padding-top: 0.67rem;
  width:8rem;
  height: 6.8rem;
  margin-left: 0.3rem;
  margin-bottom: -1rem;
}
h3{
  margin-left: 1.3rem;
  color: #0CA06C ;
  font-size: 0.45rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
}
p{
  margin-left: 1.3rem;
  width: 5.8rem;
  line-height: 0.8rem;
  font-size: 0.35rem;
}
.num{
  width: 2.2rem;
  position: absolute;
  bottom: 1.3rem;
  left: 5rem;
}
</style>
