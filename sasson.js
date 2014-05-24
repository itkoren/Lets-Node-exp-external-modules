// Include The 'require.async' Module
require("require.async")(require);

// Include The 'compiler' Module
require("./compiler");

require.async("./sample.scss", function(css){
    console.log(css);
});