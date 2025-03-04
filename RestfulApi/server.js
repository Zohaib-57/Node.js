const express = require("express");
const fs = require("fs");
const data = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/api/data", (req, res) => {
	return res.json(data);
});

app
	.route("/api/data/:id")
	.get((req, res) => {
		const id = Number(req.params.id);
		const user = data.find((user) => user.id === id);

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		return res.json(user);
	})
	.patch((req, res) => {
		//todo : edit user with id
		const id = Number(req.params.id);
		const userIndex = data.findIndex((user) => user.id === id);
	
		if (userIndex === -1) {
			return res.status(404).json({ error: "User not found" });
		}
	
		let body = "";
	
		// Manually parse incoming data without express.json()
		req.on("data", (chunk) => {
			body += chunk.toString();
		});
	
		req.on("end", () => {
			if (!body) {
				return res.status(400).json({ error: "Empty request body" });
			}
	
			try {
				const updates = JSON.parse(body.trim()); // Trim spaces to avoid parsing issues
				
				// Ensure updates is an object
				if (typeof updates !== "object" || updates === null || Array.isArray(updates)) {
					return res.status(400).json({ error: "Invalid JSON format, expected an object" });
				}
	
				data[userIndex] = { ...data[userIndex], ...updates };
	
				// Save updated data back to the file
				fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(data, null, 2));
	
				res.json({ status: "success", updatedUser: data[userIndex] });
			} catch (error) {
				res.status(400).json({ error: "Invalid JSON data" });
			}
		});
	}).delete((req, res) => {
		//todo : delete user with id
		const id = Number(req.params.id);
		const userIndex = data.findIndex((user) => user.id === id);

		if (userIndex === -1) {
			return res.status(404).json({ error: "User not found" });
		}

		const deletedUser = data.splice(userIndex, 1);

		// Save updated data back to the file
		fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(data, null, 2));

		res.json({ status: "success", deletedUser });
	});
app.post("/api/data", (req, res) => {
	//todo : create new user (Handling to be implemented later)
	const body = req.body;
	const newUser = { ...body, id: data.length + 1 };
	data.push(newUser);
	fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err) => {
		if (err) {
			return res.status(500).json({ error: "Failed to write data" });
		}
		return res.json({ status: "Success", id: newUser.id });
	});
});

// app.patch("/api/data/:id", (req, res) => {
// 	//todo : update the user
// 	res.json({ status: "pending" });
// });

// app.delete("/api/data/:id", (req, res) => {
// 	//todo : delete user with id
// 	res.json({ status: "pending" });
// });

app.get("/data", (req, res) => {
	const html = `
    <ul>
   ${data
			.map((user) => `<li>${user.first_name} ${user.last_name}</li>`)
			.join("")}
    </ul>
    `;
	res.send(html);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
