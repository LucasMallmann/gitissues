import { StyleSheet } from "react-native";

import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: metrics.basePadding / 1.5,
    paddingBottom: metrics.basePadding / 1.5,
    backgroundColor: colors.white,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  nameContainer: {
    marginLeft: metrics.baseMargin * 1.5
  },
  title: {
    fontSize: 18,
    color: colors.darker,
    fontWeight: "bold"
  },
  avatar: {
    width: 35,
    height: 35
  },
  icon: {
    color: colors.regular,
    fontSize: 16
  }
});

export default styles;
