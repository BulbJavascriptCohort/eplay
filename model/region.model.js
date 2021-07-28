const ngregion = require("../db/ngregion.db.js")

/**
 * return all banks 
 * 
 * @return [all the banks]
 */
function index() { // console.table(ngbanks.module)
    return ngregion
}

/**
 * adding bank to the data 
 * 
 * @return [all the banks]
 */
function create() { // console.table(ngbanks.module)

}

/**
 * get entry based on supplied id
 * 
 * @return [all the banks]
 */

function show(index) {
    return ngregion[index]
}


module.exports = {
    index,
    show
}
