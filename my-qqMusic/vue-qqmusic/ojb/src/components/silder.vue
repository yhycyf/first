<template>
	<div id="mymusic">
		<ul>
			<li class="info icon-music">
				<div class="list">
					<span>我的音乐  <i>(20)</i></span>
					<i class="horn icon-volume-medium"></i>
				</div>
			</li>
			<li class="info icon-zuijinplay">
				<div class="list">
					<span>最近播放  <i>(18)</i></span>
				</div>
			</li>
			<li class="info icon-diantai">
				<div class="list">
					<span>我的电台  <i>(1)</i></span>
				</div>
			</li>
			<li class="info icon-collect">
				<div class="list">
					<span>我的收藏  <i>(3)</i></span>	
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	
	export default {
		// data() {
		// 	return {

		// 	}
		// },
		// computed: {
		// 	count() {
		// 		return this.$store.state.count;
		// 	}
		// }
	}
</script>

<style lang="less">
	#mymusic {
		// background: #f3f3f3;
		width:100%;
		padding-top: 50px;
		// background: yellow;
		ul {
			position: relative;
		}
		.list {
			border-bottom: 1px solid rgba(7,17,27,0.1);
			font-size: 0;
			width: 90%;
			// margin-left: 10px;
			height: 50px;
			display: inline-block;
			.horn {
				position: absolute;
				top:20px;
				font-size: 14px;
				right: 25px;
				color:#c62f2f;
			}
		}
		li {
			position: relative;
			z-index: -100;
			left: 15px;
			height: 50px;
			line-height: 50px;
			span {
				margin-left: 10px;
				color: #333;
				font-size: 14px;
				margin-bottom: 10px;
			}
			i {
				color: #aaa;
				font-size: 10px;
				font-style: normal;
				margin-bottom: 10px;
			}
		}
		.info {
			font-size: 20px;
			color: #c62f2f;
		}
	}
</style>