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

export default function ConfigPage() {
    const { signOut } = useClerk();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { setConfig } = useSettingsContext();
    const style = makeStyle();
    return (
        <ScrollView style={style.scroll}>

            <View style={style.container}>
                <Text style={style.title}>Configurações</Text>

                <FontSizeSlider />

                <View style={style.modeRow}>
                    <Smartphone style={style.icon} />
                    <Text style={style.label}>Modo</Text>
                </View>

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

                <Button
                    text="Sair"
                    textStyle={style.buttonText}
                    wraperStyle={style.button}
                    onPress={() => {
                        signOut()
                        navigation.reset({ index: 0, routes: [{ name: "account" }] });
                    }}
                />
                <View style={style.footer}>
                    <Text style={style.footerText}>Clique no botão para voltar para o aplicativo</Text>
                    <View style={style.line} />

                    <Button text="Voltar"
                        onPress={navigation.goBack}
                        textStyle={style.buttonText}
                        wraperStyle={style.button}
                    />
                </View>
            </View>
        </ScrollView>
    )

}