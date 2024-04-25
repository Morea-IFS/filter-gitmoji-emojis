import emojisData from "./emoji.json" assert { type: "json" }
import gitmojiEmojis from "./gitmoji-emojis.json" assert { type: "json" }
import { writeFile } from "fs"

const emojis = emojisData.emojis

function filterEmojis(emojis, gitmojiEmojis) {
	let filteredEmojis = []

	for (let i = 0; i < emojis.length; i++) {
		for (let x = 0; x < gitmojiEmojis.length; x++) {
			if (emojis[i]["shortname"] === gitmojiEmojis[x]["shortname"]) {
				filteredEmojis.push(emojis[i])
			}
		}
	}

	writeFile("filtered-emojis.json", JSON.stringify(filteredEmojis), () => {})
}

filterEmojis(emojis, gitmojiEmojis)
