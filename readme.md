# Start api

    cd api
    npm i -g express
    npm i
    MOVIES_API_KEY=85db0997e1f5569002d475f0f4ed9325 node bin/www 

# Start expo
  Run

    npm start

  Firtly, change in settings.js file the path for the previously started api
  
  If running in android simulator, one should use:

    0.0.0.0:3000/
  
  If running on IOS simulator, use 

    http://localhost:3000/

  If running on device, use your local IP.
  After, run

    npm start
  
# Testing

  To run tests, use 

    npm run test