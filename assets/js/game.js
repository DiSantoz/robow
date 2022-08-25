// Name your Robo and display stats
const playerName = window.prompt("What is your Robo's name?");
let playerHealth = 100;
let playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

// Enemy Robot
let enemyName = "Roberto";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function () {
  // Prompt player of beginning of game
  window.alert(`Lets get ready to rummmblllleeee ${playerName}!!!`);

  // enemy is attacked
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    `${playerName} attacked ${enemyName}! ${enemyName} now has ${enemyHealth}HP remaining`
  );

  //   check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has been killed, better luck next time.");
  } else {
    window.alert(
      `${playerName} still has ${playerHealth}HP left. He coughs "I ain't hear no bell"`
    );
  }

  //   check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has been slain!");
  } else {
    window.alert(`${enemyName} still has ${enemyHealth}HP remaining!!`);
  }
};

fight();
