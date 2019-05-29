import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import ElementUI from "element-ui";
import "vuetify/dist/vuetify.min.css";
import "element-ui/lib/theme-chalk/index.css";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);

Vue.use(ElementUI);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
