import FileSaver from 'file-saver'

import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    //*checks if same prompt doesn't shows up twice
    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id.prompt}.jpg`)
}