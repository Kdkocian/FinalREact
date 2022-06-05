import axios from 'axios';
import React from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

class NewAlbum extends React.Component {

    state = {
        title: "Title",
        artist: "Someone famous",
        description: "Great album",
        year: 1900,
        image: "image.jpg",
        tracks: [ ]
    }

    updateTitle= (t) => {
        this.setState( {title: t});
        console.log("State of form= ", this.state);
    }

    updateArtist= (t) => {
        this.setState({artist: t});
        console.log("State of form = ", this.state);
    }

    updateDescription= (t) =>{
        this.setState({description: t})
        console.log("State of form = ", this.state);
    }

    updateYear= (t) => {
        this.setState({year: t});
        console.log("State of form = ", this.state);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Final submit= ", this.state);
    }

    saveAlbum = async (album) => {
        axios.post(`http://localhost:3000/albums`, album )
        .then(result => {
            console.log(result);
            console.log(result.data);
        })
    }
    

    render () {
        return (
        <div classNameName="container">
            <form>
                <div className="form-group">
                <h1>Create a new album</h1>
                    <FormInput id = "albumTitle" title= "Album Title" placeholder= "Enter Title" onChange={this.updateTitle}/>
                    <FormInput id = "albumArtist" title= "Artist" placeholder= "Artist's Name" onChange={this.updateArtist}/>
                    <FormTextArea id = "albumDescription" title= "Description" placeholder= "Album Description" onChange={this.updateDescription}/>
                    <FormInput id = "albumYear" title="Year" placeholder= "Album Year" onChange={this.updateYear}/>
                </div>
                <button type="button" className="btn btn-light">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>)
    }
}

export default NewAlbum;