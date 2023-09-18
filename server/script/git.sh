# 現在のブランチを取得する
branch=$(git branch --show-current | grep -v detached | sed -e 's/^\* //g')

# pull
git pull origin $branch

#全部ステージングする
git add .
#コミットする
git commit -m $1

#プッシュする
git push origin $branch