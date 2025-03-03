const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const port = 3000;

app.get("/api/data", (req, res) => {
	return res.json(data);
});

app
	.route("/api/data/:id")
	.get((req, res) => {
		const id = Number(req.params.id);
		const user = data.find((user) => {
			return user.id == id;
		});
		return res.json(user);
	})
	.patch((req, res) => {
		//edit user with id
		res.json({ status: "pending" });
	})
	.delete((req, res) => {
		//delete user with id
		return res.json({ status: "pending" });
	});
// app.post("/api/data", (req, res) => {
// 	//todo : create new user
// 	res.json({ status: "pending" });
// });
// app.patch("/api/data/:id", (req, res) => {
// 	//todo : update the user
// 	res.json({ status: "pending" });
// });
// app.delate("/api/data/:id", (req, res) => {
// 	//todo : delete user with id
// 	res.json({ status: "pending" });
// });
// app.get("/data", (req, res) => {
// 	const html = `
//     <ul>
//    ${data.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
//     </ul>
//     `;
// 	res.send(html);
// });

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
