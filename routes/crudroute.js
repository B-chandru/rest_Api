const router = require("express").Router();
const crudCtrl = require("../controller/crud");

// CRUD
router.route("/")
.get(crudCtrl.getCrud)
.post(crudCtrl.postCrud)

router.route('/:id')
.delete(crudCtrl.deleteCrud)
.put(crudCtrl.updateCrud)
.get(crudCtrl.getbyidCrud)




module.exports = router;