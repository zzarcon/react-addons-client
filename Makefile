default: push

push:
	git push
	git push heroku master

set_origin:
	heroku git:remote -a react-components