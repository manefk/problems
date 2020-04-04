function arrayChange(arr) {
    let moves = 0;

    for (let i = 0; i< arr.length-1; i++) {
        if (arr[i] >= arr[i+1]) {
            const diff = arr[i] - arr[i+1] + 1;
            arr[i+1] = arr[i] + 1;
            moves += diff;
        }
    }
    return moves;
}
