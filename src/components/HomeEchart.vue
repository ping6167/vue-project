<template>

	<div class="hello">
		<div v-if="type===0?false:true" id="myChart" :style="style"></div>
		<div class="table" v-if="type===0?true:false"> 
			<el-table
		    :data="Tabledata"
		    height="600"
		    border
		    style="width: 1000px"
		    >
		    	<el-table-column
		      	prop="date"
		      	label="日期"
		      	width="380"
				v-for="(v,k) in title"
				:key="k"
				:prop="v.prop"
		     	:label="v.label"
		        >
		    	</el-table-column>
		 	</el-table>
		</div>
	</div>
</template>


<style scoped lang="scss">
	.hello{
		position: relative;	
	}
	.table{
		position: absolute;
		top: -460px;
		left: 0;
		height: 600px;

	}
</style>
<script>
export default {
	props:["index","option"],
	data(){
		return {
		 type:"",
		 Tabledata:"",
		 title:[{ "prop":"date",'label':"日期"},{ "prop":"name",'label':"姓名"},{ "prop":"address",'label':"地址"}],
		 style : {width: '1000px' , height:'500px' }
	}
	},
	methods: {
		// 发送请求获取数据
		drawLine(){
		    // 基于准备好的dom，初始化echarts实例
			let myChart = this.$echarts.init(document.getElementById('myChart'))
		    // 绘制图表
			var myChartContainer = function () {


    			document.getElementById('myChart').style.width = window.innerWidth*0.6+'px';
		   		document.getElementById('myChart').style.height = window.innerHeight*0.65+'px';
			};
			myChartContainer();
			myChart.setOption(this.option)
			window.onresize = function () {
  			    myChartContainer();
  				myChart.resize();
			};
		},
		initTableData(){
			this.options
		}
	},
	mounted(){			
		this.drawLine()		
		this.$store.watch((state)=>state.option,(a)=>{
			console.log(a,"home obser")
			let myChart = this.$echarts.init(document.getElementById('myChart'))
		    // 绘制图表
			var myChartContainer = function () {
    			document.getElementById('myChart').style.width = window.innerWidth*0.6+'px';
		   		 document.getElementById('myChart').style.height = window.innerHeight*0.65+'px';
				};
					myChartContainer();
					myChart.setOption(a)
					 window.onresize = function () {
  						 myChartContainer();
  				 	myChart.resize();
			};
		},
		{
			deep:true
		}
		)
	},
	watch:{
	}

//     						document.getElementById('myChart').style.width = window.innerWidth*0.6+'px';
// 		   					 document.getElementById('myChart').style.height = window.innerHeight*0.65+'px';
// 				};
// 			myChartContainer();
// 			myChart.setOption(this.option)
// 			 window.onresize = function () {
//   				 myChartContainer();
//   				 myChart.resize();
// 			};
// 		},
// },
// mounted(){	
// 		this.drawLine()		
// 		this.$store.watch((state)=>state.index,(a)=>{
// 			console.log(a,"aaaa")
// 		})
// 	},
// watch:{
// 	option(a){
//        this.drawLine()
// 	}

// 	}

}
</script>