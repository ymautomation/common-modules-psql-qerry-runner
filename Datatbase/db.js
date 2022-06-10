const pgp = require("pg-promise")();

async function getConnectionString(req, res) {
  try {
    const ipAddress = req.body.ipAddress;
    const port = req.body.port;
    const userName = req.body.userName;
    const password = req.body.password;
    const dbName = req.body.dbName;
    const tableName = req.body.tableName;
    const db = pgp(
      `postgresql://${userName}:${password}@${ipAddress}:${port}/${dbName}`
    );
    // const alert = useAlert();

    const data = await db
      .manyOrNone(
        `SELECT table_name FROM information_schema.tables 
        WHERE table_schema='public'
        AND table_type='BASE TABLE'; `
      )
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => res.send(alert(data)));
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getConnectionString };
