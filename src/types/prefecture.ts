export type Prefecture = {
	prefCode: number;
	prefName: string;
};

export type PrefectureContext = {
	checkedPref: number[];
	setCheckedPrefectures: React.Dispatch<React.SetStateAction<number[]>>;
};
