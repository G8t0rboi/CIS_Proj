const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();

app.use(cors());
oracledb.initOracleClient({libDir: '/Users/manuelnunezmartinez/Downloads/instantclient_19_8'});

app.get('/testPage', (req, res) => {

    const x = req.query.X
    const statement = 'SELECT YEAR, AVG(' + x + ') Dishwashers FROM AHS GROUP BY YEAR ORDER BY YEAR ASC'
    console.log(statement)

    async function fetchData() {

        try {

            const connection = await oracledb.getConnection({

                user: "manuel.nunez",
                password: "SJ3vtvEHEFavwAGrAwjUQ2XT",
                connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = oracle.cise.ufl.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
            })

            const result = await connection.execute(statement, [], { outFormat: oracledb.OUT_FORMAT_OBJECT })
            return result;

        } catch (error) {

            console.error(error);
            return error;

        }

    }

    fetchData().then(dbRes => {

        res.send(dbRes)

    })
        .catch(error => {

            res.send("bru")

        })

})

app.get('/MetroAreas', (req, res) => {
    const X = req.query.X
    const Y = req.query.Y
    const Z = req.query.Z
    const H = req.query.H
    const statistic = req.query.statistic

    const statement = MetroAreasQueries(X, Y, Z, H, statistic)
    console.log(statement)

    async function fetchData() {
 
        try {

            const connection = await oracledb.getConnection({

                user: "manuel.nunez",
                password: "SJ3vtvEHEFavwAGrAwjUQ2XT",
                connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = oracle.cise.ufl.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
            })

            const result = await connection.execute(statement, [], { outFormat: oracledb.OUT_FORMAT_OBJECT })
            return result;

        } catch (error) {

            console.error(error);
            return error;

        }

    }

    fetchData().then(dbRes => {

        res.send(dbRes)

    })
        .catch(error => {

            res.send("bru")

        })

})





app.get('/Distributions', (req, res) => {
    const X = req.query.X
    const Y = req.query.Y
    const Z = req.query.Z
    const Type = req.query.type

    console.log(X)
    console.log(Y)
    console.log(Z)
    console.log(Type)

    const statement = pieChartsQueries(X, Z, Y, Type)
    console.log(statement)

    async function fetchData() {
 
        try {

            const connection = await oracledb.getConnection({

                user: "manuel.nunez",
                password: "SJ3vtvEHEFavwAGrAwjUQ2XT",
                connectString: "(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = oracle.cise.ufl.edu)(PORT = 1521))(CONNECT_DATA =(SID= ORCL)))"
            })

            const result = await connection.execute(statement, [], { outFormat: oracledb.OUT_FORMAT_OBJECT })
            return result;

        } catch (error) {

            console.error(error);
            return error;

        }

    }

    fetchData().then(dbRes => {

        res.send(dbRes)

    })
        .catch(error => {

            res.send("bru")

        })

})

app.listen(8080, () => { console.log("Server started on port 8080") })



