/*S3バケットの情報確認*/
import React, {useRef, useState, useEffect} from "react";
import './S3BucketInfo.css';
import { GetS3ListObject } from "../AWS/GetS3ListObject";
//redux関連
import { useDispatch, useSelector} from 'react-redux';
import { SetMessage, SetList } from '../Redux/S3Slice';
import { Kinesis } from "aws-sdk";

function S3BucketInfo() {

	
	// actionを操作するための関数取得
	const Dispatch = useDispatch();
	//const message = useSelector((state) => state.s3_slice.message);
	//console.log(message);
	//const list = useSelector((state) => state.s3_slice.strage_list);
	//console.log(list);
	console.log("再描画");
	
	const [list_data, SetData] = useState([]);
	console.log(list_data);
	let key_list;

	//const [test_data, SetTest] = useState("ini");
	//console.log(list_data);

	const res = GetS3ListObject();

	/*res.then((list_data) => {
		console.log(list_data);
		//key_list = list_data;
		//SetData(list_data.Contents);
		
	})*/
	//console.log(res);
	

	//console.log(list_data[1]);
	

	const Test = () => {
		console.log(key_list.Contents);
	};
	useEffect(() => {
		//let tmp = res;
		res.then((list_data) => {
			console.log(list_data);
			//key_list = list_data;
			SetData(list_data.Contents);
			
		})

		
		//asyncをここでやる

		/*const f = async() => {
			const res = await GetS3ListObject();
			console.log(res);
			SetData(array);
		};

		f();*/
		//SetTest("test");
		
		
		
		//Dispatch(SetMessage("test"))
		//Dispatch(SetList(res));
		//SetData([...res]);
		//console.log(res);
		/*Object(list_data).map((item, key) => {
			console.log(item);
		});
		console.log(list_data);*/
	},[]);
	/*res.map((item, key) => {
		console.log(item);
	});*/
	//console.log(res);
	/*res.then((items) => {
		console.log(items);
	})*/

		return(
			<div className="s3_object_list">
				{/*<button onClick={Test}>test</button>*/}
				<table className="bucket_info_table">
					{/*ヘッダー*/}
					<thead className="bucket_info_head">
						<tr>
							<th width="100px">No</th>
							<th width="400px">Name</th>
							<th width="100px">Size</th>
						</tr>
					</thead>
					{/*中身*/}
					<tbody className="bucket_info_body">
					{
					list_data.map((item,ind) => {
						return(
							<tr key={ind}>
								<td>{ind}</td>
								<td>{item.Key}</td>
								<td>{item.Size / 1048576}</td>
							</tr>
						)
					})
					}
					</tbody>
				</table>
			</div>
		);

}

export default S3BucketInfo;