import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';



export default function HomeScreen({ navigation }: NativeStackHeaderProps) {



    useEffect(() => {
        console.log("home sckrin");
        return() => console.log("unmounting home")
    }, [])


    return (
        <View>
            <Text>home screen</Text>
            <Button
                title="Go to Planner"
                onPress={() => navigation.navigate("Planner")}
            />
        </View>
    )

}