import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { IconSymbol }
from "@/components/ui/icon-symbol";

export default function GameStatusBar({
  score=0,
  time="10s",
  round=1,
  maxRounds=10
}:{
 score?:number
 time?:string
 round?:number
 maxRounds?:number
}) {

return(

<View style={styles.statusBar}>

<View style={styles.statusItem}>
<IconSymbol
name="timer"
size={20}
color="#F5D547"
/>

<Text style={styles.statusText}>
{time}
</Text>
</View>

<View style={styles.statusItem}>
<IconSymbol
name="star.fill"
size={20}
color="#F5D547"
/>

<Text style={styles.statusText}>
{score}
</Text>
</View>

<View style={styles.statusItem}>
<Text style={styles.round}>
{round}/{maxRounds}
</Text>
</View>

</View>

)

}

const styles=StyleSheet.create({

statusBar:{
alignSelf:"center",

width:"82%",

height:52,

backgroundColor:"#3B2E68",

borderWidth:3,
borderColor:"#F5D547",

borderRadius:8,

flexDirection:"row",

justifyContent:"space-around",

alignItems:"center",

marginTop:8
},

statusItem:{
flexDirection:"row",
alignItems:"center",
gap:7
},

statusText:{
color:"#F5D547",
fontSize:20,
fontWeight:"900"
},

round:{
color:"#FFFFFF",
fontSize:18,
fontWeight:"900"
}

})