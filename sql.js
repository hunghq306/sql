
// steps to run:
// 		1. npm install mssql		
// 		2. node sql.js

const sql = require('mssql');
const webconfig = {
    user: 'hunghq2',
    password: 'k',
    server: 'localhost',
    database: 'test',
    options: {
        encrypt: false,
    },
};
// connect to your database
sql.connect(webconfig, (errConnect) => {
    if (errConnect) {
        console.log('==== errConnect:', errConnect);
    }
    else {
        // create Request object
        const request = new sql.Request();
        // query to the database and get the records
        request.query('select * from Table_1', (errQuery, recordset) => {
            if (errQuery) {
                console.log('==== errQuery:', errQuery);
            }
            else {
                console.log('==== recordset :', recordset);
            }
        });
    }
});

/*
	output :
	==== recordset : { recordsets: [ [ [Object], [Object] ] ],
	  recordset:
	   [ { id: '1         ', name: 'one       ' },
		 { id: '2         ', name: 'two       ' } ],
	  output: {},
	  rowsAffected: [ 2 ] }
*/