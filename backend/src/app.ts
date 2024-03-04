import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import config from './config';
import globalErrorhandler from './app/middlewares/globalErrorHandler';
import { routes } from './app/routes';
import { RedirectController } from './app/modules/redirect/redirect.controller';
import { deleteExpireLinks } from './utils/delete-cron';

const app: Application = express();

app.get('/', (req, res) => {
  res.send(`<p>Tiny Link server running on PORT ${config.port}</p>
  <a href="${config.frontend_url}">visit frontend</a>
  `);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.use('/:shortLink', RedirectController.redirectToOriginalLink);

// Run the expireLinks function periodically (e.g., once a day)
setInterval(
  async () => {
    await deleteExpireLinks();
  },
  24 * 60 * 60 * 1000,
); // Run every 24 hours

// middleware
app.use(globalErrorhandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
