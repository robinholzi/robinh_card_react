# robinh_card

Personal business card written in js/React.

## Live version
[robinh.xyz](https://robinh.xyz/) - deployed within docker container and [serve](https://create-react-app.dev/docs/deployment/#static-server).


## Starting the web application

#### dev environment
```npm start``` | Start development server

#### production

1. ```npm run build``` | builds & optimizes application
2. ```npm -s build -l 4000``` | Starts webserver on Port 4000

#### production alternative:
/build folder could be deployed with a standard webserver like apache or nginx. However it imposes some trickery to enable React's Routing features. >> *disencouraged*
