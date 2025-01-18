
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


const team = new Team()

const char1 = {
  name: 'Boromir'
 }

// team.add(char1)
// team.addAll(char1)
team.addAll(char1,char1)
console.log( team.toArray());

