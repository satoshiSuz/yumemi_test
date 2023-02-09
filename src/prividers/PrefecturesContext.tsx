import { FC, createContext, useReducer } from "react";
import { PrefectureContext } from "../types/prefecture";

type Props = {
	children: React.ReactNode;
};
type Action = { type: "TOGGLE"; prefCode: number };

type contextType = {
	state: boolean[];
	dispatch: any;
};

const initialState: contextType = {
	state: new Array(48).fill(false),
	dispatch: null,
};

export const PrefecturesContext = createContext<contextType>(initialState);

export const PrefecturesProvider: FC<Props> = (props) => {
	const reducer = (state: boolean[], action: Action): boolean[] => {
		switch (action.type) {
			case "TOGGLE":
				state[action.prefCode] = !state[action.prefCode];
				return state;
		}
	};

	const { children } = props;
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<PrefecturesContext.Provider value={{ state, dispatch }}>
			{children}
		</PrefecturesContext.Provider>
	);
};
