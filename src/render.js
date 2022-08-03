const renderSynonymTreeWith = (rootNode, margin, synonyms, rerender) => {
    for (const word in synonyms) {
        const wordNode = document.createElement("button")
        wordNode.style.marginLeft = `${margin * 20}px`
        wordNode.innerHTML = word
        wordNode.onclick = () => rerender(word)
        rootNode.appendChild(wordNode)

        renderSynonymTreeWith(rootNode, margin + 1, synonyms[word], rerender)
    }
}

const renderSynonymTree = (synonyms, rerender) => {
    const synonymRoot = document.createElement("div")
    synonymRoot.style.display = "flex"
    synonymRoot.style.flexDirection = "column"

    renderSynonymTreeWith(synonymRoot, 0, synonyms, rerender)
    return synonymRoot
}

export {renderSynonymTree}
