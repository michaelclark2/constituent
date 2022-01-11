sorting-hat-build:
	docker build -t sorting-hat sorting-hat/

sorting-hat: sorting-hat-build
	docker run -p 9000:8080 sorting-hat
	# to send a message to lambda, run this command
	# curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"key": "value"}'
