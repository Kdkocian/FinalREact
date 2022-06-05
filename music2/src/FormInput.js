import React from 'react';

class FormInput extends React.Component{

    handleChangeData= (e) => {
        this.setState({inputData : e.target.value });
        console.log("contents of the input = ", this.state.inputData);
        this.props.onChange(this.state.inputData);
    }

    render() {
        return(<div>
            <label for= {this.props.id}>{this.props.title}</label>
            <input type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
        </div>)
    }
}

export default FormInput;