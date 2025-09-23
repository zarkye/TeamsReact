
import { Image, StyleSheet, View } from "react-native";
import logoImg from '@assets/Logo.png'
export function Teams(){
    return (
        <View style={styles.container}>
            <Image source={logoImg}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})