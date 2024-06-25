// const express = require('express');
// const { getAllUsers, getAllContacts } = require('../controllers/admin-controller'); // Combined import
// // const authMiddleware = require("../middlewares/auth-middleware")
// const adminMiddleware = require ("../middlewares/admin-middleware");
// const router = express.Router();

// router.route('/users').get( adminMiddleware , getAllUsers);
//  router.route('/contacts').get( getAllContacts);

// module.exports = router;

const express = require('express');
const { getAllUsers, getAllContacts } = require('../controllers/admin-controller');
const router = express.Router();

router.get('/users', getAllUsers); // Removed middleware for debugging
router.get('/contacts', getAllContacts); // Removed middleware for debugging

module.exports = router;
