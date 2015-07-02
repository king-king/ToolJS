/**
 * Created by WQ on 2015/6/30.
 *
 * 统计一个文件夹中js文件和css文件的代码行数
 *
 */

var fs = require( "fs" ),
	pt = require( "path" ),
	colors = require( "colors" ),
	util = require( "./util.js" );

var map = util.map,
	serialTask = util.serialTask,
	getAllFilesInTheDir = util.getAllFilesInTheDir;

function getLineNumber( path, callback, switchLog ) {
	var result = {
		scriptLines : 0,
		scriptFileNum : 0,
		cssLines : 0,
		cssFileNum : 0
	};

	// 先把所有的文件都读取出来放到files里面
	getAllFilesInTheDir( path, function ( files ) {
		end( files );
	} );

	function end( files ) {
		function getFileLineNumber( path, callback ) {
			fs.readFile( path, function ( err, str ) {
				var match = str.toString().match( /\n/g );
				var num = match ? match.length + 1 : 1;
				callback( err, num );
			} );
		}

		var process = map( files, function ( file ) {
			return function ( done ) {
				var extName = pt.extname( file ).slice( 1 );
				if ( extName == "js" || extName == "css" ) {
					getFileLineNumber( file, function ( err, number ) {
						if ( err ) {
							switchLog && console.log( colors.red( "处理失败: " + file ) );
							done();
						}
						else {
							switchLog && console.log( colors.green( "成功处理: " + file ) );
							if ( extName == "js" ) {
								result.scriptFileNum++;
								result.scriptLines += number;
							}
							else {
								result.cssFileNum++;
								result.cssLines += number;
							}
							done();
						}
					} );
				}
				else {
					done();
				}
			}
		} );

		serialTask( process, function () {
			switchLog && console.log( "--------------------------------------------------" );
			switchLog && console.log( "over~!!" );
			switchLog && console.log( "--------------------------------------------------" );
			switchLog && console.log( colors.green( "js文件有 " + result.scriptFileNum + " 个, 共 " + result.scriptLines + "  行" ) );
			switchLog && console.log( "--------------------------------------------------" );
			switchLog && console.log( colors.green( "js文件有 " + result.cssFileNum + " 个, 共 " + result.cssLines + "  行" ) );
			callback( result );
		} );
	}
}

module.exports = getLineNumber;
