import { css } from "@emotion/react";

export const Header = () => {
	return (
		<div css={styles.wrapper}>
			<h2>都道府県別の総人口推移グラフ</h2>
		</div>
	);
};

const styles = {
	wrapper: css`
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #4ccaca;
	`,
};
