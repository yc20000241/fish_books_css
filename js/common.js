window.addEventListener("load",function(){
    let dom3 = document.querySelector("nav");
    document.addEventListener("scroll",function(){
        if(document.documentElement.scrollTop > 1000){
            dom3.style.opacity = 0;
        }else{
            dom3.style.opacity = 1;
        }
        dom3.style.transition = "2s ease";
    })
})

    
