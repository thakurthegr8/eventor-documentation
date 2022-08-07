---
sidebar_position: 2
---

## Register Apps On Azure AD

Get app registrations on azure active directory [portal.azure.com](https://portal.azure.com)

### 1. Register Admin App

1. Goto Azure Active Directory
2. Select App Registrations

![alt text](/img/installation/register_admin_app.png)

3. Select **Accounts in this organizational directory only (organization only - Single tenant)**
4. Click on **register**

5. After registration store

- **Application (client) ID**
- **Directory (tenant) ID**
  from registered app overview somewhere, this will be used in future.

![alt text](/img/installation/registered_admin_app_overview.png)

6. Click on **Add a certificate or secret**

![alt text](/img/installation/admin_create_secret.png)

7. Click on **New client secret**

![alt text](/img/installation/admin_add_secret.png)

8. Set secret **Description** and **Expiration** accordingly. Then click on **Add**.

![alt text](/img/installation/admin_secret_overview.png)

9. Store the **Value** somewhere, this will be used in future.

### 2. Register User App

Repeat the steps same as above but with name **eventor_user**

## Getting Domain Name

1. Add AName/CName records in domain name.
2. Register SSL certificate.
3. Set Callback URL.

## App Installation

### Configuring Admin App

1. Configure **.env** file

```javascript
OPENID_CLIENT_ID=admin_app_client_id
OPENID_CLIENT_SECRET=admin_app_client_secret
OPENID_ISSUER=open_id_issuer_microsoft
COOKIE_SECRET=your_cookie_secret
REDIS_URL=redis://redis_server:6379
REDIS_SECRET=randomvalues
AUTH_ENABLED=true
ENABLE_AUTH_LOGGING=true
SESSION_SAVE_UNINTIALIZED=true
PORT=8081
DB_HOST=your_database_host
DB_NAME=dituapp
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```

2. Then, Save.

### Configuring User App

1. Configure **.env** file

```javascript
PROD_DB_HOST = your_db_password;
PROD_DB_NAME = dituapp;
PROD_DB_PORT = 5432;
PROD_DB_USER = your_db_user;
PROD_DB_PASSWORD = your_db_password;
NEXT_PUBLIC_AZURE_AD_CLIENT_ID = user_app_client_id;
NEXT_PUBLIC_AZURE_AD_TENANT_ID = user_app_tenant_id;
AZURE_AD_CLIENT_ID = user_app_client_id;
AZURE_AD_CLIENT_SECRET = user_app_client_secret;
AZURE_AD_TENANT_ID = user_app_tenant_id;
NEXTAUTH_URL = app_hosted_url;
```
2. Then, Save.

### Configuring Docker Compose File

![alt text](/img/installation/parent_directory_structure.png)

1. Open **docker-compose.yml** file and then configure.

```yaml
version: '2'
services:
  eventor-verifier-member-app:
    build: ./apps/eventor-verifier-member-app
    depends_on: 
      - postgres
    ports:
     - "8001:3000"
  eventor-admin-portal:
    build: ./apps/eventor-admin-portal/
    depends_on: 
      - postgres
      - redis
    environment:
     OPENID_CLIENT_ID: admin_app_client_id
     OPENID_CLIENT_SECRET: admin_app_client_secret
     OPENID_ISSUER: open_id_issuer_microsoft
     REDIS_URL: redis://redis:6379
     REDIS_SECRET: randomvalues
     AUTH_ENABLED: 'true'
     ENABLE_AUTH_LOGGING: 'true'
     SESSION_SAVE_UNINTIALIZED: 'false'
     PORT: 8080
     DB_HOST: postgres
     DB_NAME: dituapp
     DB_PORT: 5432
     DB_USER: docker
     DB_PASSWORD: docker
    ports:
     - "8000:8080"
    volumes:
     - .:/usr/src/app
  
  redis:
    image: "redis:alpine"

  postgres:
    image: postgres:13.1
    healthcheck:
      test: [ "CMD", "pg_isready", "-q", "-d", "postgres", "-U", "root" ]
      timeout: 45s
      interval: 10s
      retries: 10
    restart: always
    environment:
      - POSTGRES_USER=root
      - POSTGRES_PASSWORD=password
      - APP_DB_USER=dituapp
      - APP_DB_PASS=docker
      - APP_DB_NAME=docker
      - SCHEMA_NAME=buildathon
    volumes:
      - ./apps/eventor-database/postgres-data:/var/lib/postgresql/data
      - ./apps/eventor-database/db:/docker-entrypoint-initdb.d/
    ports:
      - 5432:5432
  admin:
    image: adminer
    restart: always
    depends_on: 
      - postgres
    ports:
      - 8080:8080
```
### Installing Docker Compose

For docker-compose to work you need to have docker installed on your pc.

- For **[Linux](https://docs.docker.com/desktop/install/linux-install/)**

- For **[Mac](https://docs.docker.com/desktop/install/mac-install/)**

- For **[Windows](https://docs.docker.com/desktop/install/windows-install/)**

### Running Apps

1. Open terminal.

2. Run command **`docker compose up -d`** .