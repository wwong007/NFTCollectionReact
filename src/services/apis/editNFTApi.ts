// MODEL
import { EditNFTRequestI } from "../../models/EditNFT/EditFormRequest.model";

// CONSTANTS
import { API_KEY, BASE_URL } from "./getNFTCollectionApi";


export async function editNFTApi (request: EditNFTRequestI) {
  try {
    const response = await fetch(`${BASE_URL}/updateNFT`, {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY
      },

      body: JSON.stringify(request)
    })
    console.log(await response.json());
  } catch (error) {
    throw error;
  }
}