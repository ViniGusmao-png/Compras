import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";
import { Trash2 } from "lucide-react-native";
import { StatusIcon } from "../statusIcon";
import { FilterStatus } from "@/types/FilterStatus";
import { _View } from "react-native";

type ItemData = { status: FilterStatus; description: string };

type Props = { data: ItemData; onRemove: () => void; onStatus: () => void };

export function Item({ data, onRemove, onStatus }: Props) {
  return (
    <View style={style.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>
      <Text style={style.description}>{data.description}</Text>
      <TouchableOpacity onPress={onStatus}>
        <Trash2 size={18} color={"#8b8b8b5a"} />
      </TouchableOpacity>
    </View>
  );
}
