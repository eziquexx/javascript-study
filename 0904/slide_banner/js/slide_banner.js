$(function() {
  let visual = $("#brandVisual > ul > li"); //큰사진
  let button = $("#buttonList > li"); //pager 버튼
  let current = 0;
  let id;

  button.click(function(){
    let i = $(this).index(); // 클릭한 버튼의 인덱스 번호를 i에 반환(대입)
    // alert(i);
    button.removeClass("on");

    $(this).addClass("on");
    // button.eq(i).addClass("on");
    move(i);
    return false;
  });

  function timer() {
    id = setInterval(function(){
      let n = current + 1;
      if(n === 3) {
        n = 0;
      }

      // 인덱스 번호 n에 해당되는 버튼을 컴퓨터가 클릭한다.
      button.eq(n).trigger("click"); 
    },3000);
  }
  timer();


  function move(i) {
    // 내가 3번 dot 버튼을 눌렀는데 3번 dot 버튼을 또 눌렀을 때 실행문이 또 실행될 필요가 없다. 그래서 current와 i가 같으면 return을 줘서 move라는 함수에서 빠져나가라고 하는거다.
    // 현재 활성화된 button(검정색 버튼)과 클릭한 버튼이 같으면 move를 빠져나감
    if(current == i) return; 
    let cu = visual.eq(current);
    let ne = visual.eq(i);
    cu.css("left", "0").stop().animate({"left" : "-100%" }, 500);
    ne.css("left", "100%").stop().animate({"left" : "0"}, 500);
    current = i;
  }



});

