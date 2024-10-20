import { useGlobalSearchParams } from "expo-router";
import { View, Text, ScrollView, StyleSheet, Image} from "react-native";

export default function PlantPage() {
    const param = useGlobalSearchParams()

    return (
        <ScrollView>
            <View style={styles.mainImageContainer}>
            <Image source={require('../../assets/images/plant.png')} style={{width: 200, height: 200}}></Image>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainImageContainer: {
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})