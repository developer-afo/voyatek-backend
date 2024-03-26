# Voyatek Backend

## Server Requirements
- PHP version 5.6 or newer is recommended.
- MySQL database

## Setup Steps

1. **Clone the Repository**
    ```bash
    git clone https://github.com/developer-afo/voyatek-backend
    ```

2. **Create a Database**
   - Create a MySQL database named `voyateckdb`.

3. **Set Database Credentials**
   - Navigate to `application/config/database.php`.
   - Set your MySQL database credentials.

4. **Run the Code**
   - Execute the following command to run the server:
     ```bash
     php -S localhost:7070
     ```
   - If you use a different port, remember to update the base URL in `application/config/config.php`.

## Note
- Ensure PHP version 5.6 or newer is installed.
- MySQL database is required.
- Adjust the port number in `application/config/config.php` if using a port other than 7070.