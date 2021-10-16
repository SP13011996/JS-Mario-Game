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
            },
            debug:true
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
    this.load.image("apple","Assets/apple.png")
}

function create(){

    console.log("this",this)

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
    this.player=this.physics.add.sprite(100,100,'dude',4)

    //Adding Physics
    this.physics.add.existing(ground,true)

    //ground.body.allowGravity=false
    //ground.body.immovable=true;

    //Adding apple
    let fruits=this.physics.add.group({
        key:"apple",
        repeat:5,
        setScale:{x:0.1,y:0.1},
        setXY:{x:10,y:0,stepX:100}
    })

    fruits.children.iterate(function(f){
        f.setBounce(Phaser.Math.FloatBetween(0.4,0.7))
    })

    //Creating more platforms
    let platforms=this.physics.add.staticGroup()
    platforms.create(600,100,"ground").setScale(2,0.5).refreshBody()
    platforms.create(400,300,"ground").setScale(2,0.5).refreshBody()
    platforms.create(130,200,"ground").setScale(2,0.5).refreshBody()
    platforms.add(ground)

    //Adding bounce and collision
    this.player.setBounce(0.5)
    this.physics.add.collider(ground,this.player)
    this.physics.add.collider(ground,fruits)
    this.physics.add.collider(platforms,fruits)
    
}

function update(){
    
}
