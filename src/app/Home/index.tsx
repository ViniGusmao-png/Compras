import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { style } from "./style";
import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";

const Filter_status: FilterStatus[] = [
  FilterStatus.PENDDING,
  FilterStatus.DONE,
];
const ITEMS = Array.from({ length: 100 }).map((_, index) => String(index));

export function Home() {
  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />
      <View style={style.form}>
        <Input placeholder="O que você precisa comprar" />

        <Button title="Entrar" />
      </View>
      <View style={style.content}>
        <View style={style.header}>
          {Filter_status.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={style.clearButton}>
            <Text style={style.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Item
              data={{ status: FilterStatus.DONE, description: item }}
              onRemove={() => console.log("remova")}
              onStatus={() => console.log("muda o status")}
            />
          )}
        />
      </View>
    </View>
  );
}
