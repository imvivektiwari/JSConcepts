const express = require('express');
const webpush = require('web-push'); //https://github.com/web-push-libs/web-push
const bodyParser = require('body-parser');
const path = require('path');
const executeAfter = require("./src/utility");
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));

//setting webpush key
{
    const publicVapidKey = "BFQPkrnqz_S0yqUIaRtWB7QsHSstguXVaFfew3qmpp7-A6E_PE1DrmQSvS0f5_Q_4jxfK1LlT9Ppo4mk-n5aw3Y";
    const privateVapidKey = "XN3X3BZvciZzAVl-FRb8VVLBvvI8sazKTmVaCirkbJo";
    webpush.setVapidDetails("mailto:vivektiwari.2896@gmail.com", publicVapidKey, privateVapidKey);
}


app.post("/startTask", (req, res) => {

    const subscription = req.body;
    //console.log(subscription);
    res.status(201).json({});

    executeAfter(5000).then(() => {
        const payload = JSON.stringify({ title: "Tast Completed", body: "Your task is completed" });
        webpush.sendNotification(subscription, payload).catch(err => console.error(err));
    });

});

const port = 5000;
app.listen(port, () => { console.log(`server started: ${port}`) });