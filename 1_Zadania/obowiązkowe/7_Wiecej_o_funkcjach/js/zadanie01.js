
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji sortArray
function sortArray() {

    //inicjalizacja zmiennej, wraz z przpisaniem tablicy elementów typu number, wraz z wartosciami
    var points = [41, 3, 6, 1, 114, 54, 64];

    //użycie metody sort(), będąca domyślnie dostepna z poziomu każdej tablicy
    // jak argument metody podanie callbacku, ktory przyjmuje parametry a i b
    // a , wczesniejszy element tablicy ( previous item )
    // b , obecny element tablicy ( current item )
    points.sort(function (a, b) {
        // odejmowanie poprzedzającego elementu od obecnego elementu tablicy
        // zwrocenie rozncy na bazie ktorej metoda sort ustala kolejnosc lidzb ( to która jest wieksza )
        return a - b;
    });

    // zwrocenie posortowanej tablicy
    return points;
}

// wywołanie funkcji sortArray
sortArray();
