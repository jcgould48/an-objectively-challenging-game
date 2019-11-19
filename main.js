function getAttackDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let currentEnemy = monster;

update =()=>{
    document.querySelector("#player-health").innerText = player.hitPoints;
    document.querySelector("#player-health").style.width = player.hitPoints +'px';
    document.querySelector("#monster-health").innerText = currentEnemy.hitPoints
    document.querySelector("#monster-health").style.width = currentEnemy.hitPoints +'px'
}
update()

document.querySelector("#fight").addEventListener("click", fight);

function fight(){
    let playerDamage = getAttackDamage(player.attackMin, player.attackMax);
    let enemyDamage =getAttackDamage(currentEnemy.attackMin, currentEnemy.attackMax);
    if(currentEnemy.hitPoints > 0 && player.hitPoints > 0){
    if(playerDamage <=16){
        currentEnemy.hitPoints -= playerDamage;
        document.querySelector('#monster-damage-taken').innerText = 'You slapped with ' + playerDamage;
        document.querySelector('#monster-damage-taken').style.color = 'coral';
            document.querySelector('#monster-damage-taken').style.fontSize = '1rem';
        update()}
        
        else if (playerDamage >20){
            currentEnemy.hitPoints -= playerDamage;
            document.querySelector('#monster-damage-taken').innerText = 
            'You clobbered with ' + playerDamage;
            document.querySelector('#monster-damage-taken').style.color = 'red';
            document.querySelector('#monster-damage-taken').style.fontSize = '1.5rem';
            update()
        }
        else{
            currentEnemy.hitPoints -= playerDamage;
            document.querySelector('#monster-damage-taken').innerText = 'You hit with ' + playerDamage;
            document.querySelector('#monster-damage-taken').style.color = 'ivory';
            document.querySelector('#monster-damage-taken').style.fontSize = '1rem';
            update()
        }
            
        if (enemyDamage <= 14){
            player.hitPoints -= enemyDamage;
            document.querySelector('#player-damage-taken').innerText = 'You got slapped with ' + enemyDamage;
            document.querySelector('#player-damage-taken').style.color = 'coral';
            document.querySelector('#player-damage-taken').style.fontSize = '1rem';
            update()
        }
        else if (enemyDamage >18){
            player.hitPoints -= enemyDamage;
            document.querySelector('#player-damage-taken').innerText = 'You got clobbered with ' + enemyDamage;
            document.querySelector('#player-damage-taken').style.color = 'red';
            document.querySelector('#player-damage-taken').style.fontSize = '1.5rem';
            update()
        }
        else{
            player.hitPoints -= enemyDamage;
            document.querySelector('#player-damage-taken').innerText = 'You got hit with ' + enemyDamage;
            document.querySelector('#player-damage-taken').style.color = 'ivory';
            document.querySelector('#player-damage-taken').style.fontSize = '1rem';
            update()
        }
    }
    if(currentEnemy.hitPoints <= 0){
    document.querySelector("#monster>img").src = "./boss-monster.jpg";
    currentEnemy = boss;
    update()
    }
    if(player.hitPoints <= 0){
        document.querySelector('#results').innerText = 'Mario is dead';
        document.querySelector('#fight').innerText = 'Reset';
        document.querySelector('#fight').removeEventListener("click", fight);
        document.querySelector('#fight').addEventListener("click", reset);
    }
} 

function reset(){
    document.location.reload(true);
}