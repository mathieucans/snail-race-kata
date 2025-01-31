#!/bin/sh

# Pulls and pushes the current git branch.
# Use it to quickly switch driver in a remote mob or randori

export CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

git pull origin "$CURRENT_BRANCH" git add . git commit -m 'Working...' git push origin "$CURRENT_BRANCH"
