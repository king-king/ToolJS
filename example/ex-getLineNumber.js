/**
 * Created by WQ on 2015/6/30.
 */

var getL = require( "../lib/getLineNumber.js" );
var colors = require( "colors" );

getL( "../test/cinemaJS", function ( result ) {
    console.log( colors.green( "===================" ) );
    console.log( result );
    console.log( colors.green( "===================" ) );
} );

