class Search {
//get /search
search(rep,res) {
    res.render('search');
};
show(rep,res) {
    res.send('trang show ');
};

}
module.exports=new Search
