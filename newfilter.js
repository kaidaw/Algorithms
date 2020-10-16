function newFilter(arr,filt){
    let newArr = []
    for (let entry of arr){
        if (filt(entry)){
            newArr.push(entry)
        }
    }
    return newArr 
}

let array = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]

function aboveFive(num){
    if (num<5){
        return num
    }
}

console.log(newFilter(array,aboveFive))