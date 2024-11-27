import { ThemeProvider } from "./context/theme/theme.provider";
import { StatusBar } from "expo-status-bar";
import { useFont } from "./hooks/use-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { Routes } from "./utils/routes/routes";
import { tokenCache } from "./api/user/token-cache";
import { StorageProvider } from "./context/storage/storage-context";
import { SettingsProvider } from "./context/settings/settings-contex";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "./pages/error-page";
import TextAdjustPage from "./pages/text-adjust-page";


const PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export function App() {

  const [loaded] = useFont();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} tokenCache={tokenCache}>
        <ClerkLoaded>
          <StorageProvider>
            <SettingsProvider>
              <ThemeProvider>
                <ErrorBoundary FallbackComponent={ErrorPage}>
                  <StatusBar style="dark" />
                  <Routes />
                </ErrorBoundary>
              </ThemeProvider>
            </SettingsProvider>
          </StorageProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </SafeAreaProvider>
  );
}
