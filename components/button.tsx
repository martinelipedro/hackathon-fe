import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
	text: string
}

const Button = ({ text }: Props) => (
	<TouchableOpacity style={styles.button}>
		<Text style={styles.text}>Adicionar</Text>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 48,
		backgroundColor: '#0E2309',
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
})

export default Button