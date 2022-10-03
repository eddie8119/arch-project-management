set -e

npm run build

cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/eddie8119/arch-project-management.git master:gh-pages

cd -