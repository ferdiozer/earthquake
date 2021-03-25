/*
  _____                .___.__                             
  _/ ____\___________  __| _/|__|   ____________ ___________ 
  \   __\/ __ \_  __ \/ __ | |  |  /  _ \___   // __ \_  __ \
   |  | \  ___/|  | \/ /_/ | |  | (  <_> )    /\  ___/|  | \/
   |__|  \___  >__|  \____ | |__|  \____/_____ \\___  >__|   
             \/           \/                  \/    \/       
*/

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var ejs = require('ejs');
const cors = require('cors');
const request = require("request");
const cheerio = require("cheerio");


app.use(cors({
    exposedHeaders: "*"
}));

app.engine('.ejs', ejs.__express);
app.set('views', __dirname + '/views/');

app.get("/", function (req, res) {
    res.render("index.ejs");
});

app.get('/api', function (req, res) {
    var items = [];
    request("http://www.koeri.boun.edu.tr/scripts/lst0.asp", (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            const response = $("pre").text();
            var result = response.split("\n");
            result = result.splice(6, result.length + 1);
            result = result.splice(0, result.length - 2);
            result.forEach(element => {
                var dataString = element.split(" ");
                var dataInfo = [];
                for (var i = 0; i < dataString.length; i++) {
                    if (dataString[i].length > 0) {
                        dataInfo.push(dataString[i]);
                    }
                }
                var date = dataInfo[0];
                var time = dataInfo[1];
                var latitude = dataInfo[2];
                var longitude = dataInfo[3];
                var depth = dataInfo[4];
                var intensity = dataInfo[6];
                var region = dataInfo[8];
                var city = dataInfo[9];
                if (city != null) {
                    if (dataInfo[9].includes("(")) {
                        city = dataInfo[9];
                    } else {
                        city = "";
                    }
                } else {
                    city = "";
                }

                const pushData = {
                    date,
                    time,
                    latitude,
                    longitude,
                    depth,
                    intensity,
                    region,
                    city
                }
                items.push(pushData);
            });

            console.log("api/..Items : " + items.length);

            //FİLTER ::: date match
            if (req.query.date != null) {
                items = items.filter(v => v.date == req.query.date);
            }

            //FİLTER ::: date start
            if (req.query.startDate != null) {
                var startDateObj = new Date(req.query.startDate);
                items = items.filter(v => new Date(v.date) >= startDateObj);
            }
            //FİLTER ::: date end
            if (req.query.endDate != null) {
                var endDateObj = new Date(req.query.endDate);
                items = items.filter(v => new Date(v.date) <= endDateObj);
            }
            res.status(200).json(items);
        } else {
            res.status(404).json([]);
        }
    });
});

io.on('connection', function (socket) {
    console.log('User connected');
});

const PORT = process.env.PORT || 3070;

http.listen(PORT, function () {
    console.log('The app is running...');
});