<template>

<div class="selected">

	<el-row 
	class="grid-content bg-purple selected_1 item_1" 
	type="flex" 
	:gutter="12"  
	@dragover.prevent.native="dragover" 
	@drop.native="drop(0)">
		<el-col :span="2" class="first">
			<div class="grid-content bg-purple">
				维度 <i class="el-icon-edit"></i></div>
		</el-col>
		<el-col :span="3" v-for="(item, index) in list[0]">
			<div class="grid-content bg-purple selected_item">
				<span><i class="el-icon-caret-bottom" @click="show(0, index)"></i></span>
				<ul class="ulList" @mouseleave="leave(0, index)">
					<li>字体</li>
					<li>字段</li>
					<li>水平位置</li>
					<li>垂直距离</li>
				</ul>
				<span>{{item}}</span>
				<span @click="click(item, 0, index)"><i class="el-icon-close"></i></span>
			</div>
		</el-col>
		<el-col :span="2" class="last" @click.native="choose(0)">
			<div class="grid-content bg-purple" ref="k0"><i class="el-icon-picture-outline"></i> 添加对比</div>
		</el-col>
	</el-row>
		
	<el-row 
	:gutter="12" 
	class="grid-content bg-purple-light selected_1 item_2" 
	@dragover.prevent.native="dragover" 
	@drop.native="drop(1)"
	v-if="state[0][1]"
	>
		<el-col :span="2" class="first">
			<div class="grid-content bg-purple">对比 <i class="el-icon-edit"></i></div>
		</el-col>
		<el-col :span="3" v-for="(item, index) in list[1]" style="width: 125px">
			<div class="grid-content bg-purple selected_item">		
         		<span><i class="el-icon-caret-bottom" @click="show(1, index)"></i></span>
         		<ul class="ulList" @mouseleave="leave(0, index)">
					<li>字体</li>
					<li>字段</li>
					<li>水平位置</li>
					<li>垂直距离</li>
				</ul>
				<span>{{item}}</span>
				<span @click="click(item, 1)"><i class="el-icon-close"></i></span>
			</div>
		</el-col>
	</el-row>

	<el-row 
	:gutter="12" 
	class="grid-content bg-purple selected_1 item_3" 
	@dragover.prevent.native="dragover" 
	@drop.native="drop(2)">
		<el-col :span="2" class="first">
			<div class="grid-content bg-purple">数值 <i class="el-icon-edit"></i></div>
		</el-col>
		<el-col :span="3" v-for="(item, index) in list[2]" style="width: 125px">
			<div class="grid-content bg-purple selected_item">		
         		<span><i class="el-icon-caret-bottom" @click="show(2, index)"></i></span>
         		<ul class="ulList" @mouseleave="leave(0, index)">
					<li>字体</li>
					<li>字段</li>
					<li>水平位置</li>
					<li>垂直距离</li>
				</ul>
				<span>{{item}}</span>
				<span  @click="click(item, 2)"><i class="el-icon-close"></i></span>
			</div>
		</el-col>
		<el-col :span="2" class="last" @click.native="choose(1)">
			<div class="grid-content bg-purple" ref="k1"><i class="el-icon-picture-outline"></i> 添加次轴</div>
		</el-col>
	</el-row>

	<el-row 
	:gutter="12" 
	class="grid-content bg-purple selected_1 item_4" 
	@dragover.prevent.native="dragover" 
	@drop.native="drop(3)"
	v-if="state[1][1]"
	>
		<el-col  class="first" :span="2">
			<div class="grid-content bg-purple">数值 <i class="el-icon-edit"></i></div>
		</el-col>
		<el-col :span="3" v-for="(item, index) in list[3]" style="width: 125px">
			<div class="grid-content bg-purple selected_item">		
         		<span><i class="el-icon-caret-bottom" @click="show(3, index)"></i></span>
         		<ul class="ulList" @mouseleave="leave(0, index)">
					<li>字体</li>
					<li>字段</li>
					<li>水平位置</li>
					<li>垂直距离</li>
				</ul>
				<span>{{item}}</span>
				<span @click="click(item, 3)"><i class="el-icon-close"></i></span>
			</div>
		</el-col>
	</el-row>
	
</div>
</template>

