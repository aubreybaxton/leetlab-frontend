


export const getLanguageId = (language) => {
    const languageMap = {
        "PYTHON": 71,
        "JAVA": 62,
        "JAVASCRIPT": 63,
    }
    return languageMap[language.toUpperCase()]
    //using square bracket because the object keys are in "" format
}

export function getLanguageName (languageId){
    const languageName = {
        74: "TypeScript",
        63: "JavaScript",
        71: "Python",
        62: "Java",
    }
    return languageName[languageId] || "Unknown"
}