import '../../components/navbar/Navbar.js';
import '../../components/details-components/detail-heading.js'
import '../../components/details-components/detail-description.js'
import '../../components/details-components/detail-stats.js'
import { getDetailedPokemon } from '../../services/pokemons/get-detailed-pokemon.js';

const searchParams = new URLSearchParams(window.location.search);

let id = 1

if (searchParams.has('id')) {
  id = Number(searchParams.get('id'));
}
const response = await getDetailedPokemon(id);

console.log(response)

const mainContainer = document.querySelector('.main-container')


const detailHeading = document.createElement('detail-heading')
detailHeading.id = response.id
detailHeading.name = response.name
detailHeading.image = response.image
detailHeading.cry = response.cry
mainContainer.appendChild(detailHeading)

const detailDescription = document.createElement('detail-description')
detailDescription.description = response.description
detailDescription.height = Number(response.height) / 10
detailDescription.weight = Number(response.weight) / 10
detailDescription.type1 = response.type[0]
if (response.type[1]){
  detailDescription.type2 = response.type[1]
}
detailDescription.image = response.image
mainContainer.appendChild(detailDescription)

const detailStats = document.createElement('detail-stats')
detailStats.hp = response.baseStats.hp
detailStats.attack = response.baseStats.attack
detailStats.defense = response.baseStats.defense
detailStats.specialAttack = response.baseStats.specialAttack
detailStats.specialDefense = response.baseStats.specialDefense
detailStats.speed = response.baseStats.speed
mainContainer.appendChild(detailStats)
