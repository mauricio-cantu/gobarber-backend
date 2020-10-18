import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const route = Router();

route.use('/appointments', appointmentsRouter);

export default routes;
