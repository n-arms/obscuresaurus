import {Thesaurus, parseThesaurus} from './thesaurus.js'
import {findSimilarWords} from './search.js'
import {renderSynonymTree} from './render.js'

(async () => {
    const thesaurusText = await fetch('./resources/thesaurus.jsonl').then(resp => resp.text())
    const thesaurus = parseThesaurus(thesaurusText)

    const baseWordFieldNode = document.getElementById("base-word-field")
    const synonymsNode = document.getElementById("synonyms")

    const render = () => {
        const baseWord = baseWordFieldNode.value
        const synonyms = findSimilarWords(baseWord, thesaurus, 2)
        const synonymTreeNode = renderSynonymTree(synonyms, word => {
            baseWordFieldNode.value = word
            render()
        })
        synonymsNode.innerHTML = ""
        synonymsNode.appendChild(synonymTreeNode)
    }

    baseWordFieldNode.addEventListener("change", render)
})()
