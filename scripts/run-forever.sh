#!/bin/bash
forever start -l forever.log -o out.log -e err.log ../node_modules/http-server/bin/http-server ../dist