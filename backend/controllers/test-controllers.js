const getHelloWorld = (req, res, next) => {
    console.log("GET requesti saatu");
    try{
        res.send("Hello");
    }
    catch(err){
        console.log("Error:", err);
    };
};

exports.getHelloWorld = getHelloWorld;