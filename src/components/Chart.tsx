import { css } from "@emotion/react";
import { ResponsiveContainer } from "recharts";
import { CartesianGrid } from "recharts/types/cartesian/CartesianGrid";
import { Line } from "recharts/types/cartesian/Line";
import { XAxis } from "recharts/types/cartesian/XAxis";
import { YAxis } from "recharts/types/cartesian/YAxis";
import { LineChart } from "recharts/types/chart/LineChart";
import { Legend } from "recharts/types/component/Legend";
import { Tooltip } from "recharts/types/component/Tooltip";
import { useContext, useEffect } from "react";
import { Population } from "../types/population";
import { getApi } from "../api/getApi";
import { PrefecturesContext } from "../prividers/PrefecturesContext";

export const Chart = () => {
	const { checkedPrefectures } = useContext(PrefecturesContext);

	useEffect(() => {
		const getPopulation = () => {
			console.log(checkedPrefectures);
			checkedPrefectures.map(async (bool, index) => {
				if (bool) {
					console.log(index);
					try {
						const res: Population[] = await getApi.populations({
							prefCode: index,
							cityCode: "-",
						});
						console.log(res);
					} catch (err) {
						console.log(err);
					}
				}
			});
		};
		getPopulation();
	}, [checkedPrefectures]);
	return (
		<div css={styles.wrapper}>
			{/* <ResponsiveContainer width='100%' height='100%'>
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type='monotone'
						dataKey='pv'
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
					<Line type='monotone' dataKey='uv' stroke='#82ca9d' />
				</LineChart>
			</ResponsiveContainer> */}
		</div>
	);
};

const styles = {
	wrapper: css``,
};
