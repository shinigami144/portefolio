
var ProjectLanguage = ["Html - Css - Js","Html - Css - Js","C#-Unity","C#-Unity","C#-Unity","Js-SrpgStudio"];
var ProjectMember = ["1","1","1","1","1","1","4"];
var ProjectId = ["portefolio","KpmTaxation","HiraganaKatakana","PrototypeGacha","SpaceLearning","Tactcal","InTheBlack"];
var MapDescription = new Map();
var functionList = [Description_portefolio,Description_kpm,Description_Hiragana,Description_PrototypeGacha,Description_PrototypeSpace,Description_tactical,Description_IntheBlack]
constructMapDescription();
function constructMapDescription(){
    for(var i = 0;i<ProjectId.length;i++){
        MapDescription.set(ProjectId[i],functionList[i]);
    }
}




function WarningInfo(){
    return "";
}

function Description_portefolio(){
    var text = "<p>This is the site you are currently on.</p>";
    text+= "<p>Realize in 2 weeks alone.</p>";
    text+= "<p>Its primary purpose was a small site hosted statically via githubpage to just display my projects</p>";
    text+= "<p>With the static system, I had to find a method to be able to create pages a little more dynamic because of the info contained in the GET and the javascript</p>"
    return text;
}
function Description_kpm(){
    var text = "<p>This is a page of the site https://logistics.kpm-group.com/.</p>";
    text+= "<p>Realize in 1 mouth alone.</p>";
    text+= "<p>I did that for 2 reason.</p>";
    text+= "<p>The first was to have a real project with client and that doesn't finish with a prototype</p>";
    text+= "<p>The second was to test my skill in real condition in html-css-js</p>";
    text+= "<p>With this project i have seen that some problem comes from the inplementation and you need to adapt your code to the previous code</p>";
    text+= "<p>I have also help for the creation the intégration of the new site who is in developement on the link <a>https://beta.kpm-group.com/home</a>";
    return text;
}
function Description_Hiragana(){
    var text = "<p>This is a serious game for android to help users to learn hiragana and katakana.</p>";
    text+= "<p>Realize in 4 mouth alone.</p>";
    text+= "<p>This is a prototype</p>";
    text+= "<p>The systeme use mask to see if you wrote the caracter correctly</p>";
    text+= "<p>If the project needed to be more than a prototype then I would train a IA to replace the mask</p>";
    text+= "<p>The prototype will be on github soon</p>"
    return text;
}

function Description_PrototypeGacha(){
    var text = "<p>This is a prototype create for fun.The goal is to defend your tower with summoned creature and destroy the tower from the other side</p>";
    text+= "<p>Realize in 6 mounth alone.</p>";
    text+= "<p>The objectif was for me to learn about the animator in unity with a gacha system.</p>";
    text+= "<p>After all this, i don't think that i am a master with the animator but i know of it works</p>";
    text+= "<p>The prototype will be on github soon</p>"
    return text;
}

function Description_PrototypeSpace(){
    var text = "<p>This is a serious game prototype create with the objectif to display it on show.</p>";
    text+= "<p>The player goal is to aswers to the question ( is this planet/sun avaible for humain life )</p>"
    text+= "<p>I choose to divide the project with two system, one for the show with infinite play time.</p>";
    text+= "<p>The other was for solo play with a scoring and limited number of answers</p>";
    text+= "<p>Because it is a serious games i decide to use true data form the NASA.</p>";
    text+= "<p>The prototype is on my itchio : <a></a></p>"
    return text;
}

function Description_tactical(){
    var text = "<p>This is a Tactical-Rpg create in 8 mounth alone</p>";
    text+= "<p>The project was first create for learn srpg-studio ( to know if it is usefull for future tactical-rpg )</p>"
    text+= "<p>In second the project let me train my balencing skill</p>";
    text+= "<p>it was hard but realy fun to create</p>";
    text+= "<p>The prototype will be on github soon</p>"
    return text;
}

function Description_IntheBlack(){
    var text = "<p>project with which we won the brussels game jam 2023</p>";
    text+= "<p>the objective was to force the player to play with only 1 of his senses : hearing, so all the game is played in front of a black screen </p>"
    text+= "<p> You can try the game following this link <a>https://ultrashokk.itch.io/dans-le-noir</a></p>"
    return text;
}
