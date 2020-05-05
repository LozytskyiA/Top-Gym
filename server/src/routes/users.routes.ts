import validationMiddleware from "../middleware/validation.middleware";
import CreateUserDto from "../dto/user.dto";
import { auth } from '../middleware/auth';
const { Router } = require('express');
const { createUser, getAllUsers, getUserById, modifyUser, deleteUser } = require('../controllers/user.controller');

const path = '/users';
const router = Router();

router.post(path, validationMiddleware(CreateUserDto), createUser);
router.get(path, auth, getAllUsers);
router.get(`${path}/:id`, auth, getUserById);
router.patch(`${path}/:id`, validationMiddleware(CreateUserDto, true), modifyUser);
router.delete(`${path}/:id`, deleteUser);

module.exports = router;
