import validationMiddleware from "../middleware/validation.middleware";
import CreateProgramDto from "../dto/program.dto";
const { Router } = require('express');
const { createProgram, getAllPrograms, getProgramById, modifyProgram, deleteProgram } = require('../controllers/program.controller');

const path = '/programs';
const router = Router();

router.post('/users/:id/programs', validationMiddleware(CreateProgramDto), createProgram);
router.get(path, getAllPrograms);
router.get(`${path}/:id`, getProgramById);
router.patch(`${path}/:id`, validationMiddleware(CreateProgramDto, true), modifyProgram);
router.delete(`${path}/:id`, deleteProgram);

module.exports = router;
