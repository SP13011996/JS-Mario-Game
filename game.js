let config={
    type:Phaser.AUTO,
    scale:{
        mode:Phaser.Scale.FIT,
        width:800,
        height:600,        
    },
    backgroundColor:0xff00cc,
    scene:{
        preload:preload,
        create:create,
        update:update
    }

}

let game=new Phaser.Game(config)

function preload(){
    this.load.image("ground","Assets/top-ground.jpg")
}
function create(){
    
}
function update(){
    
}