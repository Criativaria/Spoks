import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyle } from "./style";
import { GoogleLogin } from "../../api/user/google-login";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, Text, View } from "react-native";
import Button from "../../components/button";

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


          <Button text="proximo" onPress={() => navigation.navigate("text")} />

        </ScrollView>
      </View>
    </SafeAreaView>

  );
}
