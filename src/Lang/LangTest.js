import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import {IntlProvider} from 'react-intl'

class LangTest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
          
        <label for="langs">Choose Lang:</label>

        <select id="cars">
          <option value="en">en</option>
          <option value="de">de</option>
        </select>
        <br />
        <FormattedMessage id='text.helloworld' defaultMessage='hello world'></FormattedMessage>
      </div>
    );
  }
}

export default LangTest;
