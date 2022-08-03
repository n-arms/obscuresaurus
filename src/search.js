const findSimilarWords = (word, thesaurus, depth) => {
    if (depth === 0) {
        return {}
    } else {
        const synonyms = thesaurus.lookupWord(word)
        if (!synonyms) {
            return {}
        }
        const tree = {}
        synonyms.forEach(syn => tree[syn] = findSimilarWords(syn, thesaurus, depth - 1))
        return tree
    }
}

export {findSimilarWords}
