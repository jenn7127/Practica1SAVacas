#!/usr/bin/env sh



echo 'The following "npm" command runs your Node.js/React application in'

set -x
npm start &
sleep 1
set +x

echo '.....'
echo ' http://localhost:3000 to see your Node.js/React application in action.'
