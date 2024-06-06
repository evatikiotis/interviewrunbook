# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src
# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

## start app
ENTRYPOINT ["npm", "run", "build"]

# docker build -t surveyswebapp . && docker run -p 3000:3000 surveyswebapp:latest
# docker commit ccc60cec2776 vaggelas/bjj-master:bjjsurveyv1
# docker push surveyswebapp vaggelas/bjj-master:bjjsurveyv1

# docker cp 8f34962f8801:/usr/src ./static-pages
