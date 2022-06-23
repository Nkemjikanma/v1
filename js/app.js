"use strict";

const colors = ['#70C1B3', '#247BA0', '#FFE066', '#F25F5C', '#03071e', '#000000'];


window.addEventListener("DOMContentLoaded", () => {
    const myResume = document.querySelector('.pdf-download');
    const textNameDiv = document.querySelector('.text-name-div');
    const textCreateDiv = document.querySelector('.text-create-div');
    const desc = document.querySelector('p');
    const nav = document.querySelector("nav");
    const links = document.querySelector('.contact-div')
    const textHi_blinker = document.querySelector('#text-hi')
    const leftLinks = document.querySelector('.div-orientation-left')
    const hamburger = document.querySelector('.hamburger');
    const nextpage =  document.querySelector('.next-page');
    //const classes = hamburger.classList;
    //console.log(hamburger.classList)


    /*for (let i = 0; i < hamburger.children.length; i++) {
        console.log(hamburger[i]);
    }*/


    //* Hamburger Menu click listener 
    hamburger.addEventListener('click', (event) => {
        hamburger.classList.toggle('active');
        event.stopPropagation();

        //console.log(hamburger.classList.toggle('active'));

        /* if (result) {
             console.log(result)
             const classes = hamburger.classList;
         } else {
             console.log('something wrong')
         }*/
    });


    //if hamburger {

    //}


    
    //textHi.style.opacity = 0;
    function textHiFunction() {
        const textHi = document.querySelector('.text-hi-div')
        //textHi.style.top = '0'
        //textHi.style.fontSize = '20px'


        textHi.addEventListener("animationend", () => {
            textHi_blinker.style.border = "none";

            textHi.style.top = "0";
            //textHi.style.fontSize = '18px'
            textNameDiv.style.display = 'inline-block';
            textCreateDiv.style.display = 'inline-block';
            desc.style.display = "block";
            nav.style.display = "flex";
            links.style.display = 'flex';
            document.querySelector("html").style.overflowY = "scroll";
            leftLinks.style.bottom = 0;
            nextpage.style.display = "flex";

        })

    };
    textHiFunction();

    //* Open download in new tab
    const src = '/assets/nkemjika_cv.pdf';
    let relAttr = "noreferrer noopener";
    myResume.addEventListener('click', () => {
        myResume.setAttribute('rel', relAttr);

        let redirectW = window.open(src, '_blank');
        redirectW.location;
        //return myResume.getAttribute('class')
    })




    /**
    * * header hide on scroll down, display on scroll up
    * * define 4 variables
    * * create scroll listener
    * * create function to check each time user scrolls
    * * compare curScroll and prevScroll  the direction of scroll ie if curScroll is greater than prev scroll, user has scrolled down
    * * scroll up => curDirection = 1, scroll down => curDirection = 2, initial = 0;
    * * set the direction value to curDirection
    * * compare curDirection and prevDirection
    * * if change in curDirection and preDirection, a function is called to show or hide header
    * 
    *? Example 
    *? step 1: user scrolls down: curDirection 2, prevDirection = 0 > hide header; 
    *? step 2: user scrolls down agains: curDirection 2, preDirection 2 > do nothing as header already hidden; 
    *? step3: user scrolls up: curDirection 1, preDirection is 2, show header 
    */
    //*handle header at certain point
    let headerThresh = 200;
    let toggled;

    let curScroll = window.scrollY;
    let prevScroll = document.documentElement.scrollTop;
    let curDirection = 0;
    let prevDirection = 0;

    let header = document.getElementById("site-header")

    if (!header) {
        console.log('no id found')
    } else {
        console.log('yes id found')
    }

    let checkScroll = function () {
        //* find current scroll postion of user using scrollY or scrollTop
        curScroll = window.scrollY || document.documentElement.scrollTop;
        //console.log(curScroll);

        //*compare curScroll with prevScroll to know direction
        if (curScroll > prevScroll) {
            //* scroll down
            curDirection = 2;
            //console.log(curDirection);
        } else {
            // * scroll up 
            curDirection = 1;
            //console.log(curDirection);
        }

        if (curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        if (toggled) {
            //* assign curDirection to prevDirection, and curScroll to prevScroll
            prevDirection = curDirection;

        }

        prevScroll = curScroll;
        //header.style.backgroundColor = "red";
    }

    let toggleHeader = function () {
        toggled = true;
        if (curDirection == 2 && curScroll > headerThresh) {
            header.classList.add('hide');
        } else if (curDirection == 1) {
            header.classList.remove('hide');
        } else {
            toggled = false;
        }
        return toggled;

    }
    window.addEventListener("scroll", checkScroll);

});








