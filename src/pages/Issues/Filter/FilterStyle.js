import { StyleSheet } from "react-native";

import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin / 1.5
  },
  filterButton: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: metrics.basePadding / 2,
    paddingBottom: metrics.basePadding / 2
  },
  selectedFilter: {
    color: colors.darker,
    fontWeight: "bold"
  },
  filterText: {
    color: colors.regular
  }
});

export default styles;
