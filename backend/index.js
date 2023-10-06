// 导入运行 HTTP 服务器的 Express
const express = require("express");
const cors = require("cors");
const axios = require('axios')

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
	const { username } = req.body;
	// Get or Create user on chat Engine!
	try {
		const r = await axios.put(
			"https://api.chatengine.io/users/",
			{ username: username, secret: username, first_name: username },
			{ headers: { "private-key": "2f9c4388-bc42-43d3-ab70-93e2327d1dd7" } },
		);
		return res.status(r.status).json(r.data);
	} catch (e) {
		return res.status(e.response.status).json(e.response.data);
	}
});

app.listen(3001);
