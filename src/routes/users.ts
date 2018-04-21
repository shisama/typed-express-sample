import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource');
});

router.get('/:user_id', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send(req.params.user_id);
});

module.exports = router;
