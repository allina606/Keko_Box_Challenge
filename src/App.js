import React from 'react';
import logo from './logo.svg';
import './App.css';

class InputOutputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputTxt: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputTxt: event.target.value});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-6">
            hey <br />
            <input type="text" value={this.state.inputTxt} onChange={this.handleChange} />
          </div>

          <div className="col-6">
          {this.state.inputTxt}
          </div>
        </div>

      </div>
    );
  }
}

export default InputOutputText;
