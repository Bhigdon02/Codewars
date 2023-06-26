// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    let remain = health - damage
    if (remain >= 0) {
      return remain
    } else {
      return 0
      }
  }