#!/usr/bin/env sh
###
 # @Author: 李韬
 # @Date: 2022-08-31 14:08:06
 # @LastEditors: 李韬
 # @LastEditTime: 2022-08-31 14:13:03
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/449164122/zfs-mobile.git master:gh-pages

cd -