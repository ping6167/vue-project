<template>
	<div class="mengban">
		<p>请选择添加工作表方式<span @click="close">&times;</span></p>
		<ul >
			<li class="lis"  @mouseover="check(index,$event)" v-for="(item,index) in list1" :key="index">
				<i :class="item.cls"></i>
				<span>{{item.text}}</span>
			</li>
		</ul> 
		<div>
			<p id="p1">使用已有工作表进行关联合并，生成新的工作表以新建图表</p>
		</div>
	</div>
</template>
<style  lang="scss" scoped>
	* {
		margin:0;
		padding:0;
		list-style:none;
	}
.mengban {
	position:fixed;
	// width:656px;
	height:220px;
	left:50%;
	top:50%;
	margin-top:-100px;
	margin-left:-377px;
	background-color: #dededd;
	font-size: 13px;
	p{
		margin:5px;
		padding:5px;
		line-height: 27px;
		span {
			float:right;
			font-size: 20px;
		}
	}
	ul{
		width:100%;
		.lis{
			background-color: #eee;
			width:130px;
			border-right: 1px solid #ccc;
			border-bottom: 1px solid #ccc;
			height:130px;
			float:left;
			text-align:center;
			color:#666;
			.iconfont {
				margin-top:20px;
				display:block;
				font-size: 50px;
			}
			span {
				padding-top:20px;
				font-size: 17px;
			}
			&:hover {
				color: blue;
				box-shadow:1px
			}
		}
	}
	#p1 {
		text-align:center;
		color:#999;
	}
}
</style>
<script type="text/javascript">
	export default {
        data(){
        	return {
        		list:[
        		"使用已有工作表进行关联合并，生成新的工作表以新建图表",
        		"将已有工作表中某些字段进行数据聚合，生成新的工作表以新建图表",
        		"将多个相同结构的工作表合并成一个新的工作表，以新建图表",
        		"编写SQL语句来生成新的工作表，以新建图表",
        		"将表中的多个字段合并为一个字段，生成新的合表"
        		],
        		list1:[
	        		{cls:'iconfont icon-biaodanku',text:"多表关联"},
	        		{cls:'iconfont icon-duowenjianjia',text:"数据聚合"},
	        		{cls:'iconfont icon-erweima',text:"追加合并"},
	        		{cls:'iconfont icon-SQLserver',text:"SQL创建"},
	        		{cls:'iconfont icon-duowenjianjia',text:"二维转一维"}
        		]
        	}
        },
         methods:{
        	close(e){
        		this.$emit('closePic',false);
        		// this.$store.commit('closeTable2',false)
        		// console.log(11,this.$store.commit('closeTable',false));
        	},
        	check(idx,e){
        		// console.log(1,idx,e.currentTarget,this)
        		let arr = Array.from(document.getElementsByClassName("lis"));
        		// console.log(arr);
        		let dom = document.getElementById("p1");
        		// console.log(dom)
        		dom.innerHTML='';
        		dom.innerHTML=this.list[idx];
        		arr.forEach((item,index) =>{
        			item.style.backgroundColor="#eee";
        			if(idx === index){
        			arr[idx].style.backgroundColor="#fff";
        			}
        		})        		
        	}
        }
	}
</script>