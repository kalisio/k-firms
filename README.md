# k-firms

[![Latest Release](https://img.shields.io/github/v/tag/kalisio/k-firms?sort=semver&label=latest)](https://github.com/kalisio/k-firms/releases)
[![CI](https://github.com/kalisio/k-firms/actions/workflows/main.yaml/badge.svg)](https://github.com/kalisio/k-firms/actions/workflows/main.yaml)
[![Maintainability Issues](https://sonar.portal.kalisio.com/api/project_badges/measure?project=kalisio-k-firms&metric=software_quality_maintainability_issues&token=sqb_d044b63b439ae0a0ae504700f378a3da1840e0f3)](https://sonar.portal.kalisio.com/dashboard?id=kalisio-k-firms)
[![Coverage](https://sonar.portal.kalisio.com/api/project_badges/measure?project=kalisio-k-firms&metric=coverage&token=sqb_d044b63b439ae0a0ae504700f378a3da1840e0f3)](https://sonar.portal.kalisio.com/dashboard?id=kalisio-k-firms)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A [Krawler](https://kalisio.github.io/krawler/) based service to download data from the [Fire Information for Resource Management System (FIRMS)](https://wifire-data.sdsc.edu/dataset/viirs-i-band-375-m-active-fire-data).

## Description

The **k-firms** job allows to scrape data from the FIRMS using the following url: [https://firms.modaps.eosdis.nasa.gov/data/active_fire/suomi-npp-viirs-c2/csv/SUOMI_VIIRS_C2_Global_7d.csv](https://firms.modaps.eosdis.nasa.gov/data/active_fire/suomi-npp-viirs-c2/csv/SUOMI_VIIRS_C2_Global_7d.csv). The downloaded data are stored within a [MongoDB](https://www.mongodb.com/) database:
* the `firms` collection stores the Thermal Hotspots and Fire Activity data 

All records are stored in [GeoJson](https://fr.wikipedia.org/wiki/GeoJSON) format.

The job is executed according a specific cron expression. By default, every hour.

## Configuration

| Variable | Description |
|--- | --- |
| `DB_URL` | The mongoDB database URL. The default value is `mongodb://127.0.0.1:27017/kano` |
| `DEBUG` | Enables debug output. Set it to `krawler*` to enable full output. By default it is undefined. |

## Deployment

We personally use [Kargo](https://kalisio.github.io/kargo/) to deploy the service.

## Contributing

Please refer to [contribution section](./CONTRIBUTING.md) for more details.

## Authors

This project is sponsored by 

![Kalisio](https://s3.eu-central-1.amazonaws.com/kalisioscope/kalisio/kalisio-logo-black-256x84.png)

## License

This project is licensed under the MIT License - see the [license file](./LICENSE) for details
