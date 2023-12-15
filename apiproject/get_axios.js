import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': '04760cb00amshdb960aae59dc6e0p132ffdjsn98bb93adf5a4',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
  }
};

export async function chuckchuckles() {
  try {
    const response = await axios.request(options);
    const jokeSetup = response.data.setup;
    
    const jokeSetupElement = document.getElementById('joke');
    jokeSetupElement.innerHTML = jokeSetup;

    //console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
chuckchuckles();

/*export async function achuckchucklesjoke(){
    const apiUrl = 'https://api.chucknorris.io/jokes/random';

    axios(apiUrl)
    .then((response) => response.data)
    .then((data) => {
        const jokeData = data;
        const jokeContainer = 
        document.getElementById('jokeContainer');

        if (jokeData._id) {

        }
    })
  
   .catch ((error) => {
    console.error('Error retrieving Chuck Norris Joke', error);
  });
}
