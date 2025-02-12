#!/bin/sh

# Loops on git pull-push in a remote mob

while true;
do
echo "wait 20s"
sleep 10
echo "wait 10s"
sleep 10
echo "pull/push"
./pull-push.sh;
done