<template>
	<div class="bottom-bar">
		<div class="music-info">
			<img class="music-pic">
			<div class="music-detail">
				<p class="music-name"</p>
				<p class="music-singer"</p>
			</div>
		</div>
		<div class="playpause">
			<i class='icon-play'></i>
		</div>
		<i class="music-list icon-list-music"></i>
	</div>
</template>
<script>
	export default {
		computed: {
			bar() {
				console.log(this.$store.getters.getAllInfo.sheets);
			}
		},
		created() {
			console.log(this.$store.getters.getAllInfo)
		}
	}
</script>
<style>
	.bottom-bar {
		height: 46px;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		width: 100%;
		display: flex;
		align-items: center;
	}
</style>