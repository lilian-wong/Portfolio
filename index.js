'use strict';

// Page Contents
const sectionContent =[
    {
        id:'about',
        title:'About Me',
        content:'I currently work as an analyst at a bank. I recently enrolled in the Full Stack Web Development Bootcamp at Bloc. You can find my projects in the Portfolio section. Currently, I am looking for a career change and becoming a Web Developer. I love problem-solving. I am passionate about web development. I also love to bake and work on mini electrical projects.'
    },
    {
        id:'portfolio',
        title:'Portfolio',
        content:'My projects:'
    }
];

// List of projects
let projectsList = [
    {
        title:'Quiz App',
        description:'This project is a quiz app. Users click to start the quiz. There is a total of 10 questions. Users will be prompted one question at a time and must answer one of the multiple choices. In the end, users would get a final score and start a new quiz.',
        tech:'HTML, CSS, and JavaScript',
        live:'https://lilian-wong.github.io/quiz-app/',
        repo:'https://github.com/lilian-wong/quiz-app',
        image: 'images/quizAppScreen.png'
    }
];

// Set front page 
function startMain(){
    $('header').after(`
    <p class="front_msg">Hello, my name is Lilian.</p> 
    <p class="front_msg">I am an analyst and web developer located in Pennsylvania.</p>
    <section class="content" id=${sectionContent[0].id}>
    <h3>${sectionContent[0].title}</h3>
    <p>${sectionContent[0].content}</p>
    </section>` + addProjects());  
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
    return `
    <section class="content" id=${sectionContent[1].id}>
    <h3>${sectionContent[1].title}</h3>
    <p><h4>${projectsList[0].title}</h4></p>
    <p>Description: ${projectsList[0].description}</p>
    <p>Technologies used: ${projectsList[0].tech}</p>
    <span><a href="${projectsList[0].repo}" target="_blank" class="projectLinks">REPO</a></span>
    <span><a href="${projectsList[0].live}" target="_blank" class="projectLinks">LIVE</a></span> 
    <p><iframe id="quizApp" title="Quiz App"
    title="quizApp" src="https://lilian-wong.github.io/quiz-app/"
    </iframe></p>
    </section>`;
    
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
    $('.main-screen').on('click', function(event){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;    
    });
}

function loadContents(){
    startMain();
    getMenu();
    closeMenu();
    setScroll();
    getTop();
    refresh();
}

$(loadContents);