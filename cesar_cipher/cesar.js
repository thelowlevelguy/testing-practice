export function cesarCipher(s, key){
    const alpha = "abcdefghijklmnopqrstuvwxyz"

    return [...s].reduce((acc, current) => {
        let up = isUpper(current)
        if (up){
            current = current.toLowerCase();
        }
        if (alpha.indexOf(current) > -1){
            let indx = alpha.indexOf(current)
            const newIndx = (indx + key) % 26
            if (up){
                acc += alpha[newIndx].toUpperCase();
            }else{
                acc += alpha[newIndx];
            }  
        }else{
            acc += current
        }
        return acc
    }, "")
}

function isUpper(s){
    return s === s.toUpperCase() && s !== s.toLowerCase();
}