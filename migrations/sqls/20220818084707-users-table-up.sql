CREATE TABLE users (
  id serial PRIMARY KEY, 
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  password_digest varchar(150), 
  email varchar(100) NOT NULL UNIQUE,
  is_Active Boolean NOT NULL default 'true',
  created_At TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_At TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  google_Id VARCHAR (100),
  passwordResetExpires VARCHAR (150),
  passwordResetToken VARCHAR (150));
  