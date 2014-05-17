// 現在の日時を YYYY/MM/DD hh:mm:dd 形式で返す関数
function getDateAndTime() {
  dd = new Date();
  year = (dd.getYear() < 2000 ? dd.getYear()+1900 : dd.getYear() );
  month = (dd.getMonth() < 9 ? "0" + (dd.getMonth()+1) : dd.getMonth()+1 );
  day = (dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate() );
  hour = (dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours() );
  minute = (dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes() );
  second = (dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds() );
  return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
}