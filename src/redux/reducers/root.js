/* eslint-disable object-shorthand */
import changeStave from './changeStave';
import { setField, addNoteToVoice, deleteNoteFromVoice } from '../actions';

const rootReducer = (state = {}, action) => {
    console.log('root', action);
    switch (action.type) {
        case 'SET_STAVE_FIELD': {
            const { id, field, value } = action.payload;
            return {
                ...state,
                staves: state.staves.map((stave, index) => {
                    if (index === parseInt(id, 10)) return changeStave(stave, setField({ field: field, value: value }));
                    return stave;
                }),
            };
        }
        case 'ADD_NOTE_TO_STAVE': {
            const { staveId, voiceId, note } = action.payload;
            return {
                ...state,
                staves: state.staves.map((stave, index) => {
                    if (index === parseInt(staveId, 10)) {
                        return changeStave(stave,
                                           addNoteToVoice({ voiceId: voiceId, note: note }));
                    }
                    return stave;
                }),
            };
        }
        case 'DELETE_NOTE_FROM_STAVE': {
            const { staveId, voiceId, noteId } = action.payload;
            return {
                ...state,
                staves: state.staves.map((stave, index) => {
                    if (index === parseInt(staveId, 10)) {
                        return changeStave(stave,
                                           deleteNoteFromVoice({ voiceId: voiceId, noteId: noteId }));
                    }
                    return stave;
                }),
            };
        }
        default: return state;
    }
};

export default rootReducer;