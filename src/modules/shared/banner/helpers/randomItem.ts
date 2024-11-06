export function randomItem(arr: string[]) {
    const randIndex = Math.floor(Math.random() * (arr.length - 1))

    return arr[randIndex]
}