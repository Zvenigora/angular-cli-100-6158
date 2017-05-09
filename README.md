# Sample (Angular-CLI issues of #6158, 5064)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server (Angular-CLI v1.0.0)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application should display ballons image and content of sample json file like below

[ { "name": "John Doe", "id": 1, "value": 15, "items": [ 1, 2, 3, 4 ] } ]

## Development server (Angular-CLI v1.0.1 and v1.0.2)

Please upgrade to version 1.0.1 or 1.0.2. Development server returns 404.

## Services and Components

ConfigService returns URL to JSON file. Please note that in all versions Angular-CLI after beta-31 we have to prefix the path with 'src'(issue #5064).

BaseDataService performs HTTP Get.

SampleService inherited from BaseDataService gets data from sample json file src\app\data\sample-data.json.

SampleComponent displays data from the json file and the image.

