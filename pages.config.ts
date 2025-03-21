import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [

  ],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '@bgColorBottom',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'ledao-crm',
    disableScroll: true,
  },
  tabBar: {
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    height: '@tabHeight',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: '/static/tabbar/home.png',
        selectedIconPath: '/static/tabbar/home-active.png',
      },
      {
        pagePath: 'pages/contract/index',
        text: '合约',
        iconPath: '/static/tabbar/contract.png',
        selectedIconPath: '/static/tabbar/contract-active.png',
      },
      {
        pagePath: 'pages/project/index',
        text: '项目',
        iconPath: '/static/tabbar/project.png',
        selectedIconPath: '/static/tabbar/project-active.png',
      },
      {
        pagePath: 'pages/promotion/index',
        text: '推广',
        iconPath: '/static/tabbar/promotion.png',
        selectedIconPath: '/static/tabbar/promotion-active.png',
      },
    ],
  },
})
