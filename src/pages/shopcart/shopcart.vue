<template>
<div class="shop-cart">
  <van-swipe-cell :right-width="65" :left-width="65" :on-close="onClose">
  <span class="cart-sel" slot="left">选择</span>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
  </van-cell-group>
  <span class="cart-del" slot="right">删除</span>
</van-swipe-cell>
</div>
</template>

<script>
export default {
  name: "shopcart",

  data() {
    return {};
  },

  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          this.$dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.cart-sel,.cart-del{
  width:65px;
  height: 44px;
  float:left;
  background:#F44d;
  color:#ffffff;
  font-size:26px;
  line-height:44px;
  text-align:center;
}
</style>