import { ScrollView, Text, View } from "react-native";
import { FontSizeSlider } from "../../components/font-size-slider";
import Button from "../../components/button";
import { useClerk } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSettingsContext } from "../../context/settings/settings-contex";
import { ThemeNames } from "../../styles/theme";
import { makeStyle } from "./style";
import { Smartphone } from "lucide-react-native";

export default function ColorsAdjustPage() {
    const { signOut } = useClerk();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { setConfig } = useSettingsContext();
    const style = makeStyle();
    return (
        <ScrollView style={style.scroll}>

            <View style={style.container}>
                <Text style={style.title}>Configurações Iniciais de acessibilidade</Text>

                <Text style={style.label}>ajustes de cor</Text>

                <Text style={style.label}>configurar depois?</Text>

                <Button text="Modo Escuro"
                    onPress={() => setConfig<ThemeNames>("theme", "dark")}
                    textStyle={style.darkModeButtonText}
                    wraperStyle={style.darkModeButton} />

                <Button text="Modo de Alto Contraste"
                    onPress={() => setConfig<ThemeNames>("theme", "highContrast")}
                    textStyle={style.highContrastButtonText}
                    wraperStyle={style.highContrastButton}
                />
                <Button text="Modo Claro"
                    onPress={() => setConfig<ThemeNames>("theme", "light")}
                    textStyle={style.lightModeButtonText}
                    wraperStyle={style.lightModeButton} />

                <View style={style.footer}>

                    <Button text="voltar" onPress={() => navigation.goBack()} />
                    <Button text="próximo"
                        onPress={() => navigation.navigate("account")}
                        textStyle={style.buttonText}
                        wraperStyle={style.button}
                    />
                </View>
            </View>
        </ScrollView>
    )

}