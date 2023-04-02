const express = require('express');
const oracledb = require('oracledb');
const app = express();


app.get("/api", (req, res) => {

    res.send('Hello, World!')

})

app.get('/students', (req, res) => {

    async function fetchDataStudents() {

        try {

            oracledb.initOracleClient({libDir: 'C:\\oracle\\instantclient_21_9'});



            const connection = await oracledb.getConnection({

                user: "insertUsername",
                password: "insertPassword",
                connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = oracle.cise.ufl.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
            })

            const result = await connection.execute('SELECT * FROM STUDENT')
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

app.post("/post_name", async (req, res) => {

    let {name} = req.body
    console.log(name)

})

app.listen(8080, () => { console.log("Server started on port 8080") })
