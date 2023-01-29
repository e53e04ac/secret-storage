/*!
    @e53e04ac/secret-storage/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

export declare namespace SecretStorage {

    type Self<T extends object> = {
        readonly get: {
            (key: string): Promise<null | T>;
        };
    };

}

export declare type SecretStorage<T extends object> = SecretStorage.Self<T>;
