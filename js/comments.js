window.addEventListener("load", function(){
    let year = new Date().getFullYear()
    let month = new Date().getMonth();
    let day = new Date().getDay();
    let button = document.querySelector(".button");
    let comments = document.querySelector(".comments")
    button.addEventListener("click", function(e){
        let content = document.querySelector(".publish textarea").value
        let str = `
        <div class="comment">
            <div class="commenter">
                <img src="../img/7.png" alt="">
                <div class="commenter_name">yc001</div>
            </div>
            <div class="content">${content}</div>
            <div class="date">${year}/${month}/${day}</div>
        </div>
        `;
        comments.innerHTML += str;
    })
})