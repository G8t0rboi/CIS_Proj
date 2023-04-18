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

function MetroAreasQueries(x, y, z, h, stat){

    return ('select Vals_yearA.year, Vals_yearA.V1, Vals_yearB.V2, nat_indicators.'+y+' as Indicator'
            + 'from' 
            + '('
            + 'select YEAR as year, TRUNC(AVG('+x+'),1) as V1' 
            + 'from AHS'
            + 'Where omb13cbsa = \'\'\''+z+'\'\'\''
            + 'GROUP BY YEAR'
            + 'ORDER BY YEAR ASC'
            + ') Vals_yearA'
            + 'JOIN' 
            + 'NAT_INDICATORS on Vals_yearA.year = NAT_INDICATORS.YEAR'
            + 'JOIN'
            + '('
            + 'select YEAR as year, TRUNC(AVG('+x+'),1) as V2' 
            + 'from AHS'
            + 'Where omb13cbsa = \'\'\''+h+'\'\'\''
            + 'GROUP BY YEAR'
            + 'ORDER BY YEAR ASC'
            + ') Vals_yearB'
            + 'on  Vals_yearB.year = NAT_INDICATORS.YEAR;')
}








function metro(message){

if(message == 'New York, NY'){
    return '\'35620\''
}
if(message == 'Los Angeles, CA'){
    return '\'31080\''
}
if(message == 'Chicago, IL'){
    return '\'16980\''
}
if(message == 'Philadelphia, PA'){
    return '\'19100\''
}
if(message == 'Huston, TX'){
    return '\'37980\''
}
if(message == 'Washington, DC'){
    return '\'26420\''
}
if(message == 'Miami, FL'){
    return '\'47900\''
}
if(message == 'Atlanta, GA'){
    return '\'33100\''
}
if(message == 'New York, NY'){
    return '\'12060\''
}
if(message == 'Boston, MA'){
    return '\'14460\''
}
if(message == 'San Francisco, CA'){
    return '\'41860\''
}
if(message == 'Detroit, MI'){
    return '\'19820\''
}
if(message == 'Phoenix, AZ'){
    return '\'38060\''
}
if(message == 'Seattle, WA'){
    return '\'35620\''
}
if(message == 'Riverside, CA'){
    return '\'42660\''
}
else{
    return '\'35620\''
}

}

function metroIndicator(message){

if(message == 'Dish Washers'){
    return 'DISHWASH'
}
if(message == 'Garages'){
    return 'GARAGE'
}
if(message == 'Washing Machines'){
    return 'WASHER'
}
if(message == 'Porch'){
    return 'PORCH'
}
if(message == 'Kitchen Sink'){
    return 'KITCHSINK'
}
if(message == 'Household Rating'){
    return 'RATINGHS'
}
if(message == 'Neighborhood Rating'){
    return 'RATINGNH'
}
if(message == 'Family Income'){
    return 'FINCP'
}
if(message == 'Resident\'s Income'){
    return 'HINCP'
}
if(message == 'Resident\'s Sex'){
    return 'HHSEX'
}
if(message == 'Resident\'s Marriage Status'){
    return 'HHMAR'
}
if(message == 'Resident\'s Education Level'){
    return 'HHGRAD'
}
if(message == 'Resident\'s Age'){
    return 'HHAGE'
}
if(message == 'Property Value'){
    return 'MARKETVAL'
}
if(message == 'Monthly Mortgage'){
    return 'MORTAMT'
}
if(message == 'Monthly Rent'){
    return 'RENT'
}
if(message == 'Year Built'){
    return 'YRBUILT'
}
if(message == 'Unit Size'){
    return 'UNITSIZE'
}
if(message == 'No Access To Water'){
    return 'NOWAT'
}
if(message == 'Monthly Home Expenses'){
    return 'TOTHCAMT'
}
if(message == 'Total Rooms'){
    return 'TOTROOM'
}
if(message == 'Rent Control Present'){
    return 'RENTCNTRL'
}
if(message == 'Number of Inhabitants'){
    return 'NUMPEOPLE'
}
else{
    return 'RENT'
}

}



function natIndicator(message){

if(message == 'Inflation Rate'){
    return 'INFLATION'
}
if(message == 'CCI'){
    return 'CCI'
}
if(message == 'Federal Intrest Rate'){
    return 'INTRATE'
}
if(message == 'GDP'){
    return 'GDP'
}
if(message == 'Employment Rate'){
    return 'EMPRATE'
}
if(message == 'Bond Yield'){
    return 'BONDYIELD'
}
else{
    return 'INFLATION'
}

}