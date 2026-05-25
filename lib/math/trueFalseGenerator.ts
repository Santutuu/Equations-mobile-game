function random(
min:number,
max:number
){

return Math.floor(
Math.random()*
(max-min+1)
)+min

}

export function
generateTrueFalse(
expression:string,
answer:number
){

const shouldBeTrue=
Math.random()>0.5

if(
shouldBeTrue
){

return{

display:
`${expression}=${answer}`,

isCorrect:true

}

}

const fakeAnswer=
answer+
random(
1,
10
)

return{

display:
`${expression}=${fakeAnswer}`,

isCorrect:false

}

}