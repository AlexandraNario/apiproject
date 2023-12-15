import axios from 'axios';

const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

export async function fetchJoke() {
  try {
    const response = await axios.get(apiUrl);
    console.log(response.data.setup);
    console.log(response.data.punchline);
  } catch (error) {
    console.error(error);
  }
}