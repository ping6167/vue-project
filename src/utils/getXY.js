function getXY(xz) {
   let x = [] 
   for ( var j = 0; j < xz.length; j++){
      if(xz[j]=="城市"){
         x.push(0)
      }
      if(xz[j] == "地区"){
         x.push(1)
      }
      if(xz[j] == "日期"){
         x.push(2)
      }
      if(xz[j]=="天气"){
         x.push(3)
      }
      if(xz[j]=="最低气温"){
         x.push(4)
      }
      if(xz[j]=="最高气温"){
         x.push(5)
      }
      if(xz[j]=="风向"){
         x.push(6)
      }
      if(xz[j]=="风速"){
         x.push(7)
      }
      if(xz[j]=="AQI指数"){
         x.push(8)
      }
      if(xz[j]=="空气质量级别"){
         x.push(9)
      }
      if(xz[j] == "洗车指数"){
         x.push(10)
      }
      if(xz[j] == "洗车指数说明"){
         x.push(11)
      }
   }
   return x;
}
export default getXY