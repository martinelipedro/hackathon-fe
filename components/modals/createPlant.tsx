import { Modal, StyleSheet, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import Input from "../input";
import Species from "../species";
import Button from "../button";

interface Props {
	visible: boolean
}

const plantData = [
  { id: '1', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '2', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '3', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '4', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '1', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '2', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '3', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '4', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '1', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '2', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '3', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
  { id: '4', name: 'Costela-de-Adão', scientificName: 'Nome científico', imageUrl: 'your_image_url_here' },
]

const CreatePlantModal = ({ visible }: Props) => {
	return (
		<Modal
			animationType="slide"
			transparent
		>
			<View style={styles.container}>
				<View style={styles.subcontainer}>
					<TouchableOpacity style={styles.closeBar} />

					<View style={styles.margin}>
						<Input
							title="Como podemos chamar sua planta?"
							placeholder="Apelido"
							onTextChange={() => {}}
						/>

						<Input
							title="Selecione a espécie"
							placeholder="Procurar"
							onTextChange={() => {}}
							useSearchIcon
						/>

						<View style={styles.clippedList}>
							<FlatList
								data={plantData}
								renderItem={Species}
								keyExtractor={(item) => item.id}
								numColumns={2}
								columnWrapperStyle={{ justifyContent: 'space-between' }}
								contentContainerStyle={{ gap: 15 }}
							/>
						</View>

						<Button text="Adicionar" />
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0, 0, 0, 0.15)'
	},
	subcontainer: {
		backgroundColor: '#EEF3EC',
		width: '100%',
		height: '85%',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	closeBar: {
		width: '35%',
		height: 5,
		backgroundColor: '#0E2309',
		borderRadius: 50,
		marginTop: '5%',
	},
	margin: {
		width: '85%',
		height: '90%',
		justifyContent: 'space-between',
		marginBottom: '5%',
	},
	clippedList: {
		height: '60%',
		overflow: 'hidden',
	}
})

export default CreatePlantModal