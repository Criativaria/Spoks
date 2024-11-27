import { ScrollView, Text, View } from "react-native";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSettingsContext } from "../../context/settings/settings-contex";
import { ThemeNames } from "../../styles/theme";
import { makeStyle } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useChannelStorage } from "../../utils/storage/channels";
import { useFirstAccess } from "../../utils/storage/first-steps";

export default function ColorsAdjustPage() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { setConfig } = useSettingsContext();
    const style = makeStyle();
    const firstStepsOptions = useFirstAccess();

    function firstStepsDone() {
        navigation.navigate("account");
        firstStepsOptions.addFirstAccess();
    }

    return (
        <SafeAreaView style={style.container}>
            <View>
                <ScrollView style={style.scroll}>
                    <View style={style.container}>
                        <Text style={style.title}>Configurações Iniciais de acessibilidade</Text>
                        <Text style={style.label}>Ajuste de cor</Text>
                        <View style={style.line} />
                        <Text style={style.second_label}>Configurar depois ?</Text>

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

                            <Button text="Próximo"
                                onPress={() => firstStepsDone()}
                                textStyle={style.buttonText}
                                wraperStyle={style.button}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )

}