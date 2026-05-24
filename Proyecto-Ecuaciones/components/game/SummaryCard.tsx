import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SummaryCard(){

return(

<View style={styles.card}>

<Text style={styles.title}>
Resumen
</Text>

<View style={styles.row}>

<View>

<Text style={styles.big}>
10
</Text>

<Text style={styles.small}>
Interacciones{"\n"}
por ronda
</Text>

</View>

<View>

<Text style={styles.big}>
8s
</Text>

<Text style={styles.small}>
Tiempo máximo{"\n"}
por operación
</Text>

</View>

</View>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#FFF",
borderRadius:26,



width:"90%",

borderWidth:5,
borderColor:"#1F1F1F",
height: 150
},

title:{
textAlign:"center",
fontSize:28,
color:"#258AFF",
fontWeight:"700",

},

row:{
flexDirection:"row",
justifyContent:"space-around"
},

big:{
fontSize:40,
fontWeight:"900",
textAlign:"center"
},

small:{
fontSize:15,
textAlign:"center"
}

})