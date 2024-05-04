#!/bin/bash

cd app

# pnpmを使ってnode modulesを初期インストール
pnpm install

# npxを使ってPrismaの初期化
npx prisma migrate dev --name init
 

npm run dev