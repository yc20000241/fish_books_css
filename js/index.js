window.addEventListener("load",function(){
    let count = 0;
    let left = document.querySelector(".leftButton");
    let right = document.querySelector(".rightButton"); 
    let dom = document.querySelector(".index_img")
    right.addEventListener("click", clickRight);
    let lock = true

    function clickRight(e){
        if(!lock) return;
        count++;
        dom.style.transition = "2s ease";
        dom.style.transform = "translateX("+-count*100+"vw)"
        console.log(count);
        if(count == 5){
            count = 0;
            setTimeout(() =>{
                dom.style.transform = "none"
                dom.style.transition = "none";
                // dom.style.left = 0;
            }, 2000)          
        }
        
        lock = false;
        setTimeout(() => {
            lock = true;
        }, 2000)
    }
    
    left.addEventListener("click", clickLeft)

    function clickLeft(e){
        if(!lock) return;
        
        count--;
        if(count == -1){
            dom.style.transform = "translateX(-500vw)";
            dom.style.transition = "0.01s ease";
            setTimeout(() =>{
                count = 4;
                dom.style.transform = "translateX("+-count*100+"vw)";
                dom.style.transition = "2s ease";
            }, 500)          
        }else{
            dom.style.transition = "2s ease";
            dom.style.transform = "translateX("+-count*100+"vw)"
        }

        lock = false;
        setTimeout(() => {
            lock = true;
        }, 2000)
    }
})


// window.onload = function(){
//     let count = 0;
//     let left = document.querySelector(".leftButton");
//     let right = document.querySelector(".rightButton"); 
//     right.addEventListener("click", clickRight);
//     let lock = true

//     function clickRight(e){
//         // console.log(lock);
//         if(!lock) return;
//         count++;
//         count %= 5;
//         let dom1 = document.querySelector(".index_img").style
//         console.log(dom1)
//         let list = document.querySelector(".index_img").querySelectorAll("li");
//         // console.log(document.querySelector(".index_img"));
//         for(let i = 0; i < list.length; i++){
//             let step = (-count*100);
//             console.log(step)
//             list[i].style.transform = "translateX("+ step +"vw)"
//             list[i].style.transition = "2s ease";   
//             if(i < count){
//                 let step = (5-count)*100;
//                 console.log(step)
//                 list[i].style.transform = "translateX("+ step +"vw)";
//                 list[i].style.transition = "0";
//                 list[i].style.transitionDelay = "2s";
//             }  
//         }
//         lock = false;
//         setTimeout(() => {
//             lock = true;
//         }, 2000)
//     }
    
//     left.addEventListener("click", clickLeft)

//     function clickLeft(e){
//         console.log(lock);
//         if(!lock) return;
//         let list = document.querySelector(".index_img").querySelectorAll("li");
//         // console.log(document.querySelector(".index_img"));
//         count--;
//         count %= 5;
//         let step;
//         for(let i = 0; i < list.length; i++){
//             if(count <= 0){
//                 list[list.length+count].style.transform = "translateX(-500vw)";
//                 list[list.length+count].style.transition = "0";
//                 step = (-count*100);
//             }    
//             // console.log(step)
//             list[i].style.transform = "translateX("+ step +"vw)"
//             list[i].style.transition = "2s ease";   
            
//         }
//         lock = false;
//         setTimeout(() => {
//             lock = true;
//         }, 2000)
//     }
// }
//    1    2    3    4   5 
//    400 -100 -100 -100 -100  1 -> 2  
//    2    3   4   5   1
//    300  300  -200 -200 -200
//    3     4   5   1   2

//    5    1    2   3   4
//   100  100 100  100  -500+100  1
//    4    5    1   2   3
//    200 200 200 -400 -300