<template>
  <div id="aboutMain">
    <div id="banner">
      <h1>关于我们</h1>
      <h2>我们致力于解决您的数据安全问题</h2>
    </div>
    <CommonHItem :title='"企业介绍"'>
      <div class="aC">
        <img class="scarouselImg" src="../assets/img/about/position.png">
        <p>杭州极盾数字科技有限公司成立于2020年5月,创始团队来自阿里、美团点评、同盾等国内顶尖的互联网和独角兽企业。目前极盾科技已接受由同盾控股投资的千万元天使基金。</p>
        <p>伴随着各行业数字转型的深入，数据的分析和处理能力已经成为新时代企业安全防护的基石。极盾数字科技有限公司致力于利用最先进的机器学习，实时计算，知识图谱等技术，将丰富安全运营经验与海量数据分析能力深度融合，帮助企业有效降低安全运营成本，快速提升智能安全决策能力。</p>
        <div id="end"></div>
      </div>
    </CommonHItem>
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
  head(){
    return {
      title: "极盾科技-解决方案",
      meta: [
        {
          name: "keywords",
          content: "极盾,极盾科技,极盾数科,极策平台,极策,数据安全运营与分析平台,数据运营平台,数据分析平台,数据治理平台,安全数据可视化平台"
        },
        {

          name: 'description',
          content: '极盾,极盾科技,极盾数科,极策平台,极策,数据安全运营与分析平台,数据运营平台,数据分析平台,数据治理平台,安全数据可视化平台' }
        ]
    }
  },
}
</script>

<style scoped>
.aC{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
#end{
  height: 35px;
}
#aboutMain{
  margin-bottom: 45px;
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
  background-image: url('../assets/img/about/banner.png');
  padding: 60px 40px 40px 40px;
  text-align: center;
  display: flex;
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
.scarouselImg{
  width: 90%;
  padding-top: 20px;
  margin: 0 auto;
}
p{
  font-size: 0.35rem;
  margin: 15px;
  line-height: 0.80rem;
}
</style>
