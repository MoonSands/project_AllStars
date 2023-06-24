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


/* let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
} */

function popups(){
    let popup_btns = document.getElementsByClassName('popup_btn');
    let popup_banners= document.getElementsByClassName('popup-wrapper'); 
    console.log(popup_btns.length);
    console.log(popup_banners.length);
    for (let j=0 ;j<popup_btns.length;j++){
        for (let i=0; i<popup_banners.length;i++){
            if (popup_btns[j].getAttribute('name')==popup_banners[i].getAttribute('name')){
                popup_btns[j].onclick = function(){
                    popup_banners[i].classList.remove('hidden');
                    document.body.style.overflow='hidden';
                }
                popup_banners[i].onclick = function(){
                    popup_banners[i].classList.add('hidden');
                    document.body.style.overflow='';
                }
                popup_banners[i].querySelector('close-button').onclick = function(){
                    popup_banners[i].classList.add('hidden');
                    document.body.style.overflow='';
                }
                break;
            }
            else{
                continue;
            } 
        }
    } 
}

popups();