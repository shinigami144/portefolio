class Game{
    constructor(multiplayer){
        this.h = 10;
        this.w = 10;
        this.bord = [];
        this.P1Actif = true;
        this.Multiplayer = multiplayer;
        this.bordElement = document.getElementById("bord");
        this.P1Score = 0;
        this.P2Score = 0;
        this.ordiPossiblePlay = new Map();
        this.constructbord();
        this.visualBordConstructor();
    }
    clickOn(index){
        var indice = this.convertIndexToXY(index);
        if(this.bord[indice[0]][indice[1]][1] == 0){
            this.clickOnWithIndice(indice[0],indice[1])
            if(!this.Multiplayer){
                this.OrdiPlay();
            }
        }
    }

    clickOnWithIndice(x,y){
        var playervalue = 0;
        if(this.P1Actif){
            playervalue = 1;
        }
        else{
            playervalue = 2;
        }
        this.changeScore(x,y);
        this.bord[x][y] = [playervalue,playervalue];
        this.bordElement.childNodes[x*this.h+y].textContent = "X";
        this.changeColor(x,y,playervalue);
        this.P1Actif = !this.P1Actif;
        this.ordiPossiblePlay.delete(x*this.h+y);
        this.gameEnd();
        // verifier si ordipossibleplay siza = 0
    }

    OrdiPlay(){
        var i = Math.floor(Math.random()*(this.ordiPossiblePlay.size));
        var coup = Array.from(this.ordiPossiblePlay.keys())[i];
        this.clickOnWithIndice(this.ordiPossiblePlay.get(coup)[0],this.ordiPossiblePlay.get(coup)[1]);
    }

    changeScore(x,y){
        if(this.P1Actif){
            if(this.bord[x][y][0] == 2){
                this.P1Score++;
                this.P2Score--;
            }
            else if(this.bord[x][y][0] == 0){
                this.P1Score++;
            }
        }
        else{
            if(this.bord[x][y][0] == 1){
                this.P2Score++;
                this.P1Score--;
            }
            else if(this.bord[x][y][0] == 0){
                this.P2Score++;
            }
        }
        document.getElementById("player1Score").value = this.P1Score;
        document.getElementById("player2Score").value = this.P2Score;
    }

    changeColor(x,y,playervalue){
        var color = "hsl("+(120+playervalue*120)+",100%,50%)";
        for(var i = 0;i<this.h;i++){
            console.log(this.bordElement.childNodes[i*this.h+y]);
            this.bordElement.childNodes[i*this.h+y].style.backgroundColor = color;
            this.changeScore(i,y);
            this.bord[i][y] = [playervalue,Math.max(0,this.bord[i][y][1])];
        }
        for(var i = 0;i<this.w;i++){
            this.bordElement.childNodes[x*this.h+i].style.backgroundColor = color;
            this.changeScore(x,i);
            this.bord[x][i] = [playervalue,Math.max(0,this.bord[x][i][1])];
        }
    }

    convertIndexToXY(index){
        var x = Math.floor(index/this.h);
        var y = index - (x*10);
        console.log(this.bord[x][y]);
        return [x,y];
    }

    constructbord(){
        for(var i=0;i<this.h;i++){
            var l = [];
            for(var j = 0;j<this.w;j++){
                this.ordiPossiblePlay.set(i*this.h+j,[i,j]);
                l.push([0,0]);
            }
            this.bord.push(l);
        }
    }

    visualBordConstructor() {
        this.bordElement.style.gridTemplateColumns = ("1fr ").repeat(this.w);
        var tab = "";
        for(var i = 0; i< this.h*this.w;i++){
            tab+='<div onclick="game.clickOn('+i+')"> </div>';
        }
        this.bordElement.innerHTML = tab;
    }

    gameEnd(){
        console.log(this.ordiPossiblePlay.size);
        if(this.ordiPossiblePlay.size == 0){
            document.getElementById("restartButton").style.display = "block";
        }
    }
}

/*
1) verifier si case value < 1
2) verifier si sur même ligne / colone que last value
3) verifier si ne passe pas par case déja value

*/