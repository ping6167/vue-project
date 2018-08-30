<template>
<div class="app-com-newchart">
	<el-card class="box-card" shadow="hover">
		<div slot="header" class="clearfix">
			<span>图表名称</span>
			<el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-edit" @click="toggleHomeEcharts">编辑图表</el-button>   			
		</div>
		<div class="text item" id="myChart">
		</div>
	</el-card>
</div>
</template>
<style lang="scss" scoped>
	.app-com-newchart {
		position: relative;
		width: 450px;
		height: 250px;
		.box-card {
			width: 450px;
			float: left;
			margin-right: 10px;
			.text {
				font-size: 14px;
				height: 250px;
			}
			.item {
				margin-bottom: 18px;
			}
			.item[data-v-039c5b43] {
				margin-bottom: 0px; 
			}
			.clearfix:before,
			.clearfix:after {
				display: table;
				content: "";
			}
		}
	}
</style>
<script>
	export default {
	data() {
		return {
		
		}
	},
	methods: {
		drawLine(){
		    // 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
		    // 绘制图表
			myChart.setOption({
				title: { text: '在Vue中使用echarts' },
				tooltip: {},
				xAxis: {
					data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
					axisLabel: {
    	        		inside: false,
    	        		textStyle: {
    	            		color: 'blue'
    	        		}
    	    		},
    	    		 axisTick: {
    	        		show: false
    	    		},
    	    		axisLine: {
    	       	 		show: false
    	    		},
    	    		z: 10
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			});
		},
		toggleHomeEcharts() {
        	location.hash = "#/homeEcharts"
		}
	},
	mounted() {
		this.drawLine();
	}
}
</script>
