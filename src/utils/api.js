import fetch from 'isomorphic-fetch';
import "es6-promise/auto";

// URL de la API de datos.rosario.gob.ar
const BASE_API = "https://datos.rosario.gob.ar/api/";

// Relación distrito/recurso de datos.rosario.org.ar
const ATENDIDOS = {
    norte: '9867ebdb-b372-4c7e-8fe1-eb1c74173483',
    centro: '67956927-a87d-4560-9537-27aba13226e4',
    noroeste: 'b8c881b9-a56b-4b96-98a7-f41c66bbf579',
    oeste: '11a1253c-b178-4d0e-9557-737c14ddf2a3',
    sur: '207aa3ae-5b40-4063-b3c5-9d38f5b14388',
    sudoeste: 'd15f8d5c-3c5e-4279-943e-65ca4ade0817'
}

// URL de la API de ubicaciones
// https://ws.rosario.gob.ar/ubicaciones/public/geojson/lugar/{lugar}/true

// Esta función me permite agrupar por alguna
// propiedad del objeto la lista de elementos de @list
// Fuente: https://www.consolelog.io/group-by-in-javascript/
function groupBy(list, prop) {
  return list.reduce(function(groups, item) {
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}

class Api {
    async getDataset(id_dataset) {
        const resp = await fetch(`${BASE_API}3/action/package_show?id=${id_dataset}`)
        const data = await resp.json()
        return data;
    }

    async getResource(distrito) {
        const resp = await fetch(`${BASE_API}action/datastore/search.json?resource_id=${ATENDIDOS[distrito]}`)
        if (resp.status === 200) {
            const data = await resp.json()
            return data;
        } else {
            return {
                error: resp.status,
                message: resp.statusText
            }
        }
    }

    async getUltimosAtendidos(distrito) {
        const resp = await fetch(`${BASE_API}action/datastore/search.json?resource_id=${ATENDIDOS[distrito]}&limit=300`)
        if (resp.status === 200) {
            const data = await resp.json();
            const grupos = groupBy(data.result.records, 'CodigoOficina');

            var ultimosTurnos = [];
            for (var key in grupos) {
                ultimosTurnos.push(grupos[key][0])
            }

            return ultimosTurnos;
        } else {
            return {
                error: resp.status,
                message: resp.statusText
            }
        }
    }

    async getUltimosAtendidosByOficina(distrito, oficinas  = []) {
        const resp = await fetch(`${BASE_API}action/datastore/search.json?resource_id=${ATENDIDOS[distrito]}&filters[CodigoOficina]=${oficinas}&limit=300`)
        if (resp.status === 200) {
            const data = await resp.json();
            const grupos = groupBy(data.result.records, 'CodigoOficina');

            var ultimosTurnos = [];
            for (var key in grupos) {
                ultimosTurnos.push(grupos[key][0])
            }

            return ultimosTurnos;
        } else {
            return {
                error: resp.status,
                message: resp.statusText
            }
        }
    }

    async getTurnosByOficina(distrito, oficinas  = []) {
        const resp = await fetch(`${BASE_API}action/datastore/search.json?resource_id=${ATENDIDOS[distrito]}&filters[CodigoOficina]=${oficinas}&limit=300`)
        if (resp.status === 200) {
            const data = await resp.json()
            return data;
        } else {
            return {
                error: resp.status,
                message: resp.statusText
            }
        }
    }

    async getOficina(oficina, distrito) {
        const resp = await fetch(`https://ws.rosario.gob.ar/ubicaciones/public/geojson/lugares/all/Oficina/${oficina}%20${distrito}?extendido=true`)
        if (resp.status === 200) {
            const data = await resp.json()
            return data.features[0];
        } else {
            return {
                error: resp.status,
                message: "Servicio no disponible",
            }
        }
    }
}

export default Api;
