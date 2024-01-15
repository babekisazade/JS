//1 HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.
console.log(document.querySelector("h1"));




//2 HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
//- Başlığı silin;
//- Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .

//var headline =
//    document.getElementsByTagName('h1')[0];
//headline.parentNode.removeChild(headline);


//let menu = document.querySelector(".menu")
//menu.innerHTML += " <li>TITAN RTX</li>"





//3 HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
//- başlıq mətnini «GeForce 20 Series» -a;
//- fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.


document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('h1').innerText = 'GeForce 20 Series';

    var primaryElements = document.querySelectorAll('.primary');
    primaryElements.forEach(function (element) {
        element.style.backgroundColor = '#ebebeb';
    });
});


//4 HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.

var elements = document.querySelectorAll('.primary');
elements.forEach(function (element) {
    console.log(element);
});



//5
