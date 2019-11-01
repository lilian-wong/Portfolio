'use strict';

// Page Contents
const sectionContent =[
    {
        id:'about',
        title:'About Me',
        content:'My name is Lilian. I am a web developer. I am also an analyst at a bank. Recently, I enrolled in the Full Stack Web Development Bootcamp at Bloc. You can find my projects in the Portfolio section. Currently, I am looking for a career change and becoming a Web Developer. I love problem-solving. I am passionate about web development. In my spare time, I love to bake and work on mini electrical projects.'
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
    $('.msg').after(`
    <div class="seperator1">
    <section class="content" id=${sectionContent[0].id}>
    <h3 class="section-title">${sectionContent[0].title}</h3>
        <p>${sectionContent[0].content}</p>
    </section>
    </div>` + 
    addProjects());  
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
    <div class="seperator2">
    <section class="content" name=${sectionContent[1].id} id=${sectionContent[1].id}>
    <h3 class="section-title">${sectionContent[1].title}</h3>
    <h4>${projectsList[0].title}</h4>
    <h4>Description: ${projectsList[0].description}</h4>
    <h4>Technologies used: ${projectsList[0].tech}</h4>
    <div class="project_area">
    <span><a href="${projectsList[0].repo}" target="_blank" class="projectLinks">REPO</a></span>
    <span><a href="${projectsList[0].live}" target="_blank" class="projectLinks">LIVE</a></span> 
    <iframe id="quizApp" title="Quiz App"
    title="quizApp" src="https://lilian-wong.github.io/quiz-app/"
    </iframe>
    </div>
    </section>
    </div>`;

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

function loadContents(){
    startMain();
    getMenu();
    closeMenu();
    setScroll();
    getTop();
}

$(loadContents);