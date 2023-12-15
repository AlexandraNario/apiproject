import axios from 'axios';

export async function chuckchuckles(){
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
