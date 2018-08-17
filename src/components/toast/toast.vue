<template>
  <div class="toast" v-if="show">
    <div class="toast-text" ref="toastText">{{content}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      content: '操作成功!',
      contentStyle: {}
    };
  },

  mounted() {
    setTimeout(() => {
      this.$refs.toastText.className += ' disappear';
      this.show = false;
    }, 400);
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
// 动画
@keyframes dialog_bg_out {
  0% {
    background: rgba(0, 0, 0, 0.6);
  }
  100% {
    background: rgba(0, 0, 0, 0);
  }
}

.toast-text {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -0.8rem;
  z-index: 998;
  font-size: 0.3rem;
  line-height: 0.4rem;
  padding: 0.1rem;
  border-radius: 2px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
}

.toast-text.disappear {
  animation: dialog_bg_out ease 0.3s 0s both;
  -webkit-animation: dialog_bg_out ease 0.3s 0s both;
  -moz-animation: dialog_bg_out ease 0.3s 0s both;
}
</style>
