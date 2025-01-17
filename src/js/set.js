
class Team {
  constructor() {
    this.members = new Set();
  }
  add(character) {
    if(this.members.has(character)){
        throw new Error('такой персонаж уже есть')
    }
    this.members.add(character)
  }
  addAll(...character) {
    return character.forEach(character => this.members.add(character))

  }
  toArray() {
    return [...this.members]
  }
}

const char1 = {
 name: 'Boromir'
}
const team = new Team([
    char1,
    char1
])


team.add(char1)
team.addAll(char1,char1)
console.log( team.toArray());

