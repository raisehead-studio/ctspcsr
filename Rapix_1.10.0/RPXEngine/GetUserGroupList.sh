#!/bin/sh
rm -f userlist
rm -f grouplist

UfnTmp=userfullname
Tmp=output

awk -F: '{print $1","$5}' /etc/passwd >> $UfnTmp

while IFS= read -r line; do
	echo $line >>tmpfile
	user=$(awk -F, '{print $1}' tmpfile)
	fullname=$(awk -F, '{print $2}' tmpfile)
	groups $user>>grouptmp
	group=$(awk '{for(i=3;i<NF;i++)printf $i " "; print $NF}' grouptmp)
	echo "$user $fullname $group" >> $Tmp
	rm -f tmpfile
	rm -f grouptmp
done < <(grep "" $UfnTmp)

while IFS= read -r line; do
	echo "$line" >> tmpfile
	#user;fullname;groups
	awk '{printf $1 ";" $2 ";" ; for(i=3;i<NF;i++)printf $i ";" ; print $NF}' tmpfile >> userlist
	rm -f tmpfile
done < <(grep "" $Tmp)

rm -f $UfnTmp
rm -f $Tmp

awk -F: '{print $1}' /etc/group >> grouplist
