import React, { Component } from 'react';

import { Wrapper, ToasterDiv, DismissButton, Text } from './InfoToaster.styles';

export default class Toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toaster: false,
    };
  }

  toggleToaster = () => {
    this.setState(({ toaster: prevToaster }) => ({
      toaster: !prevToaster,
    }));
  };

  dismissToaster = () => {
    this.setState(() => ({
      toaster: false,
    }));
  };

  render() {
    return (
      <Wrapper toaster={this.state.toaster}>
        <ToasterDiv>
          <DismissButton onClick={this.dismissToaster}>Dismiss</DismissButton>
          <Text>Hey! I am your info! Have a great day!</Text>
        </ToasterDiv>
      </Wrapper>
    );
  }
}
