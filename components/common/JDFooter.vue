<template>
  <div id="footer">

      <div id="content">
        <img id="footerLogo" src="../../assets/img/footer/logo-footer.png">
        <div id="detail">
        <div>
          杭州极盾数字科技有限公司<br>
          市场合作：market@jidun.cn<br>
          招聘：hr@jidun.cn<br>
          地址：杭州市余杭区梦想小镇良仓太炎众创2楼
        </div>
          <img id="codeImg" src="../../assets/img/footer/code.png">
        </div>
        <a id="connect" href="tel:0571-8858 0751">
          <img  src="../../assets/img/footer/connect.png">
          联系我们：0571-8858 0751
        </a>
        <div id="certificate">
          <img src="../../assets/img/footer/certificate.png">
        </div>
        <div id="copy">
          Copyright © 极盾科技 | 浙ICP备2021004285号-1
        </div>
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

  }
}
</script>

<style lang='less'>
#content{
  display: flex;
  flex-direction:column;
  align-items: center;
}
#detail{
  width: 100%;
  display: flex;
  color: #ffffff94;
  font-size: 0.32rem;
  margin-top:0.3rem;
  justify-content: space-between;
  align-items: center;
}
#footerLogo{
  width: 2.5rem;
  position: relative;
  right: 3.27rem;
  margin-top: 0.4rem;
}
#codeImg{
  width: 2rem;
  position: relative;
}
#connect{
  margin-top: 0.9rem;
  margin-bottom: 0.9rem;
  background-color: #0CA06C;
  border-radius: 8px;
  padding: 0.14rem;
  font-size: 0.35rem;
  color: white;
  text-align: center;
  width: 100%;
  padding: 0.3rem 0 0.3rem 0;

}
#connect:active{
  transform: scale(0.95);
  background-color: #0e855b;
}
#connect img{
  width: 0.35rem;
}
#certificate img{
  margin-bottom: 0.9rem;
  width: 100%;
}
#copy{
  color: #ffffff94;
  font-size: 12px;
  text-align: center;
  margin-left: 0.33rem;
  margin-bottom: 0.4rem;
}
</style>
