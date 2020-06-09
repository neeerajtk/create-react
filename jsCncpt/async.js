const myPromise = new Promise((resolve, reject)=>{
    if(false){
    setTimeout(()=>{
        resolve('I have succeeded');
    }, 1000);
    }else{
        reject('I have failed !');
    }
});

myPromise
        .then(value => value + '!!!')
        // value in promise accessed using then 
         .then(newValue => console.log(newValue))
        .catch(rejectValue => console.log(rejectValue));
        // using catch we get the reject value 
