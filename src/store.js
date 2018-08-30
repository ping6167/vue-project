import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		editEchartsData: [],
		list:[],



		sendSearchMsgData: [],
		// 总数据
  		titleList: [],
  		cityList: [],
  		msg: [],
	  	// 维度，对比，维度数值，对比数值
	  	selectedList: [[], [], [], []],
	    index: null,
	    option:{},
	    num: 0,
	    idx1: 0,
	    flag: true

	},
	mutations: {
		senddata(state,arg){
     		 this.state.list = arg;
      // console.log(1,this.state.list)
    	},
		editEcharts(state, data) {
			state.editEchartsData = data
		},
		updataAsideSubmenuDate(state, data) {
			state.sendSearchMsgData = data
		},
		info(state, msg) {
	  		var msg = msg.split("-")[1] || msg;
	  		state.msg = msg;
	  	},
	    changeTable(store,index){
	      store.index = index
	    },
	  	config(state, idx) {
	  		state.idx1 = idx
	  		if (state.selectedList[idx].indexOf(state.msg) === -1) {
	  			state.selectedList[idx].push(state.msg);
	  			state.flag = true;
	  		} else {
	  			console.log(1);
	  			state.flag = false;
	  		}
	  	},
	  	cityList(state, obj) {   
	  		state.titleList = obj.res;
	  		state.cityList = obj.arr
	  	},
	    delete(state, obj) {
	      var {item, idx} = obj;
	      if (state.selectedList[idx].indexOf(item) !== -1) {
	        state.selectedList[idx].splice(state.selectedList[idx].indexOf(item), 1);
	        state.num = state.num + 1;
	      }
	    },
	    num(state, obj) {
	      state.num = state.num + 1;
	    },
	    changeOption(state,obj){
        	state.option = obj
    	}
	}



})
