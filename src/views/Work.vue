<template>
<div id="app-work">
	<el-container>
		  <el-header>
		  	<el-menu class="el-menu-demo" mode="horizontal"style="text-align: left;">
	  			<el-menu-item index="1">仪表盘</el-menu-item>
	  			<el-menu-item index="2">工作表</el-menu-item>
	  			<el-menu-item index="3">数据源</el-menu-item>
			</el-menu>
		  </el-header>
		  <el-container>
			    <el-aside width="200px">
			    	<div class="top">
				    		<span class="worktable">工作表</span>
				    		<div class="circle">
				    			<div @click='dealdata'>
				    			<span>.</span>
					    		<span>.</span>
					    		<span class='last'>.</span>
				    		</div>
				    		<ul v-show="datashow">
			    				<li>批量移动</li>
			    				<li>批量删除</li>
			    				<li>数据源视图</li>
				    		</ul>
				    		</div>
				    		<div class='add'>
				    			<span @click="create">+</span>
				    			<ul v-show="isShow">
				    				<li>创建文件夹</li>
				    				<li>上传数据</li>
				    				<li>创建合表</li>
				    			</ul>
				    		</div>
			    		</div>
			    		<div>
			    			<div id='search' @click="search($event)" class="search el-icon-search">
			    				<input id="input" type="text" style="outline:none;innerline:none;border:none;background:transparent;width:100px;float:right">
			    			</div>
			    			<div class='detail iconfont icon-yuancircle92' style="font-size:13px">概况</div>
			    			<div class="list">
			    				<el-row class="tac">
								  <el-col :span="24">
								    <el-menu
								      class="el-menu-vertical-demo"
								      background-color="#E7EAEC"
								      @open="handleOpen"
								      @close="handleClose">
								      <el-submenu index="1">
								        <template slot="title">
								        	<i class="iconfont icon-wenjianjiazhankai"></i>
								          <span>天气数据</span>
								        </template>
								        <ul v-for="(item,index) in list" :key="index" @click="check(index,$event)" style="font-size:13px;position:relative">
								        	<li class="item-title icon-wendang2 el-icon-document">{{item.title}}</li>
								        	<!-- <li class="show1">名称:{{item.title}}</li> -->
								        </ul>
								      </el-submenu>
								      <el-submenu index="2">
								      <template slot="title">
								          <i class="iconfont icon-wenjianjia3"></i>
								          <span>居民收支数据</span>
								        </template>
								       </el-submenu>
								    </el-menu>
								  </el-col>
								</el-row>
			    			</div>
			    		</div>
			    </el-aside>
			<div class="right" style="position:relative">
				<el-main>
					<template v-for="(item,index) in list">
						<li v-if="index === mark">{{item.title}}</li>
					</template>
				<div>
					<el-tabs v-model="activeName" @tab-click="handleClick">
					    <el-tab-pane label="数据预览" name="first"></el-tab-pane>
					    <el-tab-pane label="关联授权" name="second"></el-tab-pane>
					    <el-tab-pane label="字段设置" name="third"></el-tab-pane>
					</el-tabs>
				<template v-for="(item,index) in list">
					<template v-if="index === mark">
						<component :is="view" :data="item"></component>
					</template>
				</template>	
			  </div>
			<div class="inner-right" @click="checkpic1">
				<span class="iconfont icon-tubiao2">新建图表</span>
				<span class="iconfont icon-tubiao">上传数据</span>
				<span class="iconfont icon-tubiao1">创建合表</span>
			</div>
			</el-main>
	      </div>			   
		  </el-container>
	</el-container >
		<!-- <div class="outer" v-if="$store.state.bool1||$store.state.bool2">
			<createTable v-if="$store.state.bool1"></createTable>
			<createPic v-if="$store.state.bool2"></createPic>
		</div> -->
		<div class="outer" v-if="createT||createP">
			<createTable v-if="createT" @closeTable="receiveMsg1"></createTable>
			<createPic v-if="createP" @closePic="receiveMsg2"></createPic>
		</div>
	</div>
