-- Instructions
-- Get a list of all film languages.
SELECT * FROM language;
-- Get a list of all films joined with their languages – select the following details :
--  film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.
-- Get all languages, even if there are no films in those languages.
SELECT title, description, name FROM film f INNER JOIN language l ON l.language_id = f.language_id;
SELECT title, description, name FROM film f LEFT JOIN language l ON l.language_id = f.language_id;
SELECT title, description, name FROM film f RIGHT JOIN language l ON l.language_id = f.language_id;
-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (id SERIAL, name VARCHAR(50))
INSERT INTO new_film (name) VALUES ('Kill Bill, volume 1'), ('Kill Bill, volume 2');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

CREATE TABLE customer_review (review_id SERIAL PRIMARY KEY, film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
							  language_id INTEGER REFERENCES language(language_id),
							  title VARCHAR(50), score INTEGER CHECK(score BETWEEN 1 AND 10),
							  review_text TEXT, last_update DATE);

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) 
VALUES (1, 1, 'Outstanding!', 10, 'Amazing work by Tarantino. Thurman"s work is a masterpiece!', '17-06-2022'),
(2, 2, 'ok!', 5, 'ok work by Tarantino. Thurman"s work is a masterpiece!', '17-06-2022');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE film_id = 2;
-- the review was deleted completely.

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film SET language_id = 2 WHERE film_id IN (35, 41, 67);
-- Which foreign keys (references) are defined for the customer table? 
-- address_id
-- How does this affect the way in which we INSERT into the customer table?

-- in order to create a new customer, id have to first create the address in the address table, 
-- only then create the customer with the proper address id.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- it was simple, because it is not referenced to other tables.

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT (rental_id) FROM rental WHERE return_date IS NULL;
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT title, rental_rate, return_date FROM film f INNER JOIN inventory i ON f.film_id = i.film_id
INNER JOIN rental r ON r.inventory_id = i.inventory_id WHERE return_date IS NULL
ORDER BY rental_rate DESC LIMIT 30;
-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies,
--  but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT f.film_id, title, description FROM film f INNER JOIN film_actor fa ON f.film_id = fa.film_id  
INNER JOIN actor a ON fa.actor_id = a.actor_id WHERE a.first_name='Penelope' AND a.last_name='Monroe' 
AND POSITION (LOWER('sumo wrestler') in LOWER(f.description)) !=0 ;
-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT f.film_id, title, description FROM film f INNER JOIN film_category fc ON f.film_id = fc.film_id  
INNER JOIN category c ON fc.category_id = c.category_id WHERE c.name='Documentary' 
AND f.rating = 'R' AND f.length < 60;
-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental,
--  and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title,rental_rate FROM film f INNER JOIN inventory i ON f.film_id = i.film_id INNER JOIN rental r 
ON i.inventory_id = r.inventory_id INNER JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND r.return_date BETWEEN '28/07/2005' AND '01/08/2005'
AND f.rental_rate > 4;
-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat”
--  in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT title, description, replacement_cost FROM film f INNER JOIN inventory i ON f.film_id = i.film_id
INNER JOIN rental r ON i.inventory_id = r.inventory_id INNER JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;
