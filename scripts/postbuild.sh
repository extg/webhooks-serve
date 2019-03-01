#!/usr/bin/env bash

echo "run postbuild..."

PACKAGE_NAME=$(node -e "process.stdout.write(require('./package.json').name + os.EOL)")

mkdir -p "./$PACKAGE_NAME/var/www/$PACKAGE_NAME"
cp -R ./lib "./$PACKAGE_NAME/var/www/$PACKAGE_NAME"
chmod -R +x "./$PACKAGE_NAME/var/www/$PACKAGE_NAME"


# TODO: http://www.king-foo.com/2011/11/creating-debianubuntu-deb-packages/
# dpkg-deb --build webhooks-serve
# dpkg -i webhooks-serve.deb
