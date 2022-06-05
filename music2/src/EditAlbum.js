import React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import axios from "axios";

class EditAlbum extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            id: this.props.album.id,
            title: this.props.album.title,
            artist: this.props.album.artist,
            description: this.props.album.description,
            year: this.props.album.year,
            image: this.props.album.image,
            tracks: this.props.album.tracks
        }
    }

    componentDidMount() {
        // axios.get(`localhost:3001/albums/${this.props.match.params.albumId}`)
        // .then(response=>{console.log(response.data)})
        // .catch(e => {console.log(e)})
        console.log(this.props)
    }

    updateTitle= (t) =>{
        this.setState( {title: t});
        console.log("State of Form= ", this.state);
    }

    updateArtist= (t) =>{
        this.setState( {artist: t});
        console.log("State of Form= ", this.state);
    }

    updateYear= (t) =>{
        let y = parseInt(t);
        this.setState( {year: y});
        console.log("State of Form= ", this.state);
    }

    updateDescription= (t) =>{
        this.setState( {description: t});
        console.log("State of Form= ", this.state);
    }

    updateImage= (t) =>{
        this.setState( {image: t});
        console.log("State of Form= ", this.state);
    }

    handleFormSubmit= (e) =>{
        e.preventDefault();
        console.log("Final Submit= ", this.state);
        this.saveAlbum(this.state);
    }

    saveAlbum= async (album) =>{
        console.log("new album", album);
        axios.put(`http://localhost:3001/albums`, album)
        .then(result => {
            console.log(result);
            console.log(result.data)
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                    <h1>Edit the new album</h1>
                        <FormInput id="albumTitle" title="Album Title" value={this.state.albumtitle} onChange={this.updateTitle}/>
                        <FormInput id="albumArtist" title="Artist" value={this.state.albumartist} onChange={this.updateArtist}/>
                        <FormTextArea id="albumDescription" title="Description" value={this.state.albumdescription} onChange={this.updateDescription}/>
                        <FormInput id="albumYear" title="Year" value={this.state.albumyear} onChange={this.updateYear}/>
                        <FormInput id="albumImage" title="Image" value={this.state.albumimage} onChange={this.updateImage}/>
                        <hr />
                    <h2>Tracks</h2>
                    </div>
                    <button type="button" className="btn btn-light">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditAlbum;