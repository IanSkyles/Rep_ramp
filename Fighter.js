/**
 * Created by Mike on 5/10/16.
 */

function Fighter(game, fighterName, ASSET_MANAGER) {


    if(fighterName === "tedCruz"){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 157, jumpingWidth:234,punchingWidth: 295, lowKickingWidth: 285, duckingWidth:  192
            , walkRightWidth: 144, walkingLeftWidth: 144.15, highKickingWidth: 276}
        // this.width = this.widthOptions.standingWidth;
        //TODO add height array
        this.heightOptions = {standingHeight:292, jumpingHeight: 311, punchingHeight:317, lowKickingHeight:315, duckingHeight:294
            , walkRightHeight: 292, walkLeftHeight:292, highKickingHeight:317};
        // this.height = this.heightOptions.standingHeight;
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzStanding.png"), 0, 0, 157, 292, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzJump.png"), 0, 0, 234, 311, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzPunch.png"), 0, 0, 295, 317, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzLoKick.png"), 0, 0, 285, 315, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/cruzWalkRight.png"), 0, 0, 144, 292, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzWalkLeft.png"), 0, 0, 144.15, 292, 0.06, 20, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzHiKick.png"), 0, 0, 276, 317, 0.06, 12, false, false);
        //this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Cruz/CruzBlock.png"), 0, 0, 436, 321, 0.06, 12, false, false);
        //blocking animation not yet made for cruz

    }else if(fighterName ==="hillaryClinton"){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 185, jumpingWidth:288,punchingWidth: 312, lowKickingWidth: 270, duckingWidth:  192
            , walkRightWidth: 262, walkingLeftWidth: 262, highKickingWidth: 344, blockingWidth: 436};
        // this.width = this.widthOptions.standingWidth;
        //TODO add height array

        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonStanding.png"), 0, 0, 185, 299, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonJump.png"), 0, 0, 288, 337, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonPunch.png"), 0, 0, 312, 297, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonLoKick.png"), 0, 0, 270, 299, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);//FIXXXX LATTE
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkRight.png"), 0, 0, 262, 326, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonWalkLeft.png"), 0, 0, 265.5, 326, 0.06, 20, false, false);
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonHiKick.png"), 0, 0, 344, 322, 0.06, 12, false, false);
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Clinton/ClintonBlock.png"), 0, 0, 436, 321, 0.06, 12, false, false);
    }else if(fighterName === "donaldTrump"){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 270, jumpingWidth:242,punchingWidth: 434, lowKickingWidth: 429, duckingWidth:  192
            , walkRightWidth: 192, walkingLeftWidth: 192, highKickingWidth: 488, blockingWidth: 388};
        // this.width = this.widthOptions.standingWidth;
        //TODO add height array
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpStanding.png"), 0, 0, 270, 325, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpJump.png"), 0, 0, 242, 353, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpPunch.png"), 0, 0, 434, 345, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpLoKick.png"), 0, 0, 429, 341, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false);//FIIIIXXXX LATTE
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWalkRight.png"), 0, 0, 192, 326, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpWalkLeft.png"), 0, 0, 189.25, 326, 0.06, 20, false, false);//might need fixed. looks okay tho.
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpHiKick.png"), 0, 0, 488, 350, 0.06, 12, false, false);
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Trump/TrumpBlock.png"), 0, 0, 388, 424, 0.06, 12, false, false);
    }else if(fighterName === "bernieSanders"){
        //TODO add blockingWidth
        this.widthOptions = {standingWidth: 177, jumpingWidth:285,punchingWidth: 369, lowKickingWidth: 358, duckingWidth:  192
            , walkRightWidth: 182, walkingLeftWidth: 182, highKickingWidth: 440, blockingWidth: 470};
        // this.width = this.widthOptions.standingWidth;
        //TODO add height array
        this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersStanding.png"), 0, 0, 177, 305, 0.099, 6, true, false);
        this.jumpAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersJump.png"), 0, 0, 285, 325, 0.06, 20, false, false);
        this.punchingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersPunch.png"), 0, 0, 369, 426, 0.06, 12, false, false);
        this.lowKickingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersLoKick.png"), 0, 0, 358, 316, 0.06, 12, false, false);
        this.duckingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersDuck.png"), 0, 0, 192, 294, 0.06, 12, false, false); //FIIIX LATTE
        this.walkRightAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWalkRight.png"), 0, 0, 182, 313, 0.06, 20, false, false);
        this.walkLeftAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersWalkLeft.png"), 7, 0, 179.5, 313, 0.06, 20, false, false); //needs a little fix. 
        //maybe redo walk left spritesheete sheet. seems a little off, but might be able to fix with width input. 
        this.highKickAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersHiKick.png"), 0, 0, 440, 343, 0.06, 12, false, false);
        this.blockingAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Sanders/SandersBlock.png"), 0, 0, 470, 335, 0.06, 12, false, false);
    }

    this.jumping = false;
    this.punching = false;
    this.ducking = false;
    this.walkLeft = false;
    this.walkRight = false;
    this.lowKicking = false;
    this.highKicking = false;
    this.blocking = false;

    //health variable
    this.health  = 100;

    //speed variable
    this.speed = 0;

    this.radius = 100;
    this.ground = 300;
    Entity.call(this, game, 0, 300);
}


