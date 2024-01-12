import { Routine } from '../models/index.js'

export const findRoutineByUserId = async (userId) => await Routine.findAll({ where: { userId } })

export const createRoutine = async (data) => await Routine.create(data)

export const editRoutine = async (data, id) => await Routine.update(data, { where: { id } })
