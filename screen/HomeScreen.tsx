import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import data from "../data.json";
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
            <FlatList
                data={data as Workout[]}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => alert(`I am pressed - ${item.name}`)}
                        >
                            <WorkoutItem
                                item={item}
                            />
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.slug}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    header: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 20,
        fontFamily: "ubuntu",
    },
})