function studio_bg(){
    let studio_elem = document.querySelector('.main-studio');
    let bgs = document.getElementsByClassName('studio_bg');
    studio_elem.style.backgroundImage=`linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%),url(${bgs[0].getAttribute('src')})`;
    var i=1;
    let timerfunc=function(a,b){
        a.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%),url(${b[i].getAttribute('src')})` ;
        (i < b.length-1) ? i++ : i=0 ;
    }
    setInterval(timerfunc, 10000, studio_elem, bgs); 
}

function servs_bg(){
    let servs = document.getElementsByClassName('servs__img');
    let servs_img= document.getElementsByClassName('servs__img_bg');

    if (servs.length==servs_img.length){
        console.log(servs.length);
        for (let i=0; i<servs.length; i++){
            console.log(servs_img[i].getAttribute('src'));
            servs[i].style.backgroundImage=`url(${servs_img[i].getAttribute('src')})`;
        }
    }
}
