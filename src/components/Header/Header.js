import React, { Component } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";

import styles from "./HeaderStyle";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

export default Header;
