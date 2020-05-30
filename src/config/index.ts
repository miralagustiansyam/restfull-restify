const config = {
  production: {
    name : "production",
    base_url : "http://localhost-production:2121",
    version : process.env.VERSION,
    port : 2121,
    mongo :{
        url : `${process.env.MONGO_URL}${process.env.MONGO_DB}`,
        options : ""
    }  
  },
  stage: {
    name : "satge",
    base_url : process.env.BASE_URL,
    version : process.env.VERSION,
    port : 2222,
    mongo :{
        url : "mongodb://localhost:8181/node_server2",
        options : ""
    }  
  },
  development: {
    name : process.env.NODE_ENV,
    base_url : process.env.BASE_URL,
    version : process.env.VERSION,
    port : process.env.PORT,
    mongo :{
        url : `${process.env.MONGO_URL}${process.env.MONGO_DB}`,
        options : ""
    }  
  },
}

module.exports = config;