<script>
export default {

data() {
    return {
        list: [],
        state: [[0, false], [0, false]],
        timer: null,
        stateArr: [],
        num: 0
    }
},

methods: {
	// 点击删除标签
	click(item, idx, index) {
		this.$store.commit("delete", {item, idx})
		this.$store.commit("num", null)
		this.$forceUpdate();
	},
	open() {
         this.$message({
          message: '已重复的选项',
          type: 'error',
          duration: 1000
        });
      },
	show(num, idx) {
		var a = document.getElementsByClassName("selected_1")[num].getElementsByClassName("ulList");
		var b = document.getElementsByClassName("ulList")
		var str = num + "-" + idx;
		
		if (this.num === 0) {
			this.stateArr = str;
			a[idx].style.display = "block";
			this.num++;
		} else {
			if (this.stateArr !== str) {
				this.stateArr = str;
				Array.from(a).forEach(function(item) {
					item.style.display = "none";
				})
				a[idx].style.display = "block";
			} else {
				a[idx].style.display = "none";
				this.num = 0
			}
		}
		
		if (this.stateArr !== str) {
			this.stateArr = str;
			Array.from(a).forEach(function(item) {
			item.style.display = "none";
			})
			a[idx].style.display = "block";
		}
	},
	dragover(e) {
		e.preventDefault();
	},
	drop(idx) {						
		this.$store.commit("config", idx)
		this.$store.commit("num", null)
		this.list = this.$store.state.selectedList;
		this.$forceUpdate();
		if (!this.$store.state.flag) {
			this.open()
		}
	},
	choose(idx) {
		this.view(idx);				
	},
	view(idx) {
		this.state[idx][0] = this.state[idx][0] + 1;
		var kIdx = "k" + idx;
		// console.log(this.$refs[kIdx])
		if (this.state[idx][0] % 2 !== 0) {
			// this.state[idx] = [0, true];
			this.$refs[kIdx].innerHTML = `<i class="el-icon-edit"></i>删除${idx ? '次轴' : '对比'}`
			this.$set(this.state[idx], 1, true)
			
		} else {
			this.$set(this.state[idx], 1, false)
			this.$refs[kIdx].innerHTML = `<i class="el-icon-edit"></i>添加${idx ? '次轴' : '对比'}`
		}
	}
},

mounted() {
	this.list = this.$store.state.selectedList;
	
	this.$store.watch((state)=>state.num,()=>{
		this.list = this.$store.state.selectedList;
	})

},

beforeUpdate() {
	this.list = this.$store.state.selectedList;
	var idx = "item_" + (this.$store.state.idx1 + 1)
	var a = document.getElementsByClassName(idx)[0].getElementsByClassName("selected_item");
	if (this.list[this.$store.state.idx1].length >= 5) {			
		Array.from(a).forEach(item => {
			item.parentNode.style.width = 80 + "px";
		})
	} else {
		Array.from(a).forEach(item => {
			item.parentNode.style.width = 125 + "px";
		})
	}
},

watch: {
	list: {
		handler(a, b) {
			this.list = this.$store.state.selectedList;
		},
		deep: true
	}
}

// =======
// 	<div class="selected">
		
// 		<el-row 
// 		class="grid-content bg-purple selected_1" 
// 		type="flex" 
// 		:gutter="12"  
// 		@dragover.prevent.native="dragover" 
// 		@drop.native="drop(0)">
// 			<el-col :span="2" class="first">
// 				<div class="grid-content bg-purple">
// 					维度 <i class="el-icon-edit"></i></div>
// 			</el-col>
// 			<el-col :span="3" v-for="(item, index) in list[0]">
// 				<div class="grid-content bg-purple selected_item">
// 					<span><i class="el-icon-caret-bottom"></i></span>
// 					<span>{{item}}</span>
// 					<span @click="click(item, 0)"><i class="el-icon-close"></i></span>
// 				</div>
// 			</el-col>
// 			<el-col :span="2" class="last" @click.native="choose(0)">
// 				<div class="grid-content bg-purple" ref="k0"><i class="el-icon-picture-outline"></i> 添加对比</div>
// 			</el-col>
// 		</el-row>
		
// 		<el-row 
// 		:gutter="12" 
// 		class="grid-content bg-purple-light selected_1" 
// 		@dragover.prevent.native="dragover" 
// 		@drop.native="drop(1)"
// 		v-if="state[0][1]"
// 		>
// 			<el-col :span="2" class="first">
// 				<div class="grid-content bg-purple">对比 <i class="el-icon-edit"></i></div>
// 			</el-col>
// 			<el-col :span="3" v-for="(item, index) in list[1]">
// 				<div class="grid-content bg-purple selected_item">		
//              		<span><i class="el-icon-caret-bottom"></i></span>
// 					<span>{{item}}</span>
// 					<span @click="click(item, 1)"><i class="el-icon-close"></i></span>
// 				</div>
// 			</el-col>
// 			<!-- <el-col :span="2" class="last" @click.native="choose(0)">
// 				<div class="grid-content bg-purple"><i class="el-icon-edit"></i>删除对比</div>
// 			</el-col> -->
// 		</el-row>

// 		<el-row 
// 		:gutter="12" 
// 		class="grid-content bg-purple selected_1" 
// 		@dragover.prevent.native="dragover" 
// 		@drop.native="drop(2)">
// 			<el-col :span="2" class="first">
// 				<div class="grid-content bg-purple">数值 <i class="el-icon-edit"></i></div>
// 			</el-col>
// 			<el-col :span="3" v-for="(item, index) in list[2]">
// 				<div class="grid-content bg-purple selected_item">		
//              		<span><i class="el-icon-caret-bottom"></i></span>
// 					<span>{{item}}</span>
// 					<span  @click="click(item, 2)"><i class="el-icon-close"></i></span>
// 				</div>
// 			</el-col>
// 			<el-col :span="2" class="last" @click.native="choose(1)">
// 				<div class="grid-content bg-purple" ref="k1"><i class="el-icon-picture-outline"></i> 添加次轴</div>
// 			</el-col>
// 		</el-row>

// 		<el-row 
// 		:gutter="12" 
// 		class="grid-content bg-purple selected_1" 
// 		@dragover.prevent.native="dragover" 
// 		@drop.native="drop(3)"
// 		v-if="state[1][1]"
// 		>
// 			<el-col  class="first" :span="2">
// 				<div class="grid-content bg-purple">数值 <i class="el-icon-edit"></i></div>
// 			</el-col>
// 			<el-col :span="3" v-for="(item, index) in list[3]">
// 				<div class="grid-content bg-purple selected_item">		
//              		<span><i class="el-icon-caret-bottom"></i></span>
// 					<span>{{item}}</span>
// 					<span  @click="click(item, 3)"><i class="el-icon-close"></i></span>
// 				</div>
// 			</el-col>
// 			<!-- <el-col :span="2" class="last" @click.native="delete(0)">
// 				<div class="grid-content bg-purple"><i class="el-icon-edit"></i>删除次轴</div>
// 			</el-col> -->
// 		</el-row>
// 	</div>
// </template>

// <script>
// 	export default {
// 		data() {
// 	        return {
// 		      list: [],
// 		      state: [[0, false], [0, false]]	     
// 		    }
//         },
// 		methods: {
// 			click(item, idx) {
// 				this.$store.commit("delete", {item, idx})
// 			},
// 			dragover(e) {
// 				e.preventDefault();
// 			},
// 			drop(idx) {
							
// 				this.$store.commit("config", idx)
// 				this.list = this.$store.state.selectedList;
// 				this.$forceUpdate();
// 				// this.$router.go(0);
// 				// location.reload();
// 			},
// 			choose(idx) {
// 				this.view(idx);
				
// 			},
// 			view(idx) {
// 				this.state[idx][0] = this.state[idx][0] + 1;
// 				var kIdx = "k" + idx;
// 				// console.log(this.$refs[kIdx])
// 				if (this.state[idx][0] % 2 !== 0) {
// 					// this.state[idx] = [0, true];
// 					this.$refs[kIdx].innerHTML = `<i class="el-icon-edit"></i>删除${idx ? '次轴' : '对比'}`
// 					this.$set(this.state[idx], 1, true)
					
// 				} else {
// 					this.$set(this.state[idx], 1, false)
// 					this.$refs[kIdx].innerHTML = `<i class="el-icon-edit"></i>添加${idx ? '次轴' : '对比'}`
// 				}
// 			}
// 		},
// 		mounted() {
// 			this.list = this.$store.state.selectedList;
// 		},
// 		beforeUpdate() {
// 			this.list = this.$store.state.selectedList;
// 		}

	}
</script>

<style lang="scss" scoped>
	.first {
		color: #000;
		font-size: 16px;
	}
	.last {
		color: black;
		position: absolute;
		right: 5px;
		cursor: pointer;
		color: #5182E4;
	}
	.selected {

		width: 95%;

		box-sizing: border-box;
		padding-left: 15px;
		font-size: 12px;

		.selected_1 {
			height: 45px;
			line-height: 25px;
			border-bottom: 1px solid #eee;
			padding-top: 10px;
			color: white;
			position: relative;

			.selected_item {
				background-color: #5182E4;
				text-align: center;
				height: 25px;	
				display: flex;
				cursor: pointer;

				position: relative;
				span:nth-child(1) {
					flex: 1
				}
				.ulList {
					position: absolute;
					top: 25px;
					left: 0px;
					color: black;
					width: 100px;
					background: white;
					box-shadow: 5px 5px 15px 0px #eee;
					display: none;
					z-index: 10;
					li {
						height: 35px;
						line-height: 35px;
					}
				}
				span:nth-child(4) {
					flex: 1
				}
				span:nth-child(3) {
					flex: 2;

				}	
			}
		}
	}

</style>