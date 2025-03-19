<script setup lang="ts">
import ToastManager from '@/utils/toastUtil/ToastManager'

function onClick() {
  ToastManager.text('主要按钮')
}
</script>

<template>
  <AppLogos />
  <nut-button type="primary" @click="onClick">
    主要按钮
  </nut-button>
  <InputEntry />
</template>

<style></style>

<route type="home" lang="json">
{}
</route>
