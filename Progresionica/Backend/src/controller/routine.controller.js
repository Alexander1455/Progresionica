import { createRoutine, editRoutine, findRoutineByUserId } from '../services/routine.services.js'

export const getAllRoutineByUser = async (req, res) => {
  try {
    const { id } = req.user
    const listRoutins = await findRoutineByUserId(id)
    res.status(200).json(listRoutins)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const postRoutineByUser = async (req, res) => {
  try {
    const { id } = req.user
    const { name, description } = req.body
    const routine = {
      name,
      description,
      userId: id
    }
    await createRoutine(routine)
    res.status(200).json({ message: 'rutina creada' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const putRoutine = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description } = req.body
    const routine = {
      name,
      description
    }
    await editRoutine(routine, id)
    res.status(200).json({ message: 'rutina editada correctamente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
