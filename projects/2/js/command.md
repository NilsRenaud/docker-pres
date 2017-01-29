### Lancement du container
docker run -it --name nodeAmarisWithMongo -v "$PWD":/usr/src/app --link mongoAmaris:mongoServer -w /usr/src/app node:latest /bin/bash
