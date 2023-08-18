# Version 1, TS Express

run:
	tsc && node dist/app.js

dev:
	npx nodemon src/app.ts

run-linter:
	npx eslint . --ext .ts

compile:
	npx tsc