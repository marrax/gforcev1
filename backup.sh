#!/bin/bash
date=`date +%d-%m-%Y`

rm -rf tmp/cache
tar -cvzf ~/backups/gforcev1-$date.tar.gz .
pg_dump gforcev1_development -U gforcev1  > ~/backups/gforcev1_development.dump.$date
git add --all
git commit -m $date 
git push -u origin master
