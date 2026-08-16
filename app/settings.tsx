import React from "react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import GameLayout from "@/components/game/GameLayout";
import ConfigCard from "@/components/game/ConfigCard";
import CounterSelector from "@/components/game/CounterSelector";
import SummaryCard from "@/components/game/SummaryCard";

import { IconSymbol } from "@/components/ui/icon-symbol";

export default function SettingsScreen(){

return(

<GameLayout>
<View style={styles.screenPanel}>
<View style={styles.topRow}>

<Link href="/" asChild>

<Pressable>
<IconSymbol
name="house.fill"
size={45}
color="white"
/>
</Pressable>

</Link>

</View>
<Text style={styles.title}>
Configuracion
</Text>


<View style={styles.content}>

<ConfigCard title="Interacciones por ronda">

<CounterSelector value="10"/>

</ConfigCard>

<ConfigCard title="Tiempo max por operacion">

<CounterSelector value="8s"/>

</ConfigCard>

<SummaryCard/>

<Pressable style={styles.saveButton}>

<Text style={styles.saveText}>
Guardar
</Text>

</Pressable>

</View>
</View>

</GameLayout>

)

}

const styles=StyleSheet.create({
    screenPanel: {
    flex: 1,
    backgroundColor: "#3B2E68",

    paddingHorizontal: 28,
    
  },

topRow:{
height:60,
gap:20,
flexDirection:"row",
alignItems:"center",
marginTop:30
},

title:{
fontSize:34,
fontWeight:"900",
color:"white",

marginLeft:70
},

content:{
marginTop:50,

alignItems:"center",
gap:25
},

saveButton:{
width:"85%",
height:65,
marginTop:40,

backgroundColor:"#F5D547",

borderWidth:4,
borderColor:"#5C45AA",

justifyContent:"center",
alignItems:"center"
},

saveText:{
fontSize:36,
fontWeight:"900"
}

})