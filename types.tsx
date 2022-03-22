function types() {
    interface AssetStat {
        id: number;
        symbol: string;
        name: string;
        change24h: string;
        price: string;
        marketCap: string;
        priceVol: string;
        qtyVol: string;
        totalSupply: string;
    }
    
    interface SingleAsset {
        meta: Meta,
        data: SingleData[]
    }
    
    interface SingleData {
        id: number,
        slug: string,
        is_coin: boolean,
        is_token: boolean,
        rank: number,
        iconUrl: string,
        chart7d: string,
        name: string,
        symbol: string,
        volume_24h: number,
        max_supply: number,
        circulating_supply: number,
        quote: {
            [key: string]: Quote
        },
        tags: Array<string>
    }
    
    interface LatestNews {
        meta: {
            error_code: number,
            error_message: string,
            size: number
        },
        data: Array<{
            image_url: string,
            link: string,
            slug: string,
            title: string,
            tag: {
                name: string,
                tag: string
            }
        }>
    }
    
    interface News {
        meta: {
            error_code: number,
            error_message: string,
        },
        data: Array<{
            title: string,
            slug: string,
            body: string,
            image_url: string,
            author: Array<{
                first_name: string,
                last_name: string,
                description: string,
                profile_image_url: string,
                social_link: {
                    twitter: string,
                    facebook: string,
                    instagram: string,
                    youtube: string
                }
            }>,
            tags: Array<{
                name: string,
                tag: string
            }>,
            updated_at: string
        }>
    }
    
    
    interface Info {
        meta: Meta,
        data: InfoData
    }
    
    interface InfoData {
        id: number,
        symbol: string,
        name: string,
        description_content: string,
        blockchain_explorers: BlockchainExplorers[],
        wallets: Wallets[],
        community: Community[],
        contracts: Contracts[],
        whitepaper_link: string,
        website_link: string,
        website_name: string,
        whitepaper_name: string,
        tags: TagData[]
    }
    
    interface BlockchainExplorers {
        id: number,
        name: string,
        website_url: string
    }
    
    interface Wallets {
        id: number,
        name: string,
        website_url: string
    }
    
    interface Community {
        id: number,
        name: string,
        website_url: string
    }
    
    interface Contracts {
        id: number,
        contract_address: string,
        is_main: boolean,
        scan_url: string
    }
    
    interface Latest {
        meta: Meta,
        data: LatestData[]
    }
    
    interface LatestData {
        id: number,
        rank: number,
        slug: string,
        is_coin: boolean,
        is_token: boolean,
        iconUrl: string,
        chart7d: string,
        name: string,
        symbol: string,
        volume_24h: number,
        max_supply: number,
        quote: {
            [key: string]: Quote
        },
        circulating_supply: number,
        tags: Array<string>
    }
    
    interface Card {
        meta: Meta,
        data: CardList[]
    }
    
    interface CardList {
        id: number,
        slug: string,
        iconUrl: string,
        name: string,
        symbol: string,
        quote: Quote,
        tags: Array<string>
    }
    
    interface Tag {
        meta: Meta,
        data: TagData[]
    }
    
    interface WebSocketData {
        id: number,
        p: number,
        v: number,
        pv: number,
        ch24h: number,
        ch7d: number
    }
    
    interface TagData {
        name: string,
        tag: string,
        is_popular: boolean
    }
    
    interface Quote {
        price: number,
        volume_24h: number,
        percent_change_24h: number,
        percent_change_7d: number,
        high_24h: number,
        low_24h: number,
        visible_decimals: number,
        market_cap: number,
        fully_diluted_market_cap: number
    }
    
    interface Meta {
        error_code: number,
        error_message: any,
        size: number,
    }
    
    interface FearAndGreed {
        fgi: {
            now: {
                value: number,
                valueText: string
            },
            previousClose: {
                value: number,
                valueText: string
            },
            oneWeekAgo: {
                value: number,
                valueText: string
            },
            oneMonthAgo: {
                value: number,
                valueText: string
            },
            oneYearAgo: {
                value: number,
                valueText: string
            }
        },
        lastUpdate: {
            epochUnixSeconds: number,
            humanDate: string
        }
    }
    
    interface SinglePageConversion {
        cryptos: Conversion[],
        fiats: Conversion[],
        trending?: Conversion[],
        rates?: Array<any>
    }
    
    interface Conversion {
        id: number,
        symbol: string,
        name: string,
        rate: number,
        icon: string
    }
    
    interface Exchanges {
        meta: {
            error_code: number,
            error_message: string
        },
        data: Array<{
            id: number,
            rank: number,
            logo: string,
            name: string,
            slug: string,
            num_coins: number,
            num_market_pairs: number,
            fiats: Array<string>,
            quote: {
                volume_24h: number,
                total_volume_24h?: number
            },
            urls: {
                website: Array<string>,
            }
        }>
    }
    
    interface SingleExchange {
        id: number,
        name: string,
        slug: string,
        volume_24h: number,
        num_market_pairs: number,
        fiats: Array<string>,
        market_pairs: Array<{
            rank: number,
            logo: string,
            name: string,
            slug: string,
            symbol: string,
            market_pair: string,
            trading_link: string,
            quote: {
                [key: string]: {
                    price: number,
                    volume_24h: number,
                    updated_at: number
                }
            }
        }>
    }
    
    interface ExchangeInfo {
        id: number,
        name: string,
        slug: string,
        logo: string,
        urls: any,
        num_market_pairs: number,
        num_coins: number,
        spot_volume_mnt: number,
        spot_volume_total_mnt: number,
        spot_volume_updated_at: number
    }
    
    interface Metrics {
        total_exchanges: number,
        quote: {
            [key: string]: {
                total_market_cap: number,
                total_volume_24h: number,
                local_market_cap: number
            }
        },
        active_cryptocurrencies: number
    }
}

module.exports.types = types;