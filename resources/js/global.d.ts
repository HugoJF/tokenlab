type Id = string | number;

type Timestamps = {
    updated_at: string;
    created_at: string;
}

type SoftDeletes = {
    deleted_at: string;
}

type Errors<T> = {
    [key in keyof T]: string[];
}

type ResourceResponse<T> = {
    data: T;
}

type PaginatedResourceResponse<T> = ResourceResponse<T> & {
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    },
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        links: {
            url: string | null;
            label: string;
            active: boolean;
        }[];
        path: string;
        per_page: number;
        to: number;
        total: number;
    }
}


type LoginParameters = {
    email: string;
    password: string;
    remember: boolean;
}


type UserType = UserProperties & UserComputedProperties & Timestamps;

type UserProperties = {
    name: string;
    email: string;
}

type UserComputedProperties = {
    id: number;
    email_verified_at: string;
    two_factor_secret: string;
    two_factor_recovery_codes: string;
}


type EventType = EventProperties & EventComputedProperties & EventRelationships & Timestamps;

type EventRelationships = {
    users: UserType[],
}

type EventProperties = {
    title: string;
    description: string;
    starts_at: string;
    ends_at: string;
}

type EventComputedProperties = {
    id: number;
}
