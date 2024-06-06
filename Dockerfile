FROM nginx
COPY nginx.local.conf /etc/nginx/conf.d/default.conf
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]

# For development environment. Run frontend server, run backend, execute the
# following commands and navigate to http://localhost:81
# docker build -t nginxserver . && docker run -p 81:81 nginxserver:latest
