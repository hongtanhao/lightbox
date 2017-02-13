var now = new Date();
var year = now.getFullYear(),
    month = now.getMonth(),
    Da = now.getDate(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    day = now.getDay(),
    week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
if (month < 10) {
    var mon = month + 1;
    month = "0" + mon + "月";
}
if (hour < 10) {
    hour = "0" + hour;
}
if (minute < 10) {
    minute = "0" + minute;
}
document.getElementById('curTime').value = year + '年' + month + Da + '日' + hour + ':' + minute + ':' + second + '(' + week[day] + ')';
