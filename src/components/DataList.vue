<template>
	<div class="mainDataList">
		<div class="data_header">
			<div class="top">工作表</div>
			<div class="title">天气预报(中国城市)</div>
		</div>
		<div class="dataMain">
			<div class="top">
				<div class="title">
					<span @click="myclick(0)">字段</span>
					<span @click="myclick(1)">参数</span>
					<span @click="fun"><i class="el-icon-plus"></i></span>
					<ul class="mark" v-if="xianshi">
						<li>添加计算字段</li>
						<li>添加分组字段</li>
						<li>添加字段</li>
					</ul>
				</div>
				<div class="input" @click="focus">
					<div class="myinput"><span><i class="el-icon-search"></i></span><input ref="input" type="text" @blur="blur" v-model="msg" ></div>
				</div>
			</div>
			<ul v-if="!flag" class="list">
			    <li 
			    class="dataItem" 
			    v-for="(item, index) in indexList"
				draggable="true"
				@dragstart="dragstart(item, 'k' + index, $event)"
			    >
			    	<i style="color: #5182E4" class="el-icon-document"></i>  &nbsp;{{item}}
			    	<span></span>
			    </li>
		    </ul>
		    <ul v-if="flag" class="list">
			    <li 
			    class="dataItem" 
			    v-for="(item, index) in arg"
				draggable="true"
				@dragstart="dragstart(item, 'k' + index, $event)"
			    >
			    	<i style="color: #5182E4" class="el-icon-document"></i>  &nbsp;{{item}}
			    	<span></span>
			    </li>
		    </ul>
		</div>

	</div>
</template>

<script>
	
	export default {
	    data() {
	        return {
		      list: [],
		      arg: ["维度", "日期", "参数测试", "参数测试--文本", "参数测试--日期"],
		      flag: false,
		      msg: "",
		      indexList: [],
		      xianshi: false,
		      num: 0
		    }
	    },
	    methods: {

	    	dragstart(info, num, e) {
	    		this.$store.commit("info", info)
	    		e.dataTransfer.setData("info", info)
	    		// e.currentTarget.style.color = "red";
	    	},
	    	myclick(idx) {
	    	  this.flag = idx ? true : false;
	        },
	        focus() {
	        	this.$refs.input.focus();
	        	this.$refs.input.style.width = 90+ "%";
	        	this.$refs.input.previousSibling.style.left = 15 + "px";
	        },
	        blur() {
	        	this.$refs.input.value = "";
	        	this.$refs.input.style.width = 55+ "%";
	        	this.$refs.input.previousSibling.style.left = 70 + "px";
	        },

	        fun(e) {
	        	e.stopPropagation();
	        	console.log(2)
	        	var me = this;
	        	this.num++;

	        	if (this.num % 2 !== 0) {
	        		this.xianshi = true;
	        	} else {
	        		this.xianshi = false;
	        	}
       	

	        }
	    },

	    mounted() {
	    	this.list = this.$store.state.cityList.length === 0 ? ["城市", "地区", "日期", "天气", "最低气温", "最高气温", "风向", "风速", "AQI指数", "空气质量级别", "洗车指数", "洗车指数说明"] : this.$store.state.cityList;
	    	this.indexList = this.$store.state.cityList.length === 0 ? ["城市", "地区", "日期", "天气", "最低气温", "最高气温", "风向", "风速", "AQI指数", "空气质量级别", "洗车指数", "洗车指数说明"] : this.$store.state.cityList;

	    },
	    beforeUpdate() {
	    	var me = this;
	    	this.indexList = this.list.filter(function(item) {
	    		if (me.msg !== "") {
	    			return item.indexOf(me.msg) !== -1;
	    		}
	    		return true
	    	})
	    }
	}
</script>

<style>
	.el-aside {
		background-color: #efefef;
	}
</style>

<style scoped lang="scss">
 	ul, li {
 		list-style: none;
 	}
	.mark {
		width: 100px;
		height: 105px;
		position: absolute;
		background-color: white;
		right: 15px;
		top: 45px;
		z-index: 3;
		box-shadow: 0px 5px 15px 5px #DADDDF;
		li {
			height: 35px;
			line-height: 35px;
			text-align: center;
			cursor: pointer;
			&:hover {
				background-color: rgba(232,235,237,.6);

			};
		}
	}
	.mainDataList {
		width: 100%;

		height: 100%;

		font-size: 12px;
		border-right: 1px solid #DADDDF;
		box-sizing: border-box;
		background-color: #E8EBED;

		.data_header {

			width: 100%;
			height: 85px;
			padding-top: 15px;
			box-sizing: border-box;
			padding-left: 10px;
			border-bottom: 1px solid #DADDDF;
			padding-bottom: 15px;
			div {
				height: 30px;
				line-height: 30px;
			}
		}

		.dataMain {
			font-size: 14px;
			.top {
				height: 90px;
				.title {
					height: 45px;
					display: flex;
					line-height: 45px;
					padding-left: 15px;
					padding-right: 15px;
					position: relative;
					span {
						flex: 1;
						border-bottom: 2px solid #DADDDF;
						cursor: pointer;
					}
					span:nth-child(1) {
						text-align: center;
						&:hover {
							border-bottom: 2px solid #5182E4;
						};
					}
					span:nth-child(2) {
						text-align: center;
						&:hover {
							border-bottom: 2px solid #5182E4;
						};
					}
					span:nth-child(3) {
						width: 25px;
						text-align: right;
						box-sizing: border-box;
						padding-right: 8px;
					}
				}
				.input {
					height: 30px;
					padding-left: 15px;
					padding-right: 15px;
					cursor: text;
					.myinput {
						/*display: flex;*/
						overflow: hidden;
						height: 30px;
						position: relative;
						border-bottom: 2px solid #DADDDF;
						span {
							position: absolute;
							top: 6px;
							left: 70px;
							transition: all 0.5s;
						}
						span:last-child {
							cursor: pointer;
						}
						input {
							box-sizing: border-box;
							float: right;
							/*padding-left: 15px;*/
							width: 55%;
							height: 100%;
							padding-left: 10%;
							border: none;
							background-color: #E8EBED;
							transition: all 0.5s;
							outline: none;
						}
					}
				}
			}
			.list {
			    padding-top: 10px;
				.dataItem {
					padding-left: 30px;
					height: 40px;
					cursor: pointer;
				}
			}
		}
	}
	
</style>