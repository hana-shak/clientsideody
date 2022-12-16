import { View, Text, TextInput, StyleSheet} from 'react-native';

function CustomInput({label,configProps,style}){

    const InputFieldStyle = [styles.InputField]; 
    if(configProps && configProps.multiline ){
       InputFieldStyle.push(styles.multiLine)
    }

    return(
        <View style={styles.container}>   
            <Text style={styles.label}>{label}</Text>
            <TextInput {...configProps}  style={InputFieldStyle}/>   
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        padding:16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    
    label:{
        fontSize:14,
        fontWeight:'bold',
        padding:5, 
        margin:5,
       
        // borderRadius:10,
        // borderColor:'red',
        // borderWidth:2,

    },

    InputField:{
        padding:16, 
        margin:5,
        borderRadius:10,
        borderColor:'orange',
        borderWidth:2,
        fontSize:18,
        backgroundColor:'lightgray',
        
        
    },
    multiLine:{
        minHeight:100,
        textAlignVertical:'top',
    }

});

export default CustomInput;