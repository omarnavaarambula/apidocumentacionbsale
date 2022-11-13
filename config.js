require ('dotenv').config()

const config = {
      port: process.env.PORT || 3000,
      nodeEnv: process.env.NODE_ENV || 'development',
      db:{
            port:process.env.DB_PORT|| 3000,
            host:process.env.DB_HOST||'localhost' , 
      }
}

module.exports = config;