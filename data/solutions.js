const PLANS = [
    {
        id: 1,
        name: 'Value',
        description: 'Point System',
        pricing: [{ label: '$300', unit: 'pt.' }],
        details: [
            'Foxtrot℠ target tracking and project management system.',
            '30-day money-back guarantee.'
        ]
    },
    {
        id: 2,
        name: 'Managed',
        description: 'Subscription',
        pricing: [{ label: '$3k', unit: 'mo.' }, { label: '$8k', unit: 'mo.' }],
        details: [
            '20 hours/mo. applied to any/all available services.',
            'Foxtrot℠ target tracking and project management system.',
            '20% discount applied to any/all simultaneous subscriptions.',
            '30-day money-back guarantee.'
        ]
    },
    {
        id: 3,
        name: 'Freelance',
        description: 'Time & Materials',
        pricing: [{ label: '+27%', unit: 'hourly rate' }],
        details: [,
            'Independently managed (per contract negotiations.)',
            'Typical for most hourly-based ad-hoc projects.'
        ]
    },
    {
        id: 4,
        name: 'Machete',
        description: 'Theme Platform',
        pricing: [{ label: '$2,999', unit: 'license' }],
        details: [
            'Universal mobile/desktop app UI PaaS for marketers.',
            'CMS bundle integrations (i.e., Shopify, WordPress.)',
            'Hundreds of thousands of available libraries and plugins.',
            'Perfect for custom e-comm and publishing solutions!'
        ]
    },
    {
        id: 5,
        name: 'Full-Time',
        description: 'Accelerator',
        pricing: [{ label: '$50k', unit: 'mo.' }],
        details: [
            '1 dedicated developer (8 Managed Team 3 mo. subscriptions.)',
            '1 Machete Theme Platform license.'
        ]
    }
];

export default [
    {
        id: 1,
        summary: 'I need to migrate my system to a new platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Migration Quote',
        icon: 'exchange',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 2,
        summary: 'I need to migrate my system to a new platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Migration Quote',
        icon: 'exchange',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 3,
        summary: 'I need to migrate my system to a new platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Migration Quote',
        icon: 'exchange',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 4,
        summary: 'I need to migrate my system to a new platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Migration Quote',
        icon: 'exchange',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 5,
        summary: 'I need maintenance on my existing platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Maintenance Quote',
        icon: 'wrench',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 6,
        summary: 'I need maintenance on my existing platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Maintenance Quote',
        icon: 'wrench',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 7,
        summary: 'I need maintenance on my existing platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Maintenance Quote',
        icon: 'wrench',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 8,
        summary: 'I need maintenance on my existing platform.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat nunc, in laoreet massa pretium eget. Nulla facilisi. Curabitur magna felis, sodales sit amet neque at, porttitor dictum purus.',
        cta: 'Get a Maintenance Quote',
        icon: 'wrench',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    }
];
