// fetch(`https://www.googleapis.com/books/v1/volumes?q=${'python'}&${'AIzaSyBp3HsXz4Q7-jFuYt21tFBur9WU5nnN5zc'}`).then(d => {
//     d.json()
//     .then(data => {
//         console.log(data.items)
//     })
// }).catch(e => {
//     console.log(e)
// })

fetch(`https://www.googleapis.com/books/v1/volumes?q=${'python'}&${'AIzaSyBp3HsXz4Q7-jFuYt21tFBur9WU5nnN5zc'}`)
  .then(response => response.json())
  .then(result => {
      console.log(result.items[9].volumeInfo)
    // for(let i = 0; i < result.totalItems; i++) {
    //     console.log(result[i])
    // }
})

//Dark Mode Switcher
const body = document.querySelector('body');
const link = document.querySelector('a');

const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
light.addEventListener('click', () => {
  light.style.color = "#ffffff";  
  dark.style.color = "#333333";
  
  dark.style.display = "block";
  document.documentElement.style.setProperty('--primary--dark', '#ffffff');
  document.documentElement.style.setProperty('--primary--light', '#333333');
})

dark.addEventListener('click', () => {
  dark.style.color = "#333333";
  document.documentElement.style.setProperty('--primary--dark', '#333333');
  document.documentElement.style.setProperty('--primary--light', '#ffffff');
})

