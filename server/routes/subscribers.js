const express=require("express");
const router=express.Router();
const subController=require("../controllers/subscriberController");

// getting all
router.get("/",subController.getAll);
// getting one
router.get("/:id",subController.getOne);
// // creating one
router.post("/",subController.createOne);
// // updating one
// router.patch("/:id",subController.updateOne);
// // deleting one
// router.delete("/:id",subController.deleteOne);




module.exports=router;