import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
// Splash screen is the screen that appears while the initial load of app is in progress
import * as SplashScreen from 'expo-splash-screen'

// Displaying ansychronously the splash screen while the app is loading
SplashScreen.preventAutoHideAsync();

export default function Layour() {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    // Use callback is just like useEffect but used for callback functions
    const onLayoutRootView = useCallback(async () => {
        (fontsLoaded && await SplashScreen.hideAsync())
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}