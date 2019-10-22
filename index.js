'use strict';

// Page Contents
const sectionContent =[
    {   
        id:'bio',
        title:'Bio',
        content:'I am a web developer located in Pennsylvania. Recently, I completed the Full Stack Web Development Bootcamp at Bloc. You can find my projects in the Portfolio section. Currently, I am looking for a career change and becoming a Web Developer.'
    },
    {
        id:'about',
        title:'About me',
        content:'I work as an analyst at a bank. I believe there are always different ways to solve a problem. I strive to find the most efficient way to optimize results. I am passionate about using technologies to make our life better. I also love to bake and work on mini electrical projects.'
    },
    {
        id:'portfolio',
        title:'Portfolio',
        content:'My projects:'
    },
    {
        id:'contact',
        title:'Contact Info',
        content:'Email: lilianwongai@gmail.com'
    }
];

// List of projects
let projectsList = [
    {
        title:'Quiz App',
        description:'This project is a quiz app. Users click to start the quiz. There is a total of 10 questions. Users will be prompted one question at a time and must answer one of the multiple choices. In the end, users would get a final score and start a new quiz.',
        tech:'HTML, CSS, and JavaScript',
        live:'https://github.com/lilian-wong/quiz-app.git',
        repo:'https://lilian-wong.github.io/quiz-app',
        image: 'images/quizAppScreen.png'
    }
];

// Front page 
function startMain(){
    $('#title').replaceWith(`<section id=title>
    <p class="content">Hello, my name is Lilian.</p> 
    <p>I am an analyst and web developer located in Pennsylvania.</p>`); 
}

// Load page contents
function newContent(selectedItem){
    sectionContent.forEach(function(item){
        if(item.id===selectedItem){
            $('#title').replaceWith(`<section id=title>
            <h2>${item.title}</h2>
            <p class="content">${item.content}</p>`); 
        }   
    }); 
}

//Toggle content info in top navigation
function getNavItem(){ 
    $('.navList li').on('click', function(event){
        let selectedNavItem = $(this).attr('class');
        if(selectedNavItem==='main-screen'){
            refresh();
        }
        else{
            newContent(selectedNavItem);
            if(selectedNavItem==='portfolio'){
                addProjects();
            }
            else if(selectedNavItem==='contact'){
                addContact();
            }
        }
    });
}

//Toggle content info in burger menu 
function getMenuItem(){
    $('.menu-dropdown li').on('click', function(event){
        let selectedMenuItem = $(this).attr('class');
        if(selectedMenuItem==='main-screen'){   
            refresh();
        }
        else{
            newContent(selectedMenuItem);
            if(selectedMenuItem==='portfolio'){
                addProjects();
            }
            else if(selectedMenuItem==='contact'){
                addContact();
            }
        }
    });
}

function getMenu(){
    $('#burger').on('click', function(event){
        $('.menu').toggle();
    });
}

function closeMenu(){
    $('.close').on('click', function(event){
        $('.menu').toggle();
    });
}

// Adding projects content
function addProjects(){
    $('#title').append(`<p><strong>${projectsList[0].title}</strong></p>
    <p>Description: ${projectsList[0].description}</p>
    <p><img src=${projectsList[0].image} class='screenshot' alt=${projectsList[0].title}></p>
    <span><a href="${projectsList[0].repo}" target="_blank">REPO | </a></span>
    <span><a href="${projectsList[0].live}" target="_blank">LIVE</a></span> 
    <p>Technologies used: ${projectsList[0].tech}</p>`);
}

//Links for contact
function addContact(){
    $('#title').append(`<button class="emailButton"><a href="mailto:lilianwongai@gmail.com"> Email Me</a></button>
    <a href="https://github.com/lilian-wong" target=”_blank” class="fa fa-github" style="font-size:24px"></a>
    <a href="https://www.linkedin.com/in/lilian-wong-913159122" target=”_blank” class="fa fa-linkedin-square" style="font-size:24px"></a>
    <a href="https://www.instagram.com/lilspho" target=”_blank” class="fa fa-instagram" style="font-size:24px"></a>`);
}

//Setting for when scroll button appear on screen
function setScroll(){
    $(window).scroll(function(event){
    if($(window).scrollTop()>20){
        topbtn.style.display ='block';
    }
    else{
        topbtn.style.display='none';
    }        
    });
}

//Scroll to the top screen
function getTop(){
    $('topbtn').on('click', function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;    
    });

}
function refresh(){
    startMain();
}

function loadContents(){
    startMain();
    getNavItem();
    getMenu();
    closeMenu();
    getMenuItem();
    setScroll();
    getTop();
}

$(loadContents);