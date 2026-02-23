import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { style } from "./style";
import { FilterStatus } from "@/types/FilterStatus";
import React from "react";
import { StatusIcon } from "../statusIcon";

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
      <StatusIcon status={status} />
      <Text style={style.text}>
        {status === FilterStatus.DONE ? "Comprado" : "Pendente"}
      </Text>
    </TouchableOpacity>
  );
}
