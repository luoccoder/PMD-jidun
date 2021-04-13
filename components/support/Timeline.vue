<template>
  <div id="timeline">
    <a-timeline>
      <a-timeline-item>
          <div slot="dot"></div>
          <div id="start"></div>
      </a-timeline-item>
      <a-timeline-item>
          <img slot="dot" style="width:15px" src="../../assets/img/support/bigDot.png">
          <div id="startItem"></div>
      </a-timeline-item>
      <a-timeline-item>
          <template slot="dot">
            <div class="desc">
              <span>一分钟</span>
            </div>
          </template>
      <SupportTimelineD :log='timelineArticles[0].log' :content='timelineArticles[0].content' :imgUrl='timelineArticles[0].imgUrl' />
      <a-timeline-item>
          <img slot="dot" class="icon" src="../../assets/img/support/bigDot.png">
      </a-timeline-item>
      </a-timeline-item>
      <a-timeline-item>
          <template slot="dot">
            <div class="desc">
              <span>一小时</span>
            </div>
          </template>
      <SupportTimelineD :log='timelineArticles[1].log' :content='timelineArticles[1].content' :imgUrl='timelineArticles[1].imgUrl' />
      </a-timeline-item>
      <a-timeline-item>
          <img slot="dot" class="icons" src="../../assets/img/support/bigDot.png">
      </a-timeline-item>

      <a-timeline-item>
          <template slot="dot">
            <div class="desc">
              <span>一周</span>
            </div>
          </template>
          <div id="mid"></div>
      </a-timeline-item>
      <a-timeline-item>
          <img slot="dot" style="width:15px" src="../../assets/img/support/bigDot.png">
          <div id="end"></div>
      </a-timeline-item>
    </a-timeline>
    <div id="endItem">
      <SupportTimelineD :log='timelineArticles[2].log' :content='timelineArticles[2].content' :imgUrl='timelineArticles[2].imgUrl' />
    </div>
  </div>
</template>

<script>
import {getTimelineArticles} from '../../assets/articles/timeline'

export default {
  data() {
    return {
      timelineArticles:getTimelineArticles()
    }
  },
  components: {


  },
  props:{

  }
}
</script>

<style scoped>
#startItem{
  margin-top: -0.5rem;
  width: 1rem;
  height: 0.8rem;
}
#endItem{
  position: relative;
  left: 0.42rem;
  bottom: 3.55rem;
  margin-right: 0;
  width: 2rem;
}
#id{
  background-color: rgb(212, 8, 8);
  width: 0.1rem;
  height: 3rem;
  z-index: 9;
}
#mid{
  width: 1rem;
  height: 1.7rem;
}
#start{
  width: 1rem;
  height: 0.8rem;
}
#end{
  margin-top: -0.75rem;
  width: 1rem;
  height: 1.5rem;
}
#timeline{
  margin: 1rem 0 0  1.2rem;
}
.icon{
  width: 15px;
  position: relative;
  right: 0.45rem;
  bottom: 2.1rem;
}
.icons{
  width: 15px;
  position: relative;
  bottom: 3rem;
}
.desc{
  border-radius: 50%;
  border: 1px solid #bbe6d6 ;
  box-shadow: rgb(190,223,211,0.2) 0 5px 15px 0;
  color: #0CA06C;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

}

</style>
