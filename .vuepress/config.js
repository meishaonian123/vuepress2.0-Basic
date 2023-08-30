import { defineUserConfig,defaultTheme } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import {registerComponentsPlugin }from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'
// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
export default defineUserConfig({
  port:8088,
  title: "基础技术",
  base: '/vuepress2.0-Basic',
  description: "Just playing around",
  lang: 'zh-CN',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],
  theme: recoTheme({
    // catalogTitle: '自定义目录标题',
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // 设置单个密码
    // password: '14e1b600b1fd579f47433b88e8d85291',
    // themeConfig:{
    //   vuePreviewsDir:'./docs/.vuepress/vue-previews'
    // },
    // series 为原 sidebar
    // autoSetSeries: true,
    series: {
      // "/docs/theme-reco/": [
      //   {
      //     text: "module one",
      //     children: ["home", "theme"],
      //   },
      //   {
      //     text: "module two",
      //     children: ["api", "plugin"],
      //   },
      // ],
      "/docs/vant-components/":[
        {
          text: "vant组件库",
          children: ["problem"],
        },
        {
          text: "module two",
          children: ["problem2", "problem3"],
        },
      ],
      "/docs/native-component/":[
        {
          text: "原生组件库",
          children: ["steps"],
        },
        {
          text: "module two",
          children: ["problem2", "problem3"],
        },
      ],
      "/docs/Uplus/":[
        {
          text: "Ulplus接入使用相关文档",
          children: ["uplus1", "uplus2"],
        },
      ]
    },
    navbar: [
      { text: "首页", link: "/" },
      { 
        text: "组件库", 
        children: [
          { text: "vant组件库", link: "/docs/vant-components/problem" },
          { text: "原生组件库", link: "/docs/native-component/steps" },
        ],
      },
      {
        text: "文档",
        children: [
          { text: "uplus相关文档", link: "/docs/Uplus/uplus1.md" },
        ],
      },
      {
        text: '参考',
        icon: 'Document',
        children: [
          {
            text: '配置',
            children: [
              { text: 'vuepress配置', link: 'https://v2.vuepress.vuejs.org/' },
              { text: 'reco主题配置', link: 'https://vuepress-theme-reco.recoluan.com/docs/guide/introduce.html' },
            ],
          },
          {
            text: '插件',
            children: [
              { text: 'Uplus文档', link: 'https://mdpm.haier.net/component/uplusapi/5.1.0/#/h5/_history' },
            ],
          },
        ],
      },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
 
  // debug: true,
});
