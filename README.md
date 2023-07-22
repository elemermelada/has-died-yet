# Is X dead yet?
> By Elemer San Miguel

### Description
Ever wondered if *that* famous person with a wiki page is still alive? Wanna keep track of multiple celebrities and their breathing status? Now, with `Is X dead yet?` it's easier than ever!!

### Features
 - Customizable list of celebrities ([people.json](api/people.json))
 - Web scraping from [Wikipedia](https://www.wikipedia.org/)
 - Intuitive and responsive UI

### Architecture
The code is presented in a monorepo scheme: 
 - The back-end can be directly deployed in a server with `php8`
 - The front-end (developed in `AngularJS`) can be build (using `ng build -c production`) and deployed separately
   - Env vars can be edited both for production and development in [envs](src/app/envs)
  
### Stack

<img src="https://raw.githubusercontent.com/patil-prajwal/Tech-Stack-Icons/main/Icons/php.svg" alt="php" style="display:inline;height:50px;"/> <img src="https://raw.githubusercontent.com/patil-prajwal/Tech-Stack-Icons/main/Icons/angular-icon.svg" alt="AngularJS" style="display:inline;height:50px;"/>

> Tested using `apache2`. Project completed in 2 days.
