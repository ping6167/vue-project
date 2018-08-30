<template>



  <div class="homeslider" id="homeslider">
    <div class="kkk1">
      <p>图标类型</p>
      <input type="text" v-model="msg">
    </div>
    <div class="kkk2">
      <p>图标类型</p>
       <div class="icon">
  
      <!-- s -->
       <!--    <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"> 
          </el-popover> -->
  <el-popover
    v-for="(v,k) in icons"
    :key="k" 
    @click='set(k)'
    :style="'color: ' + (v[1] ? '#5182E4' : '')"
    placement="left-start"
    title="标题"
    width="200"
    trigger="hover"

    :content="render[k][2] + '   ' + render[k][3]">
    <!-- <i slot="reference" class="el-icon-edit fonts"></i> -->
    <i 
    slot="reference" 
    :class="'iconfont '+v[0]+' m'+k + ' fonts'"
    :style="'color: ' + (v[1] ? '#5182E4' : '')"
    ></i>
  </el-popover>
<!--   <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">hover 激活</el-button>
  </el-popover> -->
         <!--  </div> -->


          
       </div>
    </div>
   
  </div>
</template>
<style scoped lang="scss">
  .homeslider {
      padding: 15px 30px;
      background-color: #E8EBED;
      height: 100%;
      .kkk1 {
        height: 50px;     
        input {
          width: 100%;
          margin-top: 5px;
           background-color: #E8EBED;
          border: none;
          border-bottom: 1px solid #5182E4;
          padding: 5px;
        }
      }
      .kkk2 {
        margin-top: 18px;
        p {
          margin-bottom: 15px;
        }
      }
      .icon{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        span {
          display: block;
          width: 40px;
          height: 40px;
        }
      }
      .iconfont{
        font-size: 20px;
        color: #ccc;
        /*padding: 10px;  */
      }
  }
  .fonts {
    width: 40px;
    height: 40px;
    font-size: 35px;
    
    display: block;
}

  .icon{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .iconfont{
    font-size: 30px;
    color: #ccc;
    padding: 20px;
 
  }
  .m0,.m10,.m16,.m2{
    color: blue;

  }
</style>
<script>
 
 import "../assets/icons/iconfont.css";

export default {

    props: ["num"],
    
    data(){
      return {
        visible: false,
        msg:"末命名图表",
        icons: [
          ['icon-biaoge', false],
          ['icon-fsux_tubiao_huiguiquxiantu',false],
          ["icon-line1",false],
          ['icon-fsux_tubiao_baifenbiduijizhuzhuangtu',false],
          ['icon-fsux_tubiao_baifenbiduijizhuzhuangtu',false],
          ['icon-fsux_tubiao_zhifangtu',false],
          ['icon-fsux_tubiao_zhuzhuangtu1',false],
          ['icon-fsux_tubiao_kxiantu',false],
          ['icon-fsux_tubiao_shuangzhoutu',false],
          ['icon-fsux_tubiao_duijizhuzhuangtu1',false],
          ['icon-fsux_tubiao_duijizhuzhuangtu',false],
          ['icon-fsux_tubiao_zhuzhuangtu',false],
          ['icon-fsux_tubiao_sandiantu',false],
          ['icon-fsux_zhexiantu',false],
          ['icon-fsux_tubiao_biaoge',false],
          ['icon-tubiao2',false],
          ['icon-tubiao1',false],
          ['icon-tubiao-zhexiantu',false]
        ],
        index:"",
        // 状态码："0" 没有 "?1-100" 范围 "k" 0或多个 "1" 1个 "2" 2个
        render: [
          [0, ["k", "k"], "0或多个X轴", "0或多个Y轴"], 
          [1, ["0", "?1-3"], "0个X轴", "1-3个Y轴"], 
          [2, ["0", "1"], "0个X轴", "1个Y轴"], 
          [3, ["?1-2", "?1-50"], "1-2个X轴", "多个Y轴"],
          [4, ["?0-3", "?1-50"], "0或3个X轴", "多个Y轴"],
          [5, ["?1-5", "?2-4"], "1-5个X轴", "2-4个Y轴"],
          [6, ["?1-2", "?2-50"], "1-2个X轴", "2或多个Y轴"],
          [7, ["0", "0"], "0个X轴", "0个Y轴"], 
          [8, ["?0-4", "?1-50"], "0-4个X轴", "1或多个Y轴"], 
          [9, ["?1-2", "?2-50"], "1-2个X轴", "2或多个Y轴"], 
          [10, ["2", "5"], "2个X轴", "5个Y轴"],
          [11, ["?0-2", "?1-50"], "0-2个X轴", "多个Y轴"],
          [12, ["1", "1"], "1个X轴", "1个Y轴"],
          [13, ["?1-4", "?2-50"], "1-4个X轴", "2或多个Y轴"],
          [14, ["1", "2"], "1个X轴", "2个Y轴"], 
          [15, ["0", "?3-5"], "0个X轴", "3-5个Y轴"], 
          [16, ["0", "1"], "0个X轴", "1个Y轴"], 
          [17, ["?1-2", "?1-50"], "1-2个X轴", "多个Y轴"]
        ],
        stateList:[],
        list:[]
      }
    },
 
    
    watch: {
      num: function() {
        this.stateList = [];
        this.$store.state.selectedList.forEach(item => {
          this.stateList.push(item.length);
        });   
        var a1 = this.stateList[0];
        var a2 = this.stateList[2];
      
        this.render.forEach((item, index) => {
          var arr1 = [];
          switch(true) {
            case "k" === item[1][0]: 
              arr1 = [0, 2, 3, 4, 5, 6 , 7, 8, 9];
              break;
            case "0" === item[1][0]:
               arr1 = [0];
              break;
            case "1" === item[1][0]:
               arr1 = [1];
              break;
            case "?" === item[1][0].charAt(0):
              var k = item[1][0].slice(1);
              var v = k.split("-");
              for (var i = +v[0]; i <= +v[1]; i++) {
                arr1.push(i);
              }
            default:
          }
          var arr2 = []
          switch(true) {
            case "k" === item[1][1]: 
              arr2 = [0, 2, 3, 4, 5, 6 , 7, 8, 9];
              break;
            case "0" === item[1][1]:
               arr2 = [0];
              break;
            case "1" === item[1][1]:
               arr2 = [1];
              break;
            case "?" === item[1][1].charAt(0):
              var k = item[1][1].slice(1);
              var v = k.split("-");
              for (var i = +v[0]; i <= +v[1]; i++) {
                arr2.push(i);
              }
            default:
          }
          if ((arr1.indexOf(a1) !== -1)  && (arr2.indexOf(a2) !== -1)) {
            this.$set(this.icons[index], 1, true);            
          } else {
            this.$set(this.icons[index], 1, false);
          }
        })

        // // 发送同步数据 异步使用dispatch
        // this.$store.commit("changeTable",index)
      }

      
    }
}
</script>