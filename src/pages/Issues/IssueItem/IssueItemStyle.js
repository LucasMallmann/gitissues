import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: metrics.basePadding,
    paddingBottom: metrics.basePadding,
    backgroundColor: colors.white,
    marginTop: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding / 1.5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darker
  },
  icon: {
    marginLeft: metrics.baseMargin,
    color: colors.regular
  }
});

export default styles;
