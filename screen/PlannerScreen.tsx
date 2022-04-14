import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {


    useEffect(() => {
        console.log("plan sckrin");
        return() => console.log("unmounting planer")
    }, [])

    return (
        <View>
            <Text>planner screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )

}