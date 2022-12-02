const router = require('@koa/router')()

router.prefix('/menus')

router.get('/', ctx => {
    ctx.body = 'menus router'
})

module.exports = router