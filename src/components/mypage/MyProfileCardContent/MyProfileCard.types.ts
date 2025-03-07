import { CountryCodeEnum } from "api_spec/enum";

interface CountryType {
    code: string;
    name: {
        [key in CountryCodeEnum.COUNTRY_CODE_ENUM]?: string;
    };
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
export const countries: readonly CountryType[] = [
    {
        code: "KO",
        name: { KO: "대한민국", US: "South Korea", JP: "韓国" },
    },
    { code: "JP", name: { KO: "일본", US: "Japan", JP: "日本" } },
    {
        code: "US",
        name: { KO: "미국", US: "USA", JP: "アメリカ" },
    },
];

interface RefCountryType {
    [countryName: string]: string;
}
export const revCountries: RefCountryType = {
    대한민국: "KO",
    "South Korea": "KO",
    韓国: "KO",
    일본: "JP",
    Japan: "JP",
    日本: "JP",
    미국: "US",
    USA: "US",
    アメリカ: "US",
};
