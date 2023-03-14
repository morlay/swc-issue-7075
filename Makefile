test.host: dep
	npx tsx index.ts

dep:
	npm install

setup:
	npm config -g set //npm.pkg.github.com/:_authToken=${GH_PASSWORD}

test.docker:
	docker run \
		-v $(PWD):/app \
		-e GH_PASSWORD=${GH_PASSWORD} \
		-w /app \
		node:18 sh -c "make setup test.host"