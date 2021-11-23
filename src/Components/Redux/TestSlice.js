/*内部的に保持する情報と処理をまとめたもの*/

import {createSlice} from '@reduxjs/toolkit';

export const TestSlice = createSlice({
	//slice名
	name: 'message',
	//内部で保持するデータ(キー:mess, 初期値:メッセージ)
	initialState: {
		"mess": "init_message",
		"mess2": "init_message2"
	},
	//内部のデータにアクセスするための処理(処理名:sayhello)
	reducers: {
		Say: state => {
			state.mess = "hello";
		}
	},
});

// 外からインポートするためにactionとreducerをエクスポートする
export const {Say} = TestSlice.actions;
export default TestSlice.reducer;