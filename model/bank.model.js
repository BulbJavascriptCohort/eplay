const ngbanks = require('../db/ngbanks.db.js')

/**
 * return all banks 
 * 
 * @return [all the banks]
 */
function index(){

	// console.table(ngbanks.module)
	return ngbanks.module
}

function bank(index){
	return ngbanks.module[index]
}



exports.module = {
	index,
	bank
}