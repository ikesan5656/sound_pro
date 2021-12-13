
import AWS from 'aws-sdk';
import cors from 'cors';

function TestAws() {

	const AWS = require('aws-sdk');
	// Set the region 
	AWS.config.update({region: process.env.REACT_APP_REGION});

	// Create S3 service object
	const s3 = new AWS.S3({apiVersion: '2006-03-01'});

	var bucketParams = {
		Bucket: process.env.REACT_APP_BUCKET_NAME,

	};
	// call S3 to retrieve policy for selected bucket
	s3.getBucketAcl(bucketParams, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else if (data) {
			console.log("Success", data.Grants);
		}
	});

	return(
		null
	);
}

export default TestAws;