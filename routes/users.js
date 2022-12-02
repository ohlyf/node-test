const router = require('@koa/router')()

router.prefix('/users')

router.get('/', ctx => {
    ctx.body = 'users router'
})

module.exports = router