import axios from 'axios';

const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

export async function fetchJoke() {
  try {
    const response = await axios.get(apiUrl);
    const jokeSetup = response.data.setup;
    const jokePunchline = response.data.punchline;

    const jokeSetupElement = document.createElement('p');
    jokeSetupElement.innerText = jokeSetup;

    const jokePunchlineElement = document.createElement('p');
    jokePunchlineElement.innerText = jokePunchline;

    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.appendChild(jokeSetupElement);
    jokeContainer.appendChild(jokePunchlineElement);
  } catch (error) {
    console.error(error);
  }
}

