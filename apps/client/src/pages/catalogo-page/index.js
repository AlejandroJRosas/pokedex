import '../../components/card/PokemonCard.js';
import '../../components/navbar/Navbar.js';
import '../../components/carrusel/Carrusel.js';
import './catalogo.js';
import { getPokemonsPaginated } from '../.././services/pokemons/get-paginated-pokemons.js';

const pokemonContainer = document.querySelector('.catalogo-container');

let pageFilters = {
  page: 1,
  size: 8
};

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('size')) {
  pageFilters.size = Number(searchParams.get('size'));
}
const { paginate, items } = await getPokemonsPaginated(pageFilters);

let pageInfo = paginate;

items.map((pokemon) => {
  const pokemonCard = document.createElement('pokemon-card');

  pokemonCard.pokemon = pokemon;

  pokemonContainer.appendChild(pokemonCard);
});

const loadMoreButton = document.querySelector('.button');

loadMoreButton.addEventListener('click', async () => {
  console.log('event', Number(pageInfo.currentPage) + 1);
  const { paginate, items } = await getPokemonsPaginated({
    page: Number(pageInfo.currentPage) + 1,
    size: pageFilters.size
  });

  pageInfo = paginate;

  items.map((pokemon) => {
    const pokemonCard = document.createElement('pokemon-card');

    pokemonCard.pokemon = pokemon;

    pokemonContainer.appendChild(pokemonCard);
  });
});
