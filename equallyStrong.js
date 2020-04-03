function equallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    let yourWeakest = Math.min(yourLeft, yourRight)
    let yourStrongest = Math.max(yourLeft, yourRight)
    let friendsWeakest = Math.min(friendsLeft, friendsRight)
    let friendsStrongest = Math.max(friendsLeft, friendsRight)

    return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
}

