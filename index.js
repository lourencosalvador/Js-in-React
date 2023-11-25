//Null operation
 const numero = 0

 document.body.innerHTML = "Seu numero: " + 
 (numero ?? "Valor não encontrado")

//Objectos 

 const user = {
     name: 'Lorrys Code',
     ager: 20,
    adress: {
        stret: 'Marconi',
        number: 18
     }
}

// in
 document.body.innerHTML = ('name' in user) ? user.name : 'erro ao encontrar'

// Keys

 document.body.innerHTML = Object.keys(user)

//  entries

  document.body.innerHTML = JSON.stringify(Object.entries(user))

// Destruturaçao


//Variaveis
 const {nameOn} = user

// //function 

 function nameAdd({name}){
     return name
 }


//Rest Operation

 const {name, ager, ...rest} = user


 document.body.innerHTML = JSON.stringify(rest)


//Array
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
 const [first, ...rests] = numbers

// Short Syntaxy 
const nameUser = 'Lorrys Code'

 const userSyntaxy = {
      name,  // -> Sintaxy Curta
   ager: 20,
     adress: {
         stret: 'Marconi',
         number: 18
     },
     addResult(){
     return 'Bom usuario'
     }
}

// Opinial Chaining 


 document.body.innerHTML = user.adress?.number  ?? 'valor não encontrado'
 document.body.innerHTML = user.addResult?.() ?? 'Function não encontrada'

//Metodos de Array

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

 for(const i of number){
     document.body.innerHTML = number
 }
 const numberMod = number.map((val) => {
     if(val % 2 === 0){
        return val * 10
    } 
 })

 const numberFilter = number.filter((val) => val % 2 === 0)

 const numberEvery = number.every((val) => val % 2 === 0)

 const numberSome = number.some((val) => val % 2 === 0)

 const numberFind = number.find((val) => val % 2 === 0)

 const numberFindeIndex = number.findIndex((val) => val % 2 === 0)

const numberReduce = number.reduce((acc, val) => {
    return acc + val
 }, 0)

 document.body.innerHTML = numberMod


// Promisses 

const contador = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
                reject(a + b)
        }, 1000)
    })
}
contador(1, 3)
.then(res => {
    document.body.innerText = res
})



