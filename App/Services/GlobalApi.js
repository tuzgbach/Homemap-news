import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "?q=bitcoin&apiKey=0684616327e54df889f3698ea04176bd";
const getTopHeadline = api.get("/everything" + apiKey);

export default {
  getTopHeadline,
};
