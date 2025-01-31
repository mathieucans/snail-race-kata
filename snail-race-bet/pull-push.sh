#!/bin/sh

# Pulls and pushes the current git branch.
# Use it to quickly switch driver in a remote mob or randori

export CURRENT_BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

if [ "$CURRENT_BRANCH" = "main" ] || [ "$CURRENT_BRANCH" = "start-step2" ] || [ "$CURRENT_BRANCH" = "start-step3" ] || [ "$CURRENT_BRANCH" = "solution" ]; then
    echo 'Create your own branch before use this script'
    exit 1
fi

git pull origin "$CURRENT_BRANCH"
git add .
git commit -m 'Working...'
git push origin "$CURRENT_BRANCH"

