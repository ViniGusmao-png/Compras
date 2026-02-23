import { TextInput, TextInputProps } from "react-native";
import { input } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={input.container} {...rest} />;
}
