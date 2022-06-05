import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import dataSource from './dataSource';
import NavBar from './NavBar';
import AlbumList from './Albumlist';
import NewAlbum from './NewAlbum';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import OneAlbum from './OneAlbum';
import EditAlbum from './EditAlbum';

const history = createBrowserHistory();

//import Card from './Card';
//import { render } from '@testing-library/react';
//import albums from './albums.json';

class App extends React.Component {
    state = {albumlist : [], searchphrase: "", currentlySelectedalbumId: 4};

    componentDidMount() {
        this.loadAlbums();
       /* this.setState({
            albumlist: albums
        }) */
    }

    loadAlbums = async () => {
        const response = await dataSource.get('/albums');
        this.setState({albumlist: response.data})
    }

    updateSearchResults = async (phrase) => {
        console.log("phrase = ", phrase);
        this.setState({searchphrase : phrase});
        const response = await dataSource.get('/albums/search/description/' + phrase)
        console.log(response.data)
        this.setState({albumlist: response.data})
    }

    updateSingleAlbum = (id) => {
        console.log("updateSingleAlbum = ", id);
        var indexNumber = 0;
        for(var i = 0; i < this.state.albumlist.length; i++){
            if(this.state.albumlist[i] === id)
            indexNumber = 1;
        }
        this.setState({currentlySelectedalbumId: indexNumber});
        history.push('/show/' + indexNumber);
        console.log("state", this.state);
    }

    editAlbum = (albumId) => {
        console.log("App. Edit CurrentlySelectedId = ", albumId);
        var indexnumber = 0;
        for(var i = 0; i < this.state.albumlist.length; i++) {
            if(this.state.albumlist[i].id === albumId)
            indexnumber = 1;
        }
        this.setState({currentlySelectedalbumId: indexnumber},
            history.push('/edit/' + indexnumber),
            console.log("state", this.state));
    }

    render() {       
        return(
            <>
            <Router history = {history}> 
                <React.Fragment><NavBar /></React.Fragment>
                <Routes>
                    <Route exact path = "/albums" element = { 
                       
                            <div>
                                <SearchForm onSubmit={this.updateSearchResults}/>
                                <AlbumList albumList={this.state.albumlist} />
                            </div>
                    
                } 
                />
                <Route exact path= "/new" element = {<NewAlbum/>}/>
                <Route exact path= "/" element = {<SearchForm/>}/>
                <Route exact path= "/show/:albumId" element = {<OneAlbum album= {this.state.albumlist[this.state.currentlySelectedalbumId]}/>} />
                <Route exact path= "/edit/albumId" element = {<EditAlbum album= {this.state.albumlist[this.state.currentlySelectedalbumId]}/>}/> 
                </Routes>
                </Router>
                </>
            )
    }
} 
export default App;