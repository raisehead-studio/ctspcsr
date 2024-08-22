#!/bin/sh
if [ ! -d "/etc/RPXEngine" ]; then
    mkdir /etc/RPXEngine
fi
if [ ! -d "/etc/RPXEngine/LinuxGCB" ]; then
    mkdir /etc/RPXEngine/LinuxGCB
fi
if [ ! -d "/etc/RPXEngine/GetSrvOpenPorts" ]; then
    mkdir /etc/RPXEngine/GetSrvOpenPorts
fi

chmod +x ./RPXEngine/RPXLinuxSrv
chmod +x ./RPXEngine/RPXLinuxEngine
chmod +x ./RPXEngine/RPXSrv-RHEL6

if [[ "$1" == "-update" ]]; then
    if grep -q PRETTY_NAME /etc/*-release; then
        # RHEL7 UP
        sudo systemctl stop RPXSrv.service
    else
        # RHEL6
        sudo service RPXSrv-RHEL6 stop
    fi
fi

if grep -q PRETTY_NAME /etc/*-release; then
    # RHEL7 UP
    sudo cp ./RPXEngine/RPXSrv.service /usr/lib/systemd/system/RPXSrv.service
    sudo ln /usr/lib/systemd/system/RPXSrv.service /etc/systemd/system/RPXSrv.service
    sudo chmod +x /etc/systemd/system/RPXSrv.service # Rhel 9
    sudo mv ./RPXEngine/LinuxGCB/* /etc/RPXEngine/LinuxGCB/
    sudo mv ./RPXEngine/GetSrvOpenPorts/* /etc/RPXEngine/GetSrvOpenPorts/
    sudo mv ./RPXEngine/* /etc/RPXEngine/
    sudo systemctl daemon-reload
    sudo systemctl enable RPXSrv.service
    sudo systemctl start RPXSrv.service
    sudo systemctl status RPXSrv.service
else
    # RHEL6
    sudo mv ./RPXEngine/RPXSrv-RHEL6 /etc/rc.d/init.d/RPXSrv-RHEL6
    sudo mv ./RPXEngine/LinuxGCB/* /etc/RPXEngine/LinuxGCB/
    sudo mv ./RPXEngine/GetSrvOpenPorts/* /etc/RPXEngine/GetSrvOpenPorts/
    sudo mv ./RPXEngine/* /etc/RPXEngine/
    sudo service RPXSrv-RHEL6 start
    sudo chkconfig --add RPXSrv-RHEL6
    sudo chkconfig RPXSrv-RHEL6 on
fi
