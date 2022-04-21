import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useCashedResources() {

    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {

            try {
                await Font.loadAsync({
                    "ubuntu": require("../assets/fonts/Ubuntu-Regular.ttf"),
                    "ubuntu-bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
                })
            } catch (e) {
                console.warn(e);
            } finally {
                setIsLoadingComplete(true);
            }



        }
        loadResourcesAndDataAsync();
    }, [isLoadingComplete])


    return isLoadingComplete;


}