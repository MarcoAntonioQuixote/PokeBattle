let allPokemon = [
  {
    name: "Alakazam",
    types: ["Psychic"],
    hp: 110,
    image: "https://img.pokemondb.net/artwork/large/alakazam.jpg",
    moves: [
      { name: "Psychic", power: 90 },
      { name: "Shadow Ball", power: 80 },
      { name: "Recover", power: 0 },
      { name: "Future Sight", power: 120 }
    ]
  },
  {
    name: "Gengar",
    types: ["Ghost", "Poison"],
    hp: 110,
    image: "https://img.pokemondb.net/artwork/large/gengar.jpg",
    moves: [
      { name: "Shadow Ball", power: 80 },
      { name: "Sludge Bomb", power: 90 },
      { name: "Hypnosis", power: 0 },
      { name: "Dream Eater", power: 100 }
    ]
  },
  {
    name: "Machamp",
    types: ["Fighting"],
    hp: 140,
    image: "https://img.pokemondb.net/artwork/large/machamp.jpg",
    moves: [
      { name: "Cross Chop", power: 100 },
      { name: "Dynamic Punch", power: 100 },
      { name: "Earthquake", power: 100 },
      { name: "Seismic Toss", power: 80 }
    ]
  },
  {
    name: "Arcanine",
    types: ["Fire"],
    hp: 155,
    image: "https://img.pokemondb.net/artwork/large/arcanine.jpg",
    moves: [
      { name: "Flamethrower", power: 90 },
      { name: "Extreme Speed", power: 80 },
      { name: "Crunch", power: 80 },
      { name: "Roar", power: 0 }
    ]
  },
  {
    name: "Lapras",
    types: ["Water", "Ice"],
    hp: 160,
    image: "https://img.pokemondb.net/artwork/large/lapras.jpg",
    moves: [
      { name: "Surf", power: 90 },
      { name: "Ice Beam", power: 90 },
      { name: "Thunderbolt", power: 90 },
      { name: "Sing", power: 0 }
    ]
  },
  {
    name: "Jolteon",
    types: ["Electric"],
    hp: 110,
    image: "https://img.pokemondb.net/artwork/large/jolteon.jpg",
    moves: [
      { name: "Thunderbolt", power: 90 },
      { name: "Shadow Ball", power: 80 },
      { name: "Double Kick", power: 60 },
      { name: "Pin Missile", power: 25 }
    ]
  },
  {
    name: "Snorlax",
    types: ["Normal"],
    hp: 180,
    image: "https://img.pokemondb.net/artwork/large/snorlax.jpg",
    moves: [
      { name: "Body Slam", power: 85 },
      { name: "Hyper Beam", power: 150 },
      { name: "Rest", power: 0 },
      { name: "Earthquake", power: 100 }
    ]
  },
  {
    name: "Scyther",
    types: ["Bug", "Flying"],
    hp: 120,
    image: "https://img.pokemondb.net/artwork/large/scyther.jpg",
    moves: [
      { name: "Slash", power: 70 },
      { name: "Wing Attack", power: 60 },
      { name: "Swords Dance", power: 0 },
      { name: "X-Scissor", power: 80 }
    ]
  },
  {
    name: "Electabuzz",
    types: ["Electric"],
    hp: 125,
    image: "https://img.pokemondb.net/artwork/large/electabuzz.jpg",
    moves: [
      { name: "Thunder Punch", power: 75 },
      { name: "Thunderbolt", power: 90 },
      { name: "Psychic", power: 90 },
      { name: "Light Screen", power: 0 }
    ]
  },
  {
    name: "Nidoking",
    types: ["Poison", "Ground"],
    hp: 135,
    image: "https://img.pokemondb.net/artwork/large/nidoking.jpg",
    moves: [
      { name: "Earthquake", power: 100 },
      { name: "Sludge Bomb", power: 90 },
      { name: "Megahorn", power: 120 },
      { name: "Thunderbolt", power: 90 }
    ]
  },
  {
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    hp: 160,
    image: "https://img.pokemondb.net/artwork/large/dragonite.jpg",
    moves: [
      { name: "Dragon Claw", power: 80 },
      { name: "Thunder Wave", power: 0 },
      { name: "Fly", power: 90 },
      { name: "Hyper Beam", power: 150 }
    ]
  },
  {
    name: "Poliwrath",
    types: ["Water", "Fighting"],
    hp: 130,
    image: "https://img.pokemondb.net/artwork/large/poliwrath.jpg",
    moves: [
      { name: "Surf", power: 90 },
      { name: "Dynamic Punch", power: 100 },
      { name: "Ice Beam", power: 90 },
      { name: "Hypnosis", power: 0 }
    ]
  },
  {
    name: "Raichu",
    types: ["Electric"],
    hp: 120,
    image: "https://img.pokemondb.net/artwork/large/raichu.jpg",
    moves: [
      { name: "Thunderbolt", power: 90 },
      { name: "Quick Attack", power: 40 },
      { name: "Iron Tail", power: 100 },
      { name: "Thunder", power: 110 }
    ]
  },
  {
    name: "Kabutops",
    types: ["Rock", "Water"],
    hp: 125,
    image: "https://img.pokemondb.net/artwork/large/kabutops.jpg",
    moves: [
      { name: "Slash", power: 70 },
      { name: "Ancient Power", power: 60 },
      { name: "Waterfall", power: 80 },
      { name: "Swords Dance", power: 0 }
    ]
  },
  {
    name: "Hitmonlee",
    types: ["Fighting"],
    hp: 125,
    image: "https://img.pokemondb.net/artwork/large/hitmonlee.jpg",
    moves: [
      { name: "High Jump Kick", power: 130 },
      { name: "Mega Kick", power: 120 },
      { name: "Brick Break", power: 75 },
      { name: "Counter", power: 0 }
    ]
  }
]



// const battle = (atk,def) => {
    
//     let randomIndex = randomNum(0,atk.moves.length-1);
//     let chosenMove = atk.moves[randomIndex]

//     def.hp -= chosenMove.power;

//     console.log(`${atk.name} attacked  with ${chosenMove.name} for ${chosenMove.power} and now ${def.name} has ${def.hp} hp lef`)

// }




// battle(pokemonTeam[0],pokemonTeam[1])
// battle(pokemonTeam[1],pokemonTeam[0])


let fighters = chose2Fighters(allPokemon)

const drawCards = (fighters) => {
    let arena = document.getElementById('arena')
    let stands1 = document.getElementById('bystanders1')
    let stands2 = document.getElementById('bystanders2')
    for (let poke of fighters) {
        if (poke.fighter) {
            let name = document.createElement('h2')
            let card = document.createElement('div')
            let image = document.createElement('img')
            name.innerText = poke.name;
            card.setAttribute('class',`card ${poke.types[0]}`)
            image.src = poke.image;
            card.append(name,image)
            arena.append(card)
        } else {
            let card = document.createElement('div')
            let image = document.createElement('img')
            card.setAttribute('class',`card bystander ${poke.types[0]}`)
            image.src = poke.image;
            let standNum = randomNum(1,2);
            card.append(image)
            let stands = standNum === 1 ? stands1 : stands2
            stands.append(card)
        }
    }
}

drawCards(allPokemon)








function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chose2Fighters(arr) {
  let first = Math.floor(Math.random() * arr.length);
  let second;
  do {
    second = Math.floor(Math.random() * arr.length);
  } while (second === first);

  first = arr[first]
  second = arr[second]

  arr.forEach(p => {
    if (p.name === first.name || p.name === second.name) {
        p.fighter = true;
    } else {
        p.fighter = false
    }
  })

  return [first,second]
}