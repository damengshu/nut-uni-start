<script setup lang="ts">
onLoad(() => {
})
function handleClick() {
  uni.navigateTo({
    url: '/pages/testBarCode/index',
  })
}
</script>

<template>
  <view>
    <nut-button type="primary" @click="handleClick">
      主要按钮
    </nut-button>
    <nut-button type="info">
      信息按钮
    </nut-button>
    <nut-button type="default">
      默认按钮
    </nut-button>
    <nut-button type="danger">
      危险按钮
    </nut-button>
    <nut-button type="warning">
      警告按钮
    </nut-button>
    <nut-button type="success">
      成功按钮
    </nut-button>
    <view v-for="item in 100" :key="item">
      111111
    </view>
  </view>
</template>

<style></style>

<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "首页"
   }
}
</route>
