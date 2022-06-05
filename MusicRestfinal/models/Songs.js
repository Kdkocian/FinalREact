class Songs{

    constructor(id, name, number, lyrics){
        this.id = id;
        this.name = name;
        this.number = number;
        this. lyrics = lyrics;
    }

    get Id(){
        return this.id;
    }

    set Id(id){
        this.id = id;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        this.name = name;
    }

    get Number(){
        return this.number
    }

    set Number(number){
        this.number = number;
    }

    get Lyrics(){
        return this.lyrics;
    }

    set Lyrics(lyrics){
        this.lyrics = lyrics;
    }
}
module.export = Songs;