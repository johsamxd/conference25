docker build -t conference25 .
docker tag conference25 kyrdzhagasovcz/conference25:0.0.1
docker push kyrdzhagasovcz/conference25:0.0.1
sudo docker pull kyrdzhagasovcz/conference25:0.0.1
sudo docker run -d -p 8080:8080 kyrdzhagasovcz/conference25:0.0.1
