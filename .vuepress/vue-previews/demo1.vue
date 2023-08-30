<template>
  <div class="demo-container">
    <!-- <div class="top">
      <p class="top-c">111</p>
    </div> -->
    <van-date-picker v-model="currentDate"
                     title="选择日期" />
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { useInfo, ref } from "./demo";
const currentDate = ref(["2021", "01", "01"]);
// const { name } = useInfo();
</script>

<style lang="less" scoped>
.demo-container {
  width: 300px;
  background-color: aqua;
  .top {
    background-color: aquamarine;
    width: 100px;
    height: 100%;
    .top-c {
      color: blue;
    }
  }
}
</style>

