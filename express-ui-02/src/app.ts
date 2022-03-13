import createError from 'http-errors';
import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { CustomError } from './shared/errors';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

// view engine setup
const basedir = path.resolve(__dirname, '..');
app.set('views', path.join(basedir, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(basedir, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((err: Error | CustomError, _: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.use((err: Error | CustomError, req: Request, res: Response) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
    return res.status(status).json({
            error: err.message,
        });
});

export default app;
