const c1 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/Users/simonrose/Documents/dev/srs/sr-portfolio-gridsome/src/templates/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/simonrose/Documents/dev/srs/sr-portfolio-gridsome/src/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/simonrose/Documents/dev/srs/sr-portfolio-gridsome/src/pages/Index.vue")

export default [
  {
    path: "/project/simon-rose-software/",
    component: c1
  },
  {
    path: "/project/rose-brothers-digital/",
    component: c1
  },
  {
    path: "/project/simon-rose/",
    component: c1
  },
  {
    path: "/project/speakeasy/",
    component: c1
  },
  {
    path: "/project/pirate-plunder/",
    component: c1
  },
  {
    path: "/project/numeralis/",
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
