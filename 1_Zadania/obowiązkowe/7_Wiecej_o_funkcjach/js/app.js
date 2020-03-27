/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Twoj komentarz ...
function jeden() {

    // scope zmiennej : "zmienna1", jest ograniczony do scope funkcji jeden()
    // Dlatego co za tym idzie, "zmienna1" będzie dostepna tylko w zakresie funkcji jeden()
    var zmienna1 = 1;

    // pod funkcja dwa() ma dostep do zmiennych ze scope funkcja jeden()
    function dwa() {

        //zmienna1 jest dostepna, scope funkcji dwa() miesci sie w scope funcji jeden() wywołanej
        console.log(zmienna1);

        //zmienna2 jest incjalizowana wraz z deklaracja poczatkowej wartosci, ale nie jest wywoływana ani razu
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa()
    dwa();

    //zmienna2 jest dostepna tylko w scope funkcji dwa(), dlatego poza blokiem funkcji dwa() nie mamy dostepu do tej zmiennej
    console.log(zmienna2)
}

//wywołanie funkcji jeden()
jeden()
