window.onload = function(){
    let list = [data1, data2, data3, data4]
    let dom = document.querySelector(".book_list");
    let lis = document.querySelector(".category ul").querySelectorAll("li");
    book_list(data1);

    for(let i = 0; i < lis.length; i++){
        lis[i].addEventListener("click", function(){
            for(let j = 0; j < lis.length; j++){
                if(j == i)
                    lis[j].className = "active";
                else
                    lis[j].className = "";
            }
            dom.innerHTML = "";
            book_list(list[i]);
        })
    }

    function book_list(data){
        for(let i = 0; i < data.length; i++){
            let url = data[i]['img']
            let title = data[i]['sub1']
            let count = data[i]['reading'];
            let str = `
            <div class="book">
                <div class="book_cover">
                    <img src=${url}>
                </div>
                <div class="title">${title}</div>
                <div class="read_count">${count}</div>
                <a href="">查看详情&gt;&gt;&gt;</a>
            </div>
            `
            dom.innerHTML += str;
        }  
    }

}

