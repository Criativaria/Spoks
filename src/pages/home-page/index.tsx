import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyle } from "./style";
import { GoogleButton } from "../../components/google-button";
import { GoogleLogin } from "../../api/user/google-login";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export function HomePage() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { OnGoogleSignInAsync, isLoadingLogin } = GoogleLogin();
  const style = makeStyle();

  return (
    <SafeAreaView style={style.container}>
      <View style={style.innerContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={style.title}>Boas Vindas ao Spoks</Text>
          <Text style={style.subtitle}>Ative o TalkBack no seu dispositivo para navegar e utilizar o app com acessibilidade.</Text>
          <Text style={style.entrar}>Agora, escolha como entrar</Text>

          <View style={style.line} />
          <View style={style.content}>
            <Text style={style.text}>Cadastre-se e entre com o Google</Text>

            <GoogleButton
              onPress={OnGoogleSignInAsync}
              isLoading={isLoadingLogin}
              title="cadastrar e entrar" />

            <View style={style.line_second} />

            <Text style={style.text}>Usar o aplicativo sem conta</Text>
            <TouchableOpacity style={style.button_second}>
              <Text style={style.buttonText}
                onPress={() => navigation.navigate("channel")}>
                Sem Conta
              </Text>
            </TouchableOpacity>

            <View style={style.line_second} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  );
}
