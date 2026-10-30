export function caesarCipher(s, key){
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    
    return [...s].reduce((acc, current) =>{
        const up = current == current.toUpperCase();
        if (up) current = current.toLowerCase()

        if (alpha.indexOf(current) > -1){
            let indx = alpha.indexOf(current)

            indx = (indx + key) % 26
            if (up){
                acc += alpha[indx].toUpperCase()
            }else{
                acc += alpha[indx]
            }
        }else{
            acc += current
        }
        return acc

    } ,"")
}