import '../../components/navbar/Navbar.js';
import '../../components/object-card/index.js';
import { getObjectsPaginated } from '../../services/objects/get-paginated-objects.js';

const objectContainer = document.querySelector('.objects-container');

let pageFilters = {
  page: 1,
  size: 8
};

const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has('size')) {
  pageFilters.size = Number(searchParams.get('size'));
}
const { paginate, items } = await getObjectsPaginated(pageFilters);

let pageInfo = paginate;

items.map((item) => {
  const objectCard = document.createElement('object-card');

  objectCard.item = item;

  objectContainer.appendChild(objectCard);
});

const loadMoreButton = document.querySelector('.button');

loadMoreButton.addEventListener('click', async () => {
  console.log('event', Number(pageInfo.currentPage) + 1);
  const { paginate, items } = await getObjectsPaginated({
    page: Number(pageInfo.currentPage) + 1,
    size: pageFilters.size
  });

  pageInfo = paginate;

  items.map((item) => {
    const objectCard = document.createElement('object-card');

    objectCard.item = item;

    objectContainer.appendChild(objectCard);
  });
});
