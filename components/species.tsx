import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Species = () => (
	<TouchableOpacity style={styles.button}>
		<Image source={require('../assets/images/plant.png')} resizeMode="contain" style={styles.image} />
		
		<View style={styles.bottom}>
			<Text style={styles.popularName}>Costela-de-Adão</Text>	
			<Text style={styles.scientificName}>Nome científico</Text>	
		</View>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	button: {
		width: '48%',
		aspectRatio: 1,
		backgroundColor: '#fff',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 15,
	},
	image: {
		height: '66%',
		aspectRatio: 1,
	},
	bottom: {
		alignItems: 'center',
		marginBottom: '5%'
	},
	popularName: {
		fontSize: 20,
		color: 'rgba(14, 35, 9, .7)',
		fontWeight: 'bold',
	},
	scientificName: {
		fontSize: 18,
		color: 'rgba(14, 35, 9, .7)',
	}
})

export default Species