


  var urgentRange = document.getElementsByClassName('urgentRange')[0];
  urgentRange.nextElementSibling.children[1].style.color="orange"


 urgentRange.onchange = function(){
  var timelineInfo = document.getElementsByClassName('timelineInfo')[0];
  timelineInfo.lastElementChild.firstElementChild.innerHTML = urgentRange.nextElementSibling.children[urgentRange.value].innerHTML;

  for (var i = 0; i < 3; i++) {
    urgentRange.nextElementSibling.children[i].style.color="inherit";
  }
  urgentRange.nextElementSibling.children[urgentRange.value].style.color="orange"
 
 }




