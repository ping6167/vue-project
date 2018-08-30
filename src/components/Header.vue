<template>
	<el-row class="mainHeader">
		<el-col :span="2"><div class="grid-content bg-purple"><i class="el-icon-back"></i></div></el-col>
		<el-col :span="2"><div class="grid-content bg-purple-light">编辑图表</div></el-col>
		<el-col :span="20"><div class="grid-content bg-purple">操作示例</div></el-col>
	</el-row>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	.mainHeader {
		height: 65px;
		background-color: #F0F2F3;
		line-height: 65px;
		text-align: center;
		font-size: 22px;
		 box-shadow: 0 2px 20px #DEE1E7;
		.el-col:last-child {
			text-align: right;
			box-sizing: border-box;
			padding-right: 50px;
			font-size: 16px;
		}
	}
</style>