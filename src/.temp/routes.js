const c1 = () => import(/* webpackChunkName: "page--src-templates-project-vue" */ "C:\\Users\\Simon\\documents\\portfolio-strapi-gridsome\\frontend\\src\\templates\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Simon\\documents\\portfolio-strapi-gridsome\\frontend\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Simon\\documents\\portfolio-strapi-gridsome\\frontend\\src\\pages\\Index.vue")

export default [
  {
    path: "/project/simon-rose-software/",
    component: c1
  },
  {
    path: "/project/pirate-plunder/",
    component: c1
  },
  {
    path: "/project/cognitive-function-task/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
