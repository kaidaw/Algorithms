let array = [1,2,3,4,5]

function addOne(arr){
    return arr.map((num)=>{
        return num+1
    })
}

function myMap(ar,funct){
    let newArray = []
    for (let item of ar){
        newArray.push(funct(item))
    }
    return newArray
}

console.log(addOne(array))

console.log(myMap(array,(num)=>{return num+2}))