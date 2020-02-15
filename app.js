const geocode = require('./util/geocode.js');
const forecast = require('./util/forecast.js');
const address = process.argv[2];

const app = express();

app.get('/weather',(req,res){
    if(!req.query.address){
        return res.send({
            error: 'Enter an address please!'
        })
    }
    res.send({
        address: req.query.address

    })
})
if(!address){
    console.log('Please enter a location');
} else {
    geocode(address,(error,{latitude, longitude, location}) => {
        if(error){
            return console.log(error);
        }
        
        forecast(latitude, longitude,(error, forecastData) =>{
            if(error){
                return console.log(error);
            }    
            console.log(location);
            console.log(forecastData);
        })
    })
}

