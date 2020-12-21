let isMomHappy = false;
let momPromise = new Promise((resolve,reject)=>{
    if(isMomHappy){
        setTimeout(()=>{resolve('Mom bought me a mobile')},2000)
    }
    else{
        setTimeout(()=>{reject('Mom cheated me')},5000);
    }
});


momPromise
.then((resolvedValue)=>{console.log(resolvedValue)})
.catch((rejectedValue)=>{console.log(rejectedValue)});