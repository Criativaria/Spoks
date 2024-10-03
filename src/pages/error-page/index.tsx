import { useErrorBoundary } from "react-error-boundary";
import { Pressable, Text, View } from "react-native";

export function ErrorPage() {
    const { resetBoundary } = useErrorBoundary()

    return (
        <View>
            <Text>puts deu tudo errado aqui, perdão</Text>
            <Pressable onPress={resetBoundary} >
                <Text>
                    Clica aqui pra recarregar a pag
                </Text>
            </Pressable>
        </View>
    )

}