function MetroAreasQueries(x, y, z, h, stat) {

    if (stat == 'Average') {

        return ('select Vals_yearA.year, Vals_yearA.V1, Vals_yearB.V2, nat_indicators.' + y + ' as Indicator '
            + 'from '
            + '( '
            + 'select YEAR as year, TRUNC(AVG(' + x + '),1) as V1 '
            + 'from AHS '
            + 'Where omb13cbsa = \'\'\'' + z + '\'\'\' '
            + 'GROUP BY YEAR '
            + 'ORDER BY YEAR ASC '
            + ') Vals_yearA '
            + 'JOIN '
            + 'NAT_INDICATORS on Vals_yearA.year = NAT_INDICATORS.YEAR '
            + 'JOIN '
            + '( '
            + 'select YEAR as year, TRUNC(AVG(' + x + '),1) as V2 '
            + 'from AHS '
            + 'Where omb13cbsa = \'\'\'' + h + '\'\'\' '
            + 'GROUP BY YEAR '
            + 'ORDER BY YEAR ASC '
            + ') Vals_yearB '
            + 'on  Vals_yearB.year = NAT_INDICATORS.YEAR')
    }
    else if (stat = 'Median') {
        return ('WITH T(Year, Code, Att) AS '
            + '( '
            + 'SELECT YEAR, OMB13CBSA, ' + x + ' '
            + 'FROM AHS '
            + 'WHERE ' + x + ' IS NOT NULL and (OMB13CBSA = \'\'\'' + z + '\'\'\' or OMB13CBSA =  \'\'\'' + h + '\'\'\') '
            + ') '
            + 'SELECT M1.YEAR, M1.V1, M2.V2, NAT_INDICATORS.' + y + ' as Indicator '
            + 'FROM '
            + '( '
            + 'SELECT Year, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY Att) AS V1 '
            + 'FROM T '
            + 'WHERE Code = \'\'\'' + z + '\'\'\' '
            + 'GROUP BY Year '
            + ') M1 '
            + 'JOIN '
            + 'NAT_INDICATORS ON M1.YEAR = NAT_INDICATORS.YEAR '
            + 'JOIN '
            + '( '
            + 'SELECT Year, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY Att) AS V2 '
            + 'FROM T '
            + 'WHERE Code = \'\'\'' + h + '\'\'\' '
            + 'GROUP BY Year '
            + ') M2 '
            + 'ON M2.YEAR = NAT_INDICATORS.YEAR')
    }
    else if (stat = 'Upper Quartile') {
        return ('WITH T(Year, Code, Att) A '
            + '( '
            + 'SELECT YEAR, OMB13CBSA, ' + x
            + 'FROM AHS '
            + 'WHERE ' + x + ' IS NOT NULL and (OMB13CBSA = \'\'\'' + z + '\'\'\' or OMB13CBSA =  \'\'\'' + h + '\'\'\') '
            + ') '
            + 'SELECT M1.YEAR, M1.V1, M2.V2, NAT_INDICATORS.' + y + ' as Indicator '
            + 'FROM '
            + '( '
            + 'SELECT Year, PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY Att) AS V1 '
            + 'FROM T '
            + 'WHERE Code = \'\'\'' + z + '\'\'\' '
            + 'GROUP BY Year '
            + ') M1 '
            + 'JOIN '
            + 'NAT_INDICATORS ON M1.YEAR = NAT_INDICATORS.YEAR '
            + 'JOIN '
            + '( '
            + 'SELECT Year, PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY Att) AS V2 '
            + 'FROM T '
            + 'WHERE Code = \'\'\'' + h + '\'\'\' '
            + 'GROUP BY Year '
            + ') M2 '
            + 'ON M2.YEAR = NAT_INDICATORS.YEAR')

    }
    else if (stat = 'Lower Quartile') {
        return ('WITH T(Year, Code, Att) AS '
            + '( '
            + 'SELECT YEAR, OMB13CBSA, ' + x
            + 'FROM AHS '
            + 'WHERE ' + x + ' IS NOT NULL and (OMB13CBSA = \'\'\'' + z + '\'\'\' or OMB13CBSA =  \'\'\'' + h + '\'\'\') '
            + ') '
            + 'SELECT M1.YEAR, M1.V1, M2.V2, NAT_INDICATORS.' + y + ' as Indicator '
            + 'FROM '
            + '( '
            + 'SELECT Year, PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY Att) AS V1 '
            + 'FROM T '
            + 'WHERE Code = \'\'\'' + z + '\'\'\' '
            + 'GROUP BY Year '
            + ') M1 '
            + 'JOIN '
            + 'NAT_INDICATORS ON M1.YEAR = NAT_INDICATORS.YEAR '
            + 'JOIN '
            + '( '
            + 'SELECT Year, PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY Att) AS V2 '
            + 'FROM T '
            + 'WHERE Code = \'\'\'' + h + '\'\'\' '
            + 'GROUP BY Year '
            + ') M2 '
            + 'ON M2.YEAR = NAT_INDICATORS.YEAR ; ')
    }
}


