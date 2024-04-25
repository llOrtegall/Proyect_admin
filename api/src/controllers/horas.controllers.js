import { mysqlHoras } from '../connections/mysqlHoras.js'

export const getHoras = async (req, res) => {
  const { sucursal } = req.body
  
  try {
    const [response] = await mysqlHoras.execute(`SELECT * FROM horas${sucursal}`)
    return res.status(200).json(response)
  } catch (error) {
    console.log(error)
    return res.status(500).json('Internal server error')
  }
}