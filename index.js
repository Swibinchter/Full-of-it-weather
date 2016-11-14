
//定义一个函数将天气数据拆分成需要的格式
function weatherSplit(obj){
  var a, b, c;
  //给today添加dawn属性使其等于day，与future的天气属性保持一致，方便对比
  if(!obj.dawn){
    $(obj).attr("dawn",obj.day);
  }
  //判断天气
  if(obj.day[1] == obj.night[1]) { a = obj.day[1]; }
    else { a = obj.day[1] + "转" + obj.night[1]; }
  //判断温度
  function min(x,y){  return ((Number(x) < Number(y)) ? x : y)  }
  function max(x,y){  return ((Number(x) > Number(y)) ? x : y)  }
  b = min(obj.dawn[2],min(obj.day[2],obj.night[2])) + "～" + max(obj.dawn[2],max(obj.day[2],obj.night[2])) + "℃";
  //判断风
  if(obj.day[3] == "") { obj.day[3] = "无持续风向";}
  c = obj.day[3] + " " + obj.day[4];
  return a + " | " + b + "<br/>" + c;
}

//解析json对象
function weatherDisplay(wjson){ 

    $(".realtime_city_name").text(wjson.result.data.realtime.city_name);
    //$(".realtime_date").text("" + wjson.result.data.realtime.date);
    $(".realtime_time").text("实时信息更新时间：" + wjson.result.data.realtime.time);
    //$(".realtime_week").text("" + wjson.result.data.realtime.week);
    //$(".realtime_moon").text("" + wjson.result.data.realtime.moon);
    //$(".realtime_weather_temperature").text(wjson.result.data.realtime.weather.temperature + "℃");
    $(".realtime_weather_humidity").text("湿度：" + wjson.result.data.realtime.weather.humidity);
    $(".realtime_weather_info").text(wjson.result.data.realtime.weather.info + " | " + wjson.result.data.realtime.weather.temperature + "℃");
    $(".realtime_wind_info").text(wjson.result.data.realtime.wind.direct + " " + wjson.result.data.realtime.wind.power);
    //$(".realtime_wind_power").text("风力：" + wjson.result.data.realtime.wind.power);

    $(".today_date").text(wjson.result.data.weather[0].date);
    $(".today_weather_info").html(weatherSplit(wjson.result.data.weather[0].info));
    $(".today_week").text("星期" + wjson.result.data.weather[0].week);
    $(".today_nongli").text("农历 " + wjson.result.data.weather[0].nongli);  

    $(".pm25_quality_p").text("空气质量：" + wjson.result.data.pm25.pm25.quality);
    $(".pm25_pm25_p").text("PM2.5浓度：" + wjson.result.data.pm25.pm25.pm25 + "μg/m³" + " | " + "PM10浓度: " + wjson.result.data.pm25.pm25.pm10 + "μg/m³");
    $(".pm25_des").text(wjson.result.data.pm25.pm25.des);


    $(".chuanyi_con").text(wjson.result.data.life.info.chuanyi[0]);
    $(".chuanyi_des").text(wjson.result.data.life.info.chuanyi[1]);
    $(".ganmao_con").text(wjson.result.data.life.info.ganmao[0]);
    $(".ganmao_des").text(wjson.result.data.life.info.ganmao[1]);
    $(".kongtiao_con").text(wjson.result.data.life.info.kongtiao[0]);
    $(".kongtiao_des").text(wjson.result.data.life.info.kongtiao[1]);
    $(".xiche_con").text(wjson.result.data.life.info.xiche[0]);
    $(".xiche_des").text(wjson.result.data.life.info.xiche[1]);
    $(".yundong_con").text(wjson.result.data.life.info.yundong[0]);
    $(".yundong_des").text(wjson.result.data.life.info.yundong[1]);
    $(".ziwaixian_con").text(wjson.result.data.life.info.ziwaixian[0]);
    $(".ziwaixian_des").text(wjson.result.data.life.info.ziwaixian[1]); 
    
    if(wjson.result.data.weather[1]){ //修复未来几天偶尔缺乏天气数据时的尴尬
      $(".future1 .future_date").text(wjson.result.data.weather[1].date);
      $(".future1 .future_week").text("星期" + wjson.result.data.weather[1].week);
      $(".future1 .future_nongli").text("农历：" + wjson.result.data.weather[1].nongli);
      $(".future1 .future_weather").html(weatherSplit(wjson.result.data.weather[1].info));
    } else { $(".future1 .future_day").html("暂无法获取<br/>到当日信息"); }
      
    if(wjson.result.data.weather[2]){
      $(".future2 .future_date").text(wjson.result.data.weather[2].date);
      $(".future2 .future_week").text("星期" + wjson.result.data.weather[2].week);
      $(".future2 .future_nongli").text("农历：" + wjson.result.data.weather[2].nongli);
      $(".future2 .future_weather").html(weatherSplit(wjson.result.data.weather[2].info));
    } else { $(".future2 .future_day").html("暂无法获取<br/>到当日信息"); }
      
    if(wjson.result.data.weather[3]){
      $(".future3 .future_date").text(wjson.result.data.weather[3].date);
      $(".future3 .future_week").text("星期" + wjson.result.data.weather[3].week);
      $(".future3 .future_nongli").text("农历：" + wjson.result.data.weather[3].nongli);
      $(".future3 .future_weather").html(weatherSplit(wjson.result.data.weather[3].info));
    } else { $(".future3 .future_day").html("暂无法获取<br/>到当日信息"); }
      
    if(wjson.result.data.weather[4]){ //修复未来几天偶尔缺乏天气数据时的尴尬
      $(".future4 .future_date").text(wjson.result.data.weather[4].date);
      $(".future4 .future_week").text("星期" + wjson.result.data.weather[4].week);
      $(".future4 .future_nongli").text("农历：" + wjson.result.data.weather[4].nongli);
      $(".future4 .future_weather").html(weatherSplit(wjson.result.data.weather[4].info));
    } else { $(".future4 .future_day").html("暂无法获取<br/>到当日信息"); }
    

    

  }

function cityWeather(city_name){
    $.getJSON("http://op.juhe.cn/onebox/weather/query?cityname=" + city_name + "&dtype=&key=0b2d6d0be51b43d0cea16adb6b50bbaf&callback=?", 
           function(json){
                      //$("#json").html(JSON.stringify(json));//配合html把获取到的json对象转换成字符串展现出来
                      if(json.error_code == "207301" || json.error_code == "207302")
                            {alert("请输入正确的城市名称（如北京、武汉）！");}
                      if(json.error_code == "207303")
                            {alert("网络错误，请重试");}
                      weatherDisplay(json);
                     }
         );
}

$(".logo").hover(  function() { $(".designer").css("display", "block"); },
              function() { $(".designer").css("display", "none"); }
            );

$("#btn_city").click(function(){
                        $(".wrapper").fadeOut(1);        
                        var city_name = $("#city").val();
                        cityWeather(city_name);
                        $(".wrapper").fadeIn(1200);
                       });

$("#city").keydown(function(event) { 
                        if(event.which == 13) { $("#btn_city").click(); }
});

$(document).ready(function (){  $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",
                                 function(){  $(".tip").text("您所在的地区为：" + remote_ip_info.country + remote_ip_info.province + remote_ip_info.city);
                                 cityWeather(remote_ip_info.city);  });
                     }); 

