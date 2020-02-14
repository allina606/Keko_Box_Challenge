import React from 'react';
import './App.css';

class InputOutputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputTxt: '',
      uppercase: '',
      backwards: '' 
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputTxt: event.target.value});
    // setting state backwards
    this.setState({backwards: event.target.value.split("").reverse().join("")});
    //setting uppercase
    this.setState({uppercase: event.target.value.toUpperCase()});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-6">
            Type something:<br />
            <input type="text" value={this.state.inputTxt} onChange={this.handleChange} />
          </div>

          <div className="col-6">
            {this.state.backwards}
            <br />
            {this.state.uppercase} 
            <br />
            <biggerfont> {this.state.inputTxt} </biggerfont>
          </div>
        
        </div>
      </div>
    );
  }
}

export default InputOutputText;
