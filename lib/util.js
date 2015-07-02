/**
 * Created by WQ on 2015/6/30.
 */

var fs = require( "fs" );
var pt = require( "path" );

function readDir( path, callback ) {
	if ( pt.extname( path ) != "" ) {
		// 是文件
		callback( [] );
	}
	else {
		fs.readdir( path, function ( err, arr ) {
			if ( err ) {
				callback( [] );
			}
			else {
				callback( arr );
			}
		} );
	}
}

function loopArray( arr, func ) {
	for ( var i = 0; i < arr.length; i++ ) {
		func( arr[i], i );
	}
}

function map( array, func ) {
	var mapArray = [];
	array.forEach( function ( item, i ) {
		mapArray.push( func( item, i ) );
	} );
	return mapArray;
}

function serialTask( tasks, callback ) {
	var index = 0;
	tasks[index] && tasks[index]( function () {
		++index == tasks.length ? callback() : tasks[index]( arguments.callee );
	} );
}

function getAllFilesInTheDir( dirPath, callback ) {
	var curPath = dirPath,
		files = [],
		dirs = [];

	readDir( curPath, function ( arr ) {
		loopArray( arr, function ( obj ) {
			if ( pt.extname( obj ) != "" ) {
				//　是文件
				files.push( pt.resolve( curPath, obj ) );
			}
			else {
				//　是文件夹
				dirs.push( pt.resolve( curPath, obj ) );
			}
		} );
		curPath = dirs.pop();
		if ( curPath ) {
			readDir( curPath, arguments.callee );
		}
		else {
			callback( files );
		}
	} );
}

exports.readDir = readDir;
exports.loopArray = loopArray;
exports.map = map;
exports.serialTask = serialTask;
exports.getAllFilesInTheDir = getAllFilesInTheDir;