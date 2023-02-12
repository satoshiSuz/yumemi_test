import { css } from '@emotion/react';
import { ResponsiveContainer } from 'recharts';
import { CartesianGrid } from 'recharts/types/cartesian/CartesianGrid';
import { Line } from 'recharts/types/cartesian/Line';
import { XAxis } from 'recharts/types/cartesian/XAxis';
import { YAxis } from 'recharts/types/cartesian/YAxis';
import { LineChart } from 'recharts/types/chart/LineChart';
import { Legend } from 'recharts/types/component/Legend';
import { Tooltip } from 'recharts/types/component/Tooltip';
import { FC, useEffect } from 'react';
import {
  PivotPopulation,
  Population,
  PopulationSample,
} from '../types/population';
import { getApi } from '../api/getApi';
import { prefState } from '../store/prefState';
import { useRecoilState } from 'recoil';
import { Prefecture } from '../types/prefecture';

export const Chart = () => {
  const [checkedPref] = useRecoilState(prefState);

  useEffect(() => {
    const getPopulation = () => {
      const count = new Array(3).fill(true);
      //   const resData: PopulationSample[] = [];
      const pivotData: Partial<PivotPopulation>[] = [];
      count.map(async (bool, index) => {
        if (index !== 0) {
          try {
            const res: Population = await getApi.populations({
              prefCode: index,
              cityCode: '-',
            });
            console.log(res.data[0]);
            console.log(res.data[0].data[0].year);
            if (index === 1) {
              res.data[0].data.map((item, num) => {
                pivotData[num] = { year: item.year };
              });
            }
            // pivotData[index].year = res.data[0].data[index].year;
          } catch (err) {
            console.log(err);
          }
        }
      });
      console.log(pivotData);
    };
    getPopulation();
  }, []);
  return (
    <div css={styles.wrapper}>
      {checkedPref.map((pref) => {
        return <div key={pref}>{pref}</div>;
      })}
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
