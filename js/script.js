$(".carousel").slick({dots:!0,centerMode:!0,centerPadding:!1,slidesToShow:3,arrows:!1,slidesToScroll:1,focusOnSelect:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:2,centerMode:!1}},{breakpoint:768,settings:{slidesToShow:1}}]});let navToggle=document.querySelector(".burger-menu"),body=document.querySelector("body"),nav=document.querySelector(".main-nav");navToggle.addEventListener("click",(function(){nav.classList.contains("main-nav--closed")?(nav.classList.remove("main-nav--closed"),this.classList.add("burger-menu--open"),body.classList.add("lock")):(nav.classList.add("main-nav--closed"),this.classList.remove("burger-menu--open"),body.classList.remove("lock"))}));