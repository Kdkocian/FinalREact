class Album{

    constructor(id, title, artist, description, year, image){
        
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.description = description;
        this.year = year;
        this.image = image;
    }

    get Id(){
        return this.id;
    }

    set Id(id){
        this.id = id;
    }

    get Title(){
        return this.title;
    }

    set Title(title){
        this.title = title;
    }

    get Artist(){
        return this.artist;
    }

    set Artist(artist){
        this.artist = artist;
    }

    get Description(){
        return this.description;
    }

    set Description(description){
        this.description = description;
    }

    get Year(){
        return this.year;
    }

    set Year(year){
        this.year = year;
    }

    get Image(){
        return this.image;
    }

    set Image(image){
        this.image = image;
    }
}
module.exports = Album;