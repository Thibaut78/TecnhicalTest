class IntegerWrapper {
    constructor(n) {
        this.n = n;
    }

    checkdigit(n) {
        ///////////Check if no digit are available///////////

        let digit = '123456789';
        let count = 0;

        for (let a = 0; a < 9; a++) {
            if (n.includes(digit[a]))
                count++;
        }
        if (count == 9)
            return -1;
        return 0;
    }

    isOk(result, n) {
        ///////////Check if digit are in a number///////////
        let rnet = Array.from("" + result);

        for (let a = 0; rnet[a]; a++) {
            if (n.includes(rnet[a]))
                return (-1);
        }
        return 0;
    }

    next() {
        ///////////Gestion d'erreur///////////
        let n = this.n;
        if (n < 1 || n >= (2 ** 31))
            return (-1);

        let net = Array.from("" + n);
        if (this.checkdigit(net) == -1)
            return (-1);

        let result = n + 1;

        ///////////Optimisation///////////
        if (n >= 1000) {
            let first = parseInt(net[0]);
            let value = Math.pow(10, (net.length - 1));
            result = (first + 1) * value;
        }

        ///////////Browse numbers///////////
        for (result; result < (2 ** 31); result++) {
            if (this.isOk(result, net) == 0)
                return (result);
        }
        return (-1);
    }

}

const express = require('express');
const app = express();
const port = 8080;
const router = express.Router();

app.set('view engine', 'pug');

app.get('/', (req, res) => {    
    res.render('ex2', {number:""});
})

app.get('/calc', (req, res) => {
    const result = new IntegerWrapper(parseInt(req.query.number)).next();
    res.render('ex2', {number:result});
})

app.use('/', router);

app.listen(port, () => {
    console.log('http://localhost:8080');
})


 ///////////For testing///////////

//console.log("IntegerWrapper Test :", new IntegerWrapper(320).next());

