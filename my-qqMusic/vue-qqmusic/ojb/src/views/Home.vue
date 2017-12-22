<template>
	<div >
		<my-header></my-header>
		<silder></silder>
		<musicsheet v-for='(item,index) in items' :item='item' :index='index' :key='index.id'></musicsheet>
		<bottomBar></bottomBar>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import silder from '../components/silder.vue';
import musicsheet from '../components/musicsheet.vue';
import bottomBar from '../components/bottomBar.vue';

import Vue from 'vue';
import axios from 'axios';
import store from '../store'
Vue.use(axios);

export default {
	data() {
		return {
			// message:[]
		}
	},
	computed: {
		items() {
			console.log(this.$store.getters.getAllInfo.sheets)
			return this.$store.getters.getAllInfo.sheets
		}
	},
	created() {
		this.gatData()
	},
	methods: {
		gatData: function() {
			let that = this;
			let LocalAPI = '../../static/data.json';
			axios.get(LocalAPI).then(function(res){
				//把数据给保存到store里面
				store.dispatch('set_AllInfo', res.data.music)  ;
				console.log( res.data);
			}).catch(function(err){
				console.log(err);
			})
		}
	},
  components: {
    'my-header': Header,
    'silder':silder,
    'musicsheet':musicsheet,
    'bottomBar':bottomBar
  }
};
</script>
<style lang="less" rel="stylesheet/less">
@import'../common.ico/reset.css';
@import '../common.ico/style.css';
</style>


