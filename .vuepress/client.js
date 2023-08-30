import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';


import { defineClientConfig } from '@vuepress/client'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(Vant)
  },
  setup() {},
  layouts: {},
  rootComponents: [],
})
