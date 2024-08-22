#!/bin/sh
BASEDIR=$(dirname "$0")/backup
echo "#!/bin/sh" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-14161-4 CCE-14777-7 CCE-14011-1 CCE-14171-3 CCE-14559-9
	#To do#
#CCE-14440-2
cp /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release "$BASEDIR"/CCE144402b
echo "rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-3416-5
LC_ALL=C chkconfig --list | grep rhnsd >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then
   echo "chkconfig rhnsd on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4218-4
chkconfig --list | grep yum-updatesd >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then
   echo "chkconfig yum-updatesd on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14914-6
cp /etc/yum.conf "$BASEDIR"/CCE149146b
#CCE-14813-0
mkdir "$BASEDIR"/CCE148130b
cp /etc/yum.repos.d/* "$BASEDIR"/CCE148130b/
#CCE-4209-3
rpm -qa aide >> gcbbackupinittmp
if grep -q 'aide' gcbbackupinittmp
	then :
else
	echo "yum erase aide" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14931-0
	#To do#
#CCE-4249-9 CCE-3522-0 CCE-4275-4 CCE-4042-8 CCE-14412-1 CCE-14940-1
#CCE-14927-8 CCE-15007-8 CCE-14306-5 CCE-14703-3 CCE-14584-7
cp /etc/fstab "$BASEDIR"/CCE42499b
#CCE-14089-7 CCE-14457-6 CCE-15087-0 CCE-14093-9 CCE-14853-6 CCE-14118-4
#CCE-14871-8 CCE-14268-7 CCE-14132-5 CCE-14027-7 CCE-14911-2
cp /etc/modprobe.d/gcb-blacklist "$BASEDIR"/CCE140897b
#CCE-3932-1 CCE-4210-1 CCE-4064-2
rwx=$(stat -c %a /etc/gshadow)
ls -l /etc/gshadow >> gcbbackupinittmp
owngrp=$(awk '{print $3":"$4}' gcbbackupinittmp)
rm -f gcbbackupinittmp
echo "chmod $rwx /etc/gshadow" >> "$BASEDIR"/CCEbackupSH.sh
echo "chown $owngrp /etc/gshadow" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-4130-1 CCE-3918-0 CCE-3988-3
rwx=$(stat -c %a /etc/shadow)
ls -l /etc/shadow >> gcbbackupinittmp
owngrp=$(awk '{print $3":"$4}' gcbbackupinittmp)
rm -f gcbbackupinittmp
echo "chmod $rwx /etc/shadow" >> "$BASEDIR"/CCEbackupSH.sh
echo "chown $owngrp /etc/shadow" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-3967-7 CCE-3276-3 CCE-3883-6
rwx=$(stat -c %a /etc/group)
ls -l /etc/group >> gcbbackupinittmp
owngrp=$(awk '{print $3":"$4}' gcbbackupinittmp)
rm -f gcbbackupinittmp
echo "chmod $rwx /etc/group" >> "$BASEDIR"/CCEbackupSH.sh
echo "chown $owngrp /etc/group" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-3566-7 CCE-3958-6 CCE-3495-9
rwx=$(stat -c %a /etc/passwd)
ls -l /etc/passwd >> gcbbackupinittmp
owngrp=$(awk '{print $3":"$4}' gcbbackupinittmp)
rm -f gcbbackupinittmp
echo "chmod $rwx /etc/passwd" >> "$BASEDIR"/CCEbackupSH.sh
echo "chown $owngrp /etc/passwd" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-3399-3
find / -xdev -type d \( -perm -0002 -a ! -perm -1000 \) -print >> gcbbackupinittmp
while IFS= read -r line; do
	echo "chmod -t $line" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-3795-2
find / -xdev -type f -perm -0002 -print >> gcbbackupinittmp
while IFS= read -r line;do
	echo "chmod o+w $line" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-14970-8
find / -xdev -type f -perm -2000 -print >> gcbbackupinittmp
inifile=$(<"$BASEDIR"/CCE149708ini)
while IFS= read -r line;do
	if [[ "$inifile" =~ "$line" ]];
		then echo "chmod g+s $line" >> "$BASEDIR"/CCEbackupSH.sh
	fi
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-14340-4
find / -xdev -type f -perm -4000 -print >> gcbbackupinittmp
inifile=$(<"$BASEDIR"/CCE143404ini)
while IFS= read -r line;do
	if [[ "$inifile" =~ "$line" ]];
		then echo "chmod u+s $line" >> "$BASEDIR"/CCEbackupSH.sh
	fi
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-4223-4 CCE-3573-3
find / -xdev \( -nouser -o -nogroup \) -print >> gcbbackupinittmp
while IFS= read -r line;do
	ls -l $line >> gcbbackupinittmp
	owngrp=$(awk '{print $3":"$4}' gcbbackupinittmp)
	rm -f gcbbackupinittmp
	echo "chown $owngrp $line" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-14794-2
find / -xdev -type d -perm -0002 -uid +500 -print >> gcbbackupinittmp
while IFS= read -r line;do
	ls -l $line >> gcbbackupinittmp
	owngrp=$(awk '{print $3":"$4}' gcbbackupinittmp)
	rm -f gcbbackupinittmp
	echo "chown $owngrp $line" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-4220-0 CCE-4245-7
cp /etc/sysconfig/init "$BASEDIR"/CCE42200b
#CCE-4247-3 CCE-4168-1 CCE-4146-7 CCE-3561-8 CCE-4155-8 CCE-4151-7
#CCE-3472-8CCE-3339-9 CCE-4217-6 CCE-4186-3 CCE-4236-6 CCE-4091-5
#CCE-4133-5 CCE-3644-2 CCE-4320-8 CCE-4080-8 CCE-3840-6 CCE-4265-5
cp /etc/sysctl.conf "$BASEDIR"/CCE42473b
echo "/sbin/sysctl -p" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-4225-9
cp /etc/security/limits.conf "$BASEDIR"/CCE42259b
#CCE-4172-3
rpm -qa aide >> gcbbackupinittmp
if grep -q 'kernel-PAE' gcbbackupinittmp
	then :
else
	echo "yum erase kernel-PAE" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3416-5
chkconfig --list | grep autofs >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then
   echo "chkconfig autofs on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3685-5
cp /etc/security/console.perms.d/50-default.perms "$BASEDIR"/CCE36855b
#CCE-4231-7
gconftool-2 -R /desktop/gnome/volume_manager >> gcbbackupinittmp
while IFS= read -r line;do
	echo "$line" >> gcbbackupinittmpitem
	dd=$(awk '{print $1" "$3}' gcbbackupinittmpitem)
	rm -f gcbbackupinittmpitem
	echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type bool --set /desktop/gnome/volume_manager/$dd" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
#echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type bool --set /desktop/gnome/volume_manager/automount_media true" >> "$BASEDIR"/CCEbackupSH.sh
#echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type bool --set /desktop/gnome/volume_manager/automount_drives true" >> "$BASEDIR"/CCEbackupSH.sh
rm -f gcbbackupinittmp
#CCE-4111-1 CCE-4256-4 CCE-3485-0 CCE-3820-8
cp /etc/securetty "$BASEDIR"/CCE41111b
#CCE-14088-9
if grep -q ^wheel /etc/group 
	then :
else
	echo "groupdel wheel" >> "$BASEDIR"/CCEbackupSH.sh
fi
#CCE-15047-4
cp /etc/pam.d/su "$BASEDIR"/CCE150474b
#CCE-3987-5
awk -F: '($3 <= 500 && $1 != "root" && $7 != "/sbin/nologin") {print $1 " " $7}' /etc/passwd >> gcbbackupinittmp
while IFS= read -r line; do
	echo "$line" >> gcbbackupinittmpitem
	name=$(awk '{print $1}' gcbbackupinittmpitem)
	shell=$(awk '{print $2}' gcbbackupinittmpitem)
	echo "usermod -U $name" >> "$BASEDIR"/CCEbackupSH.sh
	echo "usermod -s $shell $name" >> "$BASEDIR"/CCEbackupSH.sh
	rm -f gcbbackupinittmpitem
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-4238-2
aawk -F: '($2 == "") {print $1}' /etc/shadow >> gcbbackupinittmp
while IFS= read -r line; do
	echo "passwd -d $line" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-14300-8
awk -F: '($2 != "x") {print$1 " " $2}' /etc/passwd >> gcbbackupinittmp
while IFS= read -r line; do
	echo "$line" >> gcbbackupinittmpitem
	name=$(awk '{print $1}' gcbbackupinittmpitem)
	pwd=$(awk '{print $2}' gcbbackupinittmpitem)
	echo "echo -e \"$pwd\\n$pwd\" | passwd $name" >> "$BASEDIR"/CCEbackupSH.sh
	rm -f gcbbackupinittmpitem
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-4009-7
awk -F: '($3 == "0") {print $1}' /etc/passwd >> gcbbackupinittmp
while IFS= read -r line; do
	echo "useradd $line" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-4180-6 CCE-4097-2 CCE-4092-3 CCE-4154-1 CCE-14107-7
cp /etc/login.defs "$BASEDIR"/CCE41806b
#CCE-14675-3
cp /etc/group "$BASEDIR"/CCE146753b
#CCE-4114-5
cp /etc/passwd "$BASEDIR"/CCE41145b
#CCE-14071-5
cp /etc/shadow "$BASEDIR"/CCE140715b
#CCE-15054-0 CCE-14113-5 CCE-14672-0 CCE-14712-4 CCE-14122-6 CCE-14701-7 CCE-3410-8 CCE-14939-3
cp /etc/pam.d/system-auth "$BASEDIR"/CCE150540b
#CCE-14063-2 CCE-17816-0
cp /etc/libuser.conf "$BASEDIR"/CCE140632b
#CCE-3301-9 CCE-14847-8
cp /etc/profile "$BASEDIR"/CCE33019b
#
awk -F: '($3 == "0") {print $1}' /etc/passwd >> gcbbackupinittmp
while IFS= read -r line;do
	rwx=$(stat -c %a /home/$line)
	echo "chmod $rwx /home/$line" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-3844-8
cp /etc/bashrc "$BASEDIR"/CCE38448b
#CCE-4227-5
cp /etc/csh.cshrc "$BASEDIR"/CCE42275b
#CCE-3923-0 CCE-4197-0 CCE-4144-2 CCE-3818-2
cp /etc/grub.conf "$BASEDIR"/CCE39776b
#CCE-4241-6
cp /etc/inittab "$BASEDIR"/CCE42416b
#CCE-14604-3 CCE-3315-9
gconftool-2 -R /apps/gnome-screensaver >> gcbbackupinittmp
while IFS= read -r line;do
	echo "$line" >> gcbbackupinittmpitem
	dd=$(awk '{print $1" "$3}' gcbbackupinittmpitem)
	rm -f gcbbackupinittmpitem
	echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type bool --set /apps/gnome-screensaver/$dd" >> "$BASEDIR"/CCEbackupSH.sh
done < <(grep "" gcbbackupinittmp)
#echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type bool --set /apps/gnome-screensaver/idle_activation_enabled true" >> "$BASEDIR"/CCEbackupSH.sh
#echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type int --set /apps/gnome-screensaver/idle_delay 15" >> "$BASEDIR"/CCEbackupSH.sh
#echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type bool --set /apps/gnome-screensaver/lock_enabled false" >> "$BASEDIR"/CCEbackupSH.sh
#echo "gconftool-2 --direct --config-source xml:readwrite:/etc/gconf/gconf.xml.mandatory --type string --set /apps/gnome-screensaver/mode blank-only" >> "$BASEDIR"/CCEbackupSH.sh
rm -f gcbbackupinittmp
#CCE-3910-7
rpm -qa vlock >> gcbbackupinittmp
if grep -q 'vlock' gcbbackupinittmp
	then :
else
	echo "yum erase vlock" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4060-0
cp /etc/issue "$BASEDIR"/CCE40600b
#CCE-4188-9
cp /usr/share/gdm/themes/RHEL/RHEL.xml "$BASEDIR"/CCE41889b
#CCE-3910-7
rpm -qa pam_ccreds >> gcbbackupinittmp
if grep -q 'pam_ccreds' gcbbackupinittmp
	then echo "yum install pam_ccreds" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-18412-7
cp /etc/default/useradd "$BASEDIR"/CCE184127b
#CCE-4044-4
cp /etc/sudoers "$BASEDIR"/CCE40444b
#CCE-4185-5
echo "groupdel usergroup" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-3952-9
rwx=$(stat -c %a /usr/sbin/userhelper)
ls -l /usr/sbin/userhelper >> gcbbackupinittmp
owngrp=$(awk '{print $3":"$4}' gcbbackupinittmp)
rm -f gcbbackupinittmp
echo "chmod $rwx /usr/sbin/userhelper" >> "$BASEDIR"/CCEbackupSH.sh
echo "chown $owngrp /usr/sbin/userhelper" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-3689-7
cp /etc/profile.d/autologout.csh "$BASEDIR"/CCE36897b
#CCE-3707-7
cp /etc/profile.d/tmout.sh "$BASEDIR"/CCE37077b
#CCE-3999-0 CCE-3624-4
cp /etc/selinux/config "$BASEDIR"/CCE39990b
#CCE-3668-1
chkconfig --list | grep mcstrans >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then
   echo "chkconfig mcstrans on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14991-4
	#To do#
#CCE-3910-7
rpm -qa setroubleshoot >> gcbbackupinittmp
if grep -q 'setroubleshoot' gcbbackupinittmp
	then echo "yum install setroubleshoot" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4254-9
chkconfig --list | grep setroubleshoot >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then
   echo "chkconfig setroubleshoot on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4129-3
chkconfig --list | grep restorecond >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then :
  else
   echo "chkconfig restorecond off" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4276-2
mkdir "$BASEDIR"/CCE42762b
ls /etc/sysconfig/network-scripts | grep ifcfg- >> gcbbackupinittmp
while IFS= read -r line; do
	if [[ \"$line\" =~ \"wlan\" || \"$line\" =~ \"eth\" || \"$line\" =~ \"wifi\" ]];
	then
		ifdown $line
		echo "/etc/sysconfig/network-scripts/ifcfg-$line" >> CCE42762cfg
		cp /etc/sysconfig/network-scripts/ifcfg-$line "$BASEDIR"/CCE42762b/
	fi
done < <(grep \"\" gcbbackupinittmp)
rm -f gcbbackupinittmp
#CCE-4189-7
chkconfig --list | grep iptables >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then :
  else
   echo "chkconfig iptables off" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14264-6
cp /etc/sysconfig/iptables "$BASEDIR"/CCE142646b
#CCE-3910-7
rpm -qa ipsec-tools >> gcbbackupinittmp
if grep -q 'ipsec-tools' gcbbackupinittmp
	then echo "yum install ipsec-tools" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4182-2
cp /etc/logrotate.d/syslog "$BASEDIR"/CCE41822b
#CCE-4323-2
echo "rm -f 0logwatch" >> "$BASEDIR"/CCEbackupSH.sh
#CCE-4292-9
chkconfig --list | grep auditd >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then :
  else
   echo "chkconfig auditd off" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14051-7 CCE-14829-6 CCE-14816-3 CCE-14821-3 CCE-14058-2 CCE-14917-9
#CCE-14917-9 CCE-14569-8 CCE-14569-8 CCE-14824-7 CCE-14688-6 CCE-14692-8
#CCE-14904-7 CCE-14904-7
cp /etc/audit/audit.rules "$BASEDIR"/CCE140517b
#CCE-4023-8
rpm -qa inetd >> gcbbackupinittmp
if grep -q 'inetd' gcbbackupinittmp
	then echo "yum install inetd" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4164-0
rpm -qa xinetd >> gcbbackupinittmp
if grep -q 'xinetd' gcbbackupinittmp
	then echo "yum install xinetd" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4308-3
rpm -qa telnet-server >> gcbbackupinittmp
if grep -q 'telnet-server' gcbbackupinittmp
	then echo "yum install telnet-server" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4308-3
rpm -qa rsh-server >> gcbbackupinittmp
if grep -q 'rsh-server' gcbbackupinittmp
	then echo "yum install rsh-server" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3705-1
chkconfig --list | grep ypbind >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig ypbind on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4348-9
rpm -qa ypserv >> gcbbackupinittmp
if grep -q 'ypserv' gcbbackupinittmp
	then echo "yum install ypserv" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3916-4
rpm -qa tftp-server >> gcbbackupinittmp
if grep -q 'tftp-server' gcbbackupinittmp
	then echo "yum install tftp-server" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-18151-1
rpm -qa talk-server >> gcbbackupinittmp
if grep -q 'talk-server' gcbbackupinittmp
	then echo "yum install talk-server" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-18200-6
rpm -qa talk >> gcbbackupinittmp
if grep -q 'talk' gcbbackupinittmp
	then echo "yum install talk" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4355-4
chkconfig --list | grep bluetooth >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig bluetooth on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4377-8
chkconfig --list | grep hidd >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig hidd on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14825-4
rpm -qa isdn4k-utils >> gcbbackupinittmp
if grep -q 'isdn4k-utils' gcbbackupinittmp
	then echo "yum install isdn4k-utils" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3425-6
chkconfig --list | grep kdump >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig kdump on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14054-1
cp /etc/sysconfig/network "$BASEDIR"/CCE140541b
#CCE-17504-2
rpm -qa irda-utils >> gcbbackupinittmp
if grep -q 'irda-utils' gcbbackupinittmp
	then echo "yum install irda-utils" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-14948-4
cp /etc/modprobe.conf "$BASEDIR"/CCE149484b
#CCE-4421-4
chkconfig --list | grep readahead_early >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig readahead_early on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4302-6
chkconfig --list | grep readahead_later >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig readahead_later on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3412-4
chkconfig --list | grep firstboot >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig firstboot on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4229-1
chkconfig --list | grep gpm >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig gpm on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4356-2
chkconfig --list | grep microcode_ctl >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig microcode_ctl on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4100-4
chkconfig --list | grep pcscd >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig pcscd on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3455-3
chkconfig --list | grep smartd >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig smartd on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-3822-4
chkconfig --list | grep messagebus >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig messagebus on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4364-6
chkconfig --list | grep haldaemon >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig haldaemon on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4289-5
chkconfig --list | grep apmd >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig apmd on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4298-6
chkconfig --list | grep acpid >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig acpid on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4051-9
chkconfig --list | grep cpuspeed >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig cpuspeed on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp
#CCE-4211-9
chkconfig --list | grep kudzu >> gcbbackupinittmp
if grep -q 'on' gcbbackupinittmp;
  then 
   echo "chkconfig kudzu on" >> "$BASEDIR"/CCEbackupSH.sh
fi
rm -f gcbbackupinittmp