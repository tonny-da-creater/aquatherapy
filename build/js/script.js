$(".carousel").slick({dots:!0,centerMode:!0,centerPadding:!1,slidesToShow:3,arrows:!1,slidesToScroll:1,variableWidth:!0,focusOnSelect:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:1,variableWidth:!1}}]});let navMainContainer=document.querySelector(".main-nav__container");navMainContainer.classList.remove("main-nav__container--nojs");let navToggle=document.querySelector(".main-nav__burger-menu"),body=document.querySelector("body");navToggle.addEventListener("click",(function(){navMainContainer.classList.contains("main-nav__container--closed")?(navMainContainer.classList.remove("main-nav__container--closed"),navMainContainer.classList.add("main-nav__container--opened"),body.classList.add("lock")):(navMainContainer.classList.add("main-nav__container--closed"),navMainContainer.classList.remove("main-nav__container--opened"),body.classList.remove("lock"))}));