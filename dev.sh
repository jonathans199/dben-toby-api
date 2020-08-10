rm -rf build/
npm run build
rsync -azP -e 'ssh -p 2222' build/* root@185.39.11.13:/usr/share/nginx/dbentoby/api-dbentoby