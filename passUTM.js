const utmParams = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term'
];

 const utm_params = [];
utmParams.forEach(param => {

 const params = Cookies.get(param);
if(params=='undefined'){
console.log(param+' Kosong')
}else{
utm_params.push(param+'='+params)
}

 console.log(param+':'+params);
});
 // var pValue = getUTMValue(param);

//const params = new URLSearchParams(window.location.search);
   
  
    var href = jQuery(this).attr('href');

    utm_search = utm_params.join('&');
    if (!!utm_search) {
        document.querySelectorAll('a[href]').forEach(function(ele, idx) {
            if(!ele.href.match(/\#/)){
             ele.href = ele.href + (ele.href.indexOf('?') === -1 ? '?' : '&') + utm_search;
             }
           
        });
    }
