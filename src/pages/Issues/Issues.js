import React, { Component } from "react";

import { View, Text } from "react-native";
import PropTypes from "prop-types";

// import { Container } from './styles';

class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func
    }).isRequired
  };

  render() {
    const { getParam, navigate } = this.props.navigation;
    const repoId = getParam("id", 0);
    return (
      <View>
        <Text>Isses</Text>
        <Text>Issue for repo {repoId}</Text>
      </View>
    );
  }
}

export default Issues;
