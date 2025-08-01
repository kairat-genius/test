import {LANGUAGE} from "@/fetch/payloadApiEndpoints";
import type {GlobalDataType} from "@/interface/global";

const EMPTY: GlobalDataType = {
    bannerSection: {
        banner: 'Results-Driven Digital Marketing',
        description: 'Gravida ac varius sollicitudin pellentesque erat senectus. Ridiculus consectetur semper gravida posuere iaculis scelerisque. Fusce lobortis orci fermentum ligula turpis facilisis maecenas.',
        headings: 'Results-Driven, Approach Client-Centric, Focus Passion for Innovation',
        button_start: 'Get Started',
        button_learn_more: ' Learn More',
        clients_rating: 'Clients Rating',
        customer_satisfaction: 'Our Client Rate Us Excellently'
    },
    about: {
        title: 'Redefining What’s Possible in Digital',
        subtitle: 'About Next',
        description: 'Phasellus scelerisque sodales congue ad fusce morbi libero. Class urna montes ac netus primis a. Vestibulum convallis justo vehicula interdum finibus orci leo hac.',
        button_read_more: 'Read more ',
        faqs: [
            {
                id: 1,
                question: 'What is digital marketing, and how can it benefit my business?',
                answer: 'awdawdad'
            }
        ],
        statistics_block: {
            stats: 'Increase | 83% | Website Views',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        }
    },
    reviewsSection: {
        title: 'Success Stories from Brands We’ve Helped Grow',
        subtitle: 'Testimonials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    portfolioSection: {
        title: 'Transforming Brands, One Project at a Time',
        subtitle: 'Featured Portfolio'
    },
    servicesSection: {
        title: 'Comprehensive Solutions for Every Digital Need',
        subtitle: 'Services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    howItWorksSection: {
        title: 'From Strategy to Success, Step by Step',
        subtitle: 'How It Works',
        steps: [{
            id: '67cae7090d6bb56d4f9d8b55',
            title: 'Research',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
        },
            {
                id: '67cae71b0d6bb56d4f9d8b57',
                title: 'Customize',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
            }
        ]
    },
    FQAs: [
        {
            id: '67cada5219662bd280411791',
            title: 'General Questions',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            faqs: [
                {
                    id: 1,
                    question: 'What is digital marketing, and how can it benefit my business?',
                    answer: 'awdawdad'
                }
            ]
        }
    ],
    header: {
        about: 'About',
        services: 'Services',
        portfolio: 'Portfolio',
        pricingPlan: 'Pricing Plan',
        team: 'Team',
        faqs: 'FAQs',
        blog: 'Blog',
        contact: 'Contact'
    },

}


export async function getGlobals(locale: string): Promise<GlobalDataType> {
    try {
        const url = `${LANGUAGE}?locale=${locale}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": locale
            },
        });

        if (!response.ok) {
            return EMPTY;
        }


        return await response.json();

    } catch {
        return EMPTY;
    }
}
