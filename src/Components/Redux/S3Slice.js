/*S3情報を管理するスライス*/

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	"message": "init_message",
	"strage_list": null,
}

export const S3Slice = createSlice({
	//slice名
	name: 's3_slice',
	//state
	initialState,
	//reducers
	reducers: {
		//テストメッセージのセット
		SetMessage: (state, action) => {
			const local_value = action.payload;
			state.message = local_value;
		},
		SetList: (state, action) => {
			const local_value = action.payload;
			state.strage_list = local_value;
		}
	}

});

//外からインポートするためにactionとreducerをエクスポートする
export const {SetMessage, SetList} = S3Slice.actions;
export default S3Slice.reducer;

