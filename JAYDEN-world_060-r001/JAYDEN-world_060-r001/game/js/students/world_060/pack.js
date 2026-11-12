// BEGINNER PROJECT: JAYDEN | r001 | engine 2.14.0
// Teacher-supplied starter code; not evidence that the student wrote this code.
// Play first, describe the controls and goal, then prompt and log one asset.
// Keep IDs fixed. Teacher helps with one small explained change at a time.
// manifest = identity; home = room; dialogue = guide; level = game rules.
// STUDENT TEMPLATE: Training Arena. Start with one attack and two small waves.
// This whole pack works in the Overworld and in its own standalone export.
registerStudentPack({
  schemaVersion: 1,
  // Give your copy a unique ID, level ID and reward ID. Your teacher places the home.
  manifest: {
    id: "world_060", name: "JAYDEN — Starter Project", author: "Teacher starter for JAYDEN",
    description: "Defeat the training robots, then reach the exit.",
    iconColor: "orange", position: {"x":192,"y":384}, width: 32, height: 32,
    levelId: "world_060_level", rewardId: "key_world_060"
  },
  // Home positions use tiles. Press E near the coach, portal, save point or exit.
  home: {
    tileSize: 32, width: 20, height: 12, spawnTile: { x: 5, y: 8 },
    interactables: [
      { type: "npc", id: "coach", name: "Coach", dialogueKey: "training", tileX: 4, tileY: 2 },
      { type: "portal", id: "training_portal", name: "Arena", levelId: "world_060_level", tileX: 14, tileY: 4, width: 48, height: 48 },
      { type: "savePoint", id: "training_save", name: "Save", tileX: 12, tileY: 8 },
      { type: "submitPoint", id: "training_review", name: "Review", tileX: 16, tileY: 8 },
      { type: "exit", id: "training_home_exit", name: "Exit", tileX: 4, tileY: 9, width: 64, height: 32 }
    ]
  },
  // Tell players the actual controls and winning rule before sending them to fight.
  dialogue: {
    training: { speaker: "Toen guide", lines: [
      "Hello, Welcome to training! Clear two waves of robots, then reach the gold exit.",
      "Walk with WASD or the arrow keys. Face a robot and tap J or Space to strike.",
      "Each strike has a short cooldown. Holding the button does not keep attacking.",
      "Robots hurt you on contact. A white outline shows your brief damage protection.",
      "If your health reaches zero, press R to retry. Escape returns home at any time."
    ] }
  },
  // Game positions use pixels. Keep the first arena open: enemies do not solve mazes.
  level: {
    id: "world_060_level", name: "Training Arena", mode: "arena",
    width: 960, height: 640, spawn: { x: 160, y: 300 },
    solids: [
      { x: 0, y: 0, width: 960, height: 32 },
      { x: 0, y: 608, width: 960, height: 32 },
      { x: 0, y: 32, width: 32, height: 576 },
      { x: 928, y: 32, width: 32, height: 576 }
    ],
    hazards: [], // Optional red floor hazards restart the entire attempt.
    // The engine also requires ALL waves cleared before this goal can finish the game.
    goal: { x: 832, y: 288, width: 48, height: 64 },
    combat: {
      playerHealth: 5,          // Health points for each fresh attempt.
      attackDamage: 1,         // Health removed by one successful strike.
      attackReach: 56,         // Pixels measured forward from the player's center.
      attackCooldown: 0.35,    // Seconds before another new key press can strike.
      invulnerabilitySeconds: 1 // Protection after contact damage; does not stop movement.
    },
    // Each wave starts only after every enemy in the previous wave is defeated.
    // Each enemy needs its own ID. Health/damage are points; speed is pixels per second.
    // Try changing ONE value, then play from the beginning and record the result.
    waves: [
      { enemies: [
        { id: "robot_one", x: 420, y: 300, width: 28, height: 28, health: 2, damage: 1, speed: 50 }
      ] },
      { enemies: [
        { id: "robot_two", x: 560, y: 200, width: 28, height: 28, health: 2, damage: 1, speed: 50 },
        { id: "robot_three", x: 560, y: 420, width: 28, height: 28, health: 2, damage: 1, speed: 50 }
      ] }
    ]
  }
});
