import { useRouter } from "expo-router";
import { useState } from "react";

import {
generateOperation,
getDifficultyByClassicLevel
}
from "@/lib/math/generator";

import {
generateTrueFalse
}
from "@/lib/math/trueFalseGenerator";

const MAX_LEVEL=3
const MAX_ROUNDS=10

export default function
useTrueFalseGame(
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
question,
setQuestion
]=useState(
generateTrueFalse(
operation.expression,
operation.answer
)
)

const[
round,
setRound
]=useState(1)

function answer(
selected:boolean
){

const isCorrect=
selected===
question.isCorrect

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
level>=3
)

}

})

return

}

const next=
generateOperation(
difficulty)

setCurrent(next)

setQuestion(
generateTrueFalse(
next.expression,
next.answer
)
)

setRound(
prev=>prev+1
)

}

return{

question,

round,

answer

}

}