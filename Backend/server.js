const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/students', (req, res) => {

    async function fetchDataStudents() {

        try {

            const connection = await oracledb.getConnection({

                user: "manuel.nunez", 
                password: "SJ3vtvEHEFavwAGrAwjUQ2XT",
                connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = oracle.cise.ufl.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
            })

            const result = await connection.execute('SELECT YEAR, AVG(DISHWASH) AS Dishwashers FROM AHS GROUP BY YEAR ORDER BY YEAR ASC', [], { outFormat: oracledb.OUT_FORMAT_OBJECT })
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

app.listen(8080, () => { console.log("Server started on port 8080") })