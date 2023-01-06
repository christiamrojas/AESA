create table tb_login(
    id int not null auto_increment primary key,
    name varchar(128) not null,
    role varchar(32) not null,
    email varchar(64) not null,    
    password varchar(64) not null
);


insert into tb_login (name,role,email,password) values('Christiam Rojas','admin','crojas@diacsa.com','17diacsa');