<script lang="ts" setup>
const pages = getCurrentPages()
const page = pages[pages.length - 1]
const currentWebview = page.$getAppWebview() // 页面栈最顶层就是当前webview

const barcode = plus.barcode.create('barcode', [plus.barcode.QR, plus.barcode.EAN13, plus.barcode.EAN8, plus.barcode.UPCA, plus.barcode.UPCE], {
  top: '100px',
  left: '0px',
  width: '300px',
  height: '300px',
  position: 'static',
})

// barcode.onmarked = function (type, result) {
//   // 扫码成功回调，type为扫码类型，result为扫码结果
//   // 此处未演示扫码成功回调的地址设置，实际请参考HTML5Plus API自行处理
//   // console.log('扫码结果：', type, result)

// }

// barcode.onerror = function (e) {
//   // console.log('扫码失败：', e.code, e.message)
// }

// 此处未演示扫码成功回调的地址设置，实际请参考HTML5Plus API自行处理
// 注意扫码区域需为正方形，否则影响扫码识别率
currentWebview.append(barcode)
barcode.start()
</script>

<template>
  <div>
    123
  </div>
</template>

<style lang='scss' scoped></style>

<route lang="json">
{
  "style": {
    "navigationBarTitleText": "扫码"
  }
}
</route>
