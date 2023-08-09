import { readFileSync } from 'fs'

import { parse } from 'yaml'

export default class EnvironmentConfig {
    static TESTING_ENVIRONMENT = process.env.TESTING_ENVIRONMENT
    static DEFAULT_TESTING_ENVIRONMENT = 'prod'

    private static configFile

    static getConfig(): object {
        if (this.configFile) {
            return this.configFile
        }
        let configFilePath
        if (this.TESTING_ENVIRONMENT) {
            configFilePath = `config/${this.TESTING_ENVIRONMENT}.yaml`
        } else {
            configFilePath = `config/${this.DEFAULT_TESTING_ENVIRONMENT}.yaml`
        }

        this.configFile = parse(readFileSync(configFilePath, 'utf8'))

        return this.configFile
    }

    static getCodereUrl(): string {
        const configFile = EnvironmentConfig.getConfig()

        return configFile.codere_url
    }
}

export async function getCookieToBeSet(country: string = null) {
    const baseUrl = EnvironmentConfig.getBaseUrl(country)

    return [
        {
            name: 'BM_USE_DEFAULT_TRANSLATIONS',
            url: baseUrl,
            value: 'true',
        },
        {
            name: 'BM_Banner_Dismissed',
            url: baseUrl,
            value: 'true',
        },
        {
            name: 'BM_Analytics',
            url: baseUrl,
            value: 'false',
        },
        {
            name: 'BM_Advertising',
            url: baseUrl,
            value: 'false',
        },
        {
            name: 'BM_User_Experience',
            url: baseUrl,
            value: 'false',
        },
        {
            name: 'visitor_id',
            url: baseUrl,
            value: 'ec9d31c1-69b3-4c02-bfb1-099fdd82caef',
        },
    ]
}
