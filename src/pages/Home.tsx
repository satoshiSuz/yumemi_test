import { getApi } from '../api/getApi';
import { useState, useEffect } from 'react';
import { Checkbox } from '../components/Checkbox';
import { Prefecture } from '../types/prefecture';
import { css } from '@emotion/react';
import { Chart } from '../components/Chart';

export const Home = () => {
  const [prefectures, setPrefectures] = useState<Array<Prefecture>>([]);
  const getPrefectures = async () => {
    try {
      const res: Prefecture[] = await getApi.prefectures();
      setPrefectures(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPrefectures();
  }, []);
  return (
    <div css={styles.wrapper}>
      <h2>都道府県</h2>
      <div css={styles.checkboxWrap}>
        {prefectures.map((prefecture) => {
          return (
            <Checkbox
              key={prefecture.prefCode}
              prefCode={prefecture.prefCode}
              prefName={prefecture.prefName}
            />
          );
        })}
      </div>
      <Chart />
    </div>
  );
};

const styles = {
  wrapper: css`
    margin: 0 20px;
  `,
  checkboxWrap: css`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    padding: 0 20px;
  `,
};
