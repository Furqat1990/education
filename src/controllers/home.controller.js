class Home {
    home_page(req, res) {
        res.render('main/home', {req:'home'});
    }
}

export default new Home();