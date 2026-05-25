import { useRouter } from "expo-router";
import { useState } from "react";

import {
generateOperation,
getDifficultyByClassicLevel
}
from "@/lib/math/generator";

import {
generateOptions
}
from "@/lib/math/multipleChoiceGenerator";

const MAX_LEVEL=3
const MAX_ROUNDS=10

export default function
useMultipleChoiceGame(
level:number
){

const router=
useRouter()

const difficulty=
getDifficultyByClassicLevel(
level
)

const operation=
generateOperation(
difficulty
)

const[
current,
setCurrent
]=useState(operation)

const[
options,
setOptions
]=useState(
generateOptions(
operation.answer
)
)

const[
round,
setRound
]=useState(1)

function answer(
selected:number
){

const isCorrect=
selected===
current.answer

if(
!isCorrect
){

router.replace(
"/game/result-lose"
)

return

}

if(
round>=MAX_ROUNDS
){

router.replace({

pathname:
"/game/result-win",

params:{
nextLevel:
String(level+1),

finishedGame:
String(
level>=MAX_LEVEL
)

}

})

return

}

const next=
generateOperation(
difficulty
)

setCurrent(next)

setOptions(
generateOptions(
next.answer
)
)

setRound(
prev=>prev+1
)

}

return{

operation:
current,

options,

round,

answer

}

}