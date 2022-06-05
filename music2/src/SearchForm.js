import React from 'react';

class SearchForm extends React.Component {
    
    state = {inputtext: ""};

    handleChangeInput = (event) => {
        this.setState({inputtext : event.target.value}, ()=> console.log(this.state.inputtext));
        //console.log(this.state.inputtext);
    }

    handleFormSubmit = (event) => {
        alert(this.state.inputtext);
    }

    render(){
        return ( <div>
            <form onSubmit = {(e)=> {e.preventDefault(); this.props.onSubmit(this.state.inputtext)}}>
                <div className="form-group">
                    <label htmlFor="search-term">Search Box</label>
                    <input
                        //onSubmit = {this.handleFormSubmit}
                        onChange = {this.handleChangeInput}
                        type="text"
                        className="form-control"
                        placeholder="Search term here" />
                </div>
            </form>
        </div>);
    }
}

export default SearchForm;