# ☁️ AWS Serverless Cloud Notes App

A fully serverless 3-tier web application built using AWS cloud-native services. The application allows users to create, view, edit, and delete notes without managing any servers.

## 📌 Project Overview

The Cloud Notes App demonstrates how frontend, API, backend, and database services can be integrated using a serverless architecture on AWS.

Users can:

- Create new notes
- View saved notes
- Edit existing notes
- Delete notes
- Store notes persistently in Amazon DynamoDB

## 🏗️ Architecture

User → Amazon S3 → Amazon API Gateway → AWS Lambda → Amazon DynamoDB

### Three-Tier Architecture

| Tier | AWS Service | Purpose |
|---|---|---|
| Presentation Tier | Amazon S3 | Hosts the HTML, CSS, and JavaScript frontend |
| Application Tier | API Gateway and AWS Lambda | Handles API requests and application logic |
| Database Tier | Amazon DynamoDB | Stores notes persistently |

## 🛠️ Technologies Used

- Amazon S3
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- AWS IAM
- Python
- HTML
- CSS
- JavaScript

## ✨ Features

- Create new cloud notes
- View all saved notes
- Edit existing notes
- Delete notes
- Persistent NoSQL data storage
- RESTful API operations
- Responsive web interface
- CORS-enabled frontend and API integration
- Fully serverless architecture
- No EC2 instances required

## 🔗 API Endpoints

| HTTP Method | Endpoint | Operation |
|---|---|---|
| GET | `/notes` | Retrieve all notes |
| POST | `/notes` | Create a new note |
| PUT | `/notes/{noteId}` | Update an existing note |
| DELETE | `/notes/{noteId}` | Delete a note |

## 🔄 Application Workflow

1. The user accesses the frontend hosted on Amazon S3.
2. JavaScript sends an HTTP request to Amazon API Gateway.
3. API Gateway invokes the AWS Lambda function.
4. Lambda processes the request using Python.
5. Lambda reads from or writes data to Amazon DynamoDB.
6. The result is returned to the frontend through API Gateway.

## 🔐 Security

- AWS IAM roles provide permissions between Lambda and DynamoDB.
- CORS is configured in API Gateway.
- The application uses serverless managed AWS services.

## 📂 Project Structure

```text
aws-serverless-cloud-notes-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
