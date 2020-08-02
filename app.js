const form = document.querySelector('#meme-form');
const imgInput = document.querySelector('#image-link');
const memeGallery = document.querySelector('#meme-gallery');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');

// console.log(imgInput)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let newMeme = document.createElement('div');
  newMeme.classList.add('meme-holder');
  newMeme.innerHTML = `<img src='${imgInput.value}'>`;

  let upperText = document.createElement('div');
  upperText.classList.add('upper-text');
  upperText.innerText = topText.value;

  let lowerText = document.createElement('div');
  lowerText.classList.add('lower-text');
  lowerText.innerText = bottomText.value;

  let deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerText = 'X';

  deleteButton.addEventListener('click', function (e) {
    e.target.parentElement.remove();
  })

  memeGallery.append(newMeme);
  newMeme.append(upperText);
  newMeme.append(lowerText);
  newMeme.append(deleteButton);

  form.reset();
})