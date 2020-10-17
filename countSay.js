function takeSreturnS(string){
        let last = null
        let count = 0
        let changedString = [...string]
        let outputArray = []
        for (let letter of changedString){
            if (!last){
                last=letter
            }
            if (letter===last){
                count++
            }
            if (letter!==last){
                outputArray.push(count)
                outputArray.push(last)
                count=1
            }
            last = letter
        }
        outputArray.push(count)
        outputArray.push(last)
        return outputArray.join("")
    }


var countAndSay = function(n) {
    let initial = "1"
    while (n-1){
        console.log(initial)
        initial=takeSreturnS(initial)
        n--
    }
    return initial
};