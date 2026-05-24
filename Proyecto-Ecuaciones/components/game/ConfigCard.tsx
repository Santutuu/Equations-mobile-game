import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ConfigCard({
  title,
  children
}:{
 title:string,
 children:React.ReactNode
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
}

const styles=StyleSheet.create({

card:{
backgroundColor: "black",
borderRadius:28,
borderWidth:4,
borderColor:"#F5D547",

padding:18,
alignItems:"center",
height:180,
width:"90%"
},

title:{
color:"white",
fontWeight:"900",
fontSize:30,
textAlign:"center",

marginBottom:15
}

})