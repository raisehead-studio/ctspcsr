#!/bin/sh
if [[ "$1" == "-uninstall" ]]; then # will delete the UUID backup file too
    if grep -q PRETTY_NAME /etc/*-release; then # RHEL7 UP
        systemctl stop RPXSrv.service
        systemctl disable RPXSrv.service
        systemctl daemon-reload
        systemctl reset-failed
        rm -f /etc/systemd/system/RPXSrv.service
        rm -f /usr/lib/systemd/system/RPXSrv.service
    else # RHEL6
        service RPXSrv-RHEL6 stop
        chkconfig --del RPXSrv-RHEL6
        chkconfig RPXSrv-RHEL6 off
        rm -f /etc/rc.d/init.d/RPXSrv-RHEL6
    fi
    rm -f /etc/systemd/system/RPXSrv.service
    rm -rf /etc/RPXEngine
    exit 0
fi

if [ ! -d "/etc/RPXEngine" ]; then
    mkdir /etc/RPXEngine
fi

chmod +x ./RPXEngine/RPXLinuxSrv
chmod +x ./RPXEngine/RPXLinuxEngine
chmod +x ./RPXEngine/RPXSrv-RHEL6

if [[ "$1" == "-update" ]]; then
    if grep -q PRETTY_NAME /etc/*-release; then # RHEL7 UP
        systemctl stop RPXSrv.service
        systemctl disable RPXSrv.service
        systemctl daemon-reload
        systemctl reset-failed
    else # RHEL6
        chkconfig RPXSrv-RHEL6 off
        chkconfig --del RPXSrv-RHEL6
        service RPXSrv-RHEL6 stop
    fi
fi

cp -rf ./RPXEngine/* /etc/RPXEngine/
ln -fs /etc/RPXEngine/RPXSrv.service /etc/systemd/system/RPXSrv.service

if grep -q PRETTY_NAME /etc/*-release; then
    # RHEL7 UP
    if grep PRETTY_NAME /etc/*-release | grep -q "Linux 9"; then # Rhel 9
        chmod +x /etc/systemd/system/RPXSrv.service
    fi
    systemctl daemon-reload
    systemctl reset-failed
    systemctl enable RPXSrv.service
    systemctl start RPXSrv.service
    systemctl status RPXSrv.service
else
    # RHEL6
    ln /etc/RPXEngine/RPXSrv-RHEL6 /etc/rc.d/init.d/RPXSrv-RHEL6
    service RPXSrv-RHEL6 start
    chkconfig --add RPXSrv-RHEL6
    chkconfig RPXSrv-RHEL6 on
fi