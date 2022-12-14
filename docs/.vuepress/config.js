/*
 * @Author: 李韬
 * @Date: 2022-08-25 15:26:41
 * @LastEditors: 李韬
 * @LastEditTime: 2022-11-22 15:06:42
 */
module.exports = {
  theme: '',
  title: 'zfs-mobile',
  description: 'VuePress搭建zfs-mobile的组件库文档教程示例代码',
  base: '/zfs-mobile/',
  port: '8089',
  head: [],
  plugins: ['demo-container'], // 配置插件
  markdown: {},
  themeConfig: {
    nav: [
        {text: '主页', link: '/'},
        {text: 'github', link: 'https://github.com/449164122/zfs-mobile/tree/gh-pages'},
        {text: 'npm', link: 'https://www.npmjs.com/package/zfs-mobile'}
    ],
    sidebar: [
      {
        title: '指南',
        path: '/componentDocs/introduce'
      },
      {
        title: '搜索',
        path: '/componentDocs/search'
      },
      {
        title: '徽标',
        path: '/componentDocs/badge'
      },
      {
        title: '按钮',
        path: '/componentDocs/button'
      },
      {
        title: '消息提示',
        path: '/componentDocs/message'
      },
      {
        title: '加载提示',
        path: '/componentDocs/loading'
      },
      {
        title: '模态框',
        path: '/componentDocs/dialog'
      },
      {
        title: '列表组件',
        path: '/componentDocs/cell'
      },
      {
        title: '时间选择',
        path: '/componentDocs/datetimePicker'
      },
      {
        title: 'Picker 选择器',
        path: '/componentDocs/picker'
      },
      {
        title: '头像',
        path: '/componentDocs/avatar'
      },
      {
        title: '移动端业务组件展示',
        path: '/componentDocs/mobile'
      },
      {
        title: '自定义指令',
        path: '/componentDocs/directives'
      }
    ]
  }
}