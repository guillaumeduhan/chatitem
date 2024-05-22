gt:
	git add .
	git commit -m "commit"
	git push

dev:
	git pull
	yarn
	yarn dev