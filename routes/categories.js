const categoriesRouter = require('express').Router();

const { checkAuth } = require("../middlewares/auth.js");

const {
    findAllCategories,
    findCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    checkIsCategoryExists,
    checkEmptyName
} = require('../middlewares/categories')

const {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendCategoryDeleted
} = require('../controllers/categories')

categoriesRouter.get(
    '/categories',
    findAllCategories,
    sendAllCategories
);

categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );
  
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
  ); 

categoriesRouter.get(
    "/categories/:id",
    findCategoryById,
    sendCategoryById
);

categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
);



  
module.exports = { categoriesRouter };
