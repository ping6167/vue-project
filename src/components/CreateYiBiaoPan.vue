<template>
<div class="app-createyibiaopan">
	<el-card class="box-card">
		<div slot="header" class="box-card-header clearfix">
			<span>新建文件夹</span>
			<el-button style="float: right; padding: 3px 0" type="text" @click="hidden">&times;</el-button>   			
		</div>
		<div class="createfile-files">
			<p class='createfile-files-left'>文件夹名称</p>
			<el-select v-model="value" placeholder="仪表盘示例" class='createfile-files-right'>
				<el-option
					v-for="item in list"
					:key="item.value"
					:label="item.label"
					:value="item.label"
				>
					<i class="el-icon-arrow-down el-icon-left" :style="{marginLeft: (1*item.value)+'em'}"></i>
					<span>{{ item.label }}</span>
				</el-option>
			</el-select>
		</div>
		<div class="createfile-files">
			<p class='createfile-files-left'>仪表盘名称</p>
			<input class="create-line" type="text" v-model="YiBiaoPanName">
		</div>
		<div class="btns">
			<span @click="YiBiaoPanNameCreate">确定</span>
			<span @click="hidden">取消</span>
		</div>
	</el-card>

</div>
</template>
<style lang="scss" scoped>
.app-createyibiaopan {
	.box-card {
		overflow: auto;
		background-color: #F0F2F3;
		width: 430px;
		height: 215px;
		position: absolute;
		/*top: 50%;*/
		left: 50%;
		/*margin-top: -218px;*/
		margin-left: -215px;
		[class*=" el-icon-"], [class^=el-icon-] {
			float: right;
			cursor: pointer;
		}
		.box-card-header {
			font-size: 14px;
		}
		.el-card__body {
			padding-left: 30px;
			font-weight: bold;
		}
		.createfile-files {
			.createfile-files-left {
				float: left;
				line-height: 40px;
				margin-right: 15px;
				font-size: 12px;
			}			
		}
		.el-select {			
			/*border-bottom: 1px solid blue !important;*/
			.el-input__inner {
				border: none;
			}			
		}
		.create-line {
			outline: none;
			border: none;
			width: 217px;
			height: 40px;
			border-bottom: 1px solid #B8CBED;
			background-color: transparent;
		}
		.btns {
			position: fixed;
			height: 66px;
			line-height: 60px;
			color: #5182E4;
			width: 390px;
			text-align: right;
			font-size: 14px;
			span {
				display: inline-block;
				margin-right: 15px;
				cursor: pointer;				
			}
		}
	}
}	
</style>
<script>
export default {
	data() {
		return {
			value: '',
			YiBiaoPanName: '',
			list:[
				{
					value: 1,
          			label: '根目录'
				},
				{
					value: 2,
          			label: '仪表盘示例'
				},
				{
					value: 3,
          			label: 'demo'
				}

			]
		}
	},
	methods: {
		YiBiaoPanNameCreate() {
			this.$emit('createNewYiBiaoPanName', this.value, this.YiBiaoPanName, false)
		},
		hidden() {
			this.$emit('hiddencreateNewYiBiaoPan', false)
		}
	}


}
</script>