<template>
<div class="app-search">
	<input 
		type="text" 
		class="app-search-input"
		v-model="msg"
	>
	<span class='el-icon-search'></span>
	<ul v-show="msg && dealLateUseDate.length" class="outlineUL">
		<li v-for="item in dealLateUseDate">
			{{item.title}}
			<template v-if="item.contentList">
				<ul>
					<li v-for="(contentListItem, contentListIndex) in item.contentList" :key="contentListIndex" :style="{
						paddingLeft: '20px',
						backgroundColor: contentListIndex === contentListIdx ? '#E8EBED' : ''
						}" @click="sendSearchMsg(dealLateUseDate, contentListItem.title, contentListIndex)">{{contentListItem.title}}</li>
				</ul>
			</template>
		</li>
	</ul>
</div>	
</template>
<style lang="scss" scoped>
.app-search {
	width: 200px;
	position: absolute;
	top: 97px;
	left: 74px;
	background-color: #fff;
	z-index: 99;
	padding: 20px;
	.app-search-input {
		position: relative;
		text-align: left;
		height: 16px;
		line-height: 16px;
		border: none;
		border-bottom: 1px solid #5182E4;
		padding-left: 20px;
		&:focus {
			outline-style: none;
			border-bottom: 2px solid #5182E4;
		}
	}
	span {
		width: 16px;
		height: 16px;
		display: inline-block;
		position: absolute;
		top: 25px;
		left: 20px;
		color: #A3ABB0;
		font-size: 14px;
		font-weight: bold;
	}
	ul li {
		border-bottom: 0px solid #E8EBED;
		cursor: pointer;
	}
	.outlineUL {
		border-bottom: 1px solid #E8EBED;
	}
	
}
</style>
<script>
export default {
	props: ['data'],
	data() {
		return {
			msg: '',
			contentListIdx: ''
		}
	},
	computed: {
		dealLateUseDate(msg) {
			// console.log(this.msg)
			let dataStr = JSON.stringify(this.data)
			let copyLateUseDat = JSON.parse(dataStr)
			// console.log(copyLateUseDat)
			let result= []
			this.filterDataold(copyLateUseDat, ['contentList'], this.msg, result)
			result = result.filter(item => item['contentList'].length > 0)
			// console.log("result", result)
			return result
		}
	},
	methods: {
		sendSearchMsg(sendSearchMsgData, contentListItem, contentListIndex) {
			this.contentListIdx = contentListIndex
			// console.log("qian",sendSearchMsgData)
			// console.log("qian",contentListItem)
			//保存一份 防止被改变
			// let dataStr = JSON.stringify(this.data)
			// let copyLateUseDat = JSON.parse(dataStr)
			//先全部改为false
			// copyLateUseDat.forEach((item, index) => {
			// 	item.contentList.forEach(itm => {
			// 		itm.selected = false
			// 	})
			// })
			//将数据中对应的selected变为true? 如何添加到数据中
			// contentListItem.selected = true

			// console.log("hou",contentListItem)
			// console.log("hou",sendSearchMsgData)
			//发送消息存到$store中
			this.$store.commit('updataAsideSubmenuDate', sendSearchMsgData)
			//无法判断什么时候更新了
			//像父组件中传递消息 告知更新了
			this.$emit('updataAsideSubmenuDate', true, contentListItem, contentListIndex)
		},
		filterData(source, keys, content, result) {			
			let key = keys.shift()
			source.filter(item => {
				// let contentList = []
				if (item.hasOwnProperty("title")) {
					// console.log(">>>>>>>>>>>>>>>", item.title, item.title.indexOf(content))
					if (item.title.indexOf(content) != -1) {
						console.log(">>>>>>>>>>>>>>>", item.title)
						// result.push(item.title)
					}
				}
				// console.log("result", result)
				if (item.hasOwnProperty(key)) {
					this.filterData(item[key], keys, content, result)
				}
			})
		},
		filterDataold(source, keys, content, result) {
			// console.log("source", source, "result", result)
			let key = keys.shift()
			source.forEach(item => {
				let contentList = []
				if (item.hasOwnProperty("title")) {
					if (key === undefined) {
						if (item.title.indexOf(content) != -1) {
							result.push({"title": item.title})
						}
					} else {
						result.push({"title": item.title, [key]: contentList})
					}
				}
				// console.log("==========", result)
				if (item.hasOwnProperty(key)) {
					this.filterDataold(item[key], keys, content, contentList)
				}
			})
		}
	}
}
</script>