function localFactorsQueries(x, y, z) {
    return (
        +'select Vals_yearA.year, Vals_yearA.V1, Vals_yearB.V2 '
        + 'from '
        + '( '
        + 'select YEAR as year, TRUNC(AVG(' + x + '),2) as V1 '
        + 'from AHS '
        + 'Where omb13cbsa = \'\'\'' + z + '\'\'\' '
        + 'GROUP BY YEAR '
        + 'ORDER BY YEAR ASC '
        + ') Vals_yearA '
        + 'JOIN '
        + '( '
        + 'select YEAR as year, TRUNC(AVG(' + y + '),2) as V2 '
        + 'from AHS '
        + 'Where omb13cbsa = \'\'\'' + z + '\'\'\' '
        + 'GROUP BY YEAR '
        + 'ORDER BY YEAR ASC '
        + ') Vals_yearB '
        + 'on  Vals_yearB.year = Vals_yearA.year; '
    )
}



function pieChartsQueries(x, z, y, type) {
    if (type == 'categorical') {
        return( 'SELECT cats.Category, TRUNC((cats.V1/total.V2),3) as PERCENTAGE '
            + 'FROM '
            + '(SELECT ' + x + ' as Category, COUNT(' + x + ') AS V1 '
            + 'FROM AHS '
            + 'WHERE ' + x + ' IS NOT NULL AND OMB13CBSA = \'\'\'' + z + '\'\'\' AND YEAR = ' + y + ' '
            + 'GROUP BY ' + x + ' '
            + ') cats '
            + ', '
            + '(SELECT COUNT(' + x + ') AS V2 '
            + 'FROM AHS '
            + 'WHERE ' + x + ' IS NOT NULL AND OMB13CBSA = \'\'\'' + z + '\'\'\' AND YEAR = ' + y + ' '
            + ') total ')

    }
    else if (type == 'numerical') {
        return('With maxs(r) as '
            + '(Select unique max(' + x + ') from AHS) '
            + 'SELECT Ranges, TRUNC((cats.X/total.Y),3) as PERCENTAGE '
            + 'from '
            + '(select '
            + '(case '
            + 'when ' + x + ' >= (maxs.r/6)*0  and ' + x + ' < (maxs.r/6)*1   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*1,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*1  and ' + x + ' < (maxs.r/6)*2   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*2,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*2  and ' + x + ' < (maxs.r/6)*3   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*3,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*3  and ' + x + ' < (maxs.r/6)*4   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*4,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*4  and ' + x + ' < (maxs.r/6)*5   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*5,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*5  then CONCAT( \' X > \', CAST(TRUNC((maxs.r/6)*5,2) AS VARCHAR(10)) )'
            + 'end '
            + ') as Ranges, '
            + 'COUNT(CONTROL) as X '
            + 'from '
            + 'AHS, maxs '
            + 'WHERE ' + x + ' IS NOT NULL AND OMB13CBSA = \'\'\'' + z + '\'\'\' AND YEAR = ' + y + ' '
            + 'GROUP BY '
            + '(case '
            + 'when ' + x + ' >= (maxs.r/6)*0  and ' + x + ' < (maxs.r/6)*1   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*1,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*1  and ' + x + ' < (maxs.r/6)*2   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*2,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*2  and ' + x + ' < (maxs.r/6)*3   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*3,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*3  and ' + x + ' < (maxs.r/6)*4   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*4,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*4  and ' + x + ' < (maxs.r/6)*5   then CONCAT( \' X < \', CAST(TRUNC((maxs.r/6)*5,2) AS VARCHAR(10)) ) '
            + 'when ' + x + ' >= (maxs.r/6)*5  then CONCAT( \' X > \', CAST(TRUNC((maxs.r/6)*5,2) AS VARCHAR(10)) ) '
            + 'end '
            + ') '
            + ') cats '
            + ', '
            + '(SELECT COUNT(' + x + ') AS Y '
            + 'FROM AHS '
            + 'WHERE ' + x + ' IS NOT NULL AND OMB13CBSA = \'\'\'' + z + '\'\'\' AND YEAR = ' + y + ' '
            + ') total')
    }
}







