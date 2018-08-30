<template>
<div class="app-about">
	<CreateSearch :data="asideSubmenuDate" v-if="isShowCreateSearch" @updataAsideSubmenuDate="receiveAsideSubmenuDate"></CreateSearch>
	<div class="app-yibiaopan">
		<el-header style="font-size: 12px">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="text-align: left;">
	  			<el-menu-item index="1">仪表盘</el-menu-item>
	  			<el-menu-item index="2">工作表</el-menu-item>
	  			<el-menu-item index="3">数据源</el-menu-item>
			</el-menu>
    	</el-header>
	<el-container style="height: 500px; border: 1px solid #eee">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="index">
				<el-header>
					<div class="container-word">
						<span>仪表盘</span>
					</div>
					<div class="container-picture">
						<span class="el-icon-search" @click="appAboutSearch" id="search"></span>
						<el-dropdown trigger="click" @command="createfile">
							<span class="el-icon-plus"></span>	
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="a">创建文件夹</el-dropdown-item>
								<el-dropdown-item command="b">创建仪表盘</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						<el-dropdown trigger="click" @command="toggleslideMenu">
						    <div class="container-dots">
								<div class="app-container-dots">
									<li></li>
									<li></li>
									<li></li>
								</div>
							</div>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="allHidden">全部收起</el-dropdown-item>
								<el-dropdown-item command="allShow">展开全部</el-dropdown-item>
							</el-dropdown-menu>
					    </el-dropdown>					
					</div>
				</el-header>
				<el-submenu v-for="(item, index) in isUpdataAsideSubmenuDate ? $store.state.sendSearchMsgData : asideSubmenuDate" :index= "index + '' ">
					<template slot="title">
						<i class="el-icon-message"></i>
						{{item.title}}
					</template>
					<el-menu-item v-for="(contentListItem, contentListIndex) in item.contentList" :index="index-contentListIndex + '' " @click="togglechart(contentListItem.title)">
						<i class="el-icon-tickets"></i>
						{{contentListItem.title}}
					</el-menu-item>
				</el-submenu>	
		</el-menu>
		</el-aside>
		<el-main id="container">
			<el-header style="font-size: 12px">	
				<div v-model="YiBiaoPanName" style="font-size: 18px; padding-top: 5px">
					{{YiBiaoPanName}}
				</div>
			    <div class="add-chart" @click="showAddChart" style="text-align: right">	
		        	<i class="el-icon-setting" style="margin-right: 5px"></i>
	      			<span>添加图表</span>
	      		</div>
			</el-header>
			<div class="app-newchart" id="app-newchart" @mousedown="move">
				<NewChart v-if="showNewChart"></NewChart>
				<AddChart v-if="!showNewChart" @hiddenAddChart='receivehiddenAddChart'></AddChart>				
			</div>
		</el-main>
	</el-container>
	</div>
	<div class="app-create-chart" v-if="ShowCreateChart || ShowCreateFile || showCreateYiBiaoPan" :style="{backgroundColor: ShowCreateChart || ShowCreateFile || showCreateYiBiaoPan ? 'rgba(215, 219, 222, .9)' : ''}">
		<CreateChart v-if="ShowCreateChart" :data="lateUseDate" @hiddenCreateChart="receiveHidden"></CreateChart>
		<CreateFile v-if="ShowCreateFile" @hiddenCreateFile='receiveHiddenCreateFile' @createNewFileName="receiveNewFileName"></CreateFile>
		<CreateYiBiaoPan v-if="showCreateYiBiaoPan" @hiddencreateNewYiBiaoPan='receivehiddencreateNewYiBiaoPan' @createNewYiBiaoPanName="receivecreateNewYiBiaoPanName"></CreateYiBiaoPan>
	</div>
</div>


</div>
</template>
<style lang="scss" scoped>
@import '../base.scss';
.app-about {
	width: 100%;
	height: 100%;
	position: relative;
	/*头部*/
	.el-header {
	    background-color: #F0F2F3;
	    color: #333;
	    line-height: 60px;
	    span {
	    	display: inline-block;
	    	margin-right: 10px;
	    }
	 }
	.el-menu {
		background-color: transparent;
	}
	/*侧栏*/
	.el-aside {
		color: #333;
		background-color: #E7EAEC;
		padding-top: 10px;
		.el-header {
			overflow: hidden;
			position: relative;
			font-size: 14px;
			font-weight: bold;
			.container-word {
				float: left;
				line-height: 1;
			}
			.container-picture {
				cursor: pointer;
				float: right;
				.container-dots {
					position: absolute;
					top: -10px;
					right: -5px;
					@include dots();
				}
			}

		}
		&.hover {
			@include dots();
		}
	}
	/*内容*/
	.el-container {
		background-color: #F0F2F3;
		.el-header[data-v-039c5b43] {
			line-height: 0px;
			height: 30px !important;
			.el-icon-search {
				/*position: relative;
				top: 1px;
    			left: 1px;*/
			}
		}
		.add-chart {
			/*width: 50px;*/
			cursor: pointer;
		}
		.el-main {
			padding-top: 10px;
			.app-newchart {
				position: relative;
				top: 0px;
				left: 0px;
				width: 452px;
				height: 368px;
			}

		}
	
	}

	/*创建图表*/
	.app-create-chart {
		padding-top: 50px;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		bottom: 0px;
		right: 0px;
	/*	background-color: rgba(215, 219, 222, .9) !important;*/
	}
}
</style>
<script>
import CreateChart from '../components/CreateChart.vue';
import NewChart from '../components/newChart.vue';
import CreateFile from '../components/CreateFile.vue';
import CreateYiBiaoPan from '../components/CreateYiBiaoPan.vue';
import CreateSearch from '../components/CreateSearch.vue';
import AddChart from '../components/AddChart.vue';

