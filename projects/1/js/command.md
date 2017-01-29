### Lancement du container
docker run -it --name nodeAmaris -v "$PWD":/usr/src/app -p 8000:8000 -w /usr/src/app node:latest /bin/bash
