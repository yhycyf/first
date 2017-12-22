<template>
       <div id="header">
			<i class="menu icon-menu"></i>
			<div class="centermenu">
				<router-link tag="i" to="/mymusic">
					<i class="music icon-music"></i>
				</router-link>
				<router-link tag="i" to="/findmusic">
					<i class="find icon-wangyi"></i>
				</router-link>
				<router-link tag="i" to="/community">
					<i class="community icon-community"></i>
				</router-link>
			</div>
				<i class="search icon-search"></i>
			<router-view></router-view>
	</div>
</template>
<script>

</script>

<style lang="less">
	#header {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		height: 50px;
		width: 100%;
		display: flex;
		align-items:center;
		justify-content:space-between;
		background: #c62f2f;
		.menu,.search {
			font-size: 26px;
			color: #eee;
			padding: 10px 15px;	
		}
		.centermenu {
			font-size: 24px;
			color: #eee;
		.centermenu i {
			margin-left: 5px;
			margin-right: 5px;
		}
		.music,.find,.community {
			margin-left: 10px;
		}
		}
	}
</style>
