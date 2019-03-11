import fetch from 'isomorphic-fetch';
import "es6-promise/auto";

// Dataset
// https://datos.rosario.gob.ar/api/3/action/package_show?id=[id_dataset]
// Atención Instantánea de vecinos en los Centros Municipales de Distrito -> 94e6595d-9dd9-4b07-9120-301bb15a3402

// Recurso
// https://gestordatos.rosario.gob.ar/api/action/datastore/search.json?resource_id=[id_recurso]
// Últimos Turnos Emitidos CMD Norte -> a5d53703-00fd-4f4d-bc4f-7b08d6c71879

const BASE_API = "https://datos.rosario.gob.ar/api/";

class Api {
    async getDataset(id_dataset) {
        const resp = await fetch(`${BASE_API}3/action/package_show?id=${id_dataset}`)
        const data = await resp.json()
        return data;
    }

    async getResource(id_resource) {
        const resp = await fetch(`${BASE_API}action/datastore/search.json?resource_id=${id_resource}`)
        const data = await resp.json()
        return data;
    }
}

export default Api;
