import React from 'react';
import Card from './Card';

class AlbumList extends React.Component {

    handleSelectOne = (albumId) => {
        console.log("Selected id = ", albumId);
        this.props.onClick(albumId);
    }

    handleEditAlbum = (albumId) => {
        console.log("Edit this id = ", albumId);
        this.props.onEditAlbum(albumId);
    }

    render() {
        const albums = this.props.albumList.map(
            (album) => {
                return (<Card
                    albumId = {album.id}
                    key = {album.id}
                    albumtitle= {album.title}
                    albumdescription = {album.description}
                    buttontext = "OK"
                    imageurl = {album.image}
                    onClick = {this.handleSelectOne}
                    editAlbum = {this.handleEditAlbum}
                    />);
            }
        );
        return ( <div className="container">
        {albums}
        </div>);
    }
}
export default AlbumList