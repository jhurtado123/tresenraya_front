import axios from "axios";

class GameApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI,
      withCredentials: true,
    });
  }

  computerMove(board) {
    return this.apiClient.post('/computerMove', {board});
  }

  checkBoardStatus(board) {
    return this.apiClient.post('/checkBoardStatus', {board});
  }


}

const gameApiClient = new GameApiClient();
export default gameApiClient;