</template>
<style lang="scss" scoped>
* {
margin: 0;
padding: 0;
list-style: none;
}
.el-header {
	background-color: #F0F2F3;
    color: #333;
    line-height: 60px;
    .el-menu {
    	background-color: #F0F2F3;
    }
}
.el-container {
	background-color: #E7EAEC;
	height:800px;
	.el-aside {
		overflow:none;
		padding-top: 20px;
		border-right: 1px solid #dedede;
		color:#333;
		font-size: 14px;
		.top {
			// border-right: 1px solid #dedede;
			height:30px;
		.worktable {
			padding:5px 10px;
			float:left;
		}
		.add {
			float:right;
			padding-right:10px;
			font-size: 17px;
			color:#666;
			position:relative;
			ul {
				position:absolute;
				width:71px;
				// height:80px;
				background-color: #fff;
				// top:5px;
				left:-30px;
				// padding:5px;
				font-size: 12px;;
				li {
					margin:5px 0;
					padding:5px;
				&:hover {
					background-color: #F0F2F3;
				}
				}
			}
		}
		.circle {
			float:right;
			padding-right:10px;
			font-size: 17px;
			color:#aaa;
			position:relative;
			ul {
				float: right;
				position:absolute;
				width:70px;
				overflow:hidden;
				background-color: #fff;		
				left:-50px;
				font-size: 12px;;
				li {
					margin:5px 0;
					padding:5px;
				&:hover {
					background-color: #F0F2F3;
				}
				}
			}
			span{
				position: relative;
				top:0;
				left:0;
			&:first-child {
				top:-9px;
				left:4px;
			}
			}
			.last {
				top: -4.5px;
				left:-4px;
			}
		}
		}
		.search {
			border-bottom: 1px solid lightblue;
			width:100%;
			text-align:right;
			height:30px;
			line-height: 30px;
			box-sizing:border-box;
		}
		.detail {
			margin-top:5px;
			width:100%;
			height:23px;
			line-height: 23px;
			// background-color: #fff;
			box-sizing:border-box;
			padding-left: 4px;
		}
		.el-menu-item, .el-submenu__title {
			height:30px !important;
			line-height: 30px !important;
		}
		.item-title {
			width:100%;
			box-sizing:border-box;
			text-align: center;
			padding:5px;
		}
		.show1 {
			text-align:center;
			display:none;
			background-color: red;
			color: blue;
		}
	}
	.right {
		position:relative;	
	}
}
#input {
	position:relative;
	top:8px;
}
.inner-right {
		position:fixed;
		right:10px;
		top:70px;
		font-size: 13px;
		color:#666;
		font-size: 13px;
		span {
			margin:5px;
		&:hover {
			color:blue;
			border-bottom: 1px solid blue;
		}
		}
	}
.outer{position:fixed;overflow:auto;-webkit-overflow-scrolling:touch;z-index:10000;top:0;right:0;bottom:0;left:0;background: rgba(213,217,220,.9)}
</style>
<script type="text/javascript">
import '../assets/iconfont/iconfont.css';
import '../assets/icon/iconfont.css';
import createTable from '../components/createTable.vue';
import createPic from '../components/createPic.vue';
import previewData from '../components/previewData.vue';
import configFields from '../components/configFields.vue';
export default {
	components:{
		createTable,
		createPic,
		previewData,
		configFields
	},
    data() {
      return {
      	createT:false,
      	createP:false,
      	mark:0,
      	view:"previewData",
        mshow:false,
        isShow: false,
        datashow: false,
        ruleForm: {
    	 	resource: '条件过滤',
    	 	region: '全部条件'
        },
        list:[],
        listshow:true,
        result:[],
        activeName: 'first'
    	}
    },
    created(){
    	this.$http.get('/data/data2.json')
    		.then(( {data} ) =>{
    		// console.log(11,data);
    		this.list= data.list;
    		this.$store.state.list = this.list[0];
    		console.log(1,this.$store.state.list)
    	})
    },
    methods: {
    	checkpic1(e){
    		// console.log(e)
    		let dom = document.getElementById("app-work")
    		if(e.target.className==="iconfont icon-tubiao2"){
    			this.createT = true;
    		}
    		if(e.target.className==="iconfont icon-tubiao1"){
    			this.createP = true;
    		}
    	},
    	create(){
    		this.isShow = !this.isShow;
    	},
    	handleClick(tab, event) {
        	// console.log(33,event.target.innerHTML);
    		if(event.target.innerHTML ==="字段设置"){
    			this.activeName= "third";
    			this.view = 'configFields';
    		}else if(event.target.innerHTML ==="数据预览"){
    			this.activeName= "first";
    			this.view = 'previewData';
    		}
      	},
    	dealdata(){
    		this.datashow = !this.datashow;
    	},
    	search(e){
    		let dom = document.getElementById("search");
    		let dominput = document.getElementById("input");
    		dom.style.borderBottom = '2px solid blue';
    		// dom.style.transition ='all 1s ease-out 0.1s;'
    		dom.style.textAlign = 'left';
    		dominput.style.left= '-80px';
    		// dominput.style.width='180px';
    		// console.log(11,this.list);
    		this.list = this.list.filter((item,index) =>{
    			// console.log(this.list)
    			return item.title.indexOf(e.target.value)>=0
    		})
    	},
    	handleOpen(key, keyPath) {
        	// console.log(111,key, keyPath);
	  	},
	    handleClose(key, keyPath) {
	        // console.log(222,key, keyPath);
	    },
	    receiveMsg1(msg){
	    	console.log(11,msg);
	    	this.createT=msg;
	    },
	    receiveMsg2(msg){
	    	console.log(11,msg);
	    	this.createP=msg;
	    },
	    check(idx,e){
	    	// console.log(1);
	    	this.mark = idx;
	    	let lisarr = Array.from(document.getElementsByClassName("item-title"));
	    	lisarr.forEach((item,index) =>{
	    		item.style.backgroundColor="#E7EAEC";
	    		item.style.color="#333";
	    	})
	    	lisarr[idx].style.backgroundColor="#fff";
	    	lisarr[idx].style.color="blue";
	    	this.$store.commit('senddata',this.list[idx]);
	    }
    }
 }
</script>