export default {
	components: {
		CreateChart,
		NewChart,
		CreateFile,
		CreateYiBiaoPan,
		CreateSearch,
		AddChart
	},
    data() {
      return {
        activeIndex: '1',
        isShowCreateSearch: false,
        showNewChart: true,
        ShowCreateChart: false,
        lateUseDate: [],
        ShowCreateFile: false,
        showCreateYiBiaoPan: false,
        asideSubmenuDate: [],
       	YiBiaoPanName: '销售业绩报表',
       	index: [],
       	isUpdataAsideSubmenuDate: false
      }
    },
    methods: {

    	receiveAsideSubmenuDate(msg, contentListItem, contentListIndex) {
    		// console.log("msg", msg)
    		this.isUpdataAsideSubmenuDate = msg
    		this.isShowCreateSearch = false
    		console.log("contentListItem", contentListItem, contentListIndex)
    		this.YiBiaoPanName = contentListItem
    		console.log(this.index)
    		this.index.push(contentListIndex + '')

    	},
    	toggleslideMenu(command) {
    		if(command === 'allHidden') {
    			this.index = []
    		} else if (command === 'allShow') {
    			if (this.index.length > 0) {
    				return
    			}
    			this.asideSubmenuDate.forEach((item, index) => {
    				this.index.push(index + '')
    				item.contentList.forEach((ite, idx) => {
    					this.index.push(idx)
    				}) 
    			})
    		}
    	},
    	togglechart(contentListItem) {
    		this.YiBiaoPanName = contentListItem
    	},
    	receivehiddenAddChart (msg) {
    		this.showNewChart = msg
    		this.ShowCreateChart = true
    	},
    	appAboutSearch(e) {
    		this.isShowCreateSearch = true
    		document.onmouseup = (e2) => {
    			if(!e2.target.id) { 				
    				return;
    			} 
    			this.isShowCreateSearch = false
    		}
    	},
    	receiveHidden(msg) {
    		// console.log(msg)
    		//更新数据
    		this.ShowCreateChart = false
    	},
    	showAddChart() {
    		// console.log(111)
    		this.ShowCreateChart = true
    	},
    	handleSelect(key, keyPath) {
        	// console.log(key, keyPath);
      	},
      	//创建文件夹
      	createfile(command, e) {
      		// console.log(command, e)
      		if(command === 'a') {
      			this.ShowCreateFile = true 	
      		} else if(command === 'b') {
      			console.log(command)
      			this.showCreateYiBiaoPan = true
      		}
        	// this.$message('click on item ' + command);
      	},
      	receiveHiddenCreateFile(msg) {
      		this.ShowCreateFile = msg
      		// console.log('取消')
      	},
      	receiveNewFileName(NewFileName, msg) {
      		this.ShowCreateFile = msg
      		let objectItem = {
      			title: NewFileName,
      			contentList: []
      		}
      		let arr = this.asideSubmenuDate
      		arr.push(objectItem)
      		// console.log(arr)
      		this.asideSubmenuDate = arr
      		// console.log(this.asideSubmenuDate)
      	},
      	receivecreateNewYiBiaoPanName(NewFileName, NewYiBiaoPanName, msg) {
      		// console.log(111, NewFileName, NewYiBiaoPanName)
      		this.showCreateYiBiaoPan = msg
      		this.showNewChart = msg
      		this.YiBiaoPanName = NewYiBiaoPanName
      		let arr = []
      		this.asideSubmenuDate.forEach((item, index) => {
      			// console.log("item", item)
      			if(NewFileName === item.title) {
      				arr = item.contentList
      				arr.push({"title": NewYiBiaoPanName})
      				item.contentList = arr
      				// console.log("this.asideSubmenuDate", this.asideSubmenuDate)
      			}
      		})
      	},
      	receivehiddencreateNewYiBiaoPan(msg) {
      		this.showCreateYiBiaoPan = msg
      	},
      	getPxNum(px) {
      		if (!px) {
      			return 0
      		}
      		let numStr = px.replace("px", "")
      		return parseFloat(numStr)
      	},

      	move(e) {
      		// console.log(111, e, e.path)
      		let odiv = e.path[2];    //获取目标元素
			document.onmousemove = (e) => {
			  //鼠标按下并移动的事件
				//用鼠标的位置减去鼠标相对元素的位置，得到元素的位置			
				//移动当前元素
				odiv.style.left = (this.getPxNum(odiv.style.left) + e.movementX) + 'px';
				odiv.style.top = (this.getPxNum(odiv.style.top) + e.movementY) + 'px';
				// console.log(">>>>>", odiv.style.left, e.movementX)
	     	};
			document.onmouseup = (e) => {
				document.onmousemove = null;
				document.onmouseup = null;
			};

      	}
	},
	created() {

	},
    mounted(){
		this.$http.get('/data/lateUseDate.json')
		.then((res) => {
			// console.log(res.data)
			this.lateUseDate = res.data.lateUseDate,
			this.asideSubmenuDate = res.data.asideSubmenuDate
		})
		
	},
	beforeUpdate() {
		
	}

 }
</script>
