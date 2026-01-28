import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { style } from "./style";
import { FilterStatus } from "@/types/FilterStatus";

type Props = TouchableOpacityProps & {
  status: FilterStatus;
  isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[style.container, { opacity: isActive ? 1 : 0.2 }]}
      {...rest}
    >
      <Text style={style.text}>
        {status === FilterStatus.DONE ? "Comprado" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
