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
        summary: 'I need upgrades to an existing product or platform.',
        description: DESCRIPTION,
        cta: 'Get a Maintenance Quote',
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
        summary: 'I need a project manager to optimize my team.',
        description: DESCRIPTION,
        cta: 'Get a Tactical Project Management Quote',
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
        summary: 'I need a task force to guarantee a project deadline.',
        description: DESCRIPTION,
        cta: 'Get a Team Quote',
        icon: 'life-ring',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 4,
        summary: 'I need to migrate my system to a new platform.',
        description: DESCRIPTION,
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
        summary: 'I need quality assurance and testing for my product.',
        description: DESCRIPTION,
        cta: 'Get a QA/Testing Quote',
        icon: 'check-square-o',
        plans: [PLANS[0], PLANS[1], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 6,
        summary: 'I need to build a new web or mobile application.',
        description: DESCRIPTION,
        cta: 'Get a Dev Quote',
        icon: 'cubes',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 7,
        summary: 'I need a viral landing page for a marketing campaign.',
        description: DESCRIPTION,
        cta: 'Get a Microsite Quote',
        icon: 'share-alt',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 8,
        summary: 'I need an eCommerce website to sell my products.',
        description: DESCRIPTION,
        cta: 'Get an eCommerce Quote',
        icon: 'money',
        plans: [PLANS[0], PLANS[1]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 9,
        summary: 'I need to enhance my SEO and social media presence.',
        description: DESCRIPTION,
        cta: 'Get a Marketing Quote',
        icon: 'hashtag',
        plans: [PLANS[0], PLANS[2]],
        criteria: [
            'Business is switching software vendors.',
            'Existing platform is/will be obsolete.',
            'Existing system no longer scales to meet business\' needs.'
        ]
    },
    {
        id: 10,
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
