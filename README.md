## tornado-react-app
## A Simple Search App with Tornado API and ReactJS


## API

The API with two endpoints:

GET /

Which should return JSON with the current time, so:

{ "message": "CURRENT TIME AS STRING" }

POST /recommendations

This takes a "text" parameter in the body and then send that text parameter in an API request to the POST /documents/similar-to-text endpoint of our News API. What this does is query our API for news that is similar to the text that was input.

See documentation here: [https://lateral.io/docs/news-recommender/reference\#news-similar-to-text-post](https://lateral.io/docs/news-recommender/reference#news-similar-to-text-post)

The response from our server, of similar documents should be returned as JSON from the Tornado POST endpoint.

Here is an API key: f53dd4aea5bfc8ecd850fcbe1b08921e

## Front-end

The front-end is a simple React app that on load, makes a request to the GET / endpoint in order to display the time on the page.

Enter search parameter in field and hit enter, then whatever is input, should be sent as the "text" parameter to the POST /recommendations endpoint. The results then rendered on the page below the input box.

## Server
Steps to setup server using systemd
https://eklitzke.org/production-tornado-deployment-with-systemd
