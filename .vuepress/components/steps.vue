<template>
  <div class="steps-wrap">
    <div class="steps-current">
      <div v-if="state.currentSteps>0"
           class="steps-current-text"> {{state.currentSteps+'/'+state.totalSteps}}</div>
    </div>
  </div>
</template>
<script setup>
// import { reactive, computed } from "./steps";
import { reactive, computed } from "vue";
const state = reactive({
  overallWidth: 343,
  totalSteps: 6,
  currentSteps: 4
})
const stepsWitch = computed(() => {
  return state.overallWidth * (state.currentSteps / state.totalSteps) + 'px'
})

</script>

<style lang="less" scoped>
.steps-wrap {
  width: 343px;
  height: 12px;
  background: #ebebeb;
  border-radius: 6px;
  .steps-current {
    width: v-bind(stepsWitch);
    height: 12px;
    background: linear-gradient(90deg, #67ccff 0%, #2c96ff 100%);
    border-radius: 6px;
    position: relative;
    transition: width 0.5s cubic-bezier(0.3, 1.05, 0.4, 1.05);
    .steps-current-text {
      height: 12px;
      line-height: 12px;
      font-size: 10px;
      text-align: center;
      font-weight: 500;
      color: #ffffff;
      position: absolute;
      top: 0;
      right: 4px;
    }
  }
}
</style>