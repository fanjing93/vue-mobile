<!--  -->
<template>
  <div>
    <button @click="openToast">点击弹出toast</button>
  </div>
</template>

<script>
import toast from '@/components/toast/toast.js';
export default {
  data() {
    return {};
  },

  methods: {
    openToast() {
      toast('我是toast');
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
