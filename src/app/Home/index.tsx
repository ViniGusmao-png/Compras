import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { style } from "./style";
import { Button } from "@/components/button";
import { Input } from "@/components/Input";
import { FilterStatus } from "@/types/FilterStatus";
import { Filter } from "@/components/Filter";
import { Item } from "@/components/Item";
import { useState, useEffect } from "react";
import { ItemStorage, itemsStorage } from "@/storage/itemsStorage";

const Filter_status: FilterStatus[] = [
  FilterStatus.PENDDING,
  FilterStatus.DONE,
];
// const ITEMS = [
//   { id: "1", status: FilterStatus.DONE, description: "1 pacote de café" },
//   { id: "2", status: FilterStatus.PENDDING, description: "2 pepinos" },
//   { id: "3", status: FilterStatus.PENDDING, description: "1 amaciante" },
//   { id: "4", status: FilterStatus.PENDDING, description: "3 cebolas" },
// ];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDDING);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<any>([]);

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.");
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDDING,
    };

    await itemsStorage.add(newItem);
    await itemsByStatus();

    Alert.alert("Adicionado", `Adicionado ${description}`);
    setDescription("");
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter);
      setItems(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel filtrar os itens.");
    }
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter]);

  return (
    <View style={style.container}>
      <Image source={require("@/assets/logo.png")} style={style.logo} />
      <View style={style.form}>
        <Input
          placeholder="O que você precisa comprar"
          value={description}
          onChangeText={setDescription}
        />

        <Button title="Adicionar" onPress={handleAdd} />
      </View>
      <View style={style.content}>
        <View style={style.header}>
          {Filter_status.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}

          <TouchableOpacity style={style.clearButton}>
            <Text style={style.clearButtonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => setItems}
              onStatus={() => console.log("muda o status")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={style.separator} />}
          contentContainerStyle={style.listContent}
          ListEmptyComponent={() => (
            <Text style={style.empty}>Nenhum item aqui</Text>
          )}
        />
      </View>
    </View>
  );
}
