<template>
  <div>
      <van-loading size="24px" type="spinner" vertical v-show="isLoading"
            >加载中...</van-loading
        >
    <div class="aa"><Header></Header></div>

    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="first-screen-news">
      <div >
        <img
          src="http://img06.yiguoimg.com/e/web/161222/018522/134216/news.png"
          alt=""
        />
      </div>
      <div class="dd">
        <van-swipe style="height:23px" vertical :autoplay="3000" >
          <van-swipe-item v-for="(item,index) in texts" :key="index">{{item}}</van-swipe-item>
          <template #indicator>
    <div class="custom-indicator">{{ current + 1 }}/4</div>
  </template>
        </van-swipe>
      </div>
    </div>
    <div class="two-image">
        <div v-for="(image, index) in images2" :key="index">
            <img :src="image">
        </div>
    </div>
    <div class="two-image">
        <div v-for="(image, index) in images3" :key="index">
            <img :src="image">
        </div>
    </div>
    <div class="two-image">
        <div v-for="(image, index) in images4" :key="index">
            <img :src="image">
        </div>
    </div>
     <div class="two-image">
        <div v-for="(image, index) in images5" :key="index">
            <img :src="image">
        </div>
    </div>
   
    <div class="tt">  
        <h3>—— · 年货礼包 · ——</h3>

    </div>
    <div  >
          <ul class="twoproduct">
            <li  v-for="(item, index) in images6" :key="index" class="wai">
              <img :src="item.pictureUrl" alt="">
              <a href="javascript:;">{{item.commodityName}}</a>
              <div><strong>￥{{item.commodityPrice}}</strong>{{item.commoditySpec}}<i class=""></i></div>
               </li>
          </ul>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
import Header from "@/components/Navigation/Header";
import uri from "@/config/uri";
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  data() {
    return {
      isLoading: true,
      current: 0,
      images: [],
      images2:[],
      images3:[],
      images4:[],
      images5:[],
      images6:[],

      texts: [],
    };
  },
  methods: {
    getData() {
      this.$http.get(uri.getfrist).then((ret) => {
        ret.Data.templateComponentList[0].carouselPictures.forEach((el) => {
          this.images.push(el.pictureUrl);
          
        })
        ret.Data.templateComponentList[0].fastReportsList.forEach((el) => {
        
        this.texts.push(el.fastReportTitle)
          
        })
        ret.Data.templateComponentList[1].adPictures.forEach((el) => {
          this.images2.push(el.pictureUrl);
          
        })
         ret.Data.templateComponentList[2].adPictures.forEach((el) => {
          this.images3.push(el.pictureUrl);
          
        })
         ret.Data.templateComponentList[3].adPictures.forEach((el) => {
          this.images4.push(el.pictureUrl);
          
        })
        
        ret.Data.list.forEach(el=>{
          el.adPictures.forEach(e=>{
          this.images5.push(e.pictureUrl)
          });
        })
        ret.Data.price.forEach(el=>{
          this.images6.push(el)
        })

        this.isLoading = false;
        
        ;
      });
    },
  },
  components: {
    Header,
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.wai{
  background:white;
}
.van-swipe img {
  width: 100%;
  height: 280px;
}

.aa {
  height: 54px;
 
}
.first-screen-news {
  width: 100%;
  height: 43px;
  text-align: center;

  img {
    width: 25%;
  
    text-align: center;
    padding-top: 13px;
    padding-left: 10px;
    float: left;
  }
}
.dd{
    height: 23px;
    width: 70%;
    float: right;
    padding-top: 11px;
    
}
.two-image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img{
        float: left;
        width: 50%;
        height: 50%;

    }
}
.link-img1 {
    display: inline-block;
    width: 50%;

    height: 100%;
    float:left;
    box-sizing: border-box;
    
}
.tt{
  width: 100%;
  height: 68px;
  text-align: center;
  line-height: 50px;
}

  .twoproduct {
    overflow: hidden;
    margin: 0 5px;
    box-sizing: border-box;
    li {
    float: left;
    width: 48%;
    padding: 8px;
    box-sizing: border-box;
    // box-shadow: 5px 5px 3px #CCCCCC;
    border: 3px solid #CCCCCC;
    margin-right: 1%;
    margin-left: 1%;
    text-align: center;

    margin-bottom: 2px;
    a{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color:  #333;
      width: 98%;
      display: block;

    }
    
     img {   
    height: 100%;
    border-radius:5px;
    display: inline;
    width: 100%;
}
strong{
  color: red;
  font-size: 14px;

}
i{
  
    width:31px;
    height: 31px;
    background: url(https://img07.yiguoimg.com/d/web/190514/00193/172123/ksgw.png) no-repeat;
    background-size: 100% 100%;
    float: right;
    border-radius: 50%;
    background-color: #01b27a;
    margin-top: 4px;
}
}
}


</style>
