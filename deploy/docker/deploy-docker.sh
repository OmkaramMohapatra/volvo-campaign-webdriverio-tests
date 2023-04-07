echo "Generating docker images for Volvo-Campaign Tests . . ."
docker build -t volvo-campaign-tests -f ../Dockerfile
if [ $? == 0 ];
then
  echo "Failed to generate docker image"
  exit $?
fi
echo "Docker image generated successfully"
echo "Starting the Selenium-Hub . . ."
docker-compose up
if [ $? == 0 ];
then
  echo "Failed to start the selenium-hub"
  exit $?
fi
echo "Selenium-Hub started successfully"
echo "Starting the tests"
docker run --network=host volvo-campaign-tests
if [ $? == 0 ];
then
  echo "Failed to run the docker for Volvo-Campaign tests"
  exit $?
fi
echo "Tests completed successfully"
