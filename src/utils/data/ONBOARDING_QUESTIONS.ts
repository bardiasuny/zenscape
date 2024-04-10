export default [
    {
        id: '1',
        question: 'What is your name?',
        key: 'name',
        placeholder: 'Enter your name',
        type: 'text',
    },
    {
        id: '2',
        question: 'What is your age?',
        placeholder: 'Enter your age',
        key: 'age',
        type: 'number',
    },
    {
        id: '3',
        question: 'What brings you to mindfulness practice?',
        key: 'reason',
        type: 'multi',
        options: [
            {
                value: 'To manage stress and anxiety',
                key: 'manageStress'
            },
            {
                value: 'To improve focus and concentration',
                key: 'improveFocus'
            },
            {
                value: 'Seeking a deeper connection with myself and others',
                key: 'deeperConnection'
            },
            {
                value: 'To improve sleep and relaxation',
                key: 'improveSleepAndRelaxation'
            }
        ]
    },
    {
        id: '4',
        question: 'How familiar are you with meditation?',
        key: 'experience',
        type: 'multi',
        options: [
            {
                value: "I've never tried it before",
                key: 'never'
            },
            {
                value: "I've meditated a few times",
                key: 'few'
            },
            {
                value: "I meditate regularly, but I'm not consistent",
                key: 'regularly'
            },
            {
                value: 'Meditation is a staple in my daily routine',
                key: 'always'
            }
        ]
    },
    {
        id: '5',
        question: 'What time of day do you prefer to meditate?',
        key: 'timeOfDay',
        type: 'multi',
        options: [
            {
                value: 'First thing in the morning to start my day right',
                key: 'morning'
            },
            {
                value: 'During lunch breaks to reset my mind',
                key: 'noon'
            },
            {
                value: 'In the evening to unwind after a long day',
                key: 'evening'
            },
            {
                value: 'Right before bed to help me sleep',
                key: 'night'
            }
        ]
    },
    {
        id: '6',
        question: 'What’s your preferred duration for a meditation session?',
        key: 'sessionDuration',
        type: 'multi',
        options: [
            {
                value: 'Quick and refreshing — under 5 minutes',
                key: 'short'
            },
            {
                value: 'A short pause — 5 to 15 minutes',
                key: 'medium'
            },
            {
                value: 'Deep dive — 15 to 30 minutes',
                key: 'long'
            },
            {
                value: 'Immersive experience — more than 30 minutes',
                key: 'extraLong'
            }
        ]
    },
    {
        id: '7',
        question: 'What type of guided meditations are you interested in?',
        key: 'meditationType',
        type: 'multi',
        options: [
            {
                value: 'Breathing exercises for relaxation',
                key: 'breathing'
            },
            {
                value: 'Visualization for manifesting goals',
                key: 'visualization'
            },
            {
                value: 'Body scans for physical awareness',
                key: 'bodyScan'
            },
            {
                value: 'Mindful walking for active meditation',
                key: 'walking'
            }
        ]
    },
    {
        id: '8',
        question: 'How would you describe your current stress level?',
        key: 'stressLevel',
        type: 'multi',
        options: [
            {
                value: 'Quite low, I’m generally relaxed',
                key: 'low'
            },
            {
                value: 'It comes and goes, depending on the day',
                key: 'moderate'
            },
            {
                value: 'Pretty high, I’m often feeling overwhelmed',
                key: 'high'
            },
            {
                value: 'Extremely high, I need ways to cope urgently',
                key: 'veryHigh'
            }
        ]
    }
];
