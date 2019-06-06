import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation";

import styles from "./RepositoryItemStyle";

const RepositoryItem = props => {
  const { repository } = props;
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={{ uri: repository.owner.avatar_url }}
          style={styles.avatar}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{repository.full_name}</Text>
          <Text style={styles.organization}>{repository.owner.login}</Text>
        </View>
      </View>
      <Icon name="angle-right" style={styles.icon} />
    </View>
  );
};

RepositoryItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    }).isRequired
  }).isRequired
};

export default withNavigation(RepositoryItem);
