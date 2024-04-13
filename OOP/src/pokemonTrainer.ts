function pokemonTrainer(trainersArr: string[]) {

    function checkElement(element: string) {
        allPlayers.forEach((player: Trainer) => {
            const found = player.pokemons.find((pokemon: Pokemon) => pokemon.element === element);
            if (!found) {
                player.pokemons = player.pokemons.filter((pokemon: Pokemon) => {
                    pokemon.health -= 10;
                    if (pokemon.health <= 0) {
                        return false
                    }
                    return true;
                });
            } else {
                player.badges++;
            }
        })
    }

    const allPlayers: Trainer[] = [];

    class Pokemon {
        name: string;
        element: string;
        health: number;
        constructor(name: string, element: string, health: number) {
            this.name = name;
            this.element = element;
            this.health = health;
        }
    }

    class Trainer {
        name: string;
        badges: number = 0;
        pokemons: Pokemon[] = [];
        constructor(name: string, pokemon: Pokemon) {
            this.name = name;
            this.pokemons.push(pokemon);
        }
    }


    trainersArr.forEach((player: string) => {
        const [trainerName, pokemonName, pokemonElement, pokemonHealthString] = player.split(' ');
        const pokemonHealth = Number(pokemonHealthString);

        switch (trainerName) {
            case 'Tournament': {
                break;
            }
            case 'End': {
                return
            }
            case 'Fire': {
                checkElement('Fire');
                break;
            }
            case 'Electricity': {
                checkElement('Electricity');
                break;
            }
            case 'Water': {
                checkElement('Water');
                break;
            }

            default: {
                const pokemon = new Pokemon(pokemonName, pokemonElement, pokemonHealth);
                const trainer = new Trainer(trainerName, pokemon);

                const found = allPlayers.find((player: Trainer) => player.name === trainerName)
                if (!found) {
                    allPlayers.push(trainer);
                } else {
                    found.pokemons.push(pokemon);
                }
            }
        }
    })

    allPlayers.sort((player1: Trainer, player2: Trainer) => player2.badges - player1.badges || player2.name.localeCompare(player1.name))

    allPlayers.forEach((trainer: Trainer) => {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`);
    })

}


pokemonTrainer([
    'Peter Charizard Fire 100',
    'George Squirtle Water 38',
    'Peter Pikachu Electricity 10 ',
    'Tournament',
    'Fire',
    'Electricity',
    'End',
])

pokemonTrainer([
    'Sam Blastoise Water 18',
    'Narry Pikachu Electricity 22',
    'John Kadabra Psychic 90',
    'Tournament',
    'Fire',
    'Electricity',
    'Fire',
    'End'
])