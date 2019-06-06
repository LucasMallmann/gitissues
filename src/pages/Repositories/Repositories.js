import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";

import api from "~/services/api";

import Header from "~/components/Header/Header";

import styles from "./RepositoriesStyle";
import RepositoryItem from "./RepositoryItem/RepositoryItem";

class Repositories extends Component {
  state = {
    repositoryInput: "",
    data: [],
    loading: true
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  static navigationOptions = {
    header: <Header title="Gitissues" />
  };

  async componentDidMount() {
    this.loadFromDatabase();
  }

  loadFromDatabase = async () => {
    const repositories = await AsyncStorage.getItem("@Gitissues:repositories");
    if (repositories !== null) {
      const data = JSON.parse(repositories);
      console.tron.log(data);
      this.setState({ data });
    }
    this.setState({ loading: false });
  };

  loadRepositories = async () => {
    try {
      const { repositoryInput } = this.state;
      this.setState({ loading: true });
      const { data } = await api.get(`repos/${repositoryInput}`);
      const repositories = await AsyncStorage.getItem(
        "@Gitissues:repositories"
      );
      if (repositories !== null) {
        const stored = JSON.parse(repositories);
        AsyncStorage.setItem(
          "@Gitissues:repositories",
          JSON.stringify(stored.concat(data))
        );
      } else {
        AsyncStorage.setItem("@Gitissues:repositories", JSON.stringify([data]));
      }
      this.setState({ data: [...this.state.data, data], loading: false });
    } catch (error) {
      console.tron.log(error);
    }
  };

  renderListItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Issues", {
            id: item.id
          })
        }
      >
        <RepositoryItem repository={item} />
      </TouchableOpacity>
    );
  };

  renderRepositories = () => {
    const { navigation } = this.props;
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        renderItem={this.renderListItem}
        keyExtractor={item => String(item.id)}
      />
    );
  };

  render() {
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
