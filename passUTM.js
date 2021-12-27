(function() {
    const params = new URLSearchParams(window.location.search);
    const utm_params = [];
    params.forEach(function(value, key) {
        if (key.startsWith('utm_')) {
            utm_params.push(key+'='+value)
        }
    })
    utm_search = utm_params.join('&');
    if (!!utm_search) {
        document.querySelectorAll('a[href]').forEach(function(ele, idx) {
            ele.href = ele.href + (ele.href.indexOf('?') === -1 ? '?' : '&') + utm_search;
        });
    }
})();
