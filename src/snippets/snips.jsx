<div className='iconBar my-3'>
    <h1>Contacts summary</h1>
    <Link to={`/newcontactform`} className="" > <FaPlusCircle className='icon' /></Link>
</div>



//Update contact
app.put("/contact/:id", async (req, res) => {
	const {first_name, last_name, address_1, address_2,address_3,address_4, eircode, mobile, email, notes, password, created_on, last_login} = req.body;
	const id = req.params.id;
	try {
		const updatePerson = await pool.query(
			'UPDATE contact SET \
			("first_name", "last_name", "address_1", "address_2","address_3", "address_4", "eircode", "mobile", "email", "notes", "password", "created_on", "last_login") = \
			($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) \
			WHERE id = ' + id,
			[first_name, last_name, address_1, address_2,address_3,address_4, eircode, mobile, email, notes, password, created_on, last_login]
			);
		res.json("person was updated");
	} catch (err) {
		console.error('something is not working', err.message);
	}

})