import Koa from 'koa'

export const welcome = (ctx: Koa.Context) => {
  ctx.body = 'Addressbook API 🤖'
}
