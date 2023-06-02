#! env bash

p=`pwd`


cd ..
yarn 
yarn build

cd $pwd
pnpm build

echo "Init Successfully"