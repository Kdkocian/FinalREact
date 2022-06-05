var express = require('express');
var router = express.Router();
var AlbumService = require('../service/albumService');
var Album = require('../models/Album');

router.get('/', function(req, res, next){
    var service = new AlbumService()
    service.getAllAlbums((albums) => {
        res.json(albums)
    })
})

router.get('/:artistName', (req, res, next) => {
    var artistName = req.params['artistName']
    var service = new AlbumService()
    service.getArtistByName((album)=> {
        res.json(album)
    }, artistName)
})

router.get('/:id', (req, res, next) => {
    var id = req.params['id'];
    var service = new AlbumService();
    service.getAlbumById((album) =>{
        res.json(album)
    }, id)

router.put('/:id', (req, res, next) =>{
    var id = req.params['id'];
    var service = new AlbumService();
    var body = req.body;
    service.editAlbum((message)=>{
        res.json(message)
    }, id, body)
})
})
module.exports = router;