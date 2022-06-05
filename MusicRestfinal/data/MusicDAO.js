const res = require('express/lib/response')
var mysql = require('mysql')
var Album = require('../models/Album')
var artist = require('../models/Artist')
var songs = require('../models/Songs')

class MusicDAO{

    constructor(){

        this.connection = mysql.createConnection({
            host: process.env.EXPRESS_DATABASE_URL,
            port: process.env.EXPRESS_DATABASE_PORT,
            user: process.env.EXPRESS_DATABASE_USER,
            password: process.env.EXPRESS_DATABASE_PASSWORD
        })
    }

    findAllAlbums(callback)
    {
        try{
            //get connection the database
            this.connection.connect();
            //define helper variables
            var albums = [];
            this.connection.query('SELECT * FROM music.album', (err, rows, fields) => {
            
                //rethrow any errors along the way for our code to handle
                if(err)
                    throw err;
                //loop through the returned rows and add the row to the games array
                var rowsLength = rows.length;
                for(let i = 0; i < rowsLength; i++){

                    albums.push(new Album(
                    
                        rows[i].ID,
                        rows[i].TITLE,
                        rows[i].ARTIST,
                        rows[i].DESCRIPTION,
                        rows[i].YEAR,
                        rows[i].IMAGE
                    ))
                }
                //returns results to the caller
                callback(albums);
            })
            //closes connection to the database
            this.connection.end()
        } catch(e){
            //log any errors that appear
            console.log(e); 

            return [];
        } 
    }


    findAlbumById(callback, id)
    {
        try{
            //get connection the database
            this.connection.connect();
            this.connection.query('SELECT * FROM music.album WHERE id = ?', id, (err, rows, fields) => {
            
                //rethrow any errors along the way for our code to handle
                if(err) {                    
                    Logger.debug(err.message);
                    throw (err);
                }

                var album = new Album(
                
                    rows[i].ID,
                    rows[i].TITLE,
                    rows[i].ARTIST,
                    rows[i].DESCRIPTION,
                    rows[i].YEAR,
                    rows[i].IMAGE
                )
                
                //returns results to the caller
                callback(album);
            })
            //closes connection to the database
            Logger.debug('Closing the connection')
            this.connection.end()
        } catch(e){
            //log any errors that appear
            console.log(e); 

            return [];
        } 
    }

    editAlbumById(callback, id, body){
        try{
            //get connection the database
            this.connection.connect();
            this.connection.query('UPDATE album SET TITLE = ?, ARTIST = ?, DESCRIPTION = ?, YEAR = ?, IMAGE = ? WHERE ID = ?', 
            body.title, body.artist, body.description, body.year, body.image, id, (err, rows, fields) => {
                
                if(err){
                    throw(err);
                }
                callback("Success")
            })
            this.connection.end()
        } catch(e){
            console.log(e);

            callback("Failed to Edit Album");
        }
    }
}
module.exports = MusicDAO