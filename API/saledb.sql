create table category(
	id serial,
	name text,
	primary key(id)
);

create table product(
	id serial,
	cate_id int,
	name text,
	price dec(10,2),
	description text,
	primary key(id),
	foreign key (cate_id) references category(id)
);

create table users(
	id serial,
	username text,
	password text,
	email text,
	role int default 0,
	primary key(id)
);

create table cart(
	id serial,
	userid int,
	buydate date,
	info text,
	primary key(id),
	foreign key (userid) references users(id)
);

create table cartitem(
	id serial,
	quantity int,
	productid int,
	cartid int,
	primary key(id),
	foreign key (productid) references product(id),
	foreign key (cartid) references cart(id)
);

insert into category(name) values ('Thit'),('Ca'),('Rau cu'), ('Trai cay');

insert into product(cate_id, name, price, description) values 
(2, 'Ca A', 50000, 'Mo ta'),
(2, 'Ca B', 90000, 'Mo ta'),
(1, 'Thit C', 100000, 'Mo ta'),
(3, 'Rau cai', 15000, 'Mo ta'),
(3, 'Rau E', 20000, 'Mo ta');

insert into users(username, password, email) values
('Khanh', '123456', 'abc@gmail.com'),
('Hoang', '123456', 'def@gmail.com');