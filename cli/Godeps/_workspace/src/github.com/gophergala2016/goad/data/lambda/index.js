var exec = require("child_process").exec;

exports.handler = function(event, context) {
    child = exec(event.cmd, function(error) {
        context.done(error, "Process complete!");
    });
    child.stdout.on("data", console.log);
    child.stderr.on("data", console.error);
};
