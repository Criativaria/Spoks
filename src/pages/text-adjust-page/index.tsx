import { ScrollView, Text, View } from "react-native";
import { FontSizeSlider } from "../../components/font-size-slider";
import Button from "../../components/button";
import { useClerk } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSettingsContext } from "../../context/settings/settings-contex";
import { ThemeNames } from "../../styles/theme";
import { makeStyle } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TextAdjustPage() {
    const { signOut } = useClerk();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { setConfig } = useSettingsContext();
    const style = makeStyle();
    return (
        <ScrollView style={style.scroll}>
            <View style={style.container}>
                <Text style={style.title}>Configurações Iniciais de acessibilidade</Text>
                <Text style={style.label}>Ajuste de texto</Text>
                <View style={style.line} />
                <Text style={style.second_label}>Configurar depois ?</Text>

                <FontSizeSlider />

                <Text style={style.config_text}>O texto ficará assim</Text>

                {/*<Button text="Voltar" onPress={() => navigation.goBack()} 
                    textStyle={style.buttonText}
                    wraperStyle={style.button}*/}

                <Button text="Próximo"
                    onPress={() => navigation.navigate("colors")}
                    textStyle={style.buttonText}
                    wraperStyle={style.button}
                />
            </View>
        </ScrollView>
    )
}