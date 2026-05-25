import { useEffect, useMemo } from "react";

import useGame from "@/hooks/useGame";

import { generateOptions }
from "@/lib/math/multipleChoiceGenerator";

import { calculateScore }
from "@/lib/scoring/calcularScore";

type Params={

level:number;

restartKey?:string;

accumulatedScore?:number;
accumulatedCorrectAnswers?:number;
accumulatedWrongAnswers?:number;
accumulatedResponseTime?:number;

}

export default function
useMultipleChoiceGame({

level,

restartKey="",

accumulatedScore=0,
accumulatedCorrectAnswers=0,
accumulatedWrongAnswers=0,
accumulatedResponseTime=0,

}:Params){

const game=
useGame({

level,

restartKey,

maxRounds:10,

questionTime:15,

mode:"multiple-choice",

accumulatedScore,
accumulatedCorrectAnswers,
accumulatedWrongAnswers,
accumulatedResponseTime

})

const options=
useMemo(()=>{

return generateOptions(
game.operation.answer
)

},[
game.operation.answer
])

useEffect(()=>{

if(!game.isActive)
return

if(
game.secondsLeft===0
){

const points=
calculateScore({

isCorrect:false,

isTimeout:true,

secondsLeft:0,

questionTime:
game.questionTime

})

game.finishQuestion(

points,

false,

game.questionTime

)

}

},[
game.secondsLeft
])

function answer(
selected:number
){

const isCorrect=

selected===
game.operation.answer

const responseTime=
game.questionTime-
game.secondsLeft

const points=
calculateScore({

isCorrect,

isTimeout:false,

secondsLeft:
game.secondsLeft,

questionTime:
game.questionTime

})

game.finishQuestion(

points,

isCorrect,

responseTime

)

}

return{

operation:
game.operation,

options,

score:
game.score,

round:
game.round,

maxRounds:
game.maxRounds,

secondsLeft:
game.secondsLeft,

answer

}

}