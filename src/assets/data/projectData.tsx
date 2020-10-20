export const projectData: { title: string, description: string, imagePath: string, link: string }[] = [
  {
    title: 'Tweet311Denver',
    description: 'Tweet311Denver is a mobile application for the commuters of Denver Colorado. Tweet311 Denver allows you to fill out one form that will trigger processing from the city and county of Denver for whatever the issue might be, snow in the road, pot-holes, or an emergency. We realize that most users are checking Twitter for this up-to-date information so our app will take you directly to Twitter so you can keep your friends informed. Our goal is to keep the roads and walkways a safer place for everyone. The team at Tweet311Denver followed an agile workflow with mini-sprints over the course of two weeks. Our team used a GitHub projects board with issues that were tracked by every member of the team. This application took home second place at Turing School of Software and Designs demo competition!',
    imagePath: 'Test 1',
    link: 'https://www.youtube.com/watch?v=cad_aqusE_k&feature=share'
  },
  {
    title: 'Palette Picker',
    description: 'Palette Picker was a 12 day paired project with the goal of creating a RESTful API design and become familiar with the patterns associated with building a single app across multiple repositories. Of the challenges we encountered while building out this application understanding the relationship between front-end and backend was key. We were able to engineer a backend database using Postgres that was linked to our own front-end design. We were responsible for creating endpoints for GET, POST, PUT/PATCH, and DELETE. One major win was our ability to utilize the correct error codes and provide a solid level of error handling. We implemented 200, 201, 404, 422, and 500 status codes during Palette Picker. Another win was using a robust testing suite, we achieved almost 90% on both the back-end and front-end.',
    imagePath: 'Test 2',
    link: 'https://project-palette-selector.herokuapp.com/'
  },
  {
    title: 'FitLit',
    description: 'This paired project was completed in 10 days, the objective was to build out a data model to process several data sets and then to create a dashboard displaying user activity stats with great UI/UX. We implemented ES6 classes and a testing suite using TDD to build our data model. We implemented jQuery for our DOM manipulation and used ESLint for style guide accuracy. This project was focused on clean, DRY code and SRP, especially when building out the data model. Currently our project generates a random number to serve as a user id, then displays all activity information tied to that user. A major win for this project was our OOP design, after building the project to our MVP we were able to refactor and reuse methods to display the same information. Future iteration goals would implement a login page to determine a specific user as well adding customization to save the user\s organization of the draggable widgets.',
    imagePath: 'Test 3',
    link: 'https://fitness-is-litness.netlify.app/'
  },
  {
    title: 'Iso-Challenge',
    description: 'Iso-Challenge is an application intended for validating useless sports knowledge. During this project I was given the freedom to build something of my choosing, I was responsible for every step from wire-framing to deployment. On load the user will choose a team name and skill level, the user will have a list of current and past NBA players to choose from. The goal is to choose the group of players that produce the best statistics. The players and their stats are fetched recursively form an API, sorted by their position, and displayed for the user to select. Once the teams are chosen you are routed to a score board page that holds the total numbers for each stat for their respective team. The application will display a loading component when calculating the final score. This was a solo project created, tested, and deployed over 10 days. ',
    imagePath: 'Test 4',
    link: 'https://iso-challenge.netlify.app/'
  }
]