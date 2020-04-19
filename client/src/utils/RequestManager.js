import axios from "axios";

export const getClients = async () => {
  let res = await axios.get("/client");
  return res.data;
};
export const saveClient = async (data) => {
  let res = await axios.post("/client", data);
  return res.data;
};
export const getProjects = async () => {
  let res = await axios.get("/project");
  return res.data;
};
export const saveProject = async (data) => {
  let res = await axios.post("/project", data);
  return res.data;
};
