import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function CategoryGridTile({name, color, onPress}) {
   // console.log(color);
    return(
        <View style={[styles.gridItem, {backgroundColor :  `${'#'+color}`} ]}>
            <Pressable 
                style={({pressed})=>  [styles.button , pressed ? styles.buttonPressed : null  ]}
                android_ripple={{color:'#ccc'}}
                // style={({pressed})=>  {[styles.button , pressed (?./?) styles.buttonPressed : null  ]}} ASK HASAN
                onPress={onPress}   
            >
                <View style={styles.innerItem}>
                    <Text style={styles.title}>
                       {name}
                    </Text>
                    </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
      gridItem:{
           flex:1,
           margin:16,
           height:158,
           borderRadius:8,
           elevation:8,
           shadowColor:'black',
           shadowOpacity:0.25,
           shadowOffset:{height:2, width:0},
           shadowRadius:8,
           overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

      },
      innerItem:{
           flex:1,
        //it dissapeared because it took all the space of pressable which is the parent 
        //component, so i need to set the parent component to the same size to show the text
           padding:16,
           justifyContent:'center',
           alignItems:'center',
      },
      title:{
          fontWeight:'bold',
          fontSize:18,
      },
      button:{
          flex:1
      },
      buttonPressed:{
          opacity:.25,
      }
});

export default CategoryGridTile;