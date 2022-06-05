const MusicDAO = require('../Data/MusicDAO')

class AlbumService{

    getAllAlbums(callback){
        var dao = new MusicDAO();
        return dao.findAllAlbums(callback);
    }

    getArtistByName(callback){
        var dao = new MusicDAO();
        return dao.findArtistByName(callback);
    }

    getAlbumById(callback, id){
        var dao = new MusicDAO();
        return dao.findAlbumById(callback, id);
    }

    editAlbum(callback, id, body){
        var dao = new MusicDAO();
        return dao.editAlbumById(callback, id, body);
    }
}
module.exports = AlbumService