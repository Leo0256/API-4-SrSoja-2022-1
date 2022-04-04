import { StyleSheet } from "react-native";
import stylesVar from "../Components/StyleSheetVars";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: stylesVar.backGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
        fontFamily: stylesVar.fontTitulo,
        fontSize: stylesVar.fontMedium,
        color: stylesVar.color.textPrimary
    }
});

module.exports = styles