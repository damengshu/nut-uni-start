<script lang="ts" setup>
import type { ToastInst } from 'nutui-uniapp'
import type { Inst } from './types'
import { getCurrentInstance, onMounted, ref } from 'vue'

defineOptions({
  name: 'AppPage',
})

const toast = ref<ToastInst | null>(null)

const INSTANCE: Inst = {
  toast,
}

function mountInstToPageProxy(): void {
  const page: any = getCurrentInstance()?.parent?.proxy

  if (page != null) {
    page.$magic = INSTANCE
  }
}

onMounted(() => {
  mountInstToPageProxy()
})

defineExpose(INSTANCE)
</script>

<template>
  <view class="app-page h-full">
    <slot />

    <nut-toast ref="toast" destroy-on-close />
  </view>
</template>
