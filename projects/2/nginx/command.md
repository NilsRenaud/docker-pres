docker run --name nginxAmarisFull -v "$PWD":/usr/share/nginx/html:ro -v "$PWD"/nginx.conf:/etc/nginx/nginx.conf:ro -p 80:80 --link nodeAmarisWithMongo:backendServer -d nginx
