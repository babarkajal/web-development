const AWS = require('aws-sdk');
AWS.config.update( {
  region: 'us-west-1'
});
const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'sensor-readings';
const updateDataPath = '/nodemcu';
const entryPath = '/entry';

exports.handler = async function(event) {
	console.log('Request event: ', event);
	let response;
	switch(true) {
	  case event.httpMethod === 'GET' && event.path === updateDataPath:
		response = buildResponse(200);
		break;

	  case event.httpMethod === 'POST' && event.path === updateDataPath:
		response = await saveSensorData(JSON.parse(event.body));
		break;
	  case event.httpMethod === 'GET' && event.path === entryPath:
		response = await getSensorData(event.queryStringParameters.userId);
		break;
    case event.httpMethod === 'PATCH' && event.path === entryPath:
     const requestBody = JSON.parse(event.body);
     response = await modifyEntry(requestBody.userId, requestBody.updateKey, requestBody.updateValue);
     break;
	  default:
	  console.log("This is response ",response)
		response = buildResponse(404, '404 Not Found');
	}
	return response;
  }


//GET SENSOR DATA  
async function getSensorData(userId) {
  const params = {
    TableName: dynamodbTableName,
    Key: {
      'userId': userId
    }
  }
  return await dynamodb.get(params).promise().then((response) => {
  	console.log(response)
    return buildResponse(200, response.Item);
  }, (error) => {
    console.error('Error: ', error);
  });
}

  //Save Sensor Data
  async function saveSensorData(requestBody) {
	const params = {
	  TableName: dynamodbTableName,
	  Item: requestBody
	}
	return await dynamodb.put(params).promise().then(() => {
	  const body = {
		Operation: 'SAVE',
		Message: 'SUCCESS',
		Item: requestBody
	  }
	  return buildResponse(200, body);
	}, (error) => {
	  console.error('Error: ', error);
	})
  }
  
  function buildResponse(statusCode, body) {
	return {
	  statusCode: statusCode,
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(body)
	}
  }
  
  async function modifyEntry(userId, updateKey, updateValue) {
  const params = {
    TableName: dynamodbTableName,
    Key: {
      'userId': userId
    },
    UpdateExpression: `set ${updateKey} = :value`,
    ExpressionAttributeValues: {
      ':value': updateValue
    },
    ReturnValues: 'UPDATED_NEW'
  }
  return await dynamodb.update(params).promise().then((response) => {
    const body = {
      Operation: 'UPDATE',
      Message: 'SUCCESS',
      UpdatedAttributes: response
    }
    return buildResponse(200, body);
  }, (error) => {
    console.error('Error: ', error);
  })
}
