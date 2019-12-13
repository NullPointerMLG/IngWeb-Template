import axios, { AxiosResponse } from "axios";
const BASE_URL: string = "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});


// export const getBibliotecas = (params?: BibliotecaParams): Promise<Biblioteca[]> => {
//   return axiosInstance
//     .get("/bibliotecas", {
//       params: params
//     })
//     .then((response: AxiosResponse) => {
//       if (response.status !== 200) throw new Error(JSON.stringify(response));
//       return response.data;
//     });
// };