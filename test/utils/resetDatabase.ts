import db from '~/database'

export const resetDatabase = async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
}
