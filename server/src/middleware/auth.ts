import * as express from 'express';

export const auth = (request: express.Request, response: express.Response, next: express.NextFunction) => {
  if(request.isAuthenticated()) {
    next()
  } else {
    return response.redirect('/login')
  }
}
