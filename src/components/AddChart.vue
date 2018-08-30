<template>
<div class="app-add-chart" @click="hidden">
	<el-card class="box-card" shadow="hover">
		<i class="el-icon-plus"></i>
		<div>添加图表</div>
	</el-card>
</div>	
</template>
<style lang="scss" scoped>
	.app-add-chart {
		width: 290px;
		height: 230px;
		cursor: pointer;		
		.el-card {
			font-size: 50px;
			line-height: 0px;
			text-align: center;
			padding: 85px;
			color: #A3ABB0;
			div {
				font-size: 12px;
				line-height: 11px;
				color: #93979D;
			}
		}
	}
</style>
<script>
export default {
	methods: {

		hidden() {
			
			this.$emit('hiddenAddChart', true)
		}
	}
}
</script>