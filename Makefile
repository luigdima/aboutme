clear:
	docker run -it -v $(PWD)/dist/:/app -w /app node:14-alpine sh -c "npm install -g purgecss && purgecss --config purgecss.config.js --output assets/style.purged.css"