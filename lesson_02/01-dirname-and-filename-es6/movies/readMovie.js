import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function readMovie() {
  const filePath = path.join(__dirname, 'movie.txt')
  const text = await fs.readFile(filePath, 'utf-8')
  console.log(text)
}

export default readMovie
