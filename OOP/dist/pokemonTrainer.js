function pokemonTrainer(trainersArr) {
    function checkElement(element) {
        allPlayers.forEach((player) => {
            const found = player.pokemons.find((pokemon) => pokemon.element === element);
            if (!found) {
                player.pokemons = player.pokemons.filter((pokemon) => {
                    pokemon.health -= 10;
                    if (pokemon.health <= 0) {
                        return false;
                    }
                    return true;
                });
            }
            else {
                player.badges++;
            }
        });
    }
    const allPlayers = [];
    class Pokemon {
        name;
        element;
        health;
        constructor(name, element, health) {
            this.name = name;
            this.element = element;
            this.health = health;
        }
    }
    class Trainer {
        name;
        badges = 0;
        pokemons = [];
        constructor(name, pokemon) {
            this.name = name;
            this.pokemons.push(pokemon);
        }
    }
    trainersArr.forEach((player) => {
        const [trainerName, pokemonName, pokemonElement, pokemonHealthString] = player.split(' ');
        const pokemonHealth = Number(pokemonHealthString);
        switch (trainerName) {
            case 'Tournament': {
                break;
            }
            case 'End': {
                return;
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
                const found = allPlayers.find((player) => player.name === trainerName);
                if (!found) {
                    allPlayers.push(trainer);
                }
                else {
                    found.pokemons.push(pokemon);
                }
            }
        }
    });
    allPlayers.sort((player1, player2) => player2.badges - player1.badges || player2.name.localeCompare(player1.name));
    allPlayers.forEach((trainer) => {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.pokemons.length}`);
    });
}
pokemonTrainer([
    'Peter Charizard Fire 100',
    'George Squirtle Water 38',
    'Peter Pikachu Electricity 10 ',
    'Tournament',
    'Fire',
    'Electricity',
    'End',
]);
pokemonTrainer([
    'Sam Blastoise Water 18',
    'Narry Pikachu Electricity 22',
    'John Kadabra Psychic 90',
    'Tournament',
    'Fire',
    'Electricity',
    'Fire',
    'End'
]);
