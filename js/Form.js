class Form{
    constructor(){
        //this.name=null;
        this.input=createInput("Name");
        this.title=createElement("h1");
        this.button=createButton("Play");
    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }

    display(){
        this.title.html("Pokemon Rumble");
        this.title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            this.hide();
            player.name = this.input.value();
            gameState=1;
            console.log(player.name);
          });
    }
}