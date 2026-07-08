-- Database seed file for initializing data in PostgreSQL / SQLite databases
INSERT INTO market_prices (crop, mandi, price, trend, date) VALUES 
('Wheat', 'Lucknow Mandi', 2450.0, 'Up', CURRENT_TIMESTAMP),
('Rice', 'Lucknow Mandi', 2150.0, 'Stable', CURRENT_TIMESTAMP),
('Mustard', 'Lucknow Mandi', 5450.0, 'Up', CURRENT_TIMESTAMP),
('Wheat', 'Kanpur Mandi', 2480.0, 'Up', CURRENT_TIMESTAMP);
