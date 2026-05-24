import useGame from "./useGame";
import useNumericInput from "./useNumericInput";

export default function useClassicGame(difficulty: any){

 const game=
 useGame(difficulty);

 const input=
 useNumericInput();

 function submitAnswer(){

     if(
        input.answer===""
     )
     return;

     game.validateAnswer(
       Number(input.answer)
     );

     input.clear();

 }

 return{

    operation:
    game.operation,

    score:
    game.score,

    round:
    game.round,

    answer:
    input.answer,

    pressNumber:
    input.pressNumber,

    deleteLast:
    input.deleteLast,

    submitAnswer
 }

}