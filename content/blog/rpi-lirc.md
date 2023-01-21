---
title: Raspberry Pi 4 Infrared Control (LIRC)
date: "2021-12-24T22:12:03.284Z"
description: "Learn about LIRC and how to connect your Raspberry Pi to an IR receiver and control it using a remote"
---

LIRC is a way to give a computer running a Linux operating system the capability to read incoming infrared (IR) data. The most useful infrared data that one might want to capture is that of TV remote controls.

## What is LIRC ##

[LIRC](https://lirc.org/) stands for Linux Infrared Remote Control and is a package that allows the decoding of infrared signals of many remote controls. The LIRC package is made to where a remote control can be easily configured then the button pressing data can easily be captured in a serial port that the decoded data is output to.


## LIRC Setup ##

This example is using a [Raspberry Pi 4](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/) and lists out the steps for setting up LIRC hardware and software. 
Assuming you already have a Raspberry Pi 4 you should be able to follow these steps:

* Buy a cheap IR sensor, like [this one](https://www.amazon.com/barterine-KY-022-Infrared-Receiver-Arduino/dp/B01MG1LFA0/ref=sr_1_20?keywords=arduino+ir+receiver+module&qid=1640665624&sprefix=arduino+ir+receiver+%2Caps%2C89&sr=8-20), on Amazon.
* Wire the 5V VCC on the IR sensor to the Raspberry Pi 5V pin, the ground receiver pin to the ground pin on the Raspberry Pi and the receiver's data pin the the Raspberry Pi's GPIO 18 pin as shown in the diagram below.

![wiring diagram for IR sensor to Raspberry Pi](/images/RPI-Infrared-sensor-wiring.jpg)

* Grab your favorite TV remote and fire up your Raspberry Pi.
* The first-time setup for the Pi will not be covered in these steps but if you need help with that then instructions can be found [here](https://www.raspberrypi.com/documentation/computers/getting-started.html).
* With your Raspberry Pi ready to go, open the terminal and run the following command to update and upgrade the OS
```bash 
sudo apt update
sudo apt upgrade
```
* Then install LIRC with the following command
```bash 
sudo apt-get install lirc liblircclient-dev
```
* run the following command to edit the `/etc/modules` file
```bash 
sudo nano /etc/modules
```
* add the following line to the bottom of the  `/etc/modules` file
```bash 
lirc_dev lirc_rpi gpio_in_pin=18
```
* now edit the `/etc/lirc/hardware.conf` file using `sudo nano /etc/lirc/hardware.conf`
* Change the contents of hardware.conf to the following:
```bash 
# /etc/lirc/hardware.conf
#
# Arguments which will be used when launching lircd
LIRCD_ARGS="--uinput"
 
# Don't start lircmd even if there seems to be a good config file
# START_LIRCMD=false
 
# Don't start irexec, even if a good config file seems to exist.
# START_IREXEC=false
 
# Try to load appropriate kernel modules
LOAD_MODULES=true
 
# Run "lircd --driver=help" for a list of supported drivers.
DRIVER="default"
# usually /dev/lirc0 is the correct setting for systems using udev
DEVICE="/dev/lirc0"
MODULES="lirc_rpi"
 
# Default configuration files for your hardware if any
LIRCD_CONF=""
LIRCMD_CONF=""
```
* Now run the following command and follow the instruction VERY carefully
```bash 
irrecord -d /dev/lirc0 ~/lircd.conf
```
>  (Note that in the instructions when it says "click the next button" it does not mean the literal button labeled "Next" on the remote control, it means the next button that you want to be usable with your Raspberry Pi, such as "Vol Up" or "Left.")

* Once all of that is setup, run the following command and start clicking buttons on your remote. If you see output then the remote is configured properly
```bash
irw
```

## LIRC Uses ##

After following all of the steps above, LIRC can now be used in your own programs for whatever your heart desires. If you wish to setup your own streaming service or simply play funny noises at the push of a button then the world is your oyster.

The way to access this new functionality is by having your program open and listen to the AF_UNIX socket. A simple example of this can be found [here](https://github.com/jcconnol/remote-rpi-insulter/blob/fc887670d20597e72a3110403eec43875ea0a682/main.py#L16) or the following code has the extra stuff cut out of it.
```python
SOCKPATH = "/var/run/lirc/lircd"

def init_irw():
    global sock
    sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    sock.connect(SOCKPATH)

if __name__ == '__main__':
    try:
        init_irw()

    except KeyboardInterrupt:
        if (sock != None):
            sock.close()
```

For the full example from above, if you believe the robot uprising is inevitable and you get tired of saying the same things over and over all day, you can automate that so that at the click of a button you can have your Raspberry Pi say what you command it to with the simple click of a button.

## More Details About LIRC and IR in General ##

If you have read this far then props to you! The rest of this is a further explanation of LIRC and IR and if you want to learn about that kind of thing then feel free to continue.

The most basic element of all of this is infrared, a form of light that has a frequency smaller than that of visible light. 
![light spectrum diagram](/images/spectrum-diagram.png)

We obviously cannot see infrared light with the naked eye but in essence your remote control is just a fancy flashlight that, when a button is clicked, it quickly turns the flashlight on and off in a certain pattern that the receiver can understand.

The whole process looks like the following:
![IR signal from remote to IR receiver to Raspberry Pi](/images/ir-remote.png)

Each command that the remote control puts out has two parts, the device address, to tell the receiver what device is trying to send a command, then the actual command, such as "volume up."
These commands and device addresses are sent in binary to the receiver. One command might be 000 0001 and another might be 000 1001, but the receiver is configured to know what the binary commands are and execute them accordingly. This whole process is a lot like in old movies when people would communicate by shining a flashlight at their far away friend and turn it on and off in morse code. 

## Conclusion ##

Imagine a world where your only form of communication is where people shine a flash light in your eyes and turns it on and off in a particularly annoying and unique pattern that you can interpret as a specific command, such as "take out the trash" and once given this command you are forced to carry out this order. This flashlight communication is, in essence, how IR remote controls. There is a lot more that goes into them but those typically vary between remotes and their different complexities.