yarn build

cd dist && aws s3 cp ./ s3://animalmind-serverless-static-web --recursive --acl public-read
