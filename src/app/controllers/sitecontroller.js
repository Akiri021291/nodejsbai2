class SiteController{
    //get home 
    home(rep,res) {
        res.render('home');
    };
    test(rep,res) {
        res.send('trang test ');
    };
}
module.exports=new SiteController
