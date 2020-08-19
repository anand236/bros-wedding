function countdown() {
    var today = new Date();
    var eventDay = new Date(2021,0,1)

    var currentTime = today.getTime();
    var eventTime = eventDay.getTime();

    var diff = eventTime-currentTime    //it get time in milli sec so convert to hour min and sec

    var s = Math.floor(diff/1000);

    var m = Math.floor(s/60);

    var h = Math.floor(m/60);

    var d = Math.floor(h/24);

    h %=24;
    m%=60;
    s%=60;


    hou = (h<10) ? '0'+h : h;
    minu = (m<10) ? '0'+m : m;
    se = (s<10) ? '0'+s : s;
    dy = (d<10) ? '0'+d :d;

    document.getElementById('days').innerText = dy;
    document.getElementById('hours').innerText = hou;
    document.getElementById('minutes').innerText = minu;
    document.getElementById('seconds').innerText = se;
    
    setTimeout(countdown,1000)

}

countdown();