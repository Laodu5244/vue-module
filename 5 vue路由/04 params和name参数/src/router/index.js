import VueRouter from 'vue-router'

import TheAbout from "../pages/TheAbout";
import TheHome from "../pages/TheHome";
import TheNews from "../pages/TheNews";
import TheMsg from "../pages/TheMsg";
import TheDetail from "../pages/TheDetail";
// 创建一个路由器
export default new VueRouter({
  // 一级路由
  routes: [
    {
      path: '/about',
      component: TheAbout
    },
    {
      path: '/home',
      component: TheHome,
      // 二级路由
      children: [
        {
          path: 'news',
          component: TheNews
        },
        {
          path: 'msg',
          component: TheMsg,
          // 三级路由
          children: [
            {
              // 给路由起个名字(方便使用,见msg组件)
              name: 'detail',
              // 声明params参数
              path: 'detail/:id/:title',
              component: TheDetail,
            }
          ]
        }
      ]
    },
  ]
})