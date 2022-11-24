## ShiftEV 
This project is to trigger button status and calculate the power, current and voltage consumed. 

- When we change the button status using UI, it will reflect values on DynamoDB using lambda Functions.
- Lambda function is considered as serverless. Just provide one function to lambda and integrate API we all set to run our function
- No need to create separate server for our application

##### Let's setup our server api and database
Login to AWS console using credentials
1. Search dynamoDB service and create table 
	- While creating table, add one unique key id which will be used for next operations
2. : Create one lambda function and assign role
	- Search lambda function in search bar and hit enter
	- Create function using runtime as Node Js 
	- After this, you can find change default role section 
	- Create new role from AWS policy template and hit create function button
	- Now you will be redirected to function overview page, in that section find Configuration > Permission tab
	- You can see your role name, click on that, it will route you to new page where you can assign permissions. Add necessary permissions using roles tab

3. Add HTTP API 
	- On function overview page, Find Add trigger button > select source as API gateway > create new api > add api details (never forget to enable CORS) > Add 
	- You will be routed to new screen where you can add routes like /get-entry(GET), /post-entry(POST)
	- For these routes, integrate lambda function so that API will connect to lambda
	- Update CORS related settings in CORS section

4. Handle this API in lambda function using nodejs code and perform related operations
