import axios from "axios";

const BASE_URL = "https://opendata.resas-portal.go.jp/api/v1";

export const axiosClient = axios.create({
	baseURL: BASE_URL,
	headers: { "X-API-KEY": "OcddIBsD2fD5VgO1SZ9kKWAlAql0pR39vtHzPtGV" },
});
