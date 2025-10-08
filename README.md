# WEXA_AI-Assignment
A simple static website to hold a static website (node.js)

# ---------------------------------------------

1. Prerequisites

- npm
- Docker
- Minikube
- GitHub

# --------------------------------------------

2 . Project Structure: 

# tree WEXA_AI-Assignment

WEXA_AI-Assignment
├── Dockerfile
├── README.md
├── kubernetes
│   ├── deployment.yml
│   └── service.yml
├── package-lock.json
├── package.json
└── pages
    ├── api
    │   └── hello.js
    └── index.js

<img width="531" height="341" alt="Folder structure" src="https://github.com/user-attachments/assets/872cda52-fbca-4731-b15a-aec0be7dc565" />

# --------------------------------------

3. Index.js To work locally
   
   npm install
   npm run dev -H 51.21.255.217 -p 3000

   <img width="1802" height="936" alt="Login page" src="https://github.com/user-attachments/assets/723e72f6-eecb-4ab1-bb41-8aba74703ff4" />

# -------------------------------------

4. Dockerfile.

    Write multistage Dockerfile.
    Check It works or not 

    <img width="700" height="482" alt="Screenshot 2025-10-08 142058" src="https://github.com/user-attachments/assets/61d2f516-9140-4019-bb80-30b0127732bc" />

# -----------------------------------

5. Test dockerfile on Push (GitHub workflows):

   Write Docker.yml (workflows) file by storing GitHub token in secret tab.
   Check Action page
   Check Package tab under profile.

   <img width="1608" height="458" alt="Screenshot 2025-10-08 142645" src="https://github.com/user-attachments/assets/d7772006-4f57-44fc-94fa-fcd78fed67d2" />

   <img width="1607" height="457" alt="Packages" src="https://github.com/user-attachments/assets/64bce65c-cd17-4b8e-97b4-79829b4aee64" />

# -------------------------------------

6. Manifest file.

   Based on Docker image write deployment file with readinessProbe and livenessProbe.
   Docker image URL (ghcr.io/syogesh26/nextjs-devops-app:latest)

   Run deployment file

   kubectl apply -f deployment.yml

   Check with

   kubectl get pods

   <img width="1760" height="877" alt="Login page" src="https://github.com/user-attachments/assets/26487e94-1e66-4969-b597-a63a32793cae" />
    




    

 


