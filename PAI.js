function reminder(message , delay, callback){
    setTimeout(() =>{
        callback(message)
    },delay)
}
reminder("Meeting at 3 PM", 2000, (message) =>{
    console.log(message)
})