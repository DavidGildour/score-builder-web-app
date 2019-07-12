export const durationToNote = {
    0.015625: '64',
    0.03125: '32',
    0.046875: '32d',
    0.0625: '16',
    0.09375: '16d',
    0.125: '8',
    0.1875: '8d',
    0.25: 'q',
    0.375: 'qd',
    0.5: 'h',
    0.75: 'hd',
    1: 'w',
    1.5: 'wd',
};

export const noteToDuration = {
    '64': 0.015625,
    '32': 0.03125,
    '32d': 0.046875,
    '16': 0.0625,
    '16d': 0.09375,
    '8': 0.125,
    '8d': 0.1875,
    q: 0.25,
    qd: 0.375,
    h: 0.5,
    hd: 0.75,
    w: 1,
    wd: 1.5,
};

export const durToBeats = {
    'q': 1,
    'qd': 1.5,
    'h': 2,
    'hd': 3,
    'w': 4,
    'wd': 6,
    '8': 0.5,
    '8d': 0.75,
    '16': 0.25,
    '16d': 0.375,
    '32': 0.125,
    '32d': 0.1875,
    '64': 0.0625,
}
