function headerGenerator(){
    var navigatorText = [["My Project","My Resume and skills","Contact"]];
    var navigatorLink =[["./myProject.html","./myResume.html","./contact.html"]]
    var title = "Abraham David";
    var header = document.createElement("header");
    header.innerHTML = "<div id='title'><a href='./index.html'>"+title+"</a></div>";
    header.innerHTML += "<nav id='nav'>"+includeNavigator(navigatorText,navigatorLink)+"</nav>";
    document.body.insertBefore(header,document.body.firstChild);
}






function includeNavigator(listeBloc,listeOfLink){
    if(listeBloc.length != listeOfLink.length){
        return"ERROR INV1";
    }
    theavigatorToInclude = "";
    for(var i =0 ; i < listeBloc.length;i++){
        if(listeBloc[i].length != listeOfLink[i].length){
            // stop if there is no link for a bloc
            return "ERROR INV2";
        }
        theavigatorToInclude += "<div class='navSection'>";
        for(var j = 0 ; j< listeBloc[i].length;j++){
            theavigatorToInclude += '<div class="navObject"><a href='+listeOfLink[i][j]+'>'+listeBloc[i][j]+'</a></div>';
        }
        theavigatorToInclude+= "</div>";
    }
    return theavigatorToInclude;
}