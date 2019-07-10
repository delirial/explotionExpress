curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o docker-compose
chmod +x docker-compose
./docker-compose --version
./docker-compose up --build -d mongodb