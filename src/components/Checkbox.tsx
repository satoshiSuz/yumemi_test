import { css } from "@emotion/react";
import React from "react";
import { Prefecture } from "../types/prefecture";
import { useContext } from "react";
import { PrefecturesContext } from "../prividers/PrefecturesContext";

export const Checkbox = ({ prefCode, prefName }: Prefecture) => {
	const { checkedPrefectures, setCheckedPrefectures } = useContext(
		PrefecturesContext
	);
	const checkPrefecture = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (
			setCheckedPrefectures !== undefined &&
			checkedPrefectures !== undefined
		) {
			const newCheckedPrefectures = checkedPrefectures;
			newCheckedPrefectures.push(prefCode);
			setCheckedPrefectures(newCheckedPrefectures);
			console.log(checkedPrefectures);
		}
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
