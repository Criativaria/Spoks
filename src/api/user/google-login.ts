
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import { useOAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as Linking from 'expo-linking'
WebBrowser.maybeCompleteAuthSession();

export function GoogleLogin() {

    const [isLoadingLogin, setIsLoadingLogin] = useState(false);
    const googleOAuth = useOAuth({ strategy: "oauth_google" });
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        WebBrowser.warmUpAsync();
        return () => {
            WebBrowser.coolDownAsync();
        };
    }, []);

    const OnGoogleSignInAsync = async () => {
        try {
            setIsLoadingLogin(true);
            const { createdSessionId, setActive, authSessionResult } = await googleOAuth.startOAuthFlow({
                redirectUrl: Linking.createURL('channel')
            });

            if (authSessionResult?.type === "success" && createdSessionId) {

                await setActive!({ session: createdSessionId });
                navigation.reset({ index: 0, routes: [{ name: "channel" }] });
            }
        } catch (error) {
            console.error((error as any).toString());
        } finally {
            setIsLoadingLogin(false);
        }
    }

    return { OnGoogleSignInAsync, isLoadingLogin };
}