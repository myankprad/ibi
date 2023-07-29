const makePromise =  new Promise((resolve, reject)=>{
    setTimeout(  ()=>{
        const family = true;
        if(family){
            resolve("Family i ready i can marry her")
        }
        else{
            reject("lets try to convince them")
        }
    }, 1000)
    console.log("Hey! What is status?")
})

makePromise.then((result)=> console.log(result)).catch((result)=> console.log(result))