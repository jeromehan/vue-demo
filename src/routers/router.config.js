import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../components/index.vue';
import chart from '../components/chart.vue';
Vue.use(VueRouter);
// 路由配置
const routes = [{
    path: '/',
    component: index
}, {
    path: '/chart',
    name:'chart',
    component:chart
}, {
    path: '*',
    redirect: '/index'
}];
var router = new VueRouter({
    // 是否开启HTML5的history模式,开启后,需服务端支持,否则404
    history: false,
    routes
});
export default router