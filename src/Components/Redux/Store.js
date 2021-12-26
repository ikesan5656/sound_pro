//Reduxの状態を全て管理する場所
import { configureStore } from '@reduxjs/toolkit';
//自身の作成したsliceをインポート
import TestSlice from './TestSlice';
import S3Slice from './S3Slice';

export default configureStore({
	reducer: {
		message: TestSlice,
		s3_slice: S3Slice,
	},
});