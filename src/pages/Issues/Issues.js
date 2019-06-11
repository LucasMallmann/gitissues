import React, { Component } from "react";

import { View, Text, ActivityIndicator, FlatList } from "react-native";
import PropTypes from "prop-types";
import api from "~/services/api";
import styles from "./IssuesStyles";
import Filter from "./Filter/Filter";
import IssueItem from "./IssueItem/IssueItem";

class Issues extends Component {
  state = {
    selectedFilter: "all",
    loading: true,
    data: [],
    refreshing: false
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func
    }).isRequired
  };

  static navigationOptions = ({ navigation }) => {
    const { getParam } = navigation;
    const repositoryName = getParam("repositoryName", "repository");
    return {
      title: repositoryName,
      headerTitleStyle: {
        // textAlign: "center",
        // flexGrow: 1,
        // alignSelf: "center",
        fontSize: 18
      }
    };
  };

  async componentDidMount() {
    this.loadIssues();
  }

  onChangeFilter = filter => {
    this.setState({ selectedFilter: filter });
    this.loadIssues();
  };

  loadIssues = async () => {
    try {
      this.setState({ loading: true, refreshing: true });
      const { selectedFilter } = this.state;
      const { getParam } = this.props.navigation;
      const repositoryName = getParam("repositoryName", "repository");
      const { data } = await api.get(
        `repos/${repositoryName}/issues?state=${selectedFilter}`
      );
      this.setState({ data, loading: false, refreshing: false });
    } catch (error) {
      console.tron.log(error);
    }
  };

  renderIssueItem = ({ item }) => {
    return <IssueItem issue={item} />;
  };

  renderIssues = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        renderItem={this.renderIssueItem}
        keyExtractor={item => String(item.id)}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { selectedFilter, loading } = this.state;
    return (
      <View style={styles.container}>
        <Filter
          selectedFilter={selectedFilter}
          onChangeFilter={this.onChangeFilter}
        />
        {loading ? (
          <ActivityIndicator style={styles.icon} />
        ) : (
          this.renderIssues()
        )}
      </View>
    );
  }
}

export default Issues;
