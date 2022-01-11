sorting-hat: sorting-hat-build
	docker run -p 9000:8080 sorting-hat
	# to send a message to lambda, run this command
	# curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"key": "value"}'

sorting-hat-build:
	docker build -t sorting-hat sorting-hat/

sorting-hat-deploy:
	docker tag sorting-hat:latest 227557930319.dkr.ecr.us-east-1.amazonaws.com/sorting-hat:latest
	docker push 227557930319.dkr.ecr.us-east-1.amazonaws.com/sorting-hat:latest
	aws lambda update-function-code --region us-east-1 --function-name sorting-hat --image-uri 227557930319.dkr.ecr.us-east-1.amazonaws.com/sorting-hat:latest

