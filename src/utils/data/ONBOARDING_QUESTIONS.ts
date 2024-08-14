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
        key: 'age',
        placeholder: 'Enter your age',
        type: 'number',
    },
    {
        id: '3',
        question: 'What is your gender?',
        key: 'gender',
        placeholder: 'Select your gender',
        type: 'multi',
        options: [
            {
                value: 'Male',
                key: 'male'
            },
            {
                value: 'Female',
                key: 'female'
            },
            {
                value: 'Other',
                key: 'other'
            },
            {
                value: 'Prefer not to say',
                key: 'prefer_not_to_say'
            }
        ]
    },
    {
        id: '4',
        question: 'How many days per week do you want to train?',
        key: 'trainingDays',
        placeholder: 'Select number of days',
        type: 'multi',
        options: [
            {
                value: '1',
                key: '1_day'
            },
            {
                value: '2',
                key: '2_days'
            },
            {
                value: '3',
                key: '3_days'
            },
            {
                value: '4',
                key: '4_days'
            },
            {
                value: '5',
                key: '5_days'
            },
            {
                value: '6',
                key: '6_days'
            },
            {
                value: '7',
                key: '7_days'
            }
        ]
    },
    {
        id: '5',
        question: 'What is your primary fitness goal?',
        key: 'goal',
        placeholder: 'Select your goal',
        type: 'multi',
        options: [
            {
                value: 'Bulk (Gain Muscle)',
                key: 'bulk'
            },
            {
                value: 'Cut (Lose Fat)',
                key: 'cut'
            },
            {
                value: 'Maintain',
                key: 'maintain'
            },
            {
                value: 'Improve Overall Fitness',
                key: 'overall_fitness'
            }
        ]
    },
    {
        id: '6',
        question: 'What is your current fitness level?',
        key: 'fitnessLevel',
        placeholder: 'Select your fitness level',
        type: 'multi',
        options: [
            {
                value: 'Beginner',
                key: 'beginner'
            },
            {
                value: 'Intermediate',
                key: 'intermediate'
            },
            {
                value: 'Advanced',
                key: 'advanced'
            }
        ]
    },
    {
        id: '7',
        question: 'Do you have any injuries or physical limitations?',
        key: 'injuries',
        placeholder: 'Describe any injuries or limitations',
        type: 'text',
    },
    {
        id: '8',
        question: 'What is your current body weight (in kg)?',
        key: 'weight',
        placeholder: 'Enter your weight',
        type: 'number',
    },
    {
        id: '9',
        question: 'What is your current height (in cm)?',
        key: 'height',
        placeholder: 'Enter your height',
        type: 'number',
    },
    {
        id: '10',
        question: 'What type of training do you prefer?',
        key: 'trainingType',
        placeholder: 'Select your preferred training type',
        type: 'multi',
        options: [
            {
                value: 'Strength Training',
                key: 'strength_training'
            },
            {
                value: 'Cardio',
                key: 'cardio'
            },
            {
                value: 'High-Intensity Interval Training (HIIT)',
                key: 'hiit'
            },
            {
                value: 'Mixed',
                key: 'mixed'
            },
            {
                value: 'Other',
                key: 'other'
            }
        ]
    },
    {
        id: '11',
        question: 'Do you have access to a gym or home equipment?',
        key: 'equipment',
        placeholder: 'Select your equipment availability',
        type: 'multi',
        options: [
            {
                value: 'Gym Access',
                key: 'gym_access'
            },
            {
                value: 'Home Equipment',
                key: 'home_equipment'
            },
            {
                value: 'Bodyweight Only',
                key: 'bodyweight_only'
            }
        ]
    },
    {
        id: '12',
        question: 'How would you rate your current diet?',
        key: 'diet',
        placeholder: 'Select your diet quality',
        type: 'multi',
        options: [
            {
                value: 'Very Poor',
                key: 'very_poor'
            },
            {
                value: 'Poor',
                key: 'poor'
            },
            {
                value: 'Average',
                key: 'average'
            },
            {
                value: 'Good',
                key: 'good'
            },
            {
                value: 'Very Good',
                key: 'very_good'
            }
        ]
    },
    {
        id: '13',
        question: 'Do you have any dietary restrictions or preferences?',
        key: 'dietaryRestrictions',
        placeholder: 'Enter any dietary restrictions or preferences',
        type: 'text',
    },
    {
        id: '14',
        question: 'What motivates you to stay active?',
        key: 'motivation',
        placeholder: 'Enter your source of motivation',
        type: 'text',
    },
    {
        id: '15',
        question: 'How much sleep do you get per night on average?',
        key: 'sleep',
        placeholder: 'Enter your average hours of sleep',
        type: 'number',
    },
    {
        id: '16',
        question: 'Are you currently following any specific fitness program?',
        key: 'currentProgram',
        placeholder: 'Select your current program status',
        type: 'multi',
        options: [
            {
                value: 'Yes',
                key: 'yes'
            },
            {
                value: 'No',
                key: 'no'
            }
        ]
    }
];
