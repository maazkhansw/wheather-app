const request = require('request');


const forecast = (longitutude,latitude, callback) =>{
    const url ='https://api.darksky.net/forecast/57519dd446474513a49ae7bf0e32f29e/' + latitude + ',' + longitutude;
    request({url, json: true},(error,{body}) =>{
        if(error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,body.daily.data[0].summary +" It is currently " + body.currently.temperature +" degrees out. There is a " + body.currently.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast;