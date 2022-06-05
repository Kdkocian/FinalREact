import React from 'react';

class Card extends React.Component{

    handleButtonClick = (event) => {
        console.log("id clicked = " + this.props.albumId);
        this.props.onClick(this.props.albumId);
    }

    handleAlbumEdit = (event) => {
        this.props.editAlbum(this.props.albumId);
    }

    render () {
        return (
            <div className="card" style={{width: '18rem'}}>
            <img src={this.props.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.albumtitle}</h5>
                    <p className="card-text">{this.props.albumdescription} </p>
                    <button href="#" onClick={this.handleButtonClick} className="btn btn-primary">Details</button>
                    <button href="#" onClick={this.handleAlbumEdit} className="btn btn-primary">Edit</button>
            </div>
            </div>
        );
    }
}

export default Card;
