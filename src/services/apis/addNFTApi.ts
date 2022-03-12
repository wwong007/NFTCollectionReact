import { AddNFTRequestI } from "../../models/AddNFT/AddNFTRequest.model";
import { BASE_URL, API_KEY } from "./getNFTCollectionApi";


export async function addNFTApi(request: AddNFTRequestI) {
  try {
    const response = await fetch(`${BASE_URL}/addNFT`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY
      },
      body: JSON.stringify(request)
    })
    console.log(await response.json());
  } catch (error) {
    throw error
  }
}