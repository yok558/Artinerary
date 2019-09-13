// import * as _ from 'lodash';

// const lodash = require('lodash');

const filterButtonPrice = document.getElementsByClassName('btn-filter-price');
const filterButtonCategory = document.getElementsByClassName('btn-filter-category');
const filterButtonDimensions = document.getElementsByClassName('btn-filter-dimensions');
const searchButton = document.getElementsByClassName('btn-filter-search')[0];

const filters = {
  priceValue: '',
  categoryValue: '',
  dimensionsValue: '',
};

function listenerButtonPrice() {
  for (let i = 0; i < filterButtonPrice.length; i += 1) {
    filterButtonPrice[i].addEventListener('click', (e) => {
      filters.priceValue = e.target.value;
    });
  }
}

function listenerButtonCategory() {
  for (let i = 0; i < filterButtonCategory.length; i += 1) {
    filterButtonCategory[i].addEventListener('click', (e) => {
      filters.categoryValue = e.target.value;
    });
  }
}

function listenerButtonDimensions() {
  for (let i = 0; i < filterButtonDimensions.length; i += 1) {
    filterButtonDimensions[i].addEventListener('click', (e) => {
      filters.dimensionsValue = e.target.value;
    });
  }
}

listenerButtonPrice();
listenerButtonCategory();
listenerButtonDimensions();
// const formatUrl = ('http://localhost:3000/', filters) =>
//   'http://localhost:3000/' + '?' + new URLSearchParams(_.pickBy(filters, _.negate(_.isNil))).toString();

// console.log(formatUrl);

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const filterJSON = await fetch('/', {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filters),
  });
  const sendingRequest = await filterJSON.json();
  console.log(sendingRequest);
});

// x();
