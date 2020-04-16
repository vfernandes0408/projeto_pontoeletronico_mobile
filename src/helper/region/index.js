import axios from 'axios';

export async function getCities() {
    const estado = await axios.get('https://gist.githubusercontent.com/letanure/3012978/raw/2e43be5f86eef95b915c1c804ccc86dc9790a50a/estados-cidades.json')
        .then(function (response) {
            let objEstado = response.data.estados;
            return objEstado.map(estado => {
                return {
                    value: estado.nome
                };
            });

        })
        .catch(e => console.log(e))
    return estado;
}