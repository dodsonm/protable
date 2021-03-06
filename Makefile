# PREREQUISITE: Node.js, BASH shell
#
# Node dependencies are installed into cwd local node_modules
#

BOWER = $(CURDIR)/node_modules/.bin/bower

install: mongodb node_modules bower_components build

# Hand off build to Gruntfile
build:
	grunt build

clean:
	rm -rf node_modules/ bower_components/ public/stylesheets/*
	# but leave mongodb

mongodb:
	mkdir -p ./data/mongodb

node_modules:
	npm install

bower_components:
	$(BOWER) install
	ln -s $(CURDIR)/bower_components $(CURDIR)/public
