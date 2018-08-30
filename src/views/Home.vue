<template>
  <div class="home">
  	<router-link to="about">About</router-link>
    <div id="myChart" class="myChart"></div>
  </div>
</template>
<style>
	.myChart {
		height: 600px;
	}
</style>

<script>

// @ is an alias to /src

export default {
	components: {
		
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
    	        		inside: true,
    	        		textStyle: {
    	            		color: '#fff'
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
		}
	},
	mounted(){
		this.drawLine();
	},

}
</script>
