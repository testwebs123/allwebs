$(function($) {
    var today=new Date();
    var d=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
    var AAAA=today.getFullYear()+"年"+(today.getMonth()+1)+"月"+today.getDate()+"日";
    AAAA =""+AAAA + " " +  d[today.getDay()];
    $("#riqi").html(AAAA);
    $("#riqi1").html(AAAA); $("#riqi2").html(AAAA);
})