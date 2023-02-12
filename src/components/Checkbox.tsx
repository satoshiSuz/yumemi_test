import { css } from '@emotion/react';
import React from 'react';
import { Prefecture } from '../types/prefecture';
import { prefState } from '../store/prefState';
import { useRecoilState } from 'recoil';

export const Checkbox = ({ prefCode, prefName }: Prefecture) => {
  const [checkedPref, setCheckedPref] = useRecoilState(prefState);
  const checkPrefecture = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCheckedPrefectures = [...checkedPref];
    if (
      newCheckedPrefectures.findIndex((element) => element === prefCode) !== -1
    ) {
      newCheckedPrefectures = newCheckedPrefectures.filter(
        (element) => element !== prefCode
      );
    } else {
      newCheckedPrefectures.push(prefCode);
    }
    newCheckedPrefectures.sort();
    setCheckedPref(newCheckedPrefectures);
    console.log(checkedPref);
  };
  return (
    <div css={styles.wrapper}>
      <input
        type='checkbox'
        name={prefName}
        id={prefCode.toString()}
        css={styles.input}
        onChange={checkPrefecture}
      />
      <div css={styles.check}></div>
      <div css={styles.text}>{prefName}</div>
    </div>
  );
};

const styles = {
  input: css`
    /* opacity: 0; */
  `,
  wrapper: css`
    padding: 12px 8px;
    display: flex;
    align-items: center;
    /* cursor: pointer; */
    /* &:hover {
                background: rgba(0, 0, 0, 0.05) !important;
            }
            position: relative;
            border-radius: 30px; */
  `,
  check: css`
    /* content: "";
		position: relative;
		top: 0;
		left: 0;
		display: block;
		width: 32px;
		height: 32px;
		border: solid 2px #cccccc;
		border-radius: 4px;
		margin-right: 10px;
		&:before {
			position: absolute;
			display: block;
			top: 50%;
			left: 50%;
			width: 40%;
			height: 4px;
			border-radius: 2px;
			transform: translate(-6px, 5px) rotateZ(-135deg);
			transform-origin: 2px 2px;
			background: #ffffff; */
    /* } */
  `,
  text: css``,
};
