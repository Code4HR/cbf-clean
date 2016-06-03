#! /bin/bash

# deploy prod www.cleanthebayday.net to meteor hosting

DEPLOY_HOSTNAME=galaxy.meteor.com meteor deploy www.cleanthebayday.net --settings settings.json
