function steps(n) {
    for (let row = 0; row< n; row++) {
        let step = "";
        for (let column = 0; column<n; column++) {
            if (column <=row) {
                step += "#"
            } else {
                step += " "
            }
        }
        console.log(step)
    }
}


function pyramid(n) {
    let midpoint = Math.floor(n*2)/2;
    for (let row = 0; row < n; row++) {
        let step = "";
        for (let column = 0; column <= n*2-1; column++) {
            if (column >= midpoint - row && column <= midpoint + row) {
                step += "#"
            }
            else {
                step += " "
            }
        
        }
        console.log(step)
    }
}
pyramid(15)