//jshint esversion:6

exports.getDate = function()  //exports the module function getData()
{
  let today = new Date();
  //var currentDay = today.getDay();
  //var day = new Date().toLocaleString('en-us', {weekday: 'long'});
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

exports.getDay = getDay;   //exports the module function getDay()

function getDay()
{
  let today = new Date();
  //var currentDay = today.getDay();
  //var day = new Date().toLocaleString('en-us', {weekday: 'long'});
  const options = {
    weekday: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}

console.log(module.exports);
