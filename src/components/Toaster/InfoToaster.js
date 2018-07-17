import React, { Component } from 'react';

import { Wrapper, ToasterDiv, ActionButton, Text } from './InfoToaster.styles';

export default class Toaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toaster: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.state.toaster) {
        this.toggleToaster();
      }
    }, 5000);
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
        <ToasterDiv theme={this.props.theme}>
          <ActionButton theme={this.props.theme} onClick={this.dismissToaster}>
            Dismiss
          </ActionButton>
          <Text theme={this.props.theme}>{this.props.message.toString()}</Text>
        </ToasterDiv>
      </Wrapper>
    );
  }
}
