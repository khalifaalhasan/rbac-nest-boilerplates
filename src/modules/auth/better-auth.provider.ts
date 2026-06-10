import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';
import { betterAuth } from 'better-auth';
import { typeormAdapter } from '@hedystia/better-auth-typeorm';
import { bearer } from 'better-auth/plugins/bearer';
import { jwt } from 'better-auth/plugins';

export const BETTER_AUTH = 'BETTER_AUTH';

export const BetterAuthProvider: Provider = {
    provide: BETTER_AUTH,
    inject: [getDataSourceToken()],
    useFactory: (dataSource: DataSource) => {
        return betterAuth({
            database: typeormAdapter(dataSource, {
                enableSchemaSync: process.env.NODE_ENV !== 'production',
            }),
            emailAndPassword: {
                enabled: true,
            },
            plugins:[
                jwt(),
                bearer()
            ]
        })
    }
}

export type BetterAuthInstance = ReturnType<typeof betterAuth>;