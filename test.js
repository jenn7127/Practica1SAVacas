const assert = require('assert');
// importar funcionalidades
const getIsPositive = require('./super-funcionalidades/funcionalidad1');
const getIsPair = require('./super-funcionalidades/funcionalidad2');
const getIsPrimo = require('./super-funcionalidades/funcionalidad3');




describe("#Pruebas de superFuncionalidad1()", function () {

    context('Con un numero realmente positivo', function () {

        it('Debe de retornar true por que si xD', function () {
            assert.strictEqual(getIsPositive(1234), true);
        });
    });

    context('Con un numero negativo', function () {

        it('Debe de retornar false por que es negativo', function () {

            assert.strictEqual(getIsPositive(-2343), false);
        });
    });

});


describe("#Pruebas de superFuncionalidad2()", function () {

    context('Numero par: ', function () {

        it('Debe de retornar 0 porque es par', function () {
            assert.strictEqual(getIsPair(4), 0);
        });
    });

    context('Con un numero impar', function () {

        it('Debe de retornar 1 por que es impar', function () {

            assert.strictEqual(getIsPair(3), 1);
        });
    });

});


describe("#Pruebas de superFuncionalidad3()", function () {

    context('Numero que no es primo: ', function () {

        it('Debe retornar false porque 6 no es primo', function () {
            assert.strictEqual(getIsPrimo(6), false);
        });
    });

    context('Numero primo', function () {

        it('Debe retornar true porque 11 es primo ', function () {

            assert.strictEqual(getIsPrimo(11), true);
        });
    });

});

// HACER BLOQUES SIMILARES PARA CADA FUCIONALIDAD

/*
describe("#Pruebas de superFuncionalidad2()", function () {

    context('Con un numero realmente positivo', function () {

        it('Debe de retornar true por que si xD', function () {
            assert.strictEqual(getIsPositive(1234), true);
        });
    });

    context('Con un numero negativo', function () {

        it('Debe de retornar false por que es negativo', function () {

            assert.strictEqual(getIsPositive(-2343), false);
        });
    });

});
* */

