npm run build
docker build -t conference25 .
docker tag conference25 kyrdzhagasovcz/conference25:latest
docker push kyrdzhagasovcz/conference25:latest

sudo docker stop _name_
sudo docker rm _name_

sudo docker pull kyrdzhagasovcz/conference25:latest
sudo docker run -d -p 8080:8080 kyrdzhagasovcz/conference25:latest
