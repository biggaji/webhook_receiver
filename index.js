// if(process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// };

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false }))

app.post('/webhook', (req,res) => {
    
    let event = req.body.params;
    let payload = event.data;

    switch(event.event) {
        case 'account.created':
            console.log('New customer alert: ', payload.username);
        break;
        case 'account.updated':
            console.log('Customer update alert: ', payload.username);
        break;
    }

    res.status(200).json({received: "thanks", payload: event});
});

app.listen(4242, () => {
    console.log('Server running on 4242');
});