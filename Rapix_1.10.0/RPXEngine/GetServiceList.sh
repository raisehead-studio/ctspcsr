#!/bin/sh
#ServiceName;Load;Active;Sub;Description;Path
rm -f serviceList
SrvList=output
rm -f $SrvList
systemctl -l --type service >> $SrvList
while IFS= read -r line; do
	if [[ "$line" =~ ".service" ]];
	then
		echo "$line" >> tmp
		srvname=$(awk -F. '{print $1}' tmp)
		path=$(systemctl status $srvname | grep Loaded)
		cutback=${path%%;*}
		srvfilepath=${cutback#*(}
		
		outputstr=$(awk '{printf $1 ";" $2 ";" $3 ";" $4 ";" ; for(i=5;i<NF;i++)printf $i " " ; printf $NF}' tmp)
		echo "$outputstr;$srvfilepath" >> serviceList
		rm -f tmp
	fi
done < <(grep "" $SrvList)
rm -f $SrvList
