import Plant from "@/components/plant"
import SearchInput from "@/components/search-input"
import { Link } from "expo-router"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const screen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Minhas Plantas</Text>
                <View style={styles.searchAreaContainer}>
                 <SearchInput placeholder="Pesquisar" />
                 <TouchableOpacity style={styles.addButton}>
   <Text style={styles.addButtonText}>+</Text>
</TouchableOpacity>
                
                </View>
            </View>
            <ScrollView style={styles.listContainer} contentContainerStyle={styles.contentList}>
                <Plant type="0"/>
                <Plant type="1"/>
                <Plant type="2"/>
                <Plant type="3"/>
                <Plant type="4"/>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef3ec'
    },
    topContainer: {
        flex: 0.12,
        display: 'flex',
        gap: 12,
        marginTop: 1,
        padding: 25,
        paddingTop: 40,
    },
    contentList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        width: '100%',
    },
    listContainer: {
        flex: 1,
        padding: 25,
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32
    },
    searchAreaContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addButton: {
        backgroundColor: '#d5f1ce',
        aspectRatio: 1,
        width: 48,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 23,
    },
})

export default screen;