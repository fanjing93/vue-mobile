<!--  -->
<template>
  <div class="message">
    <button @click="openMessageBox">点击弹出messageBox</button>
  </div>
</template>

<script>
import mbox from '@/components/messagebox/messagebox.js';
export default {
  name: 'message',

  props: {},

  components: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {
    openMessageBox() {
      mbox('该活动仅支持App', {
        title: '我是messagebox',
        imgurl:require('./img/bgc.jpg'),
        type: 0,
        windowClick: false,
        btn: {
          text: '知道了',
          no:'取消'
        }
      }).then(() => {
        console.log('确认执行啦');
      }).catch(()=>{
        console.log('取消执行啦');
      });
    },

    openMessageRule() {}
  }
};
</script>
<style lang='scss' scoped>
</style>
