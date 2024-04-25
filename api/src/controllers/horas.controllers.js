import { mysqlHoras } from '../connections/mysqlHoras.js'

export const getHoras = async (req, res) => {
  try {
    const response = await mysqlHoras.query('SELECT * FROM sucursales')
    return res.status(200).json(response[0])
  } catch (error) {
    console.log(error)
    return res.status(500).json('Internal server error')
  }
}