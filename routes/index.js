
/*
 * GET home page.
 */

var brand = 'George Thomas';

exports.index = function(req, res){
  res.redirect('/home');
}

exports.home = function(req, res){
  res.render('home', { title: 'Home', id: 'home', brand: brand })
};

exports.about = function(req, res){
  res.render('about', { title: 'About', id: 'about', brand: brand })
};

exports.work = function(req, res){
  res.render('work', { title: 'work', id: 'work', brand: brand })
};