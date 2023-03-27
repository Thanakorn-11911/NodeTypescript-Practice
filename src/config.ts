import base from './lib/selectdatabase'

interface MysqlDb {
    host: string;
    user: string;
    password?: string;
    database: string;
    port?: string
}

const dbs: MysqlDb = {
    host: base.mysqlhost,
    user: base.mysqluser,
    password: base.mysqlpassword,
    database: base.mysql,
    port: base.mysqlport, //3306 is default port no. of mysql
}

const mysqldb = {
    client: 'mysql',
    connection: dbs
};

export default {
    server:{
        port: process.env.SERVER_PORT || '3009',
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'oaulab',
      algorithm: process.env.JWT_ALGORITHM || 'HS512',
      expiresIn: process.env.JWT_EXPIRES_IN || '1h', // 60min
    },
    mysqldb
}



// export default {
//     server: {
//       port: process.env.SERVER_PORT || '7007',
//     },
//     // dbName: 'SYSITS_HR',
//     jwt: {
//       secret: process.env.JWT_SECRET || 'kimmeeza',
//       algorithm: process.env.JWT_ALGORITHM || 'HS512',
//       expiresIn: process.env.JWT_EXPIRES_IN || '1h', // 60min
//     },
//     // oracledb: {
//     //   client: 'oracledb',
//     //   connection: {
//     //     // test
//     //     user: 'SIAMCHAI_STOCK',
//     //     password: ':ug8up;',
//     //     connectString: '10.0.1.32:1521/ORCL',
//     //     // real
//     //     // user: 'siamchai_stock',
//     //     // password: ':ug8up;',
//     //     // connectString: '10.0.1.152:1521/ORCL',
//     //   },
//     //   debug: !!(process.env.DEBUG),
//     // },
  
//     // mssqldb: {
//     //   client: 'mssql',
//     //   connection: {
//     //     user: 'secure_stock',
//     //     password: 'Syssecure',
//     //     server: '10.0.1.91',
//     //     database: 'secure_stock',
//     //     options: {
//     //       encrpt: false,
//     //       enableArithAbort: true,
//     //     },
//     //   },
//     //   debug: !!(process.env.DEBUG),
//     // },
//     // wsMqtt: {
//     //   url: process.env.WS_MQTT_URL,
//     //   options: {
//     //     username: process.env.WS_MQTT_USERNAME,
//     //     password: process.env.WS_MQTT_PASSWORD,
//     //     keepAlive: 15_000,
//     //   },
//     // },
  
//   }