function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.querySelector("#player-health").innerText = player.hitPoints;
document.querySelector("#monster-health").innerText = monster.hitPoints

let currentEnemy = monster;

document.getElementById("fight").addEventListener("click", fight);
function fight(){
currentEnemy.hitPoints - getAttackDamage(player.attackMin, player.attackMax);
} 
