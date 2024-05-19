class SpaceShip {
    constructor() {
        this.position = 0; // arbitrary starting position
        this.maxPosition = 100; // assume the rightmost boundary for simplicity
        this.health = 100; // assume starting health
    }

    // Functions
    moveLeft() {
        if (!this.leftmost()) {
            this.position -= 1;
            return 'Moved Left';
        }
        return 'Cannot move left';
    }

    moveRight() {
        if (!this.rightmost()) {
            this.position += 1;
            return 'Moved Right';
        }
        return 'Cannot move right';
    }

    shoot() {
        // Implementation of shooting action
        console.log('Shooting');
    }

    die() {
        // Implementation of what happens when the ship dies
        console.log('Game Over');
        this.health = 0;
    }

    // Predicates
    leftmost() {
        return this.position <= 0; // assuming 0 is the leftmost position
    }

    rightmost() {
        return this.position >= this.maxPosition;
    }

    hit(enemyProjectile) {
        // Assume enemyProjectile is an object with properties that define its position
        if (enemyProjectile.position === this.position) {
            console.log('Ship has been hit!');
            this.health -= enemyProjectile.damage;
            if (this.health <= 0) {
                this.die();
            }
            return true;
        }
        return false;
    }
}

// Usage
let ship = new SpaceShip();
console.log(ship.moveLeft()); // Moves ship to the left
console.log(ship.moveRight()); // Moves ship to the right
ship.shoot(); // Ship shoots
ship.hit({ position: 0, damage: 20 }); // Check if hit by enemy at position 0 with 20 damage

if (ship.leftmost()) {
    console.log('Ship is at the leftmost position');
}

if (ship.rightmost()) {
    console.log('Ship is at the rightmost position');
}
