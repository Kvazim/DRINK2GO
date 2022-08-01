const burger=document.querySelector(".toggle"),nav=document.querySelector(".navigation"),pageHeader=document.querySelector(".page-header"),promo=document.querySelector(".promo"),slideItem=document.querySelectorAll(".slider"),mapNojs=document.querySelector(".map"),mapCanvas=document.querySelector(".map__canvas");let i=0;const ZOOM_MAP=17,CENTER_MAP={lat:59.96832,lng:30.31756},LeafletParameters={TILE_LAYER:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",ATTRIBUTION:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'};nav.classList.remove("navigation--nojs"),pageHeader.classList.remove("page-header--nojs"),promo.classList.remove("promo--nojs"),mapNojs.classList.remove("map--nojs"),burger.addEventListener("click",(function(e){burger.classList.toggle("toggle--activ"),nav.classList.toggle("navigation--close")}));const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0,clickableClass:"swiper-pagination-clickable"},navigation:{nextEl:".promo__button--next",prevEl:".promo__button--prew"}}),map=L.map(mapCanvas).on("load",(()=>{})).setView(CENTER_MAP,17);L.tileLayer(LeafletParameters.TILE_LAYER,{attribution:LeafletParameters.ATTRIBUTION}).addTo(map);const mainPinIcon=L.icon({iconUrl:"../img/map-pin.svg",iconSize:[38,50],iconAnchor:[19,50]}),marker=L.marker(CENTER_MAP,{icon:mainPinIcon});marker.addTo(map);