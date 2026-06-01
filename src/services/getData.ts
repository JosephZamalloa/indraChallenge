import axios, { type AxiosResponse } from "axios";
import type { GetDataResponse, UserInfo, PlansData } from "./types";

export async function getData(): Promise<GetDataResponse> {
  const url = import.meta.env.VITE_BASE_URL;
  try {
    const [userRes, plansRes]: [
      AxiosResponse<UserInfo>,
      AxiosResponse<PlansData>,
    ] = await Promise.all([
      axios.get<UserInfo>(`${url}/user.json`),
      axios.get<PlansData>(`${url}/plans.json`),
    ]);

    return { user: userRes.data, plans: plansRes.data };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
