import { View, Image } from "react-native";
import { style } from "./style";
import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";

export function Home() {
  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />
      <View style={style.form}>
        <Input placeholder="O que você precisa comprar" />

        <Button title="Entrar" />
      </View>
      <View style={style.content}>
        <Filter status={FilterStatus.DONE} isActive={true} />
        <Filter status={FilterStatus.PENDDING} isActive={false} />
      </View>
    </View>
  );
}
