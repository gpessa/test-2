export default ngModule => {

  ngModule.filter('megabytes', function() {
    return function(bytes) {
      if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
        return '-';
      }

      bytes = 1000 * 1000 * bytes;

  		var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
  			  number = Math.floor(Math.log(bytes) / Math.log(1000));

  		return (bytes / Math.pow(1000, Math.floor(number))) +  ' ' + units[number];
    };
  });

};
