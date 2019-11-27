/* eslint-disable object-shorthand */
export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_CLEF': {
            // console.log(action);
            const { clef } = action.payload;
            return {
                ...state,
                clef: clef,
            };
        }
        case 'CHANGE_PITCH': {
            // console.log(action);
            const { keys } = action.payload;
            return {
                ...state,
                keys: keys,
                modifiers: state.modifiers.map((e, i) => {
                    const newAcc = keys[i].match(/[#b]+/);
                    const oldAcc = e.match(/[#b]+/);
                    const newMods = oldAcc === null ? e + (newAcc || '') : e.replace(oldAcc[0], newAcc === null ? '' : newAcc[0])
                    return newMods === null ? '' : newMods;
                }),
            };
        }
        case 'CHANGE_DURATION': {
            const { duration } = action.payload;
            let newModifiers;
            if (duration.includes('d')) {
                newModifiers = state.modifiers.map(mod => mod.includes('.') ? mod : mod + '.');
            } else {
                newModifiers = state.modifiers.map(mod => mod.replace('.', ''));
            }
            return {
                ...state,
                duration: duration,
                modifiers: newModifiers,
                persistent: true,
            }
        }
        case 'MAKE_REST': {
            return {
                ...state,
                duration: state.duration + 'r',
                persistent: false,
            }
        }
        case 'MAKE_NOT_REST': {
            return {
                ...state,
                duration: state.duration.replace('r', ''),
                persistent: true,
            }
        }
        default: return state;
    }
};
