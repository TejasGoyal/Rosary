document.addEventListener('DOMContentLoaded', () => {

    const boxes = document.querySelectorAll('.grid div');    
    const count_button = document.getElementById("counter");
    const score = document.getElementById("score");
    const limi = document.querySelector("#limi");
    const go = document.querySelector("#go");
    let i = 0;
    let maxi = 108;
    function setLim(){
        maxi =  parseInt(limi.value);
        console.log(maxi + 10);
        }

    function chanted(){
        if(i==maxi){
            alert("Please Reset Limit");
            location.reload();
        }
        boxes[i].classList.add("hello");
        i = i +1;
        score.innerHTML = i;
        let k=0;
        while(k<i){
            boxes[k].innerHTML = "";
            k =k+1
        }
        boxes[i-1].innerHTML = i;

        if(i==maxi){
           let ll=0;
            while(ll<maxi){
            boxes[ll].classList.remove("hello");
                ll = ll+1;
        }
            document.querySelector(".grid").classList.add("comp");
        }

    }
    
    count_button.addEventListener("click",chanted);
    go.addEventListener("click",setLim);
})


