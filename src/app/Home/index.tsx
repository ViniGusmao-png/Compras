import { View, Image } from "react-native";
import { style } from "./style";

export function Home() {
  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />
    </View>
  );
}
