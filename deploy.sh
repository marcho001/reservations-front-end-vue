set -e
npm run build
cd dist
# git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:marcho001/reservations-front-end-vue.git master:gh-pages
cd -
