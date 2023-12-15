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

    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.appendChild(jokeSetupElement);
    //console.log(response.data);
  } catch (error) {
    console.error(error);
  };
};

//according to the RAPIDapi forum apparently the Chuck Norris Api service has been unavailable for 2 years
//even though forum popularity was rated at a 98% the api was rated a 1.5 out of 5
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
} */
