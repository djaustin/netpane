# Netpane
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![Image Size](https://img.shields.io/docker/image-size/daustin/netpane)](https://hub.docker.com/repository/docker/daustin/netpane)
[![Maintainability](https://api.codeclimate.com/v1/badges/61b7b1623a37e38f0f3f/maintainability)](https://codeclimate.com/github/famous-warplane/netpane/maintainability)

A simplistic view of Netbox IPAM. Like a box but without the depth.

## Features

- Light/dark mode toggle
- Site summary
- Cross-site search
- View and edit in Netbox

  
## Deployment

To deploy this project, pull the Docker image and run it with the right environment variables to connect to a Netbox instance.

### Running a container

The container runs on port 80 and requires the environment variables NETBOX_BASE_URL and NETBOX_API_TOKEN described below.

An example run command is:
```bash
  docker container run -p 8080:80 -e NETBOX_BASE_URL=http://netbox.local -e NETBOX_API_TOKEN=c51ac5bf08781ed980975db360fe1a999e3d7af4 daustin/netpane:latest
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/djaustin/netpane.git
```

Go to the project directory

```bash
  cd netpane
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

  
## Running Tests

To run tests, run the following command

```bash
  yarn test
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

`NETBOX_BASE_URL`: The base URL of the Netbox instance you wish to connect Netpane to. e.g. https://demo.netbox.app

`NETBOX_API_TOKEN`: A token providing read access to the Netbox API [see the Netbox docs for more details](https://netbox.readthedocs.io/en/stable/rest-api/authentication/)

  
## Tech Stack

**Client:** React, Chakra UI

**Server:** NextJS

  
## Authors

- [@djaustin](https://www.github.com/djaustin)

  