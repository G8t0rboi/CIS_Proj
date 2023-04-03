By default the frontend should run without any issues. The backend is where there needs work to be done.

In order for the backend to run, you must install the oracle instant client on your laptop. Then in server.js you have to change where the libDir is pointing to
and point it to wherever your instant client is located.

Then you have to insert your own UF CISE Oracle credentials in server.js

By then everything should be ready to run.


In order to start the front end, go to terminal, command prompt, etc. and cd into the frontend folder. Then you can type "npm start"

Similarly, to start the back end cd into the backend folder and type "npm run dev"
