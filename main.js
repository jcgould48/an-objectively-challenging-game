function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let currentEnemy = monster;

update =()=>{
    document.querySelector("#player-health").innerText = player.hitPoints;
    document.querySelector("#monster-health").innerText = currentEnemy.hitPoints
}
update()

document.querySelector("#fight").addEventListener("click", fight);

function fight(){
    if(currentEnemy.hitPoints > 0 && player.hitPoints > 0){
    currentEnemy.hitPoints -= getAttackDamage(player.attackMin, player.attackMax);
    player.hitPoints -= getAttackDamage(currentEnemy.attackMin, currentEnemy.attackMax);
    update()
    }
    if(currentEnemy.hitPoints <= 0){
    document.querySelector("#monster>img").src = "./boss-monster.jpg"
    currentEnemy = boss;
    }
    if(player.hitPoints <= 0){
        document.querySelector('#results').innerText = 'Mario is dead'
        document.querySelector('#fight').innerText = 'Reset'
        document.querySelector('#fight').removeEventListener("click", fight)
    }
} 