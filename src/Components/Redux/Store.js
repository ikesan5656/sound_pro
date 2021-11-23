//Reduxの状態を全て管理する場所
import { configureStore } from '@reduxjs/toolkit';
//自身の作成したsliceをインポート
import TestSlice from './TestSlice';

export default configureStore({
	reducer: {
		message: TestSlice,
	},
});