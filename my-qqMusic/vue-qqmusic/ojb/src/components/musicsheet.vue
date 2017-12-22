<template>
	<div class="musicsheet">
		<div class="title">
			<i class="toggle icon-down"></i>
			<div class="detail">
				<span class="name">{{item.name}}</span>
				<span class="count">({{item.count}})</span>
				<i class="setting icon-setting"></i>
			</div>
		</div>
		<div >
			<div class="content" v-for='(list,listindex) in item.detail' :key='listindex.id'>
				<img class="sheetimg" :src="list.info[0].img_url">
				<div class="detail">
					<p class="name">{{list.name}}</p>
					<p class="count">{{list.count}}首歌曲</p>
					<i class="setting icon-list-circle"></i>
					<p ></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			item: {
				type: Object
			},
			index: {
				type: Number
			}
		},
		computed: {
			message() {
				console.log(this.$store.getters.getAllInfo.sheets)
				// return this.$store.getters.getAllInfo
			}
		},
		// created() {
		// 	console.log(this.$store.getters.getAllInfo)
		// }
	}
</script>
<style lang="less">
	.musicsheet {
		// padding-top: 100px;
		width: 100%;
		height: auto;
		.title {
			display: block;
	    		height: 28px;
		    	line-height: 28px;
	   	 	background: #e1e1e1;
		    	position: relative;
			.toggle {
				position: absolute;
				top: 7px;
				left: 10px;
				font-size: 14px;
			}
			.detail {
				// color: #666;
				height: 28px;
				margin-left: 35px;
			}
			.setting {
				width: 28px;
				height: 28px;
				line-height: 28px;
				font-size: 16px;
				text-align: center;
				position: absolute;
				right: 10px;
				color: #999;
			}	
		}
		.content {
			position: relative;
			display: flex;
			height: 60px;
			width: 100%;
			.sheetimg {
				width: 50px;
				height: 50px;
				margin: 5px;
			}
			.detail {
				height: 60px;
				    padding-left: 5px;
				    -webkit-box-flex: 1;
				   flex-grow: 1;
				    flex-shrink: 1;
				    flex-basis: auto;
				    box-sizing: border-box;
				    position: relative;
			}
			.setting {
				color: #999;
				font-size: 13px;
				position: absolute;
				right: 10px;
				top: 20px;
				// line-height: 28px;
			}
		}		
	}
		
		

</style>