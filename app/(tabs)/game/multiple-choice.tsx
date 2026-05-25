import {
  useLocalSearchParams,
  useRouter
} from "expo-router";

import React from "react";

import {
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";

import GameLayout from "@/components/game/GameLayout";
import GameStatusBar from "@/components/game/GameStatusBar";

import { IconSymbol }
from "@/components/ui/icon-symbol";

import useMultipleChoiceGame
from "@/hooks/useMultipleChoiceGame";

function OptionButton({
  letter,
  value,
  onPress,
}:{
  letter:string;
  value:number;
  onPress:()=>void;
}){

return(

<Pressable
style={styles.optionButton}
onPress={onPress}
>

<Text
style={styles.optionLetter}
>
{letter}
</Text>

<Text
style={styles.optionValue}
>
{value}
</Text>

</Pressable>

)

}

export default function MultipleChoiceScreen(){

const params=
useLocalSearchParams()

const router=
useRouter()

const level=
Number(
params.level??1
)

const restartKey=
String(
params.restart??""
)

const{

operation,

options,

score,

round,

maxRounds,

secondsLeft,

answer

}
=
useMultipleChoiceGame({

level,

restartKey,

accumulatedScore:Number(
params.accumulatedScore??0
),

accumulatedCorrectAnswers:Number(
params.accumulatedCorrectAnswers??0
),

accumulatedWrongAnswers:Number(
params.accumulatedWrongAnswers??0
),

accumulatedResponseTime:Number(
params.accumulatedResponseTime??0
)

})

const letters=[
"A",
"B",
"C",
"D"
]

return(

<GameLayout>

<View style={styles.topRow}>

<Pressable
onPress={()=>{
router.replace("/")
}}
>

<IconSymbol
name="house.fill"
size={80}
color="#171326"
/>

</Pressable>

</View>

<GameStatusBar

score={score}

time={`${secondsLeft}s`}

round={round}

maxRounds={maxRounds}

/>

<View style={styles.content}>

<Text
style={styles.operation}
>
{operation.expression}=
</Text>

<View
style={styles.optionsGrid}
>

{options.map(

(option,index)=>(

<OptionButton

key={`${option}-${index}`}

letter={
letters[index]
}

value={option}

onPress={()=>
answer(option)
}

/>

)

)}

</View>

</View>

</GameLayout>

)

}

const styles=
StyleSheet.create({

topRow:{
height:58,
paddingHorizontal:28,
justifyContent:"center",
},

content:{
alignItems:"center",
marginTop:58,
paddingHorizontal:22,
},

operation:{
color:"#171326",
fontSize:66,
fontWeight:"900",
marginBottom:72,
},

optionsGrid:{
width:"100%",
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between",
rowGap:18,
},

optionButton:{
width:"47%",
height:86,
backgroundColor:"#3B2E68",
borderWidth:3,
borderColor:"#F5D547",
borderRadius:10,
flexDirection:"row",
alignItems:"center",
paddingHorizontal:14,
},

optionLetter:{
color:"#F5D547",
fontSize:30,
fontWeight:"900",
marginRight:18,
},

optionValue:{
color:"#FFFFFF",
fontSize:38,
fontWeight:"900",
}

})