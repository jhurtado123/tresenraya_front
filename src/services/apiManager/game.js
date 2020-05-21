import axios from "axios";

class GameApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true,
    });
  }

  computerMove(board) {
    return this.apiClient.get('/computerMove', {params: {board}});
  }


}

const gameApiClient = new GameApiClient();
export default gameApiClient;