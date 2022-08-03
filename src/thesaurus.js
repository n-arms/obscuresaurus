const parseThesaurus = plainText => {
    const thesaurus = new Thesaurus()

    plainText.split("\n").forEach(line => {
        if (line.length > 0) {
            const lineJson = JSON.parse(line)
            const word = lineJson.word
            const synonyms = lineJson.synonyms

            synonyms.forEach(synonym => thesaurus.addSynonym(word, synonym))
        }
    })

    return thesaurus
}

class Thesaurus {
    constructor() {
        this.dict = {}
    }

    lookupWord(word) {
        return this.dict["_" + word]
    }

    addSynonym(word, synonym) {
        const key = "_" + word
        if (this.dict[key]) {
            this.dict[key].push(synonym)
        } else {
            this.dict[key] = [synonym]
        }
    }
}

export {Thesaurus, parseThesaurus}
