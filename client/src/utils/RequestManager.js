import axios from "axios";

export const getClients = async () => {
    let res = await axios.get("/client");
    return res.data;
  };
  export const saveClient = async (data) => {
    let res = await axios.post("/client", data);
    return res.data;
  };
