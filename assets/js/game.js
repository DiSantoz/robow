// Name your Robo and display stats
const playerName = window.prompt("What is your Robo's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

// Enemy Robot
let enemyName = "Roberto";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = function () {
  // Prompt player of beginning of game
  window.alert(`Lets get ready to rummmblllleeee ${playerName}!!!`);

  //  Fight or Flight?
  const promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'."
  );

  if (promptFight === "fight" || promptFight === "FIGHT") {
    // enemy is attacked
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      `${playerName} attacked ${enemyName}! ${enemyName} now has ${enemyHealth}HP remaining`
    );

    //   check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has been slain!");
    } else {
      window.alert(`${enemyName} still has ${enemyHealth}HP remaining!!`);
    }

    //  player is attacked back
    playerHealth = playerHealth - enemyAttack;
    console.log(playerHealth);

    //   check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has been killed, better luck next time.");
    } else {
      window.alert(
        `${playerName} still has ${playerHealth}HP left. He coughs "I ain't hear no bell"`
      );
    }
    //   if player SKIPS
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm choice
    let confirmSkip = window.confirm(
      "Are you sure you want to skip the fight?"
    );
    // if yes, penalty is imposed
    if (confirmSkip) {
      window.alert(
        `${playerName} had decided to leave with their dignity! Farewell. `
      );
      // penalty for skipping
      playerMoney = playerMoney - 2;
      //   if no, fight again
    } else {
      fight();
    }
  } else {
    window.alert("Pick a valid option");
  }
};

fight();
