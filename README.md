docker run -it --rm -p 4000:4000 -w /app -v $(pwd):/app --env-file .env  node:22-alpine /bin/sh


