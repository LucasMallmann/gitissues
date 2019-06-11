import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.lighter,
    flex: 1
  },
  icon: {
    marginTop: metrics.baseMargin * 2,
    color: colors.darker
  }
});

export default styles;
