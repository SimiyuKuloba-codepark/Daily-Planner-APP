// open location box
document.querySelector('.data-btn').addEventListener('click', () =>{
  document.querySelector('#location-input-box').style.display = 'block';
});


// close location box
function closeBox(){
  document.querySelector('#location-input-box').style.display = 'none';
}


// init weather object
const weather = new Weather('nairobi');

// init paint
const ui = new UI();


// change location event
document.querySelector('.save').addEventListener('click', (e) => {

  const pahali = document.querySelector('.place').value;

  if(pahali === ''){

    document.querySelector('.red-alert').style.display ='block';
    document.querySelector('.place').style.border = '2px solid rgb(233, 7, 7)';

    setTimeout(() => {
      document.querySelector('.red-alert').style.display ='none';
      document.querySelector('.place').style.border = '1px solid rgb(94,93,93)';
    }, 3000)

  }else{
    // loader
    document.querySelector('#load').style.display = 'block';

    setTimeout(() => {

      weather.changeLocation(pahali);
    
      // get weather
      getWeather();

      // close modal
      closeBox()
      
      document.querySelector('#load').style.display = 'none';

      document.querySelector('.place').value = '';
    }, 3000)
  }
  
})

// get weather on dom load
function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results)
    console.log(results)
  })

  .catch(err => console.log(err));
}

getWeather();