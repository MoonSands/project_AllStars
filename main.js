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
