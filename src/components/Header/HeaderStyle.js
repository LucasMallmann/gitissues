import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet } from "react-native";

import { colors, metrics } from "~/styles";

export default StyleSheet.create({
  container: {
    height: 30 + getStatusBarHeight(),
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darker
  }
});
