import React from "react";

import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

import styles from "./IssueItemStyle";

const IssueItem = ({ issue }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => Linking.openURL(issue.html_url)}
  >
    <Image source={{ uri: issue.user.avatar_url }} style={styles.avatar} />
    <View style={styles.infoContainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {issue.title}
      </Text>
      <Text>{issue.user.login}</Text>
    </View>
    <Icon name="angle-right" style={styles.icon} size={16} />
  </TouchableOpacity>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    html_url: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string
    })
  }).isRequired
};

export default IssueItem;
