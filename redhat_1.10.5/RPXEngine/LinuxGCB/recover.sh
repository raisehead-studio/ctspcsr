#!/bin/sh
BASEDIR=$(dirname "$0")/backup
#Do GCB recover
#CCE-14161-4 CCE-14777-7 CCE-14011-1 CCE-14171-3 CCE-14559-9

#CCE-14440-2
rm -f /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
cp "$BASEDIR"/CCE144402b /etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
#CCE-14914-6
rm -f /etc/yum.conf
cp "$BASEDIR"/CCE149146b /etc/yum.conf
#CCE-14813-0
rm -f /etc/yum.repos.d/*
cp "$BASEDIR"/CCE148130b/* /etc/yum.repos.d/
#CCE-14931-0

#CCE-4249-9 CCE-3522-0 CCE-4275-4 CCE-4042-8 CCE-14412-1 CCE-14940-1 CCE-14927-8 CCE-15007-8 CCE-14306-5 CCE-14703-3 CCE-14584-7
rm -f /etc/fstab
cp "$BASEDIR"/CCE42499b /etc/fstab
#CCE-14089-7 CCE-14457-6 CCE-15087-0 CCE-14093-9 CCE-14853-6 CCE-14118-4 CCE-14871-8
rm -f /etc/modprobe.d/gcb-blacklist
cp "$BASEDIR"/CCE140897b /etc/modprobe.d/gcb-blacklist
#CCE-4220-0
rm -f /etc/sysconfig/init
cp "$BASEDIR"/CCE42200b /etc/sysconfig/init
#CCE-4247-3 CCE-4168-1 CCE-4146-7
rm -f /etc/sysctl.conf
cp "$BASEDIR"/CCE42473b /etc/sysctl.conf
#CCE-4225-9
rm -f /etc/security/limits.conf
cp "$BASEDIR"/CCE42259b /etc/security/limits.conf
#CCE-3685-5
rm -f /etc/security/console.perms.d/50-default.perms
cp "$BASEDIR"/CCE36855b /etc/security/console.perms.d/50-default.perms
#CCE-4111-1 CCE-4256-4 CCE-3485-0 CCE-3820-8
rm -f /etc/securetty
cp "$BASEDIR"/CCE41111b /etc/securetty
#CCE-15047-4
rm -f /etc/pam.d/su
cp "$BASEDIR"/CCE150474b /etc/pam.d/su
#CCE-4180-6
rm -f /etc/login.defs
cp "$BASEDIR"/CCE41806b /etc/login.defs
#CCE-14675-3
rm -f /etc/group
cp "$BASEDIR"/CCE146753b /etc/group
#CCE-4114-5
rm -f /etc/passwd
cp "$BASEDIR"/CCE41145b /etc/passwd
#CCE-14071-5
rm -f /etc/shadow
cp "$BASEDIR"/CCE140715b /etc/shadow
#CCE-15054-0
rm -f /etc/pam.d/system-auth
cp "$BASEDIR"/CCE150540b /etc/pam.d/system-auth
#CCE-14063-2
rm -f /etc/libuser.conf
cp "$BASEDIR"/CCE140632b /etc/libuser.conf
#CCE-3301-9
rm -f /etc/profile
cp "$BASEDIR"/CCE33019b /etc/profile
#CCE-3844-8
rm -f /etc/bashrc
cp "$BASEDIR"/CCE38448b /etc/bashrc
#CCE-4227-5
rm -f /etc/csh.cshrc
cp "$BASEDIR"/CCE42275b /etc/csh.cshrc
#CCE-4241-6
rm -f /etc/inittab
cp "$BASEDIR"/CCE42416b /etc/inittab
#CCE-4060-0
rm -f /etc/issue
cp "$BASEDIR"/CCE40600b /etc/issue
#CCE-4188-9
rm -f /usr/share/gdm/themes/RHEL/RHEL.xml
cp "$BASEDIR"/CCE41889b /usr/share/gdm/themes/RHEL/RHEL.xml
#CCE-18412-7
rm -f /etc/default/useradd
cp "$BASEDIR"/CCE184127b /etc/default/useradd
#CCE-4044-4
rm -f /etc/sudoers
cp "$BASEDIR"/CCE40444b /etc/sudoers
#CCE-3689-7
rm -f /etc/profile.d/autologout.csh
cp "$BASEDIR"/CCE36897b /etc/profile.d/autologout.csh
#CCE-3707-7
rm -f /etc/profile.d/tmout.sh
cp "$BASEDIR"/CCE37077b /etc/profile.d/tmout.sh
#CCE-3999-0
rm -rf /etc/selinux/config
cp "$BASEDIR"/CCE39990b /etc/selinux/config
#CCE-3923-0 CCE-3977-6
rm -f /etc/grub.conf
cp "$BASEDIR"/CCE39776b /etc/grub.conf
#CCE-4276-2
while IFS= read -r line; do
	rm -f $line;
done < <(grep "" "$BASEDIR"/CCE42762cfg)
cp "$BASEDIR"/CCE42762b/* /etc/sysconfig/network-scripts/
#CCE-14264-6
rm -f /etc/sysconfig/iptables
cp "$BASEDIR"/CCE142646b /etc/sysconfig/iptables
#CCE-4182-2
rm -f /etc/logrotate.d/syslog
cp "$BASEDIR"/CCE41822b /etc/logrotate.d/syslog
#CCE-14051-7
rm -f /etc/audit/audit.rules
cp "$BASEDIR"/CCE140517b /etc/audit/audit.rules
#CCE-14054-1
rm -f /etc/sysconfig/network
cp "$BASEDIR"/CCE140541b /etc/sysconfig/network
#CCE-14948-4
rm -f /etc/modprobe.conf
cp "$BASEDIR"/CCE149484b /etc/modprobe.conf

#All ShellScript
bash "$BASEDIR"/CCEbackupSH.sh