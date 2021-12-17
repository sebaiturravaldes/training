/**
 * -=Loops (Ciclos)=-
 * 
 * Generales y tradicionales: for/while/do while
 * Javascript: foreach, map, filter, etc...
 */


let index = 1
for(index; index <= 10; index++) {
    console.log('For: ', index) // 1,2,...9,10
}
console.log('Sigo con mi código')

index = 1

while(index <= 10) {
    console.log('While: ', index) // 1,2,...9,10
    index++ // index = index+1 || index += 1
}

index = 1

//Primero me ejecuto y luego veo si sigo.
do {
    console.log('do-while: ', index)
    index++ 
} while(index === -20)
