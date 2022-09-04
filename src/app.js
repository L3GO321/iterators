class Team {
    constructor(characters) {
        this.characters = characters;
    }

    [Symbol.iterator] = function () {
        let current = 0;
        let last = Object.keys(this);
        const chars = Object.values(this)
        console.log(chars)
        return {
            next() {
                if (current < last) {
                    current++

                    return {
                        done: false,
                        value: chars[current]
                    }
                }
                return {
                    done: true
                }
            }
        }
    }
}

const characters = {
    m: {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    },
    5: {
        name: 'Мечник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    },
    2: {
        name: 'Гном',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
    }
}

const team = new Team(characters)
for (let item of team) {
    console.log(item)
}
