<!--  -->
<template>
  <div class="home">
    <div class="home-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper" @click="tapBannerFather">
            <div class="swiper-slide" @click="tapBanner">Slide 1</div>
            <div class="swiper-slide" @click="tapBanner">Slide 2</div>
            <div class="swiper-slide" @click="tapBanner">Slide 3</div>
            <div class="swiper-slide" @click="tapBanner">Slide 4</div>
            <div class="swiper-slide" @click="tapBanner">Slide 5</div>
            <div class="swiper-slide" @click="tapBanner">Slide 6</div>
            <div class="swiper-slide" @click="tapBanner">Slide 7</div>
            <div class="swiper-slide" @click="tapBanner">Slide 8</div>
            <div class="swiper-slide" @click="tapBanner">Slide 9</div>
            <div class="swiper-slide" @click="tapBanner">Slide 10</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
    </div>
    <div class="home-banner2">
      <button @click="toBannerTwo">点击跳转banner2</button>
    </div>
    <div class="home-bgc">
      
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  props: {},

  components: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  mounted() {
    this.$nextTick(() => {
      let swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        // 是否循环
        loop: true,
        // 分页器
        pagination: '.swiper-pagination',
        // 自动播放
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      });
    });
  },

  methods: {
    tapBanner() {
      // console.log('点击事件触发啦');
    },
    tapBannerFather(e) {
      console.log('点击触发了父元素', e.target);
    },
    toBannerTwo(){
      this.$router.push({path:'/banner'});
    }
  }
};
</script>
<style lang='scss' scoped>
@import 'static/lib/css/mixin.scss';
@import 'static/lib/css/function.scss';
@import 'static/lib/css/swiper.min.scss';
.home-bgc {
  // @include setBg('./img/banner.png', ptr(750), ptr(240));
}
.swiper-container {
  width: ptr(750);
  height: ptr(400);
}
.swiper-slide {
  background-color: red;
}
</style>
