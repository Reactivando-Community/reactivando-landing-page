start:
	yarn install
	yarn run build
	pm2 start yarn --name reactivando-landing-page -- run start

update:
	git pull
	rm -rf .next
	yarn install
	yarn run build
	pm2 restart reactivando-landing-page