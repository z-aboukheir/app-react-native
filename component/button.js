import { StyleSheet, Text, View, FlatList, SafeAreaView,TouchableOpacity, useState} from 'react-native';

export default function Button({children, handlePress, argumentFunction, stylesButton, stylesText } ) {

    const onButtonPress = () => {
        if (argumentFunction) {
          handlePress(argumentFunction);
        } else {
          handlePress();
        }
      }

    return(
        // <TouchableOpacity style={stylesButton} onPress={handlePress && (argumentFunction? () =>handlePress(argumentFunction):() =>handlePress())}>
        <TouchableOpacity style={[stylesButton , styles.button]} onPress={onButtonPress}>  
        <Text style={[stylesText, styles.text]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        borderWidth: 1,
        
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})