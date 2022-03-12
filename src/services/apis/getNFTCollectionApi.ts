
export const BASE_URL: string = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : '';
export const API_KEY: string = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : '';

export async function getNFTCollection() {

  try {
    const response = await fetch(`${BASE_URL}/nftCollection`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY
      }
    })
    return await response.json();
  } catch (error) {
    throw error
  }
}