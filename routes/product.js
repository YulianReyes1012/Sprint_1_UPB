// const express = require('express'),
//   router = express.Router();

// var productController = require('../controllers/product');
// const multer = require('multer');
// const upload = multer();

// // get user lists
// router.get('/list', function(req, res) {
//   let sql = `SELECT * FROM users`;
  
//   db.query(sql, function(err, data, fields) {
//     if (err) throw err;
//     res.json({
//       status: 200,
//       data,
//       message: "Products lists retrieved successfully",
//       sql: sql
//     })
//   })
// });

// // create new user
// router.post('/new', function(req, res) {
//   let sql = `INSERT INTO products(idcategory, name, value, image) VALUES (?)`;
//   let values = [
//     req.body.idcategory,
//     req.body.name,
//     req.body.value,
//     req.body.image
//   ];
//   db.query(sql, [values], function(err, data, fields) {
//     if (err) throw err;
//     res.redirect('/listado');
//     // res.json({
//     //   status: 200,
//     //   message: "Usuario registrado satisfactoriamente"
//     // })
//   })
// });

// // delete user

// // router.delete('/users/:userId', (req, res) => {
// //   const userIndex = getUserIndex(req.params.userId)
 
// //   if (userIndex === -1) return res.status(404).json({})
 
// //   users.splice(userIndex, 1)
// //   res.json(users)
// //  })

// router.delete('/delete/:login', function(req, res){
//   let login = req.params.login;
//   let sql = `DELETE FROM users WHERE login='`+req.params.login+`'`;
//   console.log("sql", sql);

//   db.query(sql, function(err, data, fields) {
//     if (err) throw err;
    
//     res.json({
//       status: 200,      
//       message: "Usuario "+login+" eliminado satisfactoriamente"
//     });
//   });

  
// });

// router.post('/product', productController.uploadImg , productController.newProduct);


// module.exports = router;