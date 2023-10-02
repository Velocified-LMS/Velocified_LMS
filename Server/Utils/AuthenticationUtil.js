const isAuthenticated = (req, res, next) => {
    console.log('Checking authentication...', req.session);

    if (!req.session.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};
  
module.exports = isAuthenticated;