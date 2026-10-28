Shrushtii Website

1. Project Description

Shrushtii is a web application developed using HTML, CSS, and JavaScript. This project demonstrates the deployment of a web application using cloud-native technologies.

2. Technologies Used

- HTML
- CSS
- JavaScript
- Docker
- Nginx
- Amazon EC2
- Amazon ECR
- Amazon EKS
- GitHub Actions
- Argo CD

3. Project Files

- index.html: Website structure
- style.css: Website styling
- script.js: Website functionality
- Dockerfile: Container configuration

4. Run Locally

Open index.html in your web browser.

5. Run Using Docker

Build the Docker image:

docker build -t shrushtii-website .

Run the container:

docker run -d -p 8080:80 --name shrushtii shrushtii-website

Open http://localhost:8080 in your browser.

6. Cloud Deployment

The application will be containerized using Docker, stored in Amazon ECR, and deployed to Amazon EKS.

GitHub Actions will automate image building and publishing, while Argo CD will synchronize Kubernetes deployment manifests from GitHub.

7. Objective

To implement an end-to-end cloud-native deployment pipeline using AWS, Docker, Kubernetes, GitHub Actions, and Argo CD.
