// code your solution here

const saturdayFun = (something = "roller-skate") => {
    return `This Saturday, I want to ${something}!`;
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (adjective = "*") => { 
    return function (example = "special") {
        return `You are ${adjective}${example}${adjective}!`;
    }
}

