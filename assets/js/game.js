// Name your Robo and display stats
const playerName = window.prompt("What is your Robo's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

// Enemy Robot
let enemyNames = ['Roberto', 'Android 19', 'Beerus', 'Scoli'];
let enemyHealth = randomNumber(40, 60);
let enemyAttack = 12;

// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// Prompt player of beginning of game
window.alert(`Lets get ready to rummmblllleeee ${playerName}!!!`);

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log('playerMoney', playerMoney);
        break;
      }
    }

    // random damage based on player's atatck power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName +
        ' attacked ' +
        enemyName +
        '. ' +
        enemyName +
        ' now has ' +
        enemyHealth +
        ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName +
        ' attacked ' +
        playerName +
        '. ' +
        playerName +
        ' now has ' +
        playerHealth +
        ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } // end of while loop
}; // end of fight function

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function () {
  // rest player stats

  playerHealth = 100;

  playerAttack = 10;

  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert(
        'Welcome to Robot Gladiators! Round ' +
          (i + 1) +
          '.' +
          ` Your opponent will be ${enemyNames[i]} with ${enemyHealth}HP and ${enemyAttack}ATK`
      );

      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if enemies are alive still and player is alive

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // confirm if player wants to shop

        var storeConfirm = window.confirm(
          'The fight is over, would you like to shop?'
        );

        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }

  // play again
  endGame();
};

// End game

var endGame = function () {
  // if player is alive, they win
  if (playerHealth > 0) {
    window.alert("You've survived. Final score " + playerMoney + '.');
  } else {
    window.alert("You've lost noob");
  }

  // ask to play again

  var playAgainConfirm = window.confirm('Would you like to play again');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing=)');
  }
};

// shop function

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL' , 'UPGRADE', 'LEAVE'."
  );

  // use of switch cases for options for shop

  switch (shopOptionPrompt) {
    case 'REFILL':
    case 'refill':
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars");

        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;

    case 'UPGRADE':
    case 'upgrade':
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars");

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;

    case 'LEAVE':
    case 'leave':
      window.alert('You have left the store');
      break;

    default:
      window.alert(
        'You did not pick a valid option. Please enter: REFILL, UPGRADE, or LEAVE'
      );

      // CALL SHOP AGAIN
      shop();
      break;
  }
};

// game begins on page load

startGame();
