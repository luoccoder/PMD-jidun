<template>
  <div id="navbar">
    <img id="logo" src="../../assets/img/common/logo.png" alt="极盾科技">
      <img @click="showDrawer" class="nav-btn" :src="clickImg" >
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <div class="nav-item" @click="routeTo('')">首页 <img class="go" src="../../assets/img/navbar/go.png"></div>
       <a-divider />
      <div class="nav-item" @click="routeTo('solution')">解决方案 <img class="go" src="../../assets/img/navbar/go.png"></div>
       <a-divider />
      <div class="nav-item" @click="routeTo('support')">技术支持 <img class="go" src="../../assets/img/navbar/go.png"></div>
       <a-divider />
      <div class="nav-item" @click="routeTo('about')">关于我们 <img class="go" src="../../assets/img/navbar/go.png"></div>
      <a-divider />
    </a-drawer>
  </div>
</template>

<script>
import more from '../../assets/img/navbar/more.png'
import close from '../../assets/img/navbar/close.png'
export default {
  data() {
    return {
      visible: false,
      clickImg:more
    }
  },
  watch:{
    visible(val){
      if(val){
        this.clickImg=close
      }else{
        this.clickImg=more
      }
    }
  },
  components: {

  },
  methods: {
    afterVisibleChange(val) {

    },
    showDrawer() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
    routeTo(value){
      this.$router.push('/'+value);
      this.onClose();
    }
  },
}
</script>
<style scoped>
#navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.35rem;

}
#logo{
  width: 120px;
}
.nav-btn{
  width: 20px;
  margin-right: 4px;
}
#nav-item-btn{
  text-align: right;
  margin-bottom: 30px;
}
.nav-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.35rem;
}
.go{
  width: 15px;
  margin-right: 26px;
}

</style>
