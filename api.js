import request from "superagent";

const quoteURL = "http://mindfully-api.us-east-2.elasticbeanstalk.com/api";

export function getQuotes() {
    request.get(quoteURL)
    .then(res => res.body)
        
}

