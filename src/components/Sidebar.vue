<template>
	<div class="mainSidebar">
		<el-row class="header" id="header">
 			<el-col :span="12"><div class="grid-content bg-purple">仪表盘</div></el-col>
  			<el-col :span="4"><div class="grid-content bg-purple-light"><i class="el-icon-search"></i></div></el-col>
  			<el-col :span="4"><div class="grid-content bg-purple-light"><i class="el-icon-plus"></i></div></el-col>
  			<el-col :span="4"><div class="grid-content bg-purple-light"><i class="el-icon-sort"></i></div></el-col>
        </el-row>
       
		<el-container style="height: 700px; border: 1px solid #eee; background-color: #efefef">
		  <el-aside width="200px" style="background-color: #efefef">
		    <el-menu :default-openeds="['1', '3']">
		     
		      <!-- 主目录循环 -->
		      <el-submenu 
				      	v-for="(item, index) in list" 
				      	:key="'menu' + index" 
				      	:index="index" 
				      	:data-text="item[0]" 
				      	@dragstart.native="dragstart(item[0], 'k' + index, $event)"
				      	draggable="true"
			   >
		        <template slot="title"><i class="el-icon-message"></i>{{item[0]}}</template>
		       		<!-- 负目录循环 -->
		       		<el-menu-item 
			       		:key="'list' + idx" 
			       		v-for="(value, idx) in item[2]" 
			       		index="1" 
			       		:data-text="value[0]" 
			       		@dragstart.stop.native="dragstart(item[0]+ '-' + value[0], 'k' + index + idx, $event)" 
			       		draggable="true">{{value[0]}}
			       	</el-menu-item>
		        </el-submenu>
		      </el-submenu>
		    </el-menu>
		  </el-aside> 
		</el-container>
	</div>
</template>

<script>
	
	export default {
	    data() {
	        return {
		      list: [
		        ["日期", "/home", [], "el-icon-tickets"],
		        ["天气", "/home", [], "el-icon-tickets"],
		        ["风向", "/home", [], "el-icon-tickets"],
		        ["洗车指数", null, [
		            ["个人信息", "/home", []],
		            ["修改信息", "/home", []]
		          ], "el-icon-tickets"],
		        ["城市", null, [
		            ["资金流水", "/home", []],
		            ["支付单据", "/updateData", []]
		          ], "el-icon-tickets"],
		        ["风速", "/home", [], "el-icon-tickets"],
		        ["地区", "/home", [], "el-icon-tickets"],
		        ["最高气温", "/home", [], "el-icon-tickets"]
		      ]
		    }
	    },
	    methods: {
	    	dragstart(info, num, e) {
	    		this.$store.commit("info", info)
	    		e.dataTransfer.setData("info", info)
	    	}
	    }
	}
</script>

<style>
	.el-aside {
		background-color: #efefef;
	}
</style>

<style scoped lang="scss">
	.mainSidebar {
		width: 100%;
		height: 700px;
		background-color: #efefef;
		font-size: 14px;
		line-height: 50px;
		padding-left: 10px;
		box-sizing: border-box;
		.header {
			width: 100%;
			height: 50px;
			line-height: 50px;
			.el-col:nth-child(1) {
				box-sizing: border-box;
				font-weight: bold;
			};
		}
	}
	
</style>