Fighter.prototype = new Entity();

Fighter.prototype.constructor = Fighter;

Fighter.prototype.update = function(){
    //jumping logic
    //jumping logic
    if (this.game.w) {
        this.jumping = true;
    }else if(this.game.p){
        console.log("p pressed")
        this.punching = true;
    } else if(this.game.i) {
        this.lowKicking=true;
    } else if(this.game.o) {
        this.highKicking=true;
    } else if(this.game.s) {
        this.ducking=true;
    } else if (this.game.d) {
        this.walkRight = true;
    }else if(this.game.a){
        this.walkLeft = true;
    }else if(this.game.q){
        this.blocking = true;
    }

    if (this.jumping) {
        // this.width = this.widthOptions.jumpingWidth;
        // this.height = this.heightOptions.jumpingHeight;
        if (this.jumpAnimation.isDone()) {
            this.jumpAnimation.elapsedTime = 0;
            this.jumping = false;
        }

        var jumpDistance = this.jumpAnimation.elapsedTime / this.jumpAnimation.totalTime;

        var totalHeight = 175;

        if (jumpDistance < 0.5)
            jumpDistance = 1 - jumpDistance;

        //var height = jumpDistance * 2 * totalHeight;
        var height = totalHeight*(-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = this.ground - height;
    } else if(this.punching){
        // this.width = this.widthOptions.punchingWidth;
        if(this.punchingAnimation.isDone()){
            console.log("low punch done");
            this.punchingAnimation.elapsedTime = 0;
            this.punching = false;
        }
    } else if(this.lowKicking){
        //Sets the width for the bounding box
        // this.width = this.widthOptions.lowKickingWidth;
        if(this.lowKickingAnimation.isDone()){
            console.log("low kick done");
            this.lowKickingAnimation.elapsedTime = 0;
            this.lowKicking = false;
        }
    } else if(this.ducking) {
        // this.width = this.widthOptions.duckingWidth;
        if(this.duckingAnimation.isDone()) {
            console.log("ducking is done");
            this.duckingAnimation.elapsedTime=0;
            this.ducking=false;
        }
    } else if(this.highKicking) {
        // this.width = this.widthOptions.highKickingWidth;
        if(this.highKickAnimation.isDone()) {
            console.log("high kicking is done");
            this.highKickAnimation.elapsedTime=0;
            this.highKicking=false;
        }
    } else if(this.walkRight){
        // this.width = this.widthOptions.walkRightWidth;
        console.log("Walking");
        if(this.walkRightAnimation.isDone()){
            this.walkRightAnimation.elapsedTime = 0;
            this.walkRight = false;
        }
        this.x = this.x + 1;
        this.y = this.ground;

    }else if (this.walkLeft){
        // this.width = this.widthOptions.walkingLeftWidth;
        console.log("Walking left!");
        if(this.walkLeftAnimation.isDone()){
            this.walkLeftAnimation.elapsedTime = 0;
            this.walkLeft = false;
        }
        this.x = this.x - 1;
        this.y = this.ground;
    } else if (this.blocking){
        if(this.blockingAnimation.isDone()) {
            console.log("blocking is done");
            this.blockingAnimation.elapsedTime=0;
            this.blocking=false;
        }
    } else{
        // this.width = this.widthOptions.standingWidth;
        // this.height = this.heightOptions.standingHeight;
    }

    Entity.prototype.update.call(this);
}

Fighter.prototype.draw = function (ctx) {
    if (this.jumping) {
        // this.jumpAnimation.d
        this.jumpAnimation.drawFrame(this.game.clockTick, ctx, this.x + 17, this.y - 34);
    } else if (this.punching){
        console.log("punching");
        this.punchingAnimation.d;
        this.punchingAnimation.drawFrame(this.game.clockTick, ctx, this.x , this.y);
    } else if (this.lowKicking) {
        console.log("low kicking");
        this.lowKickingAnimation.d;
        this.lowKickingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    } else if (this.highKicking) {
        console.log("high kicking");
        this.highKickAnimation.d;
        this.highKickAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    } else if (this.ducking) {
        console.log("ducking");
        this.duckingAnimation.d;
        this.duckingAnimation.drawFrame(this.game.clockTick,ctx,this.x,this.y);
    }else if (this.walkRight){
        console.log("walking right");
        this.walkRightAnimation.d;
        this.walkRightAnimation.drawFrame(this.game.clockTick, ctx, this.x +5, this.y);
    } else if (this.walkLeft){
        console.log("Walking Left");
        this.walkLeftAnimation.d;
        this.walkLeftAnimation.drawFrame(this.game.clockTick, ctx, this.x -5, this.y);
    } else if(this.blocking){
        console.log("Blocking");
        this.blockingAnimation.d;
        this.blockingAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y);      
    } else {
        console.log("standing still");
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
    Entity.prototype.draw.call(this);
}

//TODO build bounding boxes after adding height arrays
// checks to see if a punch has collided
Fighter.prototype.punch = function (other) {
    var thisBox = {x:this.x, y:this.y, width: this.width, height:this.height}
    var otherBox = {x: other.x, y: other.y, width:other.width, height:other.height}
}


Fighter.prototype.highKick = function (other) {
    if(this.highKicking){

    }
}

Fighter.prototype.lowKick = function (other) {
    if(this.lowKicking){

    }
}