function metro(message) {

    if (message == 'New York, NY') {
        return '\'35620\''
    }
    if (message == 'Los Angeles, CA') {
        return '\'31080\''
    }
    if (message == 'Chicago, IL') {
        return '\'16980\''
    }
    if (message == 'Philadelphia, PA') {
        return '\'19100\''
    }
    if (message == 'Huston, TX') {
        return '\'37980\''
    }
    if (message == 'Washington, DC') {
        return '\'26420\''
    }
    if (message == 'Miami, FL') {
        return '\'47900\''
    }
    if (message == 'Atlanta, GA') {
        return '\'33100\''
    }
    if (message == 'New York, NY') {
        return '\'12060\''
    }
    if (message == 'Boston, MA') {
        return '\'14460\''
    }
    if (message == 'San Francisco, CA') {
        return '\'41860\''
    }
    if (message == 'Detroit, MI') {
        return '\'19820\''
    }
    if (message == 'Phoenix, AZ') {
        return '\'38060\''
    }
    if (message == 'Seattle, WA') {
        return '\'35620\''
    }
    if (message == 'Riverside, CA') {
        return '\'42660\''
    }
    else {
        return '\'35620\''
    }

}

function metroIndicator(message) {

    if (message == 'Dish Washers') {
        return 'DISHWASH'
    }
    if (message == 'Garages') {
        return 'GARAGE'
    }
    if (message == 'Washing Machines') {
        return 'WASHER'
    }
    if (message == 'Porch') {
        return 'PORCH'
    }
    if (message == 'Kitchen Sink') {
        return 'KITCHSINK'
    }
    if (message == 'Household Rating') {
        return 'RATINGHS'
    }
    if (message == 'Neighborhood Rating') {
        return 'RATINGNH'
    }
    if (message == 'Family Income') {
        return 'FINCP'
    }
    if (message == 'Resident\'s Income') {
        return 'HINCP'
    }
    if (message == 'Resident\'s Sex') {
        return 'HHSEX'
    }
    if (message == 'Resident\'s Marriage Status') {
        return 'HHMAR'
    }
    if (message == 'Resident\'s Education Level') {
        return 'HHGRAD'
    }
    if (message == 'Resident\'s Age') {
        return 'HHAGE'
    }
    if (message == 'Property Value') {
        return 'MARKETVAL'
    }
    if (message == 'Monthly Mortgage') {
        return 'MORTAMT'
    }
    if (message == 'Monthly Rent') {
        return 'RENT'
    }
    if (message == 'Year Built') {
        return 'YRBUILT'
    }
    if (message == 'Unit Size') {
        return 'UNITSIZE'
    }
    if (message == 'No Access To Water') {
        return 'NOWAT'
    }
    if (message == 'Monthly Home Expenses') {
        return 'TOTHCAMT'
    }
    if (message == 'Total Rooms') {
        return 'TOTROOM'
    }
    if (message == 'Rent Control Present') {
        return 'RENTCNTRL'
    }
    if (message == 'Number of Inhabitants') {
        return 'NUMPEOPLE'
    }
    else {
        return 'RENT'
    }

}



function natIndicator(message) {

    if (message == 'Inflation Rate') {
        return 'INFLATION'
    }
    if (message == 'CCI') {
        return 'CCI'
    }
    if (message == 'Federal Intrest Rate') {
        return 'INTRATE'
    }
    if (message == 'GDP') {
        return 'GDP'
    }
    if (message == 'Employment Rate') {
        return 'EMPRATE'
    }
    if (message == 'Bond Yield') {
        return 'BONDYIELD'
    }
    else {
        return 'INFLATION'
    }

}