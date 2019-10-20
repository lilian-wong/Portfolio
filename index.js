'use strict';

// Page Contents
const sectionContent =[
    {   
        id:'bio',
        title:'Bio',
        content:'I am a web developer located in Pennsylvania. Recently, I completed the Full Stack Web Development Bootcamp at Bloc. You can find my projects in the Projects section. Currently, I am looking for a career change and becoming a Web Developer.'
    },
    {
        id:'about',
        title:'About me',
        content:'I work as an analyst at a bank. I believe there are always different ways to solve a problem. I strive to find the most efficient way to optimize results. I am passionate about using technologies to make our life better. I also love to bake and work on mini electrical projects.'
    },
    {
        id:'portfolio',
        title:'Portfolio',
        content:'Here are my projects:'
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

function startMain(){
    $('#title').replaceWith(`<section id=title>
    <p class="content">Hello, my name is Lilian.</p> 
    <p>I am an analyst and web developer located in Pennsylvania.</p>`); 
}

function newContent(selectedItem){
    sectionContent.forEach(function(item){
        if(item.id===selectedItem){
            $('#title').replaceWith(`<section id=title>
            <h2>${item.title}</h2>
            <p class="content">${item.content}</p>`); 
        }   
    }); 
}
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
        }
    });
}

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
        }
    });
}

function addProjects(){
    $('#title').append(`<p><strong>${projectsList[0].title}</strong></p>
    <p>Description: ${projectsList[0].description}</p>
    <p><img src=${projectsList[0].image} class='screenshot' alt=${projectsList[0].title}></p>
    <span><a href="${projectsList[0].repo}" target="_blank">REPO | </a></span>
    <span><a href="${projectsList[0].live}" target="_blank">LIVE</a></span> 
    <p>Technologies used: ${projectsList[0].tech}</p>`);
}

function refresh(){
    startMain();
}

function loadContents(){
    startMain();
    getNavItem();
    getMenuItem();
}

$(loadContents);