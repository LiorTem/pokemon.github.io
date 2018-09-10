//////////////////////////////////////////////
//////////////////////////////////////////////
//CALL WILD POKEMON
function wildPokemon (type) {
this.type = type;
}
//POKEMON ARRAY
var pokemonStats = new Array();
pokemonStats[0] = new wildPokemon("Zubat");
pokemonStats[1] = new wildPokemon("Oddish");
pokemonStats[2] = new wildPokemon("Geodude");
pokemonStats[3] = new wildPokemon("Slowpoke");
//POKEMON ATTACK ARRAY
function move (move, basedmg) {
this.move = move;
this.basedmg = basedmg;
}
var moves = new Array();
moves[0] = new move("Slam", 8);
moves[1] = new move("Headbutt", 6);
moves[2] = new move("Tackle", 5);
moves[3] = new move("Cut", 7);
///////////////////////////////////////////////////
//////////////////////////////////////////////////
//CALL WILD POKEMON STATS
//CALL WILD POKEMON ID
var wildPokemonid;
callWildPokemonid = function(){
wildPokemonid = Math.floor(Math.random() * pokemonStats.length);
};
//CALL WILD POKEMON LEVEL
var wildPokemonLevel;
callWildPokemonLevel = function(){
wildPokemonLevel = Math.floor(Math.random() * 6 + 1);
};
//CALL WILD POKEMON HEALTH  
var wildPokemonHealth;
callWildPokemonHealth = function(){
wildPokemonHealth = Math.floor(Math.random() * 20 + 20);
};
//CALL WILD POKEMON ATTACK
var moveid;
callMoveid = function(){
moveid = Math.floor(Math.random() * moves.length);
};
//CALL DAMAGE 
var damage;
//CALL WILD POKEMON ATTACK DAMAGE
callMoveDamage = function(){
damage = 4;
};

//CALL PLAYER ATTACK DAMAGE
callPlayerMoveDamage = function() {
damage = Math.floor(Math.random() * moves[playerMove].basedmg + 3);
};
//CALL PLAYER ATTACK
function selectMove(){

playerMove = prompt("You have 4 moves, " + moves[0].move + ", " + moves[1].move + ", " + moves[2].move + " and " + moves[3].move + ", which move do you want to use?").toUpperCase();
if (playerMove === ""){
selectMove();
}
else
{
switch(playerMove){
case 'SLAM':
playerMove = 0; 
callPlayerMoveDamage();
playerAttack();
break;
case 'HEADBUTT':
playerMove = 1;
callPlayerMoveDamage();
playerAttack();
break;
case 'TACKLE':
playerMove = 2;
callPlayerMoveDamage();
playerAttack();
break;
case 'CUT':
playerMove = 3; 
callPlayerMoveDamage();
playerAttack();
break;
default : 
alert('Move not found');
selectMove();
break;
}
}
}

///////////////////////////////////////////////////
//////////////////////////////////////////////////
//WILD POKEMON ATTACK
function wildPokemonAttack(){


if (pokemonHealth > 0){
pokemonHealth = pokemonHealth - damage;
alert("Wild " + pokemonStats[wildPokemonid].type + " uses " + moves[moveid].move + " dealing " + damage + " damage!" + "  /your health: " + pokemonHealth  );

attackLoop();}
else
{

alert(" your Pokemon fainted");
}
}
//PLAYER ATTACK
function playerAttack(){
alert ("Player uses " + moves[playerMove].move + " dealing " + damage + " damage!");
if (wildPokemonHealth > 0) 
{
wildPokemonHealth = wildPokemonHealth - damage;
alert(pokemonStats[wildPokemonid].type + " has " + wildPokemonHealth + "   health remaining!" + " / and you have  " + pokemonHealth);
playerTurn = false;
wildPokemonFaint()
}
else
{
alert(pokemonStats[wildPokemonid].type + " fainted");
}
}
//RANDOMIZE WILD POKEMON
function randomPokemon(){
callWildPokemonid();
callWildPokemonHealth();
callWildPokemonLevel();
callMoveid();
}

 pokemonHealth = 75;
 potion = 4;


//START FIGHT
function startFight(){

randomPokemon();
var pokemonHealth = 75
alert("Wild " + pokemonStats[wildPokemonid].type + " appears!");
alert("Level : " + wildPokemonLevel + " Health : " + wildPokemonHealth);
alert("what wil you do?   "+ " health: " + pokemonHealth);
playerTurn = true;

attackLoop();
}
function attackLoop(){
document.getElementById("pokemonHealth").innerHTML = pokemonHealth;
document.getElementById("wildPokemonHealth").innerHTML = wildPokemonHealth;
if (playerTurn === false)
{
playerTurn = true;
wildPokemonAttack();
}
else
{
playerTurn = false;
selectMove();
}
}
function wildPokemonFaint(){
if (wildPokemonHealth < 1){
alert(pokemonStats[wildPokemonid].type + " has fainted");
document.getElementById("wildPokemonHealth").innerHTML = "fainted";
}

else
{   attackLoop();}
}
function herstel(){
  if (potion > 0){
	potion = potion - 1  
	   document.getElementById("potion").innerHTML = potion;
 
 
  
  pokemonHealth = pokemonHealth + 10;
  if (pokemonHealth > 75)
  {
	  pokemonHealth = 75;
  }
	document.getElementById("pokemonHealth").innerHTML = pokemonHealth;
}
}

function walk(){
var xd = Math.floor((Math.random() * 2) + 1);
document.getElementById("demo").innerHTML = "";
if (xd < 2){
	potion = potion + 1;
alert("you found a potion");
 document.getElementById("potion").innerHTML = potion;
} else {	
startFight();
}
	
}




