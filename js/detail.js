window.addEventListener("load", function(){
    let val = window.location.href;
    val = val.split('\?')[1].split('\&');
    let id = val[0].split("=")[1];
    let kind = val[1].split("=")[1];
    let list = [data1, data2, data3, data4]
    let book = list[kind][id];

    let title = document.querySelector(".title");
    let catalog = document.querySelector(".catalog");
    let sub1 = document.querySelector(".sub1");
    let reading = document.querySelector(".reading");
    let bytime = document.querySelector(".bytime");
    let sub2 = document.querySelector(".sub2");
    let img = document.querySelector(".book_img img")
    let book_kind_container = document.querySelector(".book_kind_container")
    
    title.innerHTML = book["title"]
    catalog.innerHTML = book["catalog"]
    sub1.innerHTML = book["sub1"]
    reading.innerHTML = book["reading"]
    bytime.innerHTML = book["bytime"]
    sub2.innerHTML = book["sub2"].replaceAll("\n", "<br>&nbsp;&nbsp;&nbsp;&nbsp;")
    img.src = book['img']
    
    let len = id >= 15 ? list[kind].length : 15;
    
    for(let i = (id<=15 ? 0 : 15); i < len; i++){
        let str;
        if(id == i){
            str = `
                <a style="color:red;" href="../pages/book_detail.html?id=${i}&kind=${kind}">${list[kind][i]["title"]}</a>
            `
        }else{
            str = `
                <a href="../pages/book_detail.html?id=${i}&kind=${kind}">${list[kind][i]["title"]}</a>
            `
        }
        
        book_kind_container.innerHTML += str;
    }
})