import { useEffect } from "react";

import useGame from "@/hooks/useGame";

import { generateTrueFalse } from "@/lib/math/trueFalseGenerator";
import { calculateScore } from "@/lib/scoring/calcularScore";

type Params = {
  level:number;
  restartKey?:string;

  accumulatedScore?:number;
  accumulatedCorrectAnswers?:number;
  accumulatedWrongAnswers?:number;
  accumulatedResponseTime?:number;
};

export default function useTrueFalseGame({
  level,
  restartKey="",

  accumulatedScore=0,
  accumulatedCorrectAnswers=0,
  accumulatedWrongAnswers=0,
  accumulatedResponseTime=0,
}:Params){

  const game=useGame({
    level,
    restartKey,

    maxRounds:10,
    questionTime:15,

    mode:"true-false",

    accumulatedScore,
    accumulatedCorrectAnswers,
    accumulatedWrongAnswers,
    accumulatedResponseTime,
  });

  const question=
    generateTrueFalse(
      game.operation.expression,
      game.operation.answer
    );

  useEffect(()=>{

    if(!game.isActive) return;

    if(game.secondsLeft===0){

      const points=
      calculateScore({

        isCorrect:false,

        isTimeout:true,

        secondsLeft:0,

        questionTime:
        game.questionTime
      });

      game.finishQuestion(
        points,
        false,
        game.questionTime
      );
    }

  },[game.secondsLeft]);



function answer(
selected:boolean
){

const isCorrect=
selected===
question.isCorrect

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

question,

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