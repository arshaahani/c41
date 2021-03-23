class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
        this.rank=null
    }
    getCount(){
        var databaseref=database.ref("playercount")
        databaseref.on("value",function(data){
    playerCount=data.val()
        })
    }
    static getCarsAtEnd(){
        var databaseref=database.ref("carsAtEnd")
        databaseref.on("value",(data)=> {
       this.rank=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    updateCarsAtEnd(rank){
        database.ref("/").update({
            carsAtEnd:rank
        })
    }
    update(){
    
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayersinfo(){
        var playerinforef=database.ref("players")
        playerinforef.on("value",function(data){
            allPlayers=data.val()
        })
    }
    static resetplayerinfo(){
        var playerref=database.ref("/").set({
            gamestate:0,
            playercount:0,
            carsAtEnd:0
        })
    }
}