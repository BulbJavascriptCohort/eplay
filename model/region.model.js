const ngregion = require("../db/ngregion.db.js")

/**
 * return all banks 
 * 
 * @return [all the banks]
 */
function index(){

	// console.table(ngbanks.module)
	return ngregion
}

function state(index){
	return ngregion[index]
}



module.exports = {
	index,
	state
}
