import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Workout } from '../types/data';
import { formatSec } from '../utils/time';


export default function WorkoutItem({ item }: { item: Workout }) {

    return (

        <View style={styles.container}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.duration}>Duration: {formatSec(item.duration)}
            </Text>
            <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
        </View>

    );

}


const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "white",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,

    },
    duration: {
        fontSize: 20,
    },
    difficulty: {
        fontSize: 20,
    },
})