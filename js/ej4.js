var arrayImpar   = [1,3,5,7,9];
    var arrayPar     = [2,4,6,8,10];

    function algunoEsPar(array)
    {
        console.log(array.some((val) => val % 2 == 0));
    }

    algunoEsPar(arrayImpar);
    algunoEsPar(arrayPar);
