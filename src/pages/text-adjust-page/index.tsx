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

export default function TextAdjustPage() {
    const { signOut } = useClerk();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { setConfig } = useSettingsContext();
    const style = makeStyle();
    return (
        <ScrollView style={style.scroll}>

            <View style={style.container}>
                <Text style={style.title}>Configurações Iniciais de acessibilidade</Text>


                <Text style={style.label}>ajuste de texto</Text>

                <Text style={style.label}>configurar depois?</Text>


                <FontSizeSlider />

                <Button text="voltar" onPress={() => navigation.goBack()} />
                <Button text="proximo"
                    onPress={() => navigation.navigate("colors")}
                    textStyle={style.buttonText}
                    wraperStyle={style.button}
                />
            </View>

        </ScrollView>
    )

}