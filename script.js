let guess;
document.getElementById('bstone').addEventListener('click', () => {
    guess = 'stone'
    compare();
})
document.getElementById('bpaper').addEventListener('click', () => {
    guess = 'paper'
    compare();
})
document.getElementById('bscissor').addEventListener('click', () => {
    guess = 'scissor'
    compare();
})
let compare = () => {
    let rn = Math.floor(Math.random() * 3);
    let rg = ['stone', 'paper', 'scissor'][rn];
    document.getElementById("system").innerHTML = `system picked: <span>${rg}</span>`
    document.getElementById("me").innerHTML = `you picked: <span>${guess}</span>`
    if (guess == rg) {
        document.getElementById("winner").innerHTML = "match draw!"
    }
    if (guess == 'stone' && rg == 'paper') {
        document.getElementById("winner").innerHTML = 'ops.. you lost the match'
    }
    if (guess == 'stone' && rg == 'scissor') {
        document.getElementById("winner").innerHTML = 'congrats! you won'
    }
    if (guess == 'paper' && rg == 'stone') {
        document.getElementById("winner").innerHTML = 'congrats! you won'
    }
    if (guess == 'paper' && rg == 'scissor') {
        document.getElementById("winner").innerHTML = 'ops.. you lost the match'
    }
    if (guess == 'scissor' && rg == 'stone') {
        document.getElementById("winner").innerHTML = 'oops.. you lost the match'
    }
    if (guess == 'scissor' && rg == 'paper') {
        document.getElementById("winner").innerHTML = 'congrats! you won'
    }
}


