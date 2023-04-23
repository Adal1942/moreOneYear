let days = document.getElementById('days');
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

let endDate = '04/25/2023 12:00:00'; // date format mm/dd/yyyy

let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // time calculation for days, hours, minutes and seconds

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    //add zero before single digit number
    d = (d < 10) ? "0" + d : d;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // output the result in element with id

    days.innerHTML = d;
    hour.innerHTML = h ;
    minute.innerHTML = m;
    second.innerHTML = s;

    // if the count os over, write some text

    if(distance < 0){
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        document.querySelector(".newYear").style.display = 'block';
    }
});

// regular watch - time2

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital clock

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h_2 = new Date().getHours();
    let m_2 = new Date().getMinutes();
    let s_2 = new Date().getSeconds();

    let am = h_2 >= 12 ? "PM" : "AM";

    // convert 24hr clock to 12hr clock
    if ( h_2 > 12){
        h_2 = h_2 - 12;
    }

    //add zero before single digit number
    h_2 = (h_2 < 10) ? "0" + h_2 : h_2;
    m_2 = (m_2 < 10) ? "0" + m_2 : m_2;
    s_2 = (s_2 < 10) ? "0" + s_2 : s_2;

    hours.innerHTML = h_2;
    minutes.innerHTML = m_2;
    seconds.innerHTML = s_2;
    ampm.innerHTML = am;
});