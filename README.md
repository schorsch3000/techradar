A library that generates an interactive radar, inspired by [thoughtworks.com/radar](http://thoughtworks.com/radar).

## How To Use

Create a csv file (fields separated by semicolon ';'), e.g. using Excel.
Give it at least the below column headers, and put in the content that you want:

| name          | ring   | quadrant               | isNew | description                                             |
|---------------|--------|------------------------|-------|---------------------------------------------------------|
| Composer      | adopt  | tools                  | TRUE  | Although the idea of dependency management ...          |
| Canary builds | trial  | techniques             | FALSE | Many projects have external code dependencies ...       |
| Apache Kylin  | assess | platforms              | TRUE  | Apache Kylin is an open source analytics solution ...   |
| JSF           | hold   | languages & frameworks | FALSE | We continue to see teams run into trouble using JSF ... |

### Building the radar

Adapt the site.js file to load your CSV-file if you do not want to name it `radar.csv`.
Execute `npm run dev` on your command line (Linux, OSX, ...) to build the radar and serve a web page at localhost:8080.

The application uses [webpack](https://webpack.github.io/) to package dependencies and minify all .js and .scss files.

## Contribute

All tasks are defined in `package.json`.

Pull requests are welcome; please write tests whenever possible.