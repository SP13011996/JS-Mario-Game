let config={
    type:Phaser.AUTO,
    scale:{
        mode:Phaser.Scale.FIT,
        width:800,
        height:600,        
    },
    physics:{
        default:'arcade',
        arcade:{
            gravity:{
                y:1000
            }
        }
    },
    backgroundColor:0xffffcc,
    scene:{
        preload:preload,
        create:create,
        update:update
    }

}

let game=new Phaser.Game(config)

function preload(){
    this.load.image("ground","Assets/top-ground.png")
    this.load.image("background","Assets/sky.png")
    this.load.spritesheet("dude","Assets/dude.png",{frameWidth:32,frameHeight:48})
}
function create(){
    var W=game.config.width;
    var H=game.config.height

    //Adding ground
    let ground=this.add.tileSprite(0,H-128,W,128,'ground')
    ground.setOrigin(0,0)

    //Adding background
    let background=this.add.sprite(0,0,"background")
    background.setOrigin(0,0)
    background.displayWidth=W
    background.displayHeight=H
    background.depth=-1

    //Adding Player
    let player=this.physics.add.sprite(100,100,'dude',4)


    this.physics.add.existing(ground,true)
    //ground.body.allowGravity=false
    //ground.body.immovable=true;

    this.physics.add.collider(ground,player)

}
function update(){
    
}
