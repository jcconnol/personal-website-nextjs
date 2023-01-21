---
title: Docker in Plain English
date: "2021-12-16T23:46:37.121Z"
description: "With all these fancy Docker things that few people seem to know about, here is a simple overview of Docker"
---

## <u>What is Docker?</u>

Simply said, Docker is pretty much a virtual machine. Don't know what a virtual machine is? Imagine you are a person with too much money and therefore bought a mac. Imagine opening your mac, turning it on normally and on your desktop you could open open an application that is running Windows on your computer. That is a virtual machine. When a computer runs a normal virtual machine it takes a lot of processing power since there is essentially one operating system running inside of another operating system. Docker does this same thing but in a very different way that takes less processing power. This is because Docker doesn't run an entire operating system inside of your normal operating system. Instead Docker reaches into the depths of your machine and uses the low-level mechanics of the host OS to simulate a different environment.

## <u>So What?</u>

Say you are running a program locally and you want to put it on a server but your machine is Windows and the server is running Linux. With Docker, container-based applications can be setup and run independent of what the actual system running the container is. This leads to faster and more consistent development since the application, its dependencies and its configuration are all packaged together, not to mention it also greatly helps solve the "but it works on my machine" problem that arises quite often when debugging.

In simple terms Docker containers can be thought of like a shipping container, it can be carried by ship, truck or train no matter what cargo is actually in the container. 

## <u>Docker Example in 10 Easy Steps</u>

1) Install Node.js if you do not already have it. It can be found [here](https://nodejs.org/en/download/)

2) Install Docker if you have not already. It can be found [here](https://docs.docker.com/engine/install/). These instructions worried me the first time I ran through them but just follow them and read everything and you should be fine.
   
3) Create a new folder for this simple project then cd into that folder using your terminal or command-line shell of your choice.

4) Create a "Dockerfile". This file should have no extension or file type. 

5) In this Dockerfile add the following code:

```bash
FROM node:14
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
```

6) Create another file called `index.js` in that same folder

7) Open the `index.js` file in you favorite text editor and add the following to it:

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Server ready'))
```

8) Run the following two commands. This should add a `package.json` file and install Node's express package.

```console
npm init -y
npm install express
```

9) Now you can build a docker container with our new application with the following command:

```console
docker build -t examplenode .
```

10)  After that takes 10 years to build we are now ready to run the application in a Docker container. This can be done with the following command:

```console
docker run -d -p 3000:3000 --name node-app examplenode
```

11) With that running, you can now go to [http://localhost:3000](http://localhost:3000/) and you can see your application running!

## <u>Considerations For When not to use Docker</u> ##

Docker seems great on the outside and in my experience it works great for a lot of applications but there are a few things that Docker will not do for you.

### Docker Will Not Boost Application Speed ###

Docker containers are lighter weight than a virtual machine but the application still runs on the host's kernel and therefore the application won't be sped up in any way that the computer or server would not normally allow.

In fact, if the proper memory or CPU limits are not in place for a Docker container then the computer might detect that memory is getting low and start shutting off other necessary functions in an attempt to run your program.

### Not Great For Storing Valuable Data ###

Docker files are created inside the container's writeable container layer, therefore if you write data to the container and need to then retrieve it to look at it or move it elsewhere then this will not be an easy task. Even worse, if the container shuts down then that data will be lost forever.
