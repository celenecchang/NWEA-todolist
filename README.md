
# How to run the application
- npm install 
- npm run build, the application will open automatically on localhost:8080


# How to test
- npm run test in the terminal to run tests


# Methodolody and reasoning 
- I wanted to follow test driven development process and start by writing the unit tests for the functions first, before writing any of the functionality for the to do list. This was to try as much as possible to eliminate any biases if test were to be written after. It also allowed me to better understand the problems and how best to approach them. The unit tests are located in the test.js file. 

-OOP. The core functionality of the to do list is in the list.js file. I chose to approach this using OOP, in order to organize the functions more easily. Although JS is a prototype based language, we can still utilize OOP principles with constructors. It allowed me to break up the functionality into bits and encapsulate them into a single unit and reduce redundancy in the code, while still keeping it flexible and modular.

-UI. I'm comfortable with quickly prototyping projects in React so I chose to use React on top of the working OOP logic. Although React doesn't necessarily mesh well with OOP, it was still beneficial in this instant because it allowed me to break up the parts into components and modularized the code. However some of the tradeoffs came in terms of reusing stateful logic. React is much better suited for pure functions that don't mutate, while the OOP methods directly mutated the array.  Therefore I pieced together some of the code in ways I usually wouldn't have in order for it to run. If I were to change my approach the next time, I would most likely stick with vanilla JavaScript.


