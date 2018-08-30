<template>
	<div class="card">
		<el-card class="box-card" shadow="hover">
			<div slot="header" class="clearfix">
				<span>添加图表</span>
				<i class="el-icon-close" @click="hidden"></i>
			</div>
			<div class="text item">
				<p class="text-item-word">选择图表类型</p>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">
						<span class="el-icon-tickets createChart-icon"></span>
						<span>普通图表</span>
					</el-menu-item>
					<el-menu-item index="2">
						<span class="el-icon-location-outline createChart-icon"></span>
						<span>经纬度图表</span>
					</el-menu-item>
					<el-menu-item index="3">
						<span class="el-icon-edit-outline createChart-icon"></span>
						<span>自定义图表</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="create-search">
				<p class="text-item-word-search">选择工作表</p>
				<!-- <input class="create-line" type="text">	 -->
				<!-- <CreateSearch :data="data" style="top: 173px; left: 0px; height: 10px; backgroundColor: transparent; width: 300px;" @updataData="receiveAsideSubmenuDate"></CreateSearch>					 		 -->
			</div>
			<div class="create-text">
				<el-tree
  					:data="isUpdataDate ? $store.state.sendSearchMsgData : data"
  					show-checkbox
  					default-expand-all
  					node-key="id"
  					ref="tree"
  					:highlight-current="true"
  					:indent="4"
  					:default-expand-all="false"
  				>
				</el-tree>
			</div>
			<div class="btns">
				<span @click="toggleHomeEcharts">确定</span>
				<span @click="hidden">取消</span>
			</div>
		</el-card>
	</div>
</template>

<script>
import CreateSearch from './CreateSearch.vue'
export default {
	components: {
		CreateSearch
	},
	props:['data'],
    data() {
		return {
			activeIndex: '1',
			isUpdataDate: false
		}
	},
	
  	methods: {
		receiveAsideSubmenuDate(msg, contentListItem, contentListIndex) {
			this.isUpdataDate = true
		},
		hidden(e) {
			let createCardDoM = e.target.parentNode.parentNode.parentNode
			createCardDoM.style.display = 'none'
			//传递消息
			this.$emit('hiddenCreateChart', false)
		},
		handleSelect(key, keyPath) {
        	console.log(key, keyPath);
        },
        toggleHomeEcharts() {
        	console.log(this.$refs.tree.getCheckedNodes());
        	let toEditPageDate = this.$refs.tree.getCheckedNodes()
        	// console.log("store", this.data)
        	this.$store.commit('editEcharts', toEditPageDate)
        	location.hash = "#/homeEcharts"
        }
  	}	
}
</script>

<style scoped lang="scss">
	.box-card {
		overflow: auto;
		background-color: #F0F2F3;
		width: 430px;
		height: 436px;
		position: absolute;
		/*top: 50%;*/
		left: 50%;
		/*margin-top: -218px;*/
		margin-left: -215px;
		[class*=" el-icon-"], [class^=el-icon-] {
			float: right;
			cursor: pointer;
		}
		.app-search .app-search-input[data-v-cbb35018] {
			background-color: #E8EBED;
			width: 100%;
		}
		input.el-input__inner {
			border: none;
			/*border-bottom: 1px solid #dcdfe6;*/
			outline: none;
			background-color: transparent !important;
		}
		.create-search {
			.text-item-word-search {
				/*margin-bottom: 3px;*/
				font-size: 12px;
			}

			.create-line {
				outline: none;
				border: none;
				width: 100%;
				border-bottom: 1px solid #B8CBED;
				background-color: transparent;
			}
		}
		.text-item-word {
			font-size: 12px;
			margin: 0 0 10px;
		}
		.el-icon-tickets:before, .el-icon-location-outline:before, .el-icon-edit-outline:before {
			position: relative;
			top: 21px;
			right: -2px;
		}
		.el-icon-tickets:before {
			right: 10px;
		}
		.el-menu {
			background-color: transparent;
			margin-bottom: 10px;
		}
		.el-menu-item {
			padding: 0px 10px;
			background-color: #fff;
			margin-right: 10px;
			width: 30%;		
		}
		.el-menu--horizontal>.el-menu-item.is-active {
    		border: 2px solid #409EFF;
    		color: #303133;
		}
		.create-text {
			margin-top: 15px;
			overflow: auto;
			.el-tree {
				height: 150px;
				background-color: transparent;
			}
		}
		.btns {
			position: fixed;
			height: 66px;
			line-height: 40px;
			color: #5182E4;
			width: 390px;
			text-align: right;
			span {
				display: inline-block;
				margin-right: 10px;
				cursor: pointer;				
			}
		}
	}

</style>
