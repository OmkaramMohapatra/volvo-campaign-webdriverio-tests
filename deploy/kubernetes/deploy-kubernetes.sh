echo "Starting the Selenium-Hub Deployment. . ."
kubectl apply -f selenium-hub-service.yaml -n default
kubectl apply -f selenium-hub-deployment.yaml -n default
if [ $? == 0 ];
then
  echo "Failed to deploy the selenium-hub"
  exit $?
fi
echo "Selenium-Hub deployed successfully"
echo "Starting the tests"
kubectl apply -f volvo-campain-tests-deployment.yaml -n default
if [ $? == 0 ];
then
  echo "Failed to run the docker for Volvo-Campaign tests"
  exit $?
fi
echo "Tests submitted successfully"
