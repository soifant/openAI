import axios from 'axios';

class Openai {

	constructor(key){		this.data = []

		this.key = key

	}

	

	async gpt(parameter){

		const {prompt, max, temperature, n, stop, model} = parameter

		await axios.post('https://api.openai.com/v1/completions', {

			prompt: prompt,

			max_tokens: max,

			temperature: temperature,

			n: n,

			stop: stop,

			model: model

		},

		{

			headers: {

				'Authorization': `Bearer ${this.key}`,

				'Content-Type': 'application/json',

				'Accept': 'application/json'

			}

		})

		.then((response) => {

			const result = response.data.choices

			this.data = result

		})

		.catch((error) => {

			console.log(error.response.data)

		})

	}

	

	async dalle(parameter){

		const {model, prompt, num, size} = parameter

		await axios.post('https://api.openai.com/v1/images/generations', 

		{

			"model": model,

			"prompt": prompt,

			"num_images": num,

			"size": size

		},

		{

			headers: {

				'Authorization': `Bearer ${this.key}`,

				'Content-Type': 'application/json',

			}

		})

		

		.then((response) => {

			const result = response.data.data

			this.data = result

		})

		.catch((error) => {

			console.log(error)

		})

	}

	

	

}

export default Openai
