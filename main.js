import Vue from 'vue'
import App from './App'
import store from './store'
import Request from './utils/request.js'
import moment from 'moment'

Vue.config.productionTip = false
App.mpType = 'app'
// 全局加载http
const http = new Request();
Vue.prototype.$api = http
// 全局加载时间控制
Vue.prototype.$moment = moment
Vue.prototype.$store = store;
console.log(moment(new Date).format('YYYY-MM-DD'))
Vue.prototype.$setting = {
	efficient: false,
	date: moment(new Date).format('YYYY-MM-DD')
};

// 全局控制屏幕宽度
uni.getSystemInfo({
	success: function(res) {
		Vue.prototype.$screenWidth = res.screenWidth
		Vue.prototype.$isMoblie = res.screenWidth < 500
	}
});
const app = new Vue({
	...App
})
app.$mount()
