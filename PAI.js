function timer(duaration,callback){
    setTimeout(() => {
        let message = ("Meeting in 3 pm")
        console.log(message)
    },duration)
}
let timer1 = timer(3000,(message =>{
    console.log(message)
}))