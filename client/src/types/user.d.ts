type Empresa = 'Multired' | 'Servired'

type Proceso = 'Técnología' |
'Contabilidad' |
'Comercial' |
'Administración' |
'Gestión Humana' |
'Gerencia' |
'Tesoreria' |
'Auditoria' |
'Cumplimiento'

export interface User {
  apellidos: string
  correo: string
  empresa: string
  id: string
  nombres: string
  proceso: string
  rol: string
  username: string
}
