#!/bin/sh
rm -f output
sudo cat /etc/services >> srv

while IFS= read -r line;do
	echo $line >> tmp
	if grep -q "^#" tmp
	then :
	else
		awk '{print $2}' tmp >> portprotocol
		awk '{printf $1 ";"}' tmp >> output
		awk -F/ '{printf $1 ";" $2 ";"}' portprotocol >> output
		awk -F# '{print $2}' tmp >> output
		rm -f portprotocol
	fi
	rm -f tmp
done < <(grep "" srv)
rm -f srv