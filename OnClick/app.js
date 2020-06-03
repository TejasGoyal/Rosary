document.addEventListener('DOMContentLoaded', () => {

const boxes = document.querySelectorAll(".grid div");
/*
boxes[1].classList.add("hello");

function fun(){
    uni.classList.add("hello");      
}

i=0;
while(i<5){
    boxes[i].addEventListener("mouseup", fun);
}
*/
var flag=0;
boxes.forEach(uni => {
    uni.addEventListener("mouseup",()=>{
        if (flag==0){
        uni.classList.add("hello");  
        flag = 1;
        } else
        {
        uni.classList.add("color");  
        flag = 0;
        }
    });
})


})
