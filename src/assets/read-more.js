function readMore(){
    let more = document.querySelectorAll('.read-more');

    for(let i=0;i<more.length;i++){
            more[i].parentNode.classList.toggle('active')
    }
}