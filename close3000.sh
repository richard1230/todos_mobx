#!/bin/bash
name=$(lsof -i:3000|tail -1|awk '"$1"!=""{print $2}')
if [ -z $name ]
then
 echo "No process can be used to killed!"
 exit 0
fi
id=$(lsof -i:3000|tail -1|awk '"$1"!=""{print $2}')
kill -9 $id

echo "Process name=$name($id) kill!"
exit 0

#useage:
#close8080.sh 8080
