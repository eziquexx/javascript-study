const targetLink = document.querySelectorAll(".tab_menu a");
const tabContent = document.querySelectorAll("#tabContent > div");

// targetLink.forEach(link => {
//   link.addEventListener("click", function(e){
//     e.preventDefault();

//     const orgTarget = e.target.getAttribute("href");
//     const tabTarget = orgTarget.replace("#", "");

//     for(let i = 0; i < tabContent.length; i++ ){

//     }
//   });
// });

for (let i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function(e){
    e.preventDefault(); // return false; 와 유사. 링크금지

    // #tab1, #tab2, #tab3
    const orgTarget = e.target.getAttribute("href"); // 클릭한 것(e.target)
    // console.log(orgTarget);
    
    const tabTarget = orgTarget.replace("#", ""); //tab1, tab2
    for( let j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = "none";
      targetLink[j].classList.remove("active");
      e.target.classList.add("active");
    }

    // id 선택자가 tab3인 컨텐츠를 보여준다.
    document.getElementById(tabTarget).style.display = "block";

    // for (let k = 0; k < targetLink.length; k++) {
    //   targetLink[k].classList.remove("active");
    //   // tab_menu a -> active 클래스를 주어 색상변경
    //   e.target.classList.add("active"); // 클릭한 놈에 active를 넣는다.
    // }
  });
}

