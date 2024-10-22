const apiKey = '---69d4d4c02b184a5290b124b1b891d004'

async function getGames () {
  try {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}


export default getGames
