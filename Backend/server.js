const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();

app.use(cors());


app.get("/api", (req, res) => {

    res.send('Hello, World!')

})

app.get('/students', (req, res) => {

    async function fetchDataStudents() {

        try {

            const connection = await oracledb.getConnection({

                user: "manuel.nunez", 
                password: "SJ3vtvEHEFavwAGrAwjUQ2XT",
                connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = oracle.cise.ufl.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
            })

            const result = await connection.execute('SELECT YEAR, AVG(DISHWASH) AS Dishwashers FROM AHS_POST_2015 GROUP BY YEAR ORDER BY YEAR ASC')
            return result;

        } catch (error) {

            console.error(error);
            return error;

        }

    }

    fetchDataStudents().then(dbRes => {

        res.send(dbRes)

    })
        .catch(error => {

            res.send("bru")

        })

})

app.get('/message', (req,res) => {

    res.json({message: "Hello from server!"})

})

app.listen(8080, () => { console.log("Server started on port 8080") })
