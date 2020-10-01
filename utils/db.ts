import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

import { handleError } from '../utils/error'

const db = new JsonDB(new Config('student-db', true, false, '/'));
const DB_NAME = '/student-db'

export const get = (id: string) => {
    try {
        return db.getData(`${DB_NAME}/${id}`);
    } catch (e) {
        return handleError('Get Failed ', e)
    }

}

export const getAll = () => {
    try {
        return Object.values(db.getData(DB_NAME))
    } catch (e) {
        return handleError('GetAll Failed ', e)
    }
}

export const update = (id, data) => {
    try {

    } catch (e) {
        return handleError('Update Failed ', e)
    }
}
export const count = () => {
    try {
        return db.count(DB_NAME)
    } catch (e) {
        return handleError('Update Failed ', e)
    }
}

export const create = (data) => {
    try {
        const {id} = data
        let newObject = {}
        newObject[id] = id
        newObject.json = data

        db.push(DB_NAME + '/' + id, data)

    } catch (e) {
        return handleError('Create Failed ', e)
    }
}

export const destroy = (id) => {
    try {
        return db.delete(`${DB_NAME}/${id}`)
    } catch (e) {
        return handleError('Create Failed ', e)
    }
}