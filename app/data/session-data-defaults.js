// /* GET URL PARAMETERS */
// var getUrlParameter = function getUrlParameter(sParam) {
//   var sPageURL = window.location.search.substring(1),
//       sURLVariables = sPageURL.split('&'),
//       sParameterName,
//       i;

//   for (i = 0; i < sURLVariables.length; i++) {
//       sParameterName = sURLVariables[i].split('=');

//       if (sParameterName[0] === sParam) {
//           return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//       }
//   }
//   alert(1);
//   return false;
// };

// /* PAGE PARAMETERS */
// var pageState = getUrlParameter('pageState');
// var documentState = getUrlParameter('documentState');
// var pageMessage = getUrlParameter('message');
// var prototypeVersion = getUrlParameter('prototypeVersion');

// if (!pageState || pageState == "" || pageState == undefined || pageState == 'undefined') {
//   pageState = "empty";
// }

// if (!pageMessage || pageMessage == "" || pageMessage == undefined || pageMessage == 'undefined') {

// }

// if (!documentState || documentState == "" || documentState == undefined || documentState == 'undefined') {
//   documentState = "draft";
// }

// if (!prototypeVersion || prototypeVersion == "" || prototypeVersion == undefined || prototypeVersion == 'undefined') {
//   prototypeVersion = "v2";
// }
// //alert(prototypeVersion);

// module.exports = {
//   'prototypeVersion': prototypeVersion,
//   'pageState': pageState,
//   'documentState': documentState,
//   'pageMessage': pageMessage
// }
module.exports = {
  "serviceName": "Whitehall Publisher",
  "serviceVersion": "2.0 Silver",
  'prototypeVersion': 'v2',
  'pageState': 'empty',
  'documentState': 'draft',
  'pageMessage': '',
  'currentPage': ''
}