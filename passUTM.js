// JS for grabbing utm params and parsing into url
var getRefQueryParam = function() {
var temp = {};
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
var decode = function(s) {
return decodeURIComponent(s.split("+").join(" "));
};
temp[decode(arguments[1])] = decode(arguments[2]);
});
return temp;
};

// Get all the UTM parameters before the page finishes rendering
//Variables
var utmParamQueryString = '',
utmParamQueryStringTrimmed = '',
utm_source = '',
utm_medium = '',
utm_content = '',
utm_campaign = '',
(function() {
utm_source = getRefQueryParam("utm_source");
utm_medium = getRefQueryParam("utm_medium");
utm_content = getRefQueryParam("utm_content");
utm_campaign = getRefQueryParam("utm_campaign");

if (utm_source) {
  utmParamQueryString += '&utm_source=' + utm_source;
}
if (utm_medium) {
  utmParamQueryString += '&utm_medium=' + utm_medium;
}
if (utm_content) {
  utmParamQueryString += '&utm_content=' + utm_content;
}
if (utm_campaign) {
  utmParamQueryString += '&utm_campaign=' + utm_campaign;
}
// if there are utm values add them all up
if (utmParamQueryString.length > 0) {
  utmParamQueryString = utmParamQueryString.substring(1);
  utmParamQueryStringTrimmed = utmParamQueryString;
  utmParamQueryString = '?' + utmParamQueryString;
}
})();

// Grab all links you want to target - change the class to whatever you are using i.e .utm-passthrough
var navlinks = document.querySelectorAll('a');
// Loop through all links
Array.prototype.forEach.call(links, function (link) {
       // Take the href and append the UTM parameters
       link.href += utmParamQueryString;
});
