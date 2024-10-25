#!/bin/sh

rm -f processport

netstat -ntulp >> output
while IFS= read -r line; do
	if [[ "$line" =~ ":" ]];
	then
		echo "$line" >> tmp
		#Proto;Recv-Q;Send-Q;LocalAddress;ForeignAddress;Process;lport;fport
		command=$(awk '{print $1 ";" $2 ";" $3 ";" $4 ";" $5}' tmp)

		cutfront=$(awk -F/ '{print $2}' tmp)
		process=${cutfront%% *}

		localport=$(awk '{print $4}' tmp)
		cutfront=${localport##*:}
		lport=${cutfront%% *}

		foreignport=$(awk '{print $5}' tmp)
		cutfront=${foreignport##*:}
		fport=${cutfront%% *}

		echo "$command;$process;$lport;$fport" >> processport
		rm -f tmp
	fi
done < <(grep "" output)
rm -f output
