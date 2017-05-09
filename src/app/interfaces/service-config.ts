export type Verb = 'get' | 'post';

export interface Definition {
    definition: string;
    value: {
        url: string;
        verb: Verb;
    };
}
