CREATE DATABASE zenit; 

CREATE SCHEMA zenit;

SET search_path TO zenit;

CREATE TABLE newsletter (
    id SERIAL NOT NULL,
    full_name VARCHAR(64),
    email VARCHAR(256),
    timestamp_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE location (
    id SERIAL PRIMARY KEY,
    location_name VARCHAR(32),
    image_description TEXT,
    price INTEGER CHECK (price >= 0 AND price <= 999),
    timestamp_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservation (
    id SERIAL PRIMARY KEY,
    location_id INTEGER REFERENCES location(id),
    email VARCHAR(256),
    phone_number VARCHAR(32),
    full_name VARCHAR(64),
    number_of_people INTEGER[],
    pass_type VARCHAR(20),
    number_of_days INTEGER CHECK (number_of_days >= 0),
    reservation_date DATE,
    total_amount INTEGER CHECK (total_amount >= 0 AND total_amount <= 999999),
    timestamp_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE ONLY reservation
    ADD CONSTRAINT fk_reservation_location FOREIGN KEY (location_id) REFERENCES location(id);


-- Inserting the provided location data
INSERT INTO location (location_name, image_description, price, timestamp_created)
VALUES
    ('Štrbské Pleso', 'images/loc01.jpg', 32, '2023-11-11 12:00:00'),
    ('Veľké Solisko', 'images/loc02.jpg', 30, '2023-11-11 12:00:00'),
    ('Kriváň', 'images/loc03.jpg', 28, '2023-11-11 12:00:00'),
    ('Končistá', 'images/loc04.jpg', 34, '2023-11-11 12:00:00'),
    ('Lomnický štít', 'images/loc05.jpg', 36, '2023-11-11 12:00:00'),
    ('Gerlachovský štít', 'images/loc06.jpg', 40, '2023-11-11 12:00:00');

INSERT INTO newsletter (full_name, email) VALUES
    ('John Doe', 'john.doe@example.com'),
    ('Jane Smith', 'jane.smith@example.com');

-- Inserting the provided reservation data
INSERT INTO reservation (location_id, email, phone_number, full_name, number_of_people, pass_type, number_of_days, reservation_date, total_amount, timestamp_created)
VALUES
    (1, 'p.novotny@zenit.sk', '0900 123 456', 'Peter Novotný', ARRAY[0,1,1,0], 'jednodňový', 1, '2023-12-01', 75, '2023-01-01 11:00:00'),
    (3, 'andrej.toth@zenit.sk', NULL, 'Andrej Toth', ARRAY[0,0,1,0], 'jednodňový', 1, '2023-12-05', 35, '2023-04-13 18:00:00'),
    (6, 'katarinaN@zenit.sk', '0900 654 321', 'Katarína Novohradská', ARRAY[0,0,2,0], 'viacdňový', 3, '2023-12-11', 85, '2023-03-01 09:00:00'),
    (2, 'osjo@zenit.sk', NULL, 'Oswald Johnson', ARRAY[0,1,1,0], 'jednodňový', 1, '2023-12-06', 76, '2023-10-21 11:00:00'),
    (1, 'tomas.krat@zenit.sk', NULL, 'Tomáš Krátky', ARRAY[0,0,1,0], 'viacdňový', 2, '2023-12-21', 40, '2023-04-05 18:00:00'),
    (5, 'p.novotny@zenit.sk', '0900 123 456', 'Peter Novotný', ARRAY[0,0,1,0], 'jednodňový', 1, '2023-12-21', 38, '2023-11-11 09:00:00'),
    (6, 'andrej.toth@zenit.sk', NULL, 'Andrej Toth', ARRAY[0,1,1,0], 'viacdňový', 5, '2023-12-25', 74, '2023-08-08 11:00:00'),
    (3, 'katarinaN@zenit.sk', '0900 654 321', 'Katarína Novohradská', ARRAY[0,0,2,0], 'jednodňový', 1, '2023-12-15', 82, '2023-11-05 18:00:00'),
    (2, 'osjo@zenit.sk', NULL, 'Oswald Johnson', ARRAY[0,1,1,0], 'sezónny', 0, '2024-01-01', 75, '2023-10-11 09:00:00'),
    (4, 'tomas.krat@zenit.sk', NULL, 'Tomáš Krátky', ARRAY[0,0,1,0], 'jednodňový', 1, '2024-01-01', 39, '2023-08-29 11:00:00');









