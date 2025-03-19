<script setup lang="ts">
import { instance } from '@/utils/http'

async function onClick() {
  await instance.get('/api')
}
</script>

<template>
  <nut-button type="primary" @click="onClick">
    主要按钮
  </nut-button>
</template>

<style></style>

<route type="home" lang="json">
{}
</route>
