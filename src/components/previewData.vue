<template>
	<div class="page">
		<div class='select1'>
		 	<span id="check1" @click="check1">数据筛选</span>
		 	<span id="check2" @click="check2">设置显示字段</span>
			 </div>
			 <div v-show="checkshow">
			  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  >
			       <el-form-item label="筛选方式" prop="resource">
				    <el-radio-group v-model="ruleForm.resource">
				      <el-radio label="条件过滤"></el-radio>
				      <el-radio label="表达式过滤"></el-radio>
				    </el-radio-group>
				  </el-form-item>
			</el-form>
			<div @change="filter" class='select2' style="margin-top:-20px;margin-bottom:10px">
				<span>满足下列&nbsp;&nbsp;</span>
			  	<select v-model="select2_1">
					<option>全部条件</option>
					<option>任意条件</option>
				</select>
				<div>
				<!-- <select v-model="select2_2">
					<option>城市</option>
					<option>地区</option>
				</select> -->
				<!-- <span class='equal'>等于</span> -->
				<input v-model="str1" class="search1" type="text" style="margin-left:10px;width:70px">
				<span class='equal' id="equal">或者</span>
				<input v-model="str2" class="search1" type="text" placeholder="自定义搜索词" style="margin-left:10px">
				<button style="margin-left:10px; padding:2px 10px" @click="sure">确定</button>
				</div>
			</div>
			</div>
			<div class="table">
				 <el-table
				    :data="$store.state.list.data" 
				   style="width: 100%"
				   border
					header-row-style="height:30px"
					row-style="height:30px"
    				height="400px">
				    <el-table-column
				    v-for="(item,idx) in $store.state.list.datalist"
			      	:prop="idx+''"
			      	align="center"
			      	:filters="filterarr"
      				:filter-method="filterHandler"
			      	:label="item.name"
			      	width="100px">
			    	</el-table-column>
			  </el-table>
			</div>
	</div>
</template>
<style lang="scss" scoped>
	.select1 {
		height:30px;
		line-height: 30px;
		font-size: 14px;
		span {
			margin:8px;
		}
	}
	.select2 {
		width:700px;
		height:70px;
		background-color: #efefff;
		padding:10px;
		box-shadow: 0 0 6px 0 rgba(0,0,0,.06), 0 10px 12px 0 rgba(170,182,206,.5);
		font-size: 14px;
		padding-left:5px;
		.equal {
			margin:5px;
		}
		.search1 {
			border:none;
			border-bottom:1px solid #ccc;
			outline:none;
			background-color: transparent;
		}
		.el-select{
			width:150px;
			height:25px;
			font-size: 12px;	
		}
		.table {
			text-align:center;
			.el-table__header-wrapper {
				font-size: 12px;
			}
		}
	}
	.el-table th, .el-table tr {
		background-color: #efefef;
	}
	.el-table td, .el-table th.is-leaf {
		background-color: red;
		height:40px;
	}
	.cell{max-height: 94px !important;overflow: auto !important;} 
	</style>
</style>
<script type="text/javascript">
export default {
	data(){
		return {
		str1:'',
		str2:'',
        checkshow:false,
        ruleForm: {
        	resource: '条件过滤',
        	region: '全部条件'
       	},
        select2_1:'',
        select2_2:'城市',
        select2_3:'',
        arr:[],
        filterarr:[],
        rules:{
        	resource: [
            { required: true, message: '请选择', trigger: 'change' }
          ]
        }
		}	
	},
	methods: {
		check1(e){
    		this.checkshow = !this.checkshow;
    		let dom = document.getElementById("check1");
    		// console.log(1,dom,e.target,this.select2_1);
    		if(this.checkshow){
    			dom.innerHTML="收起筛选";
    		}else {
    			dom.innerHTML="数据筛选";
    		}
    	},
    	filter(e){
    		// console.log(1,e.target.value);
    		this.arr.push(e.target.value);
    		for(var i = 0; i < this.arr.length; i++){
    			this.filterarr.push({text:this.arr[i],value:this.arr[i]});
    		}
    		// console.log(11,this.filterarr);
    	},
    	 filterHandler(value, row, column) {
    	 	// console.log(1,value,row,column)
	        const property = column['property'];
	        return row[property] === value;
     	},
    	 sure(){
    	 	console.log(1,this.str1,this.str2);
    		console.log(11,this.arr);
    		let dom = document.getElementById("equal");
    		if(this.arr.indexOf("全部条件")>=0){
    			
    			dom.innerHTML="和";
    			// 全部条件
    			this.$store.state.list.data=this.$store.state.list.data.filter((item,index) =>{
    				// console.log(typeof item);//array
    				return item.indexOf(this.str1)>=0 && item.indexOf(this.str2)>=0

    			})
    			// console.log(1);

    		}else if(this.arr.indexOf("任意条件")>=0){
    			dom.innerHTML="或者";
    			// console.log(11,this.$store.state.list.data)
    			// 任意条件 
    			this.$store.state.list.data = this.$store.state.list.data.filter((item,index) =>{
    				console.log(1,item)
    				// console.log(typeof item);//array
    				return item.indexOf(this.str1)>=0 || item.indexOf(this.str2)>=0
    			})
    			// console.log(111,a);
    		}else {
    				alert("没有相关数据");
    			}
    			// console.log(22,a);
    	},
    	check2(){
    	},
	}
}
	
</script>