import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://mood-board-db-default-rtdb.europe-west1.firebasedatabase.app/teams.json",
});

export default instance;
