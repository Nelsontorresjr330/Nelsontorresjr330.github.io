d3.json("https://github.com/Nelsontorresjr330?tab=repositories").then(function(error, test) {
    if (error) return console.warn(error);
    console.log(test);
});