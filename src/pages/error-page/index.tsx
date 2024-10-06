import { useErrorBoundary } from "react-error-boundary";
import { Text, TouchableOpacity, View } from "react-native";
import { makeStyle } from "./style";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";
import { WifiOff } from "lucide-react-native";

export function ErrorPage() {
    const { resetBoundary } = useErrorBoundary()
    const { theme } = useThemeContext();
    const style = makeStyle();

    return (
        <View style={style.container}>
            <View style={style.icon}>
                <WifiOff size={55} color={theme.text} />
            </View>
            <Text style={style.title}>Conecte-se à Internet</Text>
            <Text style={style.offline}>Você está off-line. Verifique sua conexão.</Text>
            <TouchableOpacity style={style.button} onPress={resetBoundary}>
                <Text style={style.buttonText}>TENTAR NOVAMENTE</Text>
            </TouchableOpacity>
        </View>

    )

}