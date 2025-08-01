export type Step = {
    title: string;
    description: string;
}

export interface FQA {
    id: number,
    question: string,
    answer: string,
}

export interface FQAs {
    id: string,
    title: string,
    description: string,
    faqs: [
        FQA
    ]
}

export interface GlobalDataType {

    bannerSection: {
        banner: string;
        description: string;
        headings: string;
        button_start: string;
        button_learn_more: string;
        clients_rating: string;
        customer_satisfaction: string;
    };
    about: {
        title: string,
        subtitle: string,
        description: string,
        button_read_more: string,

        faqs: [
            FQA
        ]
        statistics_block: {
            stats: string;
            description: string;
        }
    },
    howItWorksSection?: {
        title?: string | null;
        subtitle?: string | null;
        steps?:
            | {
            title?: string | null;
            description?: string | null;
            id?: string | null;
        }[]
            | null;
    };
    reviewsSection?: {
        title?: string | null;
        subtitle?: string | null;
        description?: string | null;
    };
    portfolioSection?: {
        title?: string | null;
        subtitle?: string | null;
    };
    servicesSection?: {
        title?: string | null;
        subtitle?: string | null;
        description?: string | null;
    };
    header?: {
        about?: string | null;
        services?: string | null;
        portfolio?: string | null;
        pricingPlan?: string | null;
        team?: string | null;
        faqs?: string | null;
        blog?: string | null;
        contact?: string | null;
    };

    FQAs: [
        FQAs
    ],
}
