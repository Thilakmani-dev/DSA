let t = new Date();
let nemo_array = ['nemo'];
let nemo_array_2 = ['dola','croc','father','nemo','shark','dolphin','tortise','swan','kid','bus'];
let nemo_array_3 = new Array(10000).fill('nemo');
function findingNemo(arr){
    let t0 = t.getSeconds();
for(let i = 0; i< arr.length; i++){
    if(arr[i] === 'nemo'){
        console.log('found nemo');
    }
}
let t1 = t.getSeconds();
console.log(`takes ${t1-t0} milliseconds`);
}

findingNemo(nemo_array_3);