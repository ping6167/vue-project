.sear<template>
	<div class="mengban">
		<p>新建图表<span @click="close">&times;</span></p>
		<p>依据天气预报（中国城市）新建图表</p>
		<div class="middle">
			<span class="iconfont icon-tubiao">普通图表</span>
			<span class="el-icon-location">经纬度地图</span>
		</div>
		<div class="select">
		<div >选择文件夹:
			<select v-model="select2_1" style="width:100px">
					<option>aaa</option>
					<option>bbb</option>
				</select>
		</div>
		<div style="margin-top:10px">选择仪表盘:
				<select v-model="select2_1" style="width:100px">
					<option>sss</option>
					<option>ccc</option>
				</select>
		</div>
		</div>
		<el-row>
			<router-link to="/home"><el-button type="primary">确定</el-button></router-link>
			<el-button type="primary" style="margin-left:10px">删除</el-button>
		</el-row>	
	</div>
</template>
<style lang="scss" scoped>
* {
	margin:0;
	padding:0;
	list-style:none;
}
.mengban {
	position:fixed;
	padding: 10px;
	width:300px;
	height:200px;
	left:50%;
	top:50%;
	margin-top:-100px;
	margin-left:-150px;
	background-color: #fff;
	font-size: 13px;
	p {
		padding:3px;
		span{
			float:right;
			font-size: 20px;
		}
	}
	.middle {
		span {
			border: 1px solid #999;
			padding:10px 12px;
			margin:5px;
			&:first-child {
				font-size: 13px;
			}
		}
	}
	.select {
		margin:7px;
		.el-dropdown {
			width:100px;
			height:20px;
		}
	}
}
</style>
<script type="text/javascript">
	export default {
        data(){
        	return {
        		select2_1:"aa",
        		select2_2:"ss"
        		
        	}
        },
        methods:{
        	close(e){
        		this.$emit('closeTable',false);
        		// this.$store.commit('closeTable1',false)
        		// console.log(11,this.$store.commit('closeTable',false));
        	}
        }
	}
</script>