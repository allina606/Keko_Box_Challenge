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
      <div id="homepage" className="container-fluid">
        <div className="row">

          <div className="col-6">
            Type Something:<br />
            <input type="text" value={this.state.inputTxt} onChange={this.handleChange} />
          </div>

          <div className="col-6">
            <div className="card">
              <div className="card-header">Manipulated State: </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> {this.state.backwards} </li>
                <li className="list-group-item"> {this.state.uppercase} </li>
                <li className="list-group-item biggerfont"> {this.state.inputTxt} </li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

export default InputOutputText;
