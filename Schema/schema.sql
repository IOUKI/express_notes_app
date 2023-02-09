create database notes_app;
use notes_app;

create table notes (
    id integer auto_increment,
    title varchar(225) not null,
    content text not null,
    created timestamp not null default now(),
    primary key (id)
);

insert into notes (title, content)
values
('first note', 'abcdefg'),
('second note', 'hijklmnop');