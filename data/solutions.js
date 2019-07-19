const DESCRIPTION = 'The Digital Special Forces™ for custom software and project management solutions. Based in NYC, we specialize in Tactical Project Management, Web/Software Development, Marketing, Design, Quality Assurance, IT/System Administration, and Content Production services.';

const PLANS = [
    {
        id: 1,
        name: 'Value',
        description: 'Point System',
        pricing: [{ label: '$250', unit: 'pt.' }],
        details: [
            'Highest quality (guaranteed quality assurance.)',
            'Only pay for warrantied features produced.',
            'Includes proprietary Foxtrot℠ project management system.'
        ]
    },
    {
        id: 2,
        name: 'Team',
        description: 'Subscription',
        pricing: [{ label: '$3k', unit: 'mo.', note: '(per resource)' }],
        details: [
            'High quality (most cost-effective.)',
            'Flat monthly fee, per resource.',
            'Includes proprietary Foxtrot℠ project management system.',
            'Requires at least two simultaneous subscriptions (resources.)',
            'Cost of resources not included.'
        ]
    },
    {
        id: 3,
        name: 'Freelance',
        description: 'Time & Materials',
        pricing: [{ label: '+25%', note: '(of resource rate)' }],
        details: [,
            'Industry-standard quality (least cost-effective.)',
            'Resource is independently managed.',
            'Conventional for hourly-based, ad-hoc projects.'
        ]
    },
    {
        id: 4,
        name: 'Machete',
        description: 'Theme Platform',
        pricing: [{ label: '$2,999', unit: 'license' }],
        details: [
            'Universal mobile/desktop app theming PaaS for marketers.',
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
        summary: 'I need an app for booking makeup, hair, and nail artists.',
        description: DESCRIPTION,
        cta: 'Talk to Me',
        icon: 'wrench',
        plans: [PLANS[0], PLANS[1], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 2,
        summary: 'I need a promotional website for my beauty services.',
        description: DESCRIPTION,
        cta: 'Talk to Me',
        icon: 'line-chart',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 3,
        summary: 'I need content production to market my beauty services.',
        description: DESCRIPTION,
        cta: 'Talk to Me',
        icon: 'hashtag',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 4,
        summary: 'I need a marketing campaign to advertise my beauticians.',
        description: DESCRIPTION,
        cta: 'Talk to Me',
        icon: 'share-alt',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 5,
        summary: 'I need an ecommerce site to sell my beauty products.',
        description: DESCRIPTION,
        cta: 'Talk to Me',
        icon: 'money',
        plans: [PLANS[0], PLANS[1], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 6,
        summary: 'I need a free consultation.',
        description: DESCRIPTION,
        cta: 'Talk to Me',
        icon: 'comment',
        plans: [],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    }
];
