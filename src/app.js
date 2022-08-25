class Team {
    constructor(characters) {
        this.characters = characters;
    }

    it() {
        this.characters[Symbol.iterator] = function () {
            let current = -1;
            let last = Object.keys(this).length - 1;
            const chars = Object.values(this)

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

        for (let num of this.characters) {
            console.log(num)
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

const a = new Team(characters)

a.it()

