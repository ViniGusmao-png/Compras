import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    title: string
}

export function Button(props: Props) {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.1}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

