<template>
<div class="login-page">
	<div class="login">
		<label>用户名：</label>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
  		<label>密&emsp;码：</label>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<router-link to="/home">
			<el-button type="primary">登陆</el-button>
		</router-link>		
	</div>
</div>
</template>
<style scoped lang="scss">

.login-page {
	.login {
		width: 400px;
		height: 200px;
		padding-top: 90px;
		position: relative;
		top: 30px;
		right: 300px;
		left: 300px;
		bottom: 500px;
		text-align: center;	
		.el-input {
			width: 80%;
			margin-bottom: 10px;
		}
		.el-button {
			width: 50%;		

		}	
	}
}	

  
</style>
<script>
	export default {
		data() {
			return {
				input: ''
			}
		}
	}
</script>