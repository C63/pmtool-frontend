import { schema } from 'normalizr'

export const account = new schema.Entity('accounts', {}, { idAttribute: 'account-id' })
export const project = new schema.Entity('projects', {
  accounts: new schema.Array(account)
}, { idAttribute: 'project-id' })
export const team = new schema.Entity('team', {
  accounts: new schema.Array(account),
  projects: new schema.Array(project)
}, { idAttribute: 'team-id' })

export const teams = [team]
export const projects = [project]
