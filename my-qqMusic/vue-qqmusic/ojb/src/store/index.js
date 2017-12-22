import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);

const store = new Vuex.Store ({
	state: {
		allInfo:[]
	},
	getters: {
		getAllInfo: state => state.allInfo
	},
	 mutations: {
    		setAllInfo (state,obj) {
          console.log(obj)
     			 state.allInfo = obj;
   		 }
 	 },
  	actions: {
    		set_AllInfo ({ commit }, obj) {
          // console.log(obj)
     			 commit('setAllInfo', obj)
   		 }
  	},
})
export default store
