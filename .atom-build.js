module.exports = {
  cmd: "gulp",
  preBuild: function () {
    console.log('This is run **before** the build command');
  },
  postBuild: function () {
    console.log('This is run **after** the build command');
  },
  // functionMatch: function (terminal_output) {
  //   // this is the array of matches that we create
  //   var matches = [];
  //   terminal_output.split(/\n/).forEach(function (line, line_number, terminal_output) {
  //     // all lines starting with a slash
  //     if line[0] == '/' {
  //       this.push({
  //         file: 'x.txt',
  //         line: line_number.toString(),
  //         message: line
  //       });
  //     }
  //   }.bind(matches));
  //   return matches;
  // }
};
