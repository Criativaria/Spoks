import { SafeAreaView } from "react-native-safe-area-context";
import { makeStyle } from "./style";
import { GoogleButton } from "../../components/google-button";
import { GoogleLogin } from "../../api/user/google-login";
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export function HomePage() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { OnGoogleSignInAsync, isLoadingLogin } = GoogleLogin()
  const style = makeStyle();

  return (
    <SafeAreaView style={style.wrapper}>

      <GoogleButton onPress={OnGoogleSignInAsync} isLoading={isLoadingLogin} title="entrar com o google" />

      <Button text="entrar sem logar" onPress={() => navigation.navigate("channel")} />

    </SafeAreaView>
  );
}
