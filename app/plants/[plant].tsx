import TipCard from "@/components/tip-card";
import WaterReminder from "@/components/water-reminder";
import { useGlobalSearchParams } from "expo-router";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from "react-native";
import Svg, { Path } from "react-native-svg";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

const IconSvg = () => {
    return                             <Svg width="26" height="26" viewBox="0 0 16 15" fill="none" >
    <Path d="M6.72043 15V8.35417C5.82437 8.35417 4.96332 8.18403 4.13726 7.84375C3.31121 7.50347 2.58317 7.02083 1.95312 6.39583C1.32308 5.77083 0.840054 5.04861 0.504032 4.22917C0.168011 3.40972 0 2.55556 0 1.66667V0H1.68011C2.56216 0 3.41622 0.170139 4.24227 0.510417C5.06832 0.850694 5.79637 1.33333 6.42641 1.95833C6.86044 2.38889 7.22096 2.86111 7.50798 3.375C7.795 3.88889 8.01551 4.4375 8.16952 5.02083C8.23953 4.92361 8.31653 4.82986 8.40054 4.73958C8.48454 4.64931 8.57555 4.55556 8.67356 4.45833C9.3036 3.83333 10.0316 3.35069 10.8577 3.01042C11.6837 2.67014 12.5448 2.5 13.4409 2.5H15.121V4.16667C15.121 5.05556 14.9495 5.90972 14.6064 6.72917C14.2634 7.54861 13.7769 8.27083 13.1468 8.89583C12.5168 9.52083 11.7923 10 10.9732 10.3333C10.1542 10.6667 9.2966 10.8333 8.40054 10.8333V15H6.72043ZM6.72043 6.66667C6.72043 6 6.59092 5.36458 6.33191 4.76042C6.07289 4.15625 5.70537 3.61806 5.22933 3.14583C4.7533 2.67361 4.21077 2.30903 3.60173 2.05208C2.99269 1.79514 2.35215 1.66667 1.68011 1.66667C1.68011 2.33333 1.80612 2.97222 2.05813 3.58333C2.31015 4.19444 2.67417 4.73611 3.1502 5.20833C3.62623 5.68056 4.17227 6.04167 4.78831 6.29167C5.40435 6.54167 6.04839 6.66667 6.72043 6.66667ZM8.40054 9.16667C9.07258 9.16667 9.71312 9.04167 10.3222 8.79167C10.9312 8.54167 11.4737 8.18056 11.9498 7.70833C12.4258 7.23611 12.7933 6.69444 13.0523 6.08333C13.3114 5.47222 13.4409 4.83333 13.4409 4.16667C12.7688 4.16667 12.1248 4.29514 11.5087 4.55208C10.8927 4.80903 10.3467 5.17361 9.87063 5.64583C9.3946 6.11806 9.03058 6.65625 8.77856 7.26042C8.52655 7.86458 8.40054 8.5 8.40054 9.16667Z" fill="#C6B205"/>
    </Svg>
}

export default function PlantPage() {
    const param = useGlobalSearchParams()

    return (
        <ScrollView contentContainerStyle={{backgroundColor: '#eef3ec'}}>
            <View style={styles.mainImageContainer}>
            <Image source={require('../../assets/images/plant.png')} style={{width: 300, height: 300}}></Image>
            </View>
            <View style={styles.titleContainer}>
                <Text style={{fontWeight: 'bold', fontSize: 41}}>Barbosa</Text>
                <Text style={{fontSize: 29, fontWeight: "600", color: '#0E2309B2'}}>Babosa - Aloe vera</Text>
                <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                    <IconSvg />
                    <Text style={{color: '#C6B205', fontSize: 28}}> Florescendo</Text>
                </View>
                
            </View>
            <View style={styles.contentContainer}>
                    <Text style={{fontSize: 18, color: '#0E230980'}}>A babosa é uma planta suculenta conhecida por suas folhas grossas e carnosas, que armazenam gel com propriedades medicinais e hidratantes.</Text>
                    <WaterReminder />
                    <TipCard />
                    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonContent}>
        <Icon name="trash-can-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Excluir</Text>
      </View>
    </TouchableOpacity>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    titleContainer: {
        padding: 25,
        gap: 4
    },
    contentContainer: {
        paddingLeft: 25,
        paddingRight: 25,
    },
    waterStyle: {

    },
    button: {
        backgroundColor: '#f44336', // Red background
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25, // Rounded corners
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContent: {
        flexDirection: 'row', // Icon and text in a row
        alignItems: 'center', // Vertically center content
      },
      buttonText: {
        color: '#fff', // White text color
        fontWeight: 'bold',
        marginLeft: 8, // Space between the icon and the text
        fontSize: 16,
      },
})