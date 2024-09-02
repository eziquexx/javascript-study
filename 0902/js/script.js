let sub = document.querySelectorAll('.sub');

// slideUp 함수
function slideUp(){
  sub.forEach(function(item){
    item.style.height = '0px';
  });
}

let menuLiA = document.querySelectorAll('.m_menu > li > a');

menuLiA.forEach(function(item){
  item.addEventListener('click', function(){
    //getComputedStyle는 DOM 요소의 현재 스타일을 가져오기위한 메서드.
    let subHeight = getComputedStyle(this.nextElementSibling).height;
    // alert(subHeight);
    if(subHeight  == '0px'){
      slideUp();
      this.nextElementSibling.style.height = '108px';
    }else{
      this.nextElementSibling.style.height = '0px';
    }
  });
});