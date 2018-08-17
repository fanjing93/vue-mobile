<template>
    <div v-if="show">
        <div class="popup popup-in" style="display: block;">
            <div class="popup-inner">
                <div class="popup-title" v-if="title">{{title}}</div>
                <img v-show="imgurl != ''" class="popup-img" :src="imgurl" />
                <div class="popup-text" :style="contentStyle" v-html="content"></div>
            </div>
            <div class="popup-buttons">
                <span class="popup-button popblack" :style="btn.style" @click="success">
                    {{btn.text}}
                </span>
                <span v-show="type=='0'" class="popup-button" :style="btn.style" @click="cancel">{{btn.no}}</span>
            </div>
            <div class="popup-x popup-close" @click="close">×</div>
        </div>
        <div class="popup-backdrop active" @click="closeWindow" style="display: block;"></div>
    </div>
</template>

<script>
import pageChange from './mixins.js';
export default {
  mixins: [pageChange],
  data() {
    return {
      show: true,
      title: '', // 默认无标题
      content: '',
      contentStyle:{},
      imgurl: '',
      btn: {
        text: '确认',
        no: '取消',
        // 设置样式
        style: {}
      },
      type: '0',
      windowClick: true
    };
  },
  methods: {
    success() {
      this.show = false;
    },

    cancel() {
      this.show = false;
    },

    closeWindow() {
      if (this.windowClick) {
        this.show = false;
      }
    },

    close(){
        this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC',
    'Helvetica Neue', STHeiti, 'Microsoft Yahei', Tahoma, Simsun, sans-serif;
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  display: none;
  overflow: hidden;
  width: 270px;
  -webkit-transition-property: -webkit-transform, opacity;
  transition-property: transform, opacity;
  //   -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
  //   transform: translate3d(-50%, -50%, 0) scale(1.185);

  text-align: center;
  opacity: 0;
  color: #000;
  border-radius: 5px;
  &-x {
    position: absolute;
    top: 4px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
}
.popup.popup-in {
  display: block;
  -webkit-transition-duration: 400ms;
  transition-duration: 400ms;
  //   -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
  //   transform: translate3d(-50%, -50%, 0) scale(1);
  opacity: 1;
}
.popup-img {
  width: 1.4rem;
}
.popup.popup-out {
  -webkit-transition-duration: 400ms;
  transition-duration: 400ms;
  //   -webkit-transform: translate3d(-50%, -50%, 0) scale(1);
  //   transform: translate3d(-50%, -50%, 0) scale(1);
  opacity: 0;
}
.popup-inner {
  position: relative;
  padding: 35px 0 15px 0;
  border-radius: 5px 5px 0 0;
  background: rgba(255, 255, 255, 0.95);
}
.popup-inner:after {
  position: absolute;
  z-index: 15;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 1px;
  content: '';
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.popup-title {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.popup-title + .popup-text {
  font-family: inherit;
  font-size: 14px;
  margin: 5px 0 0;
}
.popup-text {
  font-size: 0.3rem;
  color: #30344d;
  margin-top: 15px;
}
.popup-buttons {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 44px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.popup-button {
  font-size: 0.28rem;
  line-height: 44px;
  position: relative;
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: 0 5px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ea8b5a;
  background: rgba(255, 255, 255, 0.95);
  -webkit-box-flex: 1;
  letter-spacing: 0.5px;
}
.popblack {
  color: #f28e20;
  font-size: 15px;
}
.popup-button:after {
  position: absolute;
  z-index: 15;
  top: 0;
  right: 0;
  bottom: auto;
  left: auto;
  display: block;
  width: 1px;
  height: 100%;
  content: '';
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  background-color: rgba(0, 0, 0, 0.2);
}
.popup-button:first-child {
  border-radius: 0 0 0 5px;
}
.popup-button:first-child:last-child {
  border-radius: 0 0 5px 5px;
}
.popup-button:last-child {
  border-radius: 0 0 5px 0;
}
.popup-button:last-child:after {
  display: none;
}
.popup-backdrop {
  position: fixed;
  z-index: 998;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition-duration: 400ms;
  transition-duration: 400ms;
  opacity: 0;
  background: rgba(0, 0, 0, 0.45);
}
.popup-backdrop.active {
  opacity: 1;
}
.icon-rrjc_close {
  font-size: 0.3rem;
}
//规则弹窗兼容
div.popup.popup-in {
  // transform: translate3d(0,0,0) scale(1);
  margin-left: -38%;
  margin-top: -45%;
}
.popup-close{
   font-size:26px;
   font-weight:100; 
   color:#30344d;
}
</style>