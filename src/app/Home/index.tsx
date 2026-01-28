import { View, Image } from "react-native";
import { style } from "./style";
import { Button } from "@/components/button";


export function Home() {
  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />
      <Button title="Adicionar" />
      <Button title="Criar Conta" />
      <Button title="Excluir" />
      <Button title="Remover" />
      <Button title="Betinha" />
    </View>
  );
}
