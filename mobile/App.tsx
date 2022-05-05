import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { theme } from "./src/theme";
import { Widget } from "./src/components/Widget/index ";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widget />
      <StatusBar backgroundColor="transparent" style="light" translucent />
    </View>
  );
}
