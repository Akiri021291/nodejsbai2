
const searchRouter =require('./search');
const siteRouter =require('./site');
function route(app){
    app.use('/search',searchRouter)
    app.use('/',siteRouter)
}
module.exports=route