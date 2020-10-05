import Vue from "vue";
import Vuex from "vuex";
import leaseInfo from "./modules/lease-info";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    leaseInfo,
  },
});
