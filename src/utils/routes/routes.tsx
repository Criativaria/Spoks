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
import { useFirstAccess } from "../storage/first-steps";
import { useEffect, useState } from "react";
import { Loading } from "../../pages/loading";

const prefix = Linking.createURL("/")

export function Routes() {

  const [firstTime, setFirstTime] = useState<boolean | null>(null);

  const Stack = createNativeStackNavigator();
  const { isSignedIn, isLoaded } = useAuth();
  const fistStepsOptions = useFirstAccess();


  useEffect(() => {
    isFistTime();
  }, [])

  async function isFistTime() {
    const firstAccess = await fistStepsOptions.isFirstAccess();
    fistStepsOptions.deleteFirstAccess();

    if (!firstAccess) {
      setFirstTime(true)
    } else {
      setFirstTime(false)
    }
  }



  if (!isLoaded) return;
  if (firstTime === null || !isLoaded) {
    return <Loading />
  }

  return (
    <NavigationContainer linking={{ prefixes: [prefix] }}>
      <Stack.Navigator initialRouteName={firstTime === true ? "home" : isSignedIn ? "channel" : "account"}>
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
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
