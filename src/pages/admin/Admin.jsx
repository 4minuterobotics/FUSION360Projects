/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
	const [author, setAuthor] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [entries, setEntries] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post('/api/entries', { author, title, description });
			// Fetch entries after adding a new one
			fetchEntries();
		} catch (error) {
			console.error('Error adding entry:', error);
		}
	};

	const fetchEntries = async () => {
		try {
			const response = await axios.get('/api/entries');
			setEntries(response.data);
		} catch (error) {
			console.error('Error fetching entries:', error);
		}
	};

	useEffect(() => {
		fetchEntries(); // Load existing entries when component mounts
	}, []);

	return (
		<div>
			<h2>Admin Page</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Author:
					<input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} required />
				</label>
				<br />
				<label>
					Title:
					<input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
				</label>
				<br />
				<label>
					Description:
					<textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
				</label>
				<br />
				<button type='submit'>Add Entry</button>
			</form>

			<div>
				<h2>Existing Entries</h2>
				{entries.map((entry, index) => (
					<div key={index}>
						<h1>{entry.title}</h1>
						<h2>{entry.author}</h2>
						<p>{entry.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Admin;
