import AsyncStorage from "@react-native-async-storage/async-storage";

import { GameResult }
from "@/lib/scoring/resultTypes";

const KEY="game_results";

export async function
saveGameResult(
result:GameResult
){

const current=
await getResults()

const updated=[

result,

...current

]

await AsyncStorage.setItem(

KEY,

JSON.stringify(updated)

)

}

export async function
getResults():
Promise<GameResult[]>{

const value=
await AsyncStorage.getItem(
KEY
)

if(!value)
return []

return JSON.parse(
value
)

}

export async function
getBestResultsByMode(
mode:string
){

const results=
await getResults()

return results

.filter(
(r:GameResult)=>

r.mode===mode
)

.sort(

(
a:GameResult,

b:GameResult

)=>

b.score-a.score

)

.slice(0,5)

}