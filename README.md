# News API Server Side


## Brief description

A small server to retrieve news from https://newsapi.org

</br>


## Clone this repository

Using HTTPS:

    git clone https://github.com/manuelczs/news-server.git

## Install dependencies

**You need to have NPM and Node.js installed on your PC*

</br>

When cloning finished, navigate to the folder **news-server** typing:

    cd your-folder-path/news-server

and then type:

    npm install

to install all dependencies

</br>

## Set up a *.env* file

After you've installed dependencies create a .env file and put on it the PORT variable (ex: PORT=3000) and in API_KEY the api key you've got from https://newsapi.org

It looks something like this:

</br>

**.env**

    PORT=3000
    API_KEY=yOurApIKEyExAmplE

</br>

## Running server

Now you can run the server:

    npm run start

</br>

This script will run the server at the following address:

    https://localhost:3000

</br>

## Finally test the server
Now you can test the server using a browser or Postman with the address https://localhost:3000 

</br>

## Screenshots

![Screenshot from 2021-07-13 20-24-49](https://user-images.githubusercontent.com/20391891/125537934-c25188ab-1e1b-4b84-988f-8c028d61cb10.png)
