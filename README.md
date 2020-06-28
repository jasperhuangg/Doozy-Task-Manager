# Doozy Task Manager
A task manager app written with the Express.js, React.js, Node.js, and MongoDB inspired by TickTick. The app is complete functionality-wise and is ready to be used. I'd still like to work on the styling for a few items and responsiveness.
## Setup
1. Clone the repo, ```cd``` into the ```api``` folder, and run ```npm start```.
2. In a new terminal window, ```cd``` into the ```client``` folder and run ```npm run build```. 
3. Run ```serve -s build``` in this same directory
4. The app should now be hosted at http://localhost:5000.
## Features
- Keyword Parsing: Set todo item priorities and due dates in real time as you type their titles. Adding 'Get groceries !high tmr' adds a high priority item called 'Get groceries' that is due tomorrow. Can be enabled or disabled for either due dates or priorities in the settings menu.
- Item Sorting: Settings to affect item sorting based on their due dates and priorities; completely changes how you use the app.
- Real-time MongoDB Integration: Any changes made to any todo items are updated in the database in real-time.
- Google OAuth
- RSA Encrytion of User Information
- Cookies to Maintain User Login State
- Numerous other features which improve user experience.
