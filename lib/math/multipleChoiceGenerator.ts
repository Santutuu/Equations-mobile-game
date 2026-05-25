function random(min:number,max:number){
 return Math.floor(
  Math.random()*(max-min+1)
 )+min
}

export function generateOptions(
 answer:number
){

const options=
new Set<number>()

options.add(answer)

while(
 options.size<4
){

const offset=
random(-15,15)

if(offset!==0){

options.add(
answer+offset
)

}

}

return Array
.from(options)
.sort(
()=>Math.random()-0.5
)

}