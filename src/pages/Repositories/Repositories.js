import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import api from "~/services/api";

import Header from "~/components/Header/Header";

import styles from "./RepositoriesStyle";

class Repositories extends Component {
  state = {
    repositoryInput: "",
    data: [],
    loading: false
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  static navigationOptions = {
    header: <Header title="Gitissues" />
  };

  loadRepositories = async () => {
    try {
      const { repositoryInput } = this.state;
      this.setState({ loading: true });
      const { data } = await api.get(`repos/${repositoryInput}`);
      this.setState({ data, loading: false });
    } catch (error) {
      console.tron.log(error);
    }
  };

  renderRepositories = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Issues")}>
        <Text>Go to issues</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { navigation } = this.props;
    const { repositoryInput, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            onChangeText={text => this.setState({ repositoryInput: text })}
            value={repositoryInput}
            placeholder="Digite organização/repositório"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TouchableOpacity onPress={this.loadRepositories}>
            <Icon style={styles.buttonIcon} name="plus" />
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderRepositories()
        )}
      </View>
    );
  }
}

export default Repositories;
