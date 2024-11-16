import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChannelsPage } from "../../pages/channel-page";
import { ProgramsPage } from "../../pages/program-page";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";
import ConfigPage from "../../pages/config-page";
import { HomePage } from "../../pages/home-page";
import { AccountPage } from "../../pages/account-page";
import * as Linking from 'expo-linking';
import TextAdjustPage from "../../pages/text-adjust-page";
import ColorsAdjustPage from "../../pages/colors-adjust-page";

const prefix = Linking.createURL("/")

export function Routes() {

  const Stack = createNativeStackNavigator();
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return;

  return (
    <NavigationContainer linking={{ prefixes: [prefix] }}>
      <Stack.Navigator initialRouteName={isSignedIn ? "channel" : "home"}>
        <Stack.Screen
          name="channel"
          component={ChannelsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="program"
          component={ProgramsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="config"
          component={ConfigPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="account"
          component={AccountPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="text"
          component={TextAdjustPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="colors"
          component={ColorsAdjustPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
