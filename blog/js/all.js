var zan = document.getElementById('love');
var num = document.getElementById('num');
var flag = 0;
var size=num.innerText
zan.onclick = function() {
  if (flag == 0) {
    size++;
    num.innerHTML=size;
  }
  flag++;
}
