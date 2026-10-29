export function analyzeArray(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length
    const sum = arr.reduce((acc, current) => {
        acc += current
        return acc
    }, 0)
    const average = sum / length
    return {average, min, max, length}
}

