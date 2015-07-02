/**
 * Created by WQ on 2015/7/2.
 *
 *  node search [searchStr] -p [path]       搜索范围：文件名+内容
 *  node search [searchStr] -p [path] -t    搜索范围：文件名
 *  node search [searchStr] -p [path] -c :  搜索范围：文件内容
 *
 */

var colors = require( "colors" );
var fs = require( "fs" );
var pa = require( "path" );
var util = require( "./util.js" );


