
<template>
   <div class="chart">

   	<Header></Header>
   	
   	<div class="content">
   		<div class="item">
   			<DataList></DataList>
   		</div>
   		<div class="item">
   			<Selected></Selected>
   			<HomeEchart :index="this.$store.state.index" :option="option"></HomeEchart>
   		</div>
   		<div class="item">
   			<HomeSlider :num="this.$store.state.num"></HomeSlider>
   		</div>
   	</div>

   </div>
</template>

<script>
   import Header from "../components/Header.vue";
   import Selected from "../components/Selected.vue";
   import DataList from "../components/DataList.vue";
   import HomeEchart from "../components/HomeEchart.vue";
   import HomeSlider from "../components/HomeSlider.vue";
   import option from "../utils/math.js"
   import getXY from "../utils/getXY.js"

   export default {
      data() {
      	return {
      		superData: [],
      		option:{}  
      	}
      },
   		
      components: {
          Header,
          Selected,
          DataList,
          HomeEchart,
          HomeSlider
      },
      	
      mounted() {
      	var height = document.documentElement.clientHeight - 65;
      	var list = document.getElementsByClassName("item");
      	Array.from(list).forEach(item => item.style.height = height + "px");
      },

      created(){
         this.option = option
         this.$http.get("/data/data1.json")
         .then(({data})=>{
            this.superData = data.data

            console.log(" 11233", this.superData);
         })
         
         this.$store.watch((state)=>state.selectedList,(value)=>{
            // 定义 x轴
            let xz = value[0]
            // 定义 y轴
            let yz = value[2]
            // 定义 x 的值 0~9...与data里的每一个对应方便获取
            let x = getXY(xz)
            let y = getXY(yz)
            let xAxis = []
            let series = []
            
            if (xz.length == 1 && yz.length == 1){
               for (var i = 0; i < this.superData.length; i ++){
                  xAxis.push(this.superData[i][x[0]])
                  series.push(this.superData[i][y[0]])
               }
               option.legend.data = xz 
               option.xAxis[0].data = xAxis
               option.series = { 
                  name: 'Forest',
                  type: 'bar',
                  barGap: 0,
                  data: series
                } 
               this.option = option
               this.$store.commit("changeOption",this.option)
               return 
            }

            if(xz.length == 1 && yz.length > 1){
               let arr1=[]
               for (var m = 0; m < this.superData.length; m++){
                  xAxis.push(this.superData[m][x[0]])
               }
               for (var n = 0; n < y.length;n++){
                  let obj = {
                     type: 'bar',
                     barGap: 0,
                     data:[]
                  }
                  for(var q = 0;q<this.superData.length;q++){
                     obj.data.push(this.superData[q][y[n]])
                  }
                  series.push(obj)
               }
               option.xAxis[0].data = xAxis
               option.series = series
               this.option = option;
               this.$store.commit("changeOption",this.option)
            }
                     
            if (xz.length >1 &&  yz.length>1){
               for( var w = 0; w < x.length;w++){
                  let obj1 = {
                     type: 'category',
                     axisTick: {show: false},
                     data:[]
                  }
                  for(var e = 0;e < this.superData.length; e++){
                     obj1.data.push(this.superData[e][x[w]])
                  }
                  xAxis.push(obj1)
               }
               for( var n = 0; n < y.length;n++){
                  let obj = {
                     type: 'bar',
                     barGap: 0,
                     data:[]
                  }
                  for(var q = 0;q<this.superData.length;q++){
                     obj.data.push(this.superData[q][y[n]])
                  }
                  series.push(obj)
               }
               option.xAxis[0].data = xAxis
               option.series = series
               this.option = option
               this.$store.commit("changeOption",this.option)
            }
            
         })
      }
   }
</script>

<style scoped lang="scss">
   .hello {
   	margin-top: 20px;
   }

   .selected {
   	position: relative;
   	z-index: 10;
   }	

   .chart {
   	.content {
   		overflow: hidden;
   		display: flex;		
   		.item:nth-child(1) {
   			width: 200px;
   		}
   		.item:nth-child(2) {
   			flex: 1;
   		}
   		.item:nth-child(3) {
   			width: 300px;
   		}
   	}
   }
</style>