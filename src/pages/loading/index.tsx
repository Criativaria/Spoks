import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyle } from "./style";
import { ActivityIndicator, Text } from "react-native";

export function Loading() {
    const style = makeStyle();

    return (
        <SafeAreaView style={style.container}>
            <ActivityIndicator size={"large"} style={style.activity} />
            <Text style={style.text} >Carregando...</Text>
        </SafeAreaView>

    );
}
