import {Thesaurus, parseThesaurus} from './thesaurus.js'
import {findSimilarWords} from './search.js'

(async () => {
    const thesaurusText = await fetch('./resources/thesaurus.jsonl').then(resp => resp.text())

    const thesaurus = parseThesaurus(thesaurusText)

    console.log(findSimilarWords('high', thesaurus, 2))
})()
