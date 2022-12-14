let homeScore = document.getElementById("home-scr")
let guestScore = document.getElementById("guest-scr")
let home = 0
let guest = 0

function one () {
    home += 1
    homeScore.textContent = home
}

function two () {
    home += 2
    homeScore.textContent = home
}

function three () {
    home += 3
    homeScore.textContent = home
}

function oneG () {
    guest += 1
    guestScore.textContent = guest
}

function twoG () {
    guest += 2
    guestScore.textContent = guest
}

function threeG () {
    guest += 3
    guestScore.textContent = guest
}

function resetHome () {
    homeScore.textContent = 0
    home = 0
}

function resetGuest () {
    guestScore.textContent = 0
    guest = 0
}