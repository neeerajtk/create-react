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
        // wrap it in a reserve promise 
         .then(newValue => console.log(newValue))
        // value in promise accessed using then 
        .catch(rejectValue => console.log(rejectValue));
        // using catch we get the reject value 

        // SUCCESS IS IN then , FAILURE IN catch 


        // fetch is like a promise


        fetch('https://jsonplacehlder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json=>console.log(json))
            .catch(error=>console.log('error !!!')
            )
        