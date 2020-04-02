function almostIncreasing(arr) {
    
    let errors = 0;

    for (let i = 1; i< arr.length; i++) {

        if (arr[i] < arr[i-1]) {
            errors+=1;
            if (arr[i] <= arr[i-2] && arr[i+1] >= arr[i-1]) {
                return false
            }
        }
    }
 
    return errors <=1;
}

