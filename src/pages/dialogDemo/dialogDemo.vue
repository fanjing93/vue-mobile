<!--  -->
<template>
<div>
  <div class="dialog-photo"></div>
  <div class="dialog-toast h80 w200 lh80 mb15 f26" @click="openToast">点击出现toast</div>
  <div class="dialog-message h80 w300 lh80 f26" @click="openMessage">点击出现messageBox</div>
</div>
</template>

<script>
export default {
  name: 'dialogDemo',

  data() {
    return {
      diaTitle:'我是message的标题',
      diaText:'我是message的内容,内容包括首次弹出的,请多多指教,不吝赐教.'
    };
  },

  methods: {
    openToast() {
      new dialog().init('开启toast提示');
    },

    openMessage() {
      var _this=this;
      new dialog().init({
        type: 'dialog',
        title: '系统',
        msg:
          '<p style="font-size:0.3rem;font-weight:900">' +
          _this.diaTitle +
          '</p><p style="text-align:left">' +
          _this.diaText +
          '</p>',
        btns: ['暂不开启', '开启续投'],
        callBack: function() {
          //回调函数
          let dialogBtnsR = document.getElementById('J_dialogBtnsR');
          let dialogBtnsL = document.getElementById('J_dialogBtnsL');
          let dialogBg = document.getElementById('JS_dialogBg');

          //确认点击执行的
          dialogBtnsR.onclick = function() {
            dialogBg.style.display = 'none';
            new dialog().init('message的确认执行啦');
          };

          //取消点击执行
          dialogBtnsL.onclick = function() {
            dialogBg.style.display = 'none';
            new dialog().init('message的取消执行啦');
          };
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
//dialogPhoto
.dialog-photo {
  @include setBg('./img/bgc.jpg', ptr(750), ptr(300));
}

.dialog-toast {
  background: green;
}

//toast
.dialog-message {
  background: red;
}
</style>
