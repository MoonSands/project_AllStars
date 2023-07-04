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

function serv_bg(){
    let serv = document.querySelector('.main-section');
    let serv_bg = document.querySelector('.serv_bg');
    serv.style.backgroundImage=`linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%),url(${serv_bg.getAttribute('src')})`;
}

function servs_bg(){
    let servs = document.getElementsByClassName('servs__img');
    let servs_img= document.getElementsByClassName('servs__img_bg');

    if (servs.length==servs_img.length){
        for (let i=0; i<servs.length; i++){
            servs[i].style.backgroundImage=`url(${servs_img[i].getAttribute('src')})`;
        }
    }
}

function card_hover(name){
    let cards = document.getElementsByClassName(name);
    for (let i=0; i<cards.length; i++){
    if (document.body.clientWidth>'1100'){
        cards[i].addEventListener('mouseover', ()=>{
            cards[i].querySelector('.section-textbox').querySelector('.section__link').classList.remove('hidden');
        });
        cards[i].addEventListener('mouseout', ()=>{
                cards[i].querySelector('.section-textbox').querySelector('.section__link').classList.add('hidden');
        });
    }
    else{
        cards[i].querySelector('.section-textbox').querySelector('.section__link').classList.remove('hidden');
    }}
    
}

function popups(){
    let contact_popup = document.getElementsByClassName('contacts')[0];
    let popup_banners = document.getElementsByClassName('popup-wrapper');

    for (let i=0;i<popup_banners.length;i++){
            popup_banners[i].onclick = ()=>{
                popup_banners[i].classList.add('hidden');
            document.body.style.overflow='';
        }
        popup_banners[i].querySelector('.close-button').onclick = ()=>{
            popup_banners[i].classList.add('hidden');
            document.body.style.overflow='';
        }
        contact_popup.onclick = ()=>{
            console.log(1);
            popup_banners[i].classList.remove('hidden');
            document.body.style.overflow='hidden';
        }  
    }
        
    let booking_btn=document.getElementsByClassName('booking-btn')[0];
    let booking_banner=document.getElementsByClassName('booking')[0];

    if(booking_btn){
       booking_btn.onclick = ()=>{
        if(booking_banner.classList.contains('hidden')){
            booking_banner.classList.remove('hidden');
        }
        else{
           booking_banner.classList.add('hidden'); 
        }
    } 
    }
    

    let menu_btn=document.getElementsByClassName('menu-btn')[0];
    let menu_banner=document.getElementsByClassName('menu-wrapper')[0];

    menu_btn.onclick = ()=>
        {
            menu_banner.classList.remove('hidden');
            document.body.style.overflow='hidden';
        }
        menu_banner.querySelector('.close-button').onclick = ()=>{
               menu_banner.classList.add('hidden'); 
               document.body.style.overflow='';
            }
             
        

}



popups();