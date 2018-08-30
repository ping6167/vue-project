<template>
	<div class="page">
			<table class="datalList">
						<thead>
							<tr>
								<th class='lies' v-for="(items,index) in list" :key="index">
									<div>{{items}}</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr class="innerlis" v-for="(item,idx) in $store.state.list.datalist" :key="idx">
								<td><div class="inner">{{item.original_name}}</div></td>
								<td><div class="inner">{{item.name}}</div></td>
								<td><div class="inner">{{item.type}}</div></td>
							</tr>
						</tbody>
					</table>
	</div>
</template>
<style lang="scss" scoped>
		.filterBox{padding:10px;list-style: none;overflow: hidden;background-color: #eee;border:1px solid #ddd;}
		.filterBox li{float:left;width:12.5%;text-align: center;}
		.datalList{width: 80%;background-color: #fff;}
		.datalList th{height: 45px;line-height: 45px;border-bottom:1px solid #ddd;font-weight:normal;}
		.datalList td{padding:10px 0;border-bottom:1px solid #ddd;text-align: center;}
		.datalList th .inner,
		.datalList td .inner{overflow: hidden;}
		.datalList th:first-child,
		.datalList td:first-child{table-layout: fixed;width: 5%; padding-left:30px;}
		.datalList th:last-child,
		.datalList td:last-child{table-layout: fixed;width: 20%;text-align: left;}
	
</style>
<script type="text/javascript">
export default {
	data(){
		return {
			list:['原字段名','新字段名','字段类型']
		}
	},
	methods:{

	}
}	
</script>