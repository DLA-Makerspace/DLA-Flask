#!/bin/bash

# Flask setup:

echo "Generate Kramdown Docs:"
if [[ "$OSTYPE" == "darwin"* ]] ; then

  # Save configuration values to config.cfg
  # use GNU sed utility if on Mac, e.g.
  # `brew install gsed`
  echo "detected fruit based operating system, checking gnu-sed..."

  if ![ whichapp 'gsed' &>/dev/null ]; then
      echo "Please use GNU sed utility if on Mac, e.g."
      echo -e "\` brew install gsed \`"
      echo "exiting..."
      exit 0
  fi
fi

if ![ whichapp 'kramdown' &>/dev/null ]; then
    echo "Please install Kramdown superset CLI tool!"
    echo -e "\` sudo apt-get install ruby  \`"
    echo -e "\` sudo gem install kramdown  \`"
    echo "exiting..."
    exit 0
else

    touch "./pub/static/docs.html"
    touch "./pub/static/usage.html"



    kramdown "./docs/docs.md" > "./pub/static/docs.html"

    kramdown "./docs/usage.md" > "./pub/static/usage.html"

fi

exit 0
