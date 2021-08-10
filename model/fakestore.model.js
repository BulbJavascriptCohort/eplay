const axios = require('axios')

const getAllProducts = () => {
	axios.get('https://fakestoreapi.com/products')
            .then(res => res.data)
            .then(data => data)
}

const show = ( index ) => {
	if ( index <= 20 ) {
		axios.get(`https://fakestoreapi.com/products/${index}`)
            .then(res => res.data)
            .then(data => data)
	}
} 




module.export = {
	getAllProducts, show
}