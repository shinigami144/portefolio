
var ProjectLanguage = ["Html - Css - Js"];
var ProjectMember = ["1"];
var ProjectId = ["portefolio"];
var MapDescription = new Map();
var functionList = [Description_portefolio]
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

