import { axiosClient } from "./axiosClient";

export const getApi = {
	prefectures: () => {
		return axiosClient.get("/prefectures").then((res) => {
			return res.data.result;
		});
	},
	populations: (params: { prefCode: number; cityCode: string | number }) => {
		return axiosClient
			.get("/population/composition/perYear", { params })
			.then((res) => {
				return res.data.result;
			});
	},
};
