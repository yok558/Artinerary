const filterButton = document.getElementsByName;

filterArt.addEventListener('click', async e => {
  e.preventDefault();
  const [nameInput, addressInput, eyesInput, passwordInput] = e.target.elements;

  const response = await fetch('/beavers/create', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: nameInput.value,
      address: addressInput.value,
      eyes: eyesInput.value,
      password: passwordInput.value,
    }),
  });

  const newBeaver = await response.json();
  console.log(newBeaver);
});
