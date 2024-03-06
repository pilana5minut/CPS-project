const moreButton = document.querySelector('.hero__more-button')
const paragraph = document.querySelector('.hero__paragraph')
const initialHeight = paragraph.clientHeight

moreButton.addEventListener('click', () => {

  if (paragraph.clientHeight < paragraph.scrollHeight) {
    paragraph.style.cssText = `
      max-height: ${paragraph.scrollHeight}px;
    `
    moreButton.style.cssText = `
      background-image: url("assets/svg/icon-arrow-up.svg");
    `
  }
  else {
    paragraph.style.cssText = `
    max-height: ${initialHeight}px;
    `
    moreButton.style.cssText = `
      background-image: url("assets/svg/icon-arrow-down.svg");
    `
  }

})
