<template>
	<div class="page">
		<el-container>
		  <el-header>上传数据<span>查看帮助</span></el-header>
		  <el-main>
		  	<div class="top">
		  		<el-steps :active="0" align-center>
			  	<el-step title="上传文件" space="50px"></el-step>
			  	<el-step title="预览数据"></el-step>
			  	<el-step title="工作表设置"></el-step>	
			</el-steps>
		  	</div>
		  	<div class="body">
		  		<div class="upload">
		  			<div class="select">
		  				<!-- enctype ="multipart/form-data" -->
			  			<form name="upload" action="*" method="get">
						    <input type="file" name="">
						    <input type="submit" value="上传">
						    <p>支持Excel和CSV文件（单个Excel最大100M，CSV最大200M）最多5个文件批量上传，默认识别第一个sheet文件</p>
						</form>
					</div>
		  		</div>
		  	</div>
		  </el-main>
		</el-container>
	</div>
</template>
<style lang="scss" scoped>
* {
margin: 0;
padding: 0;
list-style: none;
}
.el-container {
	.el-header {
		padding: 0 50px;
		background-color: #F0F2F3;
	    color: #333;
	    line-height: 60px;
	    span {
	    	float:right;
	    	font-size: 11px;
	    }
	}
 	.el-main {
		background-color: #E7EAEC;
		height:800px;
		.body {
			background-color: #fff;
			width:900px;
			height:500px;
			margin:20px auto;
			.upload {
				width:800px;
				height:200px;
				margin:0 auto;
				position:relative;
				top:30px;
				// margin-top:30px;
				border: 2px dotted blue;
				.select {
					width:330px;
					margin: 0 auto;
					margin-top:70px;
					p {
						padding: 5px;
						font-size: 12px;;
					}
				}
			}
		}
	}
}
</style>
<script type="text/javascript">
	export default {


	}
</script>