const filterButtonPrice = document.getElementsByClassName('btn-filter-price');
const filterButtonCategory = document.getElementsByClassName('btn-filter-category');
const filterButtonDimensions = document.getElementsByClassName('btn-filter-dimensions');
const searchButton = document.getElementsByClassName('btn-filter-search')[0];


function listenerButtonPrice() {
  for (let i = 0; i < filterButtonPrice.length; i++) {
    filterButtonPrice[i].addEventListener('click', async (e) => {
      e.preventDefault();
      const priceValue = e.target.value;
      console.log(priceValue);
    });
  }
}

function listenerButtonCategory() {
  for (let i = 0; i < filterButtonCategory.length; i++) {
    filterButtonCategory[i].addEventListener('click', async (e) => {
      e.preventDefault();
      const categoryValue = e.target.value;
      console.log(categoryValue);
    });
  }
}

function listenerButtonDimensions() {
  for (let i = 0; i < filterButtonDimensions.length; i++) {
    filterButtonDimensions[i].addEventListener('click', async (e) => {
      e.preventDefault();
      const dimensionsValue = e.target.value;
      console.log(dimensionsValue);
    });
  }
}

function listenerSearchButton() {
  searchButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    console.log(searchValue);
  });
}

listenerButtonPrice();
listenerButtonCategory();
listenerButtonDimensions();
listenerSearchButton();;