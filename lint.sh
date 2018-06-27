#!/bin/bash
files=$(git diff --cached --name-only | grep '\.jsx\?$')
ESLINT="$(git rev-parse --show-toplevel)/node_modules/.bin/eslint"

# Check if ESLINT is installed or not
if [[ ! -x "$ESLINT" ]]; then
  echo "\t\033[41mPlease install ESlint\033[0m (npm i --save --save-exact --dev eslint)"
  exit 1
fi

# Prevent ESLint help message if no files matched
if [[ $files = "" ]] ; then
  exit 0
fi

failed=0
for file in ${files}; do
  git show :$file | $ESLINT $file
  if [[ $? != 0 ]] ; then
    failed=1
  fi
done;

if [[ $failed != 0 ]] ; then
  echo "¿?¿?¿? ESLint failed, git commit denied!"
  exit $failed
fi
