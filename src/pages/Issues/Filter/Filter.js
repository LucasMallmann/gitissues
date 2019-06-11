import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./FilterStyle";

const Filter = ({ selectedFilter, onChangeFilter }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onChangeFilter("all")}
      >
        <Text
          style={[
            styles.filterText,
            selectedFilter === "all" && styles.selectedFilter
          ]}
        >
          Todas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onChangeFilter("open")}
      >
        <Text
          style={[
            styles.filterText,
            selectedFilter === "open" && styles.selectedFilter
          ]}
        >
          Abertas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => onChangeFilter("closed")}
      >
        <Text
          style={[
            styles.filterText,
            selectedFilter === "closed" && styles.selectedFilter
          ]}
        >
          Fechadas
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Filter.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default Filter;
