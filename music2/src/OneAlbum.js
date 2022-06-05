import React from 'react';

class OneAlbum extends React.Component{
    render() {
        console.log("Props from OneAlbum", this.props);
        return(
            <div className="container">
                <h2>Album Details from {this.props.albumtitle} </h2>
                    <div className= "row">
                        <div className= "col col-sn-3 " >
                            <div className="card">
                                <img src={this.props.albumimage} className="card-img-top" alt={this.props.albumtitle} />
                                <div className='card-body'>
                                    <h5 className="card-title">{this.props.albumtitle}</h5>
                                    <p className="card-text">{this.props.albumdescription}</p>
                                    <div className="list-group">
                                        <li>Show the album's Tracks here</li>
                                        <li>Show the album's Tracks here</li>
                                        <li>Show the album's Tracks here</li>
                                    </div>
                                    <a href="a" className="btn btn-primary">Edit</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sn-9">
                            <div className="card">
                                <p>Show the lyrics of a selected track here</p>
                            </div>
                            <div className="card">
                                <p>Show the youtube video of the selected track here</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default OneAlbum;