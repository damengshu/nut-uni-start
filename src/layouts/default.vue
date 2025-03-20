<script lang="ts" setup>
import type { ToastInst } from 'nutui-uniapp'
import type { Inst } from './types'

defineOptions({
  name: 'AppPage',
})

const toast = ref<ToastInst | null>(null)
// #ifdef H5
const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
const theme = ref(mediaQuery.matches ? 'light' : 'dark')
// #endif

// #ifndef H5
// eslint-disable-next-line ts/no-redeclare
const theme = ref('light')
// #endif

const INSTANCE: Inst = {
  toast,
}

function mountInstToPageProxy() {
  const page: any = getCurrentInstance()?.parent?.proxy

  if (page != null) {
    page.$magic = INSTANCE
  }
}

onMounted(() => {
  mountInstToPageProxy()

  // #ifdef H5
  mediaQuery.addEventListener('change', (e) => {
    theme.value = e.matches ? 'light' : 'dark'
  })
  // #endif
})

defineExpose(INSTANCE)
</script>

<script lang="ts">
export default {
  options: { styleIsolation: 'shared' },
}
</script>

<template>
  <nut-config-provider class="nut-config" :theme="theme">
    <view class="app-page">
      <view class="gradient" />
      <scroll-view scroll-y class="h-full" :enhanced="true" :bounces="false" :show-scrollbar="false">
        <slot />
      </scroll-view>

      <nut-toast ref="toast" destroy-on-close />
    </view>
  </nut-config-provider>
</template>

<style lang="scss">
.app-page {
  /* #ifdef H5 */
  height: calc(100vh - 44px);
  /* #endif */
  /* #ifndef H5 */
  height: 100vh;
  /* #endif */
  position: relative;
  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, #DDE6F6, #ffffff);
    z-index: -1;
  }
}

@media (prefers-color-scheme: dark) {
  .app-page .gradient {
    background: linear-gradient(to bottom, #161616, #1C1C1C) !important;
  }
}
</style>
