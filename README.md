
> ✨ Bootstrapped with Create Snowpack App (CSA).

# Svelte + Typescript + Tailwind + Snowpack + Docker = 😻🥳
[Svelte]("http://svelte.dev/") is ultimately the best framework for building great web apps. "Birds of the same feathers flock together"

## Key Fetures

*  Develop faster, with a dev server that  starts up in 50ms or less. See changes reflected instantly in the browser with [Snowpack]("https://www.snowpack.dev/")
* Enjoy out-of-the-box support for [TypeScript]("https://www.typescriptlang.org/")
* Build great UI with [TailwindCSS]("https://tailwindcss.com/") 
* Quickly bootsrap new projects without NodeJS. Project dependencies are installed in the container using [pnpm]("https://pnpm.js.org/")

## Quick Start

#### 1. Clone the repo and cd into it ####
``` bash 
$ git clone https://github.com/Parables/sttsp-template <your_project_name>

$ cd <your_project_name>

```


#### 2.   Pull the image from Docker Hub #### 

``` bash 
$ docker pull parables95/sttsp-template
```

Or build the image locally using the Dockerfile

```
$ docker build -t <image-name> .
```


### 3. Launch the container ###
#### Windows:
```
docker run -it --name <container_name> -p 8080:8080 -v ${PWD}/src:/sveltedev/src -v ${PWD}/public:/sveltedev/public --init <name-of-image> sh
```
#### Linux
```
docker run -ti --name <container_name> -p 5000:5000 -p 35729:35729 -p 3572:3572 -v $(pwd)/src:/sveltedev/src -v $(pwd)/public:/sveltedev/public --init <name-of-image> sh
```
### 4. Start working  ###
Installing dependencies and start the dev server 
```
pnpm install
pnpm run start
```
Open http://localhost:8080 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### 4. Stop and resume your  containeer ###
To stop your session: press CTRL+C twice and ENTER in your terminal window. Then type `exit`. 
Once out of the container, type
```
docker stop <container_name>
```
To resume your session, just type:
```
docker start <container_name>
docker exec -it <container_name> sh
```
once inside the container, run
```
pnpm run start
``` 
To run tests, once inside the container, run
```
pnpm test
```
To build your app for production
```
 pnpm run build
```

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/pikapkg/snowpack/tree/master/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
