import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
	placeholder: string
	title?: string
	onTextChange: (text: string) => void
	useSearchIcon?: boolean // todo
}

const Input = ({ placeholder, title, onTextChange, useSearchIcon }: Props) => {
	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}

			<TextInput 
				style={styles.input}
				placeholder={placeholder}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column'
	},
	title: {
		color: '#0E2309',
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 7,
	},
	input: {
		width: '100%',
		height: 48,
		fontSize: 16,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    elevation: 2,
    shadowRadius: 5,
	}
})

